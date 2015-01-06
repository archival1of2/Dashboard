GPQuery\Dashboard
=======

**GPQuery** is a historical motor racing data and statistical analysis web application developed for educational, non-commercial purposes.

## Dependencies

 - [bower][bower] 
 - [AngularJS][angular]
 - [RDash-Angular][rdash-angular]
 - [Bootstrap][bootstrap]
 - [Font-Awesome][font-awesome]
 - [UI-Router][ui-router]
 - [Angular-nvD3][nvd3]


## Directory Structure
```
app/
├── core/                                   --> Core Application Module
│   ├── core.module.js                      --> Angular, Cross-App, Third-Party Dependencies
│   └── core.services.js                    --> Shared Data Services
├── layout/                                 --> Layout Component Modules
│   ├── layout.module.js                    --> Layout Module
│   ├── sidebar.html                        --> HTML Template
│   ├── sidebar.controller.js               --> Collapsible Left Sidebar
│   ├── statusbar.html                      --> HTML Template
│   ├── statusbar.controller.js             --> Bottom Status Mini-Bar
│   ├── toolbar.html                        --> HTML Template
│   └── toolbar.controller.js               --> Header Toolbar
├── query/                                  --> Query Modules
│   ├── drivers/
│   ├── races/
│   └── ...
├── rdash/                                  --> RDash-Angular Directives
│   ├── loading.js                          --> Loading Spinner Directive
│   ├── rdash.module.js                     --> RDash Module
│   ├── widget.js                           --> Widget Directive
│   ├── widget-body.js                      --> Widget-Body Directive
│   ├── widget-footer.js                    --> Widget-Footer Directive
│   └── widget-header.js                    --> Widget-Header Directive
│   └── widget-thumbnail.js                 --> Widget-Thumbnail Directive
├── app.module.js                           --> Main Application Module
└── app.routes.js                           --> Application Routes
```


[bower]:http://bower.io
[rdash-angular]:https://github.com/rdash/rdash-angular
[angular]:http://angularjs.org
[font-awesome]:http://fortawesome.github.io/Font-Awesome/
[ui-router]:http://angular-ui.github.io/ui-router/
[nvd3]:http://krispo.github.io/angular-nvd3/
[bootstrap]:http://getbootstrap.com