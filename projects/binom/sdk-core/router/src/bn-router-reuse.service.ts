import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';
import { Injectable } from '@angular/core';
import { BnRouterDataAndTitleService } from './bn-router-data-and-title.service';

interface RouteStorageObject {
    snapshot: ActivatedRouteSnapshot;
    handle: DetachedRouteHandle;
}

@Injectable({
  providedIn: 'root'
})
export class BnRouterReuse implements RouteReuseStrategy {

    storedRoutes: { [key: string]: RouteStorageObject } = {};
    shouldDetach(route: ActivatedRouteSnapshot): boolean {

        //console.log("detaching", route);
        let detach: boolean = false;
        if(!route) return false;


        if(route.routeConfig){
          if(route.routeConfig.data)
            route.routeConfig.data["reuse"] ? detach = true : detach = false;

           // console.log("detaching", route.routeConfig.path, "return: ", detach);
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
            //console.log('STORE',this.storedRoutes, route.routeConfig.path)
          }
        }
    }


    shouldAttach(route: ActivatedRouteSnapshot): boolean {


        let canAttach: boolean = false
        if(route.routeConfig){
          if(route.routeConfig.path && route.routeConfig.path !== null){
             canAttach = !!route.routeConfig && !!this.storedRoutes[route.routeConfig.path];
             //console.log('Can Attach', route.routeConfig.path, canAttach)
          }
        }
        if(route.routeConfig) {
          if(route.routeConfig.children){
            //console.log(route.routeConfig, this.storedRoutes, route.routeConfig.path)
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
        //console.log('Retrieve', route.routeConfig.path)
        //console.log('with ----->', this.storedRoutes[route.routeConfig.path].handle)
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
