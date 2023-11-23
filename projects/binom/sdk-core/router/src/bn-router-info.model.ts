

export interface BnMetaTag {
    name: string;
    content: string;
  }
  
  export  interface BnCurrentState {
    breadcrumb: string;
    fullscreen: boolean;
    preheader: boolean;
    gridLayout: boolean;
    fixedHeight: boolean;
    resetScroll: boolean;
    fixedHeader: boolean;
    metaTags: BnMetaTag[];
  }
  
  export interface BnBreadcrumb {
    label: string;
    idItem: string;
    url: string;
    data: BnCurrentState;
  }
  
  export interface BnRouteCache {
    route: string;
    module: string;
    routeUrl: string;
    routeFullUrl: string;
    params: any; // change to a more specific type if possible
    resueUseParent: boolean;
    parent: string;
  }
  
  export interface BnRouterInfo {
    activeRoute: string;
    activeUrl: string;
    current?: any;
    breadcrumbs?: BnBreadcrumb[];
    routerParams?: any; // change to a more specific type if possible
    activeHash?: string;
    idItem?: string;
    previousValues?: BnRouterInfo;
    pathArray?: string[];
    activeParentRoute?: string;
    routeChange?: boolean;
    moduleChange?: boolean;
    currentModule?: string;
    firstRouteCall?: boolean;
    routeChache?: BnRouteCache[];
    paramChange?: boolean;
    appTitle?: string;
    firstLoad?: boolean;
    changedParams?: any[]; // change to a more specific type if possible
    fragmentChange?: boolean;
  }
  