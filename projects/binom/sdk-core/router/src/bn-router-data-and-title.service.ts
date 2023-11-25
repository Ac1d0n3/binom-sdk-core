import { Injectable } from '@angular/core';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, combineLatest} from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { BnRouterInfo } from './bn-router-info.model';
import { BnRouterData } from './bn-router-data.model';

import { BnLoggerService, BnLogMsg, BnLogSource } from "@binom/sdk-core/logger";

@Injectable({
  providedIn: 'root'
})
export class BnRouterDataAndTitleService {

  private logSource: BnLogSource = {
    module: 'BnRouterDataAndTitleService',
    source: 'svc'
  };

  private __logMsg(type:any, msg:BnLogMsg){
    if(this.logger.doLog(this.logSource,type)){
      let formatMsg:any = this.logger.formatMsg(msg,this.logSource,type)
      console.log(formatMsg.msg,formatMsg.color);
    }
  }

  public appTitle:string = '';
  public spacer:string = ' | ';

  public defPageSize:number = 25;
  public defPageIndex:number = 0;
  public defOrder:string = '';

  private paramChange = false;
  private fragmentChange = false;

  private routerData = new BehaviorSubject<BnRouterInfo>( {
    activeUrl: '',
    activeRoute: '',
    //reuseRoute:false,
    current: {},
    breadcrumbs: [],
    routerParams: {},
    activeHash: '',
    idItem: ''
  });

  routerData$ = this.routerData.asObservable();
  firstLoad:boolean = true;
  private currentData:any = {};
  getRouterData(){ return this.currentData }

  routeChache:any[]= []
  currentModule: string = '';

