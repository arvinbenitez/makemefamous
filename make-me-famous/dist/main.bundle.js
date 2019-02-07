webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* Position the navbar container inside the image */\r\n.container {\r\n    position: absolute;\r\n    margin: 20px;\r\n    width: auto;\r\n  }\r\n/* The navbar */\r\n.topnav {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n  }\r\n/* Navbar links */\r\n.topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/make-me-famous-small.jpg\" title=\"Make Me Famous\" height=\"50px\" width=\"50px\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a *ngIf=\"isLoggedIn()\" class=\"nav-link\" href=\"/orders\">Orders</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a *ngIf=\"isLoggedIn()\" class=\"nav-link\" href=\"/account-selector\">Switch Accounts</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a  class=\"nav-link\" href=\"/setup-mfa\">Setup MFA</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav\">\r\n      <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"https://auth.arvinbenitez.com/login?response_type=token&client_id=53e2lujj8ocud56on6inso8a25&redirect_uri=https://makemefamous.arvinbenitez.com/assets/login-redirect.html\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> -->\r\n<div class=\"bg-img\">\r\n    <div class=\"container\">\r\n      <div class=\"topnav\">\r\n        <a href=\"#home\"><img src=\"assets/make-me-famous-small.jpg\" title=\"Make Me Famous\" height=\"30px\" width=\"30px\"></a>\r\n        <a *ngIf=\"isLoggedIn()\" href=\"/orders\">Orders</a>\r\n        <a *ngIf=\"isLoggedIn()\" href=\"/account-selector\">Switch Account</a>\r\n        <a *ngIf=\"isLoggedIn()\" href=\"/setup-mfa\">Setup MFA</a>\r\n        <a *ngIf=\"!isLoggedIn()\" href=\"https://auth.arvinbenitez.com/login?response_type=token&client_id=53e2lujj8ocud56on6inso8a25&redirect_uri=https://makemefamous.arvinbenitez.com/assets/login-redirect.html\">Login</a>\r\n        <a *ngIf=\"isLoggedIn()\" href=\"#\" (click)=\"logout()\">Logout</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<router-outlet></router-outlet>\r\n<div></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Make Me Famous!';
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.logout = function () {
        this.authService.clearToken();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularx_qrcode__ = __webpack_require__("./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_account_selector_account_selector_component__ = __webpack_require__("./src/app/components/account-selector/account-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_orders_orders_component__ = __webpack_require__("./src/app/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_setup_mfa_setup_mfa_component__ = __webpack_require__("./src/app/components/setup-mfa/setup-mfa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: '',
        children: [
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_10__components_orders_orders_component__["a" /* OrdersComponent */] },
            { path: 'account-selector', component: __WEBPACK_IMPORTED_MODULE_9__components_account_selector_account_selector_component__["a" /* AccountSelectorComponent */] },
            { path: 'setup-mfa', component: __WEBPACK_IMPORTED_MODULE_11__components_setup_mfa_setup_mfa_component__["a" /* SetupMfaComponent */] }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_account_selector_account_selector_component__["a" /* AccountSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_setup_mfa_setup_mfa_component__["a" /* SetupMfaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularx_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account-selector/account-selector.component.css":
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-group-item:hover {\r\n    background-color: #007bff;\r\n    color: aliceblue;\r\n}\r\n\r\ndiv.container {\r\n    padding-top:100px;\r\n}"

/***/ }),

/***/ "./src/app/components/account-selector/account-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-4\"></div>\r\n    <aside class=\"col-4\">\r\n      <div class=\"card\">\r\n        <article class=\"card-body\">\r\n          <h4 class=\"card-title text-center mb-4 mt-1\">Select Account</h4>\r\n          <hr>\r\n          <ul class=\"list-group\" *ngFor=\"let account of accounts\">\r\n            <li class=\"list-group-item\" (click)=\"select(account)\">{{account.name}}</li>\r\n          </ul>\r\n        </article>\r\n      </div> <!-- card.// -->\r\n    </aside> <!-- col.// -->\r\n    <div class=\"col-4\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/account-selector/account-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountSelectorComponent = /** @class */ (function () {
    function AccountSelectorComponent(apiService, authService) {
        this.apiService = apiService;
        this.authService = authService;
    }
    AccountSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.accounts().subscribe(function (x) {
            _this.accounts = x;
            console.log('I have some accounts ', _this.accounts);
        });
    };
    AccountSelectorComponent.prototype.select = function (account) {
        var _this = this;
        this.apiService.startSession(account.id).subscribe(function (x) {
            _this.authService.setAccount(account.name, account.id);
            window.location.href = "/orders";
        });
    };
    AccountSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-selector',
            template: __webpack_require__("./src/app/components/account-selector/account-selector.component.html"),
            styles: [__webpack_require__("./src/app/components/account-selector/account-selector.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AccountSelectorComponent);
    return AccountSelectorComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/orders.component.css":
/***/ (function(module, exports) {

module.exports = "div.container {\r\n    padding-top: 100px;\r\n}\r\n\r\ntable.table {\r\n    background: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Order Name</th>\r\n                    <th scope=\"col\">Account Id</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let order of orders\">\r\n                    <th scope=\"row\">{{order.id}}</th>\r\n                    <td>{{order.nodeName}}</td>\r\n                    <td>{{order.accountId}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(apiService) {
        this.apiService = apiService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.orders().subscribe(function (x) {
            _this.orders = x;
        });
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__("./src/app/components/orders/orders.component.html"),
            styles: [__webpack_require__("./src/app/components/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/setup-mfa/setup-mfa.component.css":
/***/ (function(module, exports) {

module.exports = "div.container {\r\n    padding-top:100px;\r\n}"

/***/ }),

/***/ "./src/app/components/setup-mfa/setup-mfa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-4\"></div>\r\n    <aside class=\"col-sm-4\">\r\n      <div class=\"card\">\r\n        <article [hidden]=\"qrCode\" class=\"card-body\">\r\n          <h4 class=\"card-title text-center mb-4 mt-1\">Setup MFA</h4>\r\n          <hr>\r\n          <p class=\"text-success text-center\">For your security please enter your username and password</p>\r\n          <form onsubmit=\"event.preventDefault();\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\r\n                </div>\r\n                <input #username name=\"\" class=\"form-control\" placeholder=\"Username\" type=\"email\" >\r\n              </div> <!-- input-group.// -->\r\n            </div> <!-- form-group// -->\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\r\n                </div>\r\n                <input #password class=\"form-control\" placeholder=\"******\" type=\"password\" >\r\n              </div> <!-- input-group.// -->\r\n            </div> <!-- form-group// -->\r\n            <div class=\"form-group\">\r\n              <button class=\"btn btn-primary btn-block\" (click)=\"enableMFA(username.value, password.value)\"> Enable MFA </button>\r\n            </div> <!-- form-group// -->\r\n            <!-- <p class=\"text-center\"><a href=\"#\" class=\"btn\">Forgot password?</a></p> -->\r\n          </form>\r\n        </article>\r\n        <article *ngIf=\"qrCode && !mfaRegistered\" class=\"card-body\">\r\n          <h4 class=\"card-title text-center mb-4 mt-1\">Setup MFA</h4>\r\n          <hr>\r\n          <p class=\"text-success text-center\">Scan the QR Code below and enter the token into the input box</p>\r\n          <!-- //<div ><img src=\"{{qrCodeUrl}}\" width=\"300\" height=\"300\"/></div> -->\r\n          <div style=\"padding:0 0 20px 0\"><qrcode [qrdata]=\"qrCode\" [size]=\"256\" [level]=\"'M'\"></qrcode></div>\r\n          <form onsubmit=\"event.preventDefault();\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\r\n                </div>\r\n                <input #securetoken name=\"\" class=\"form-control\" placeholder=\"Input Token\" type=\"text\" >\r\n              </div> <!-- input-group.// -->\r\n            </div> <!-- form-group// -->\r\n            <div class=\"form-group\">\r\n              <button class=\"btn btn-primary btn-block\" (click)=\"enableMFA(username.value, password.value, securetoken.value)\"> Enable MFA </button>\r\n            </div> <!-- form-group// -->\r\n          </form>      \r\n        </article>\r\n        <article *ngIf=\"mfaRegistered\">\r\n          <h4 class=\"card-title text-center mb-4 mt-1\">MFA Device Registered!</h4>\r\n        </article>\r\n      </div> <!-- card.// -->\r\n    </aside> <!-- col.// -->\r\n    \r\n    <div class=\"col-sm-4\"></div>\r\n  </div> <!-- row.// -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setup-mfa/setup-mfa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupMfaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetupMfaComponent = /** @class */ (function () {
    function SetupMfaComponent(apiService) {
        this.apiService = apiService;
        this.mfaRegistered = false;
    }
    SetupMfaComponent.prototype.ngOnInit = function () {
    };
    SetupMfaComponent.prototype.enableMFA = function (username, password, token) {
        var _this = this;
        this.name = username;
        this.password = password;
        this.apiService.enableMfa({
            "username": username,
            "password": password,
            "token": token
        }).subscribe(function (x) {
            if (_this.qrCode && token) {
                _this.mfaRegistered = true;
            }
            _this.qrCode = x.text();
            _this.qrCodeUrl = _this.apiService.qrCodeUrl(_this.qrCode);
        });
    };
    SetupMfaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setup-mfa',
            template: __webpack_require__("./src/app/components/setup-mfa/setup-mfa.component.html"),
            styles: [__webpack_require__("./src/app/components/setup-mfa/setup-mfa.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], SetupMfaComponent);
    return SetupMfaComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.urlRoot = "https://uqnwkd53nl.execute-api.us-west-2.amazonaws.com/Prod/";
    }
    //private urlRoot = "http://localhost:65011/";
    ApiService.prototype.accounts = function () {
        return this.get("accounts").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (x) { return x.json(); }));
    };
    ApiService.prototype.orders = function () {
        return this.get("orders").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (x) { return x.json(); }));
    };
    ApiService.prototype.enableMfa = function (user) {
        return this.post("usermanagement/enablemfa", user);
    };
    ApiService.prototype.qrCodeUrl = function (code) {
        return this.urlRoot + "qrCode?code=" + code;
    };
    ApiService.prototype.startSession = function (accountId) {
        return this.post("session/" + accountId, {});
    };
    ApiService.prototype.get = function (url) {
        var randomNumber = new Date().getTime();
        var newUrl = "";
        if (url.indexOf("?") > -1) {
            newUrl = url + "&_t=" + randomNumber;
        }
        else {
            newUrl = url + "?_t=" + randomNumber;
        }
        return this.http.get("" + this.urlRoot + newUrl, this.GetOptions());
    };
    ApiService.prototype.post = function (url, payload) {
        var body = payload ? JSON.stringify(payload) : "";
        return this.http.post("" + this.urlRoot + url, body, this.GetOptions());
    };
    ApiService.prototype.GetOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("token")
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.isLoggedIn = function () {
        var token = window.localStorage.getItem("token");
        return token ? true : false;
    };
    AuthService.prototype.setToken = function (token) {
        window.localStorage.setItem("token", token);
    };
    AuthService.prototype.setAccount = function (accountName, accountId) {
        window.localStorage.setItem("accountName", accountName);
        window.localStorage.setItem("accountId", accountId.toString());
    };
    AuthService.prototype.clearToken = function () {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("accountName");
        window.localStorage.removeItem("accountId");
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map