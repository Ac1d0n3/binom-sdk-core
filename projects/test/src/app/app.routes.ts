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
        path: 'ngx-translate-helper/custom-mat-paginator-intl',
        loadComponent:  () => import('./translate//custom-mat-pagi/custom-mat-pagi.component').then(m => m.CustomMatPagiComponent)
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
        path: 'router-param-filter/router-param-filter-menu',
        loadComponent:  () => import('./router-param-filter/router-param-f/router-param-f.component').then(m => m.RouterParamFComponent)
    },

    {
        path: 'router-param-filter/router-param-filter-svc',
        loadComponent:  () => import('./router-param-filter/router-param-filter-svc/router-param-filter-svc.component').then(m => m.RouterParamFilterSvcComponent)
    },

    {
        path: 'router/router-and-title-svc',
        data: {
            breadcrumb: 'breadcrumb.routerdemo'
          },
        loadComponent:  () => import('./router/router-and-title-svc/router-and-title-svc.component').then(m => m.RouterAndTitleSvcComponent)
    },
    {
        path: 'router/router-reuse',
        loadComponent:  () => import('./router/router-reuse-svc/router-reuse-svc.component').then(m => m.RouterReuseSvcComponent)
    },

    {
        path: 'help/help-svc',
        loadComponent:  () => import('./help/bn-help-svc/bn-help-svc.component').then(m => m.BnHelpSvcComponent)
    },


    {
        path: 'help/help-switch',
        loadComponent:  () => import('./help/bn-help-demo/bn-help-demo.component').then(m => m.BnHelpDemoComponent)
    },

    {
        path: 'assets-and-styles/core-scss',
        loadComponent:  () => import('./other/style-ex/style-ex.component').then(m => m.StyleExComponent)
    },
    {
        path: 'assets-and-styles/i18n',
        loadComponent:  () => import('./other/i18n-ex/i18n-ex.component').then(m => m.I18nExComponent)
    },

    {
        path: 'info/suffix-info',
        loadComponent:  () => import('./info/suffix-info/suffix-info.component').then(m => m.SuffixInfoComponent)
    },

    {
        path: 'info/info-box',
        loadComponent:  () => import('./info/info-box/info-box.component').then(m => m.InfoBoxComponent)
    },


    {
        path: 'info/info-msg',
        loadComponent:  () => import('./info/info-msg/info-msg.component').then(m => m.InfoMsgComponent)
    },

    {
        path: 'select-icon-trigger/select-icon-trigger',
        loadComponent:  () => import('./select-icon-trigger/select-icon-trigger.component').then(m => m.SelectIconTriggerComponent)
    },

    {
        path: 'value-accessor/content-editable',
        loadComponent:  () => import('./val-access-content/val-access-content.component').then(m => m.ValAccessContentComponent)
    },

    {
        path: 'progress-content/progress-content',
        loadComponent:  () => import('./content-progress/content-progress.component').then(m => m.ContentProgressComponent)
    },

    {
        path: 'form-error/form-error',
        loadComponent:  () => import('./form-error/form-error.component').then(m => m.FormErrorComponent)
    },
  ];
  
 