  private currPage:string = '';
  private params: any;
  private breadcrumbs!: BnRouterData[];
  private activeHash: string = '';
  private routerInfo:BnRouterInfo = {
      activeUrl: '',
      activeRoute: '',
      //reuseRoute:false,
      current: {},
      breadcrumbs: [],
      routerParams: {},
      activeHash: '',
      idItem: ''
  };

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private translateService: TranslateService,
    private titleService: Title,
    private meta: Meta,
    private logger: BnLoggerService
  ) {

    combineLatest(
      [this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd),distinctUntilChanged())
      , this.activatedRoute.queryParams]
      //,this.router.events.pipe(filter((event:any) => event instanceof NavigationStart),distinctUntilChanged())
     ).subscribe((rData:any)=> {

        
        this.fragmentChange = JSON.stringify(this.routerInfo.activeHash) != JSON.stringify(rData[0].url.split('#')[1])? true:false;
        this.paramChange = JSON.stringify(this.routerInfo.routerParams) != JSON.stringify(rData[1]) ? true:false;

        if(rData[0].url.match('#'))
          this.activeHash = rData[0].url.split('#')[1]

        this.params = rData[1];
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);

        let newTitle = this.appTitle;

        this.breadcrumbs.forEach((breadcrumb:BnRouterData) => {
         this.translateService.stream(breadcrumb.label).subscribe((text:string) => {
            if(text !== ''){ newTitle +=  this.spacer + text; }
         });
        });
        if(this.breadcrumbs[this.breadcrumbs.length-1]){
          if(this.breadcrumbs[this.breadcrumbs.length-1].data.metaTags){
            this.__logMsg('debug',{function:'combineLatest', msg: this.breadcrumbs[this.breadcrumbs.length-1].data.metaTags})
            this.meta.addTags(this.breadcrumbs[this.breadcrumbs.length-1].data.metaTags)
          }
  
          this.titleService.setTitle( newTitle  );
  
          this.dataChange({
           activeRoute: this.breadcrumbs[this.breadcrumbs.length-1] ? this.breadcrumbs[this.breadcrumbs.length-1].url.replace('/:id',''):'callback',
           activeUrl: decodeURI(rData[0].url),
           current: this.breadcrumbs[this.breadcrumbs.length-1].data,
           breadcrumbs: this.breadcrumbs,
           routerParams: this.params,
           activeHash: this.activeHash,
           idItem: this.breadcrumbs[this.breadcrumbs.length-1].idItem,
  
          });
        } 
     });

  }

  private dataChange(values:any){

    if(JSON.stringify(this.routerInfo) != JSON.stringify(values)){
      let old = {...this.routerInfo}

      this.routerInfo = {...this.routerInfo,...values};

      values.previousValues = old;
      let changedParams =  this.getChangedParams(values, old)

      values.pathArray = this.getPathArray(values.activeRoute)
      values.activeParentRoute = this.getParentRoute(values.pathArray);

      values.routeChange = old.activeRoute !== values.activeRoute ? true : this.firstLoad? true:false;

      let oldModule = old.activeRoute.split('/')[1];
      let curModule = values.activeRoute.split('/')[1];

      values.moduleChange = oldModule !== curModule? true : false;
      values.currentModule = curModule;
      this.currentModule = curModule;

      let routeChacheIndex = this.checkRouteChache(values.activeRoute, values.activeParentRoute)
      values.firstRouteCall = routeChacheIndex === -1? true:false;
      values.routeChache = this.routeChache;
      changedParams = this.reuseParamChange(values, routeChacheIndex, changedParams)
      values.paramChange = changedParams.length > 0 ? true: false;

      values.appTitle = this.appTitle;
      values.firstLoad = this.firstLoad;
      values.changedParams = changedParams;
      values.fragmentChange = this.fragmentChange;
      this.currentData = values;

      this.__logMsg('debug',{ function: 'CUR ROUTER DATA', msg: JSON.stringify(this.currentData)});

      this.routerData.next(values);
      this.firstLoad = false
    }
  }

  private reuseParamChange(values:any, routeChacheIndex:number, changedParams:any[]){
    this.__logMsg('debug', { function: 'reuseParamChange', msg: routeChacheIndex.toString() });

    if(values.current){
      if(values.current.reuse && routeChacheIndex !== -1 && values.routeChange){
        this.__logMsg('debug', { function: 'reuseParamChange', msg: 'REUSE ROUTE' });
        if(JSON.stringify(values.routerParams) === JSON.stringify(this.routeChache[routeChacheIndex].params) ){
          changedParams = [];
        }
      }
    }
    return changedParams
  }

  private getChangedParams(values:any, old:any){
    let changedParams:any = [];
    Object.keys(old.routerParams).forEach((key:string) => {
      if(values.routerParams[key]){
        if(old.routerParams[key] !== values.routerParams[key] )
          changedParams.push(key)
      } else changedParams.push(key)
    });

    Object.keys(values.routerParams).forEach((key:string) => {
      if(values.routerParams[key]){
        if(old.routerParams[key] !== values.routerParams[key] || old.routerParams[key] === undefined)
          changedParams.push(key)
      } else changedParams.push(key)
    });
    return changedParams
  }

  private getPathArray(activeRoute:string){
    return activeRoute.substring(1,activeRoute.length).split('/');
  }

  private getParentRoute(pathArray:string[]){
    let parentRoute = ''
    for(let i = 0; i < pathArray.length -1; i++){

      parentRoute += '/'+pathArray[i]
    }
    return parentRoute
  }

  private cleanParams (obj:any){
    for (var propName in obj) {
      if ((obj[propName] === null || obj[propName] === undefined || obj[propName] === '' )  && propName !='search') {
        delete obj[propName]; }
    } return obj
  }

  private removeParams (obj:any){
    if(obj.limit === this.defPageSize || obj.limit === '') obj.limit = null;
    //if(obj.offset == 0 || obj.offset === undefined) obj.offset = null;
    if(obj.order === this.defOrder || obj.order === '') obj.order = null
    return obj
  }

  private checkRouteChache(route:string, parent:string){
    let index = this.routeChache.findIndex((obj:any) => obj.route === route);
    if(index === -1) {
      this.routeChache.push(this.routeChacheValues(route, parent))
    }
    if(index !== -1) {
      this.updateRouteChacheParams(route, parent, index);
    }
    return index
  }

  private routeChacheValues(route:string, parent:string){

    this.__logMsg('debug',{ function: 'reuseParamChange', msg:'Route is ' + route + ' parent is ' + parent});
    let data = this.breadcrumbs[this.breadcrumbs.length-1].data
    let reuse = data.reuse
    if(reuse){
      let index = this.routeChache.findIndex((obj:any) => obj.parent === route);
      if(index !== -1){
        if(this.routeChache[index].resueUseParent){
          this.routeChache[index].routeUrl =  this.router.url.split('?')[0]
          this.routeChache[index].params = this.params
        }
      }
    }

    return {
      route: route,
      module: this.currentModule,
      routeUrl: this.router.url.split('?')[0],
      routeFullUrl: this.router.url,
      params: this.params,
      idItem: data.idItem,
      resue: reuse,
      resueUseParent: data.reuseUseParent? true:false,
      parent: parent
    }
  }

  getReuseValuesForSameComponentRouting(reuseParentRoute:string){
    let index = this.routeChache.findIndex((obj:any) =>   obj.parent === reuseParentRoute)
    if(index !== -1){
      if(this.currentData.routerParams.search === '' || this.currentData.routerParams.search === undefined)
        if(this.routeChache[index].params.search ) this.routeChache[index].params.search = null;
      return this.routeChache[index]
    } else {
      index = this.routeChache.findIndex((obj:any) => obj.route === reuseParentRoute )
      if(index !== -1){

        if(this.currentData.routerParams.search === '' || this.currentData.routerParams.search === undefined)
          if(this.routeChache[index].params.search ) this.routeChache[index].params.search = null;

        return this.routeChache[index];
      } else {

        return null
      }
    }
  }

  updateRouteChacheParams(route:string, parent:string, index:number){
    this.routeChache[index] = this.routeChacheValues(route, parent);
  }

  getRouterParams(){
    return this.params;
  }

  setAppTitle(title:string){
    this.appTitle = title;
  }

  setFragment(fragment:string, push:boolean=false){
    this.activeHash = fragment
    if(push) this.router.navigate([], {queryParams: this.params , queryParamsHandling: 'merge', fragment: this.activeHash  });
  }

  navigate(path:string, merge:boolean=false){
    let params = {}
    if(merge) params = {queryParams: this.params , queryParamsHandling: 'merge', fragment: this.activeHash  };
    this.router.navigate([path], params);
  }

  getRoutes(): string[] {
    const routes: string[] = [];

    this.router.config.forEach((route:any) => {
      if (route.path !== '**') {
        routes.push(route.path);
      }
    });

    return routes;
  }

  getFragmentPartById(itemId:string){
    let parts = this.activeHash.split(':');
    for(let i=0; i<parts.length; i++){
      let chunk = parts[i].split('.')
      if(chunk[0].replace('#','') === itemId || chunk[0] === itemId){
        return chunk[1];
      }
    }
    return '';
  }

  updateFragmentById(itemId:string, value:string){
    let parts = this.activeHash.split(':');
    if(parts.length > 0 && parts[0] != ''){
      let exists = false;
      for(let i=0; i<parts.length; i++){
        let chunk = parts[i].split('.')
        if(chunk[0].replace('#','') === itemId || chunk[0] === itemId){
          parts[i] = itemId + '.' + value
          exists = true;
          if(value === '' || value === null) parts.splice(i,1)
        }
      }
      if(exists == false && value!== '') parts.push(itemId + '.' + value)
      this.setFragment(parts.join(':'), true)
    } else {
      this.setFragment(itemId + '.' + value, true)
    }

  }

  setRouterParams(values:any, fragment:string = 'null', force:boolean = true){
    let rParams = {};
    let newParams = this.removeParams(values);
    if(fragment !== 'null' && fragment !== ''){ this.setFragment(fragment); }
    if(force) {
      this.activeHash ? rParams = {queryParams:newParams,fragment:this.activeHash}:rParams={queryParams:newParams};
    }
    else {
      this.activeHash !== '' ? rParams = {queryParams:newParams,fragment:this.activeHash,queryParamsHandling:'merge'}:rParams={queryParams:newParams,queryParamsHandling: 'merge'};
    }
    this.router.navigate([],rParams)
  }

  checkParamChange(checkParams:string[]){
    if(this.currentData.changedParams){
      if(this.currentData.changedParams.length > 0){
        for(let i = 0; i < checkParams.length; i++){
          let check = this.currentData.changedParams.findIndex((obj:string) => obj === checkParams[i]);
          if(check != -1) return true
        }
        return false
      }
    }
    return false
  }

  private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: BnRouterData[] = []): BnRouterData[] {

    this.__logMsg('debug',{ function: 'buildBreadCrumb', msg:'Route is ' + route + ' url is ' + url});
 
    let rdata = route.routeConfig && route.routeConfig.data ? route.routeConfig.data : '';

    let path = route.routeConfig ? route.routeConfig.path : '';
    let lastRoutePart = path!.split('/').pop();
    let isDynamicRoute = lastRoutePart!.startsWith(':');

    let idItem = '';
    url = url.replace('/**','')

    if(isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart!.split(':')[1];
      //path = path!.replace(lastRoutePart!, route.snapshot.params[paramName]);
      idItem= route!.snapshot.params[paramName];
    }

    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data["breadcrumb"] : '';
    let nextUrl = path ? `${url}/${path}` : url;

    let breadcrumb: BnRouterData = {
      label: label,
      idItem: idItem,
      url: nextUrl,
      data: rdata
    };

    let newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}

