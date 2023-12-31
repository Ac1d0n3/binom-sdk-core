# @binom/sdk-core
---------------------------------------------------------------------------------
** CORE V1.1.6
Author: Thomas Lindackers 

BINOM.net

Nov 2023

npm i @binom/sdk-core   

---------------------------------------------------------------------------------

## NEW / Updates
1.1.6 add more CSS / change LogService ColorSchema
1.1.5 add bnSearchBox and MiniSearch 
1.1.4 add JSON Loader to export
1.1.3 add BnColor Interface type ColorUtils
1.1.2 replace *ngIf / *ngFor to @if / @for

1.1.0 / 1.1.1 add fix for form-error 
add form-error / progress-content

1.0.9 
fix missing MatButton in info / font colors in some components

1.0.7 add global project assests to core and material icons scss to styles
include the mainfonts to load them local due too german 3rd Party restrictions

## Pipes 
- Debounce
- Highlight
- SafeHtml
- SearchFilter
- SetDefault
- SortBy
- Truncate
- Wordcount

## ngx translate helper 
- Translate Switch
- Translate Switch Menu
- DateAdapter to transform datePicker / date and number
- CustomMatPaginatorIntl

## data-loader
- JSON GET Service
- API Service POST/PUT/GET/DELETE 

## logger 
- console log Handler Helper Service

## help
- BnHelpService
- BnHelpSwitch
- BnHelpSwitchMenu

## utils
- renderer Class add's renderer function to elRef
- colors Service 
- html Service

## hover
- hover class directive to add classes on hover

## screen
- fullscreen directive to make an element fullscreen

## selection
- SelectionAnsCaretSVC to get editable selection

## value-accessor
- to access content-editable 

## select-icon-trigger
- makes Mat-Select Trigger on Icon

## info
- bn-suffix-info add Menu to Button Suffix

## interfaces
- BnError
- BnElSize
- BnKeyValue
- BnLabelValue

## router
- BnRouterDataAndTitleService
- BnRouterReuseService

## router-param-filter
- BnParamFilterService
- BnParamFilterMenu


## assests
- core.css
- core.css.map

## styles
- core.scss

## Development server

cd projects/test
Run `ng serve ` for a demo app. 

## Notes
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.
