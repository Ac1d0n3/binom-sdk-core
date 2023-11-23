import { Routes } from '@angular/router';
export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent:  () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'pipes/debounce',
        loadComponent:  () => import('./pipes/debounce/debounce.component').then(m => m.DebounceComponent)
    },
    {
        path: 'pipes/highlight',
        loadComponent:  () => import('./pipes/highlight/highlight.component').then(m => m.HighlightComponent)
    },
    {
        path: 'pipes/safe-html',
        loadComponent:  () => import('./pipes/safe-html/safe-html.component').then(m => m.SafeHtmlComponent)
    },
    {
        path: 'pipes/search-filter',
        loadComponent:  () => import('./pipes/search-filter/search-filter.component').then(m => m.SearchFilterComponent)
    },
    {
        path: 'pipes/set-default',
        loadComponent:  () => import('./pipes/set-default/set-default.component').then(m => m.SetDefaultComponent)
    },
    {
        path: 'pipes/sort-by',
        loadComponent:  () => import('./pipes/sort-by/sort-by.component').then(m => m.SortByComponent)
    },
    {
        path: 'pipes/truncate',
        loadComponent:  () => import('./pipes/truncate/truncate.component').then(m => m.TruncateComponent)
    },
    {
        path: 'pipes/wordcount',
        loadComponent:  () => import('./pipes/wordcount/wordcount.component').then(m => m.WordcountComponent)
    },
    {
        path: 'data-loader/api',
        loadComponent:  () => import('./data-loader/api/api.component').then(m => m.ApiComponent)
    },
    {
        path: 'data-loader/json',
        loadComponent:  () => import('./data-loader/json/json.component').then(m => m.JsonComponent)
    },
    {
        path: 'data-loader/json',
        loadComponent:  () => import('./data-loader/json/json.component').then(m => m.JsonComponent)
    },
    {
        path: 'ngx-translate-helper/translate-switch',
        loadComponent:  () => import('./translate/translate-switch/translate-switch.component').then(m => m.TranslateSwitchComponent)
    },

    {
        path: 'ngx-translate-helper/date-and-numper-pipe',
        loadComponent:  () => import('./translate/date-and-number-pipe/date-and-number-pipe.component').then(m => m.DateAndNumberPipeComponent)
    },

    {
        path: 'utils/renderer',
        loadComponent:  () => import('./utils/renderer/renderer.component').then(m => m.RendererComponent)
    },

    {
        path: 'utils/html-svc',
        loadComponent:  () => import('./utils/html-svc/html-svc.component').then(m => m.HtmlSvcComponent)
    },

    {
        path: 'utils/colors-utils-svc',
        loadComponent:  () => import('./utils/colors-utils-svc/colors-utils-svc.component').then(m => m.ColorsUtilsSvcComponent)
    },
    {
        path: 'icons/bn-icon',
        loadComponent:  () => import('./bn-icon/bn-icon.component').then(m => m.IconComponent)
    },
    
    {
        path: 'selection/selection-and-caret-svc',
        loadComponent:  () => import('./selection/selection-and-caret-svc/selection-and-caret-svc.component').then(m => m.SelectionAndCaretSvcComponent)
    },
   
    {
        path: 'screen/fullscreen',
        loadComponent:  () => import('./screen/full-screen/full-screen.component').then(m => m.FullScreenComponent)
    },
    {
        path: 'logger/logger-svc',
        loadComponent:  () => import('./logger/logger-svc/logger-svc.component').then(m => m.LoggerSvcComponent)
    },
    {
        path: 'hover/hover-class',
        loadComponent:  () => import('./hover/hover-class/hover-class.component').then(m => m.HoverClassComponent)
    },

    {
        path: 'interfaces/bn-error',
        loadComponent:  () => import('./interfaces/bn-error/bn-error.component').then(m => m.BnErrorComponent)
    },

    {
        path: 'interfaces/bn-el-size',
        loadComponent:  () => import('./interfaces/bn-el-size/bn-el-size.component').then(m => m.BnElSizeComponent)
    },

    {
        path: 'interfaces/bn-key-value',
        loadComponent:  () => import('./interfaces/bn-key-value/bn-key-value.component').then(m => m.BnKeyValueComponent)
    },

    {
        path: 'interfaces/bn-label-value',
        loadComponent:  () => import('./interfaces/bn-label-value/bn-label-value.component').then(m => m.BnLabelValueComponent)
    },

    {
        path: 'router/router-and-title-svc',
        loadComponent:  () => import('./router/router-and-title-svc/router-and-title-svc.component').then(m => m.RouterAndTitleSvcComponent)
    },
    {
        path: 'router/router-reuse',
        loadComponent:  () => import('./router/router-reuse-svc/router-reuse-svc.component').then(m => m.RouterReuseSvcComponent)
    },
  ];
  
 