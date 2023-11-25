import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';
import { Injectable } from '@angular/core';
import { BnLogMsg, BnLogSource, BnLoggerService } from '@binom/sdk-core/logger';

interface RouteStorageObject {
    snapshot: ActivatedRouteSnapshot;
    handle: DetachedRouteHandle;
}

@Injectable({
  providedIn: 'root'
})
export class BnRouterReuse implements RouteReuseStrategy {

  constructor(private logger:BnLoggerService){}

  private logSource: BnLogSource = { module: 'BnRouterDataAndTitleService', source: 'guard' };

  private __logMsg(type:any, msg:BnLogMsg){
    if(this.logger.doLog(this.logSource,type)){
      let formatMsg:any = this.logger.formatMsg(msg,this.logSource,type)
      console.log(formatMsg.msg,formatMsg.color);
    }
  }

  storedRoutes: { [key: string]: RouteStorageObject } = {};
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
      this.__logMsg('debug',{function:'detaching', msg: 'route' })
      let detach: boolean = false;
      if(!route) return false;


      if(route.routeConfig){
        if(route.routeConfig.data)
          route.routeConfig.data["reuse"] ? detach = true : detach = false;
      }

      return detach;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
      let storedRoute: RouteStorageObject = {
          snapshot: route,
          handle: handle
      };

      if(route.routeConfig){
        if(route.routeConfig.path && route.routeConfig.path !== null){
          this.storedRoutes[route.routeConfig.path] = storedRoute;
          this.__logMsg('debug',{function:'store', msg: route.routeConfig.path });
        }
      }
  }


  shouldAttach(route: ActivatedRouteSnapshot): boolean {
      let canAttach: boolean = false
      if(route.routeConfig){
        if(route.routeConfig.path && route.routeConfig.path !== null){
            canAttach = !!route.routeConfig && !!this.storedRoutes[route.routeConfig.path];
            this.__logMsg('debug',{function:'Can Attach', msg: route.routeConfig.path })
           
        }
      }
      if(route.routeConfig) {
        if(route.routeConfig.children){
          //if(route.routeConfig.children.length > 0) return false
        }
      }

      if (canAttach) {
          let willAttach: boolean = true;

          let paramsMatch: boolean = false;
          let queryParamsMatch: boolean = false;
          if(route.routeConfig){
            if(route.routeConfig.path && route.routeConfig.path !== null){
                paramsMatch = this.compareObjects(route.params, this.storedRoutes[route.routeConfig.path].snapshot.params);
                queryParamsMatch = this.compareObjects(route.queryParams, this.storedRoutes[route.routeConfig.path].snapshot.queryParams);

            }
          }

          return paramsMatch && queryParamsMatch;
      } else {
          return false;
      }
  }


  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig || !this.storedRoutes[route!.routeConfig!.path!]) return false;
      if(!route.routeConfig) return false;
      if(!route.routeConfig.path) return false;
      if(!this.storedRoutes[route.routeConfig.path].handle) return false;
      //if(route.routeConfig.loadChildren) return false;
      this.__logMsg('debug',{function:'Retrieve', msg: route.routeConfig.path, info: this.storedRoutes[route.routeConfig.path].handle});
      return this.storedRoutes[route.routeConfig.path].handle;
  }


  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      //if(future.routeConfig === curr.routeConfig) console.log('should reuse', future, curr)
      return future.routeConfig === curr.routeConfig;
  }


  private compareObjects(base: any, compare: any): boolean {
      for (let baseProperty in base) {
          if (compare.hasOwnProperty(baseProperty)) {
              switch(typeof base[baseProperty]) {
                  case 'object':
                      if ( typeof compare[baseProperty] !== 'object' || !this.compareObjects(base[baseProperty], compare[baseProperty]) )
                      { return false; }
                      break;
                  case 'function':
                      if ( typeof compare[baseProperty] !== 'function' || base[baseProperty].toString() !== compare[baseProperty].toString() )
                      { return false; } break;
                  default:
                      if ( base[baseProperty] != compare[baseProperty] ) { return false; }
              }
          } else {
              return false;
          }
      }
      return true;
  }
}
