GPQuery\Dashboard
=======

**GPQuery** is a historical motor racing data and statistical analysis web application developed for educational, non-commercial purposes.

---

## Front-End To-Do:


---

# Angular Modular Structure

## To-Do:

 - [ ] Verify application works as it did before.
 - [ ] Run `git commit` and `git push`.
 - [ ] Rewrite components [in accordance to style guide](https://github.com/johnpapa/angularjs-styleguide#iife).
 - [ ] Verify application is still functioning.
 - [ ] Run `git commit` and `git push`.
 - [ ] Think about a merge ;)


## Proposed
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

---

## Back-End To-Do:

 - [ ] Integrate [World-Flags-Sprite](https://github.com/lafeber/world-flags-sprite)
 - [ ] Integrate table `countries` MySQL

[site-angular]:http://angularjs.org
[site-bootstrap]:http://getbootstrap.com/
[site-angularui]:http://angular-ui.github.io/
[site-laravel]:http://laravel.com
[site-eloquent]:http://laravel.com/docs/4.2/eloquent
[site-ergast]:http://ergast.com/mrd/
[site-bower]:http://bower.io
[site-grunt]:http://gruntjs.com
[site-composer]:http://getcomposer.org

**GPQuery\Dashboard** is the front-end component of **GPQuery**, forked from [RDash-Angular][rdash-angular] and based on the [AngularJS][angular] framework.

[rdash-angular]:https://github.com/rdash/rdash-angular
[angular]:http://angularjs.org
