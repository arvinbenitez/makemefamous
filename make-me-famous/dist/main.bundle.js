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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Make.Me.Famous!</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a *ngIf=\"isLoggedIn()\" class=\"nav-link\" href=\"/orders\">Orders</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a *ngIf=\"isLoggedIn()\" class=\"nav-link\" href=\"/account-selector\">Switch Accounts</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a  class=\"nav-link\" href=\"/setup-mfa\">Setup MFA</a>\n      </li>\n    </ul> \n    <ul class=\"navbar-nav\">\n      <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://auth.arvinbenitez.com/login?response_type=token&client_id=53e2lujj8ocud56on6inso8a25&redirect_uri=https://makemefamous.arvinbenitez.com/assets/login-redirect.html\">Login</a>\n      </li>\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

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

module.exports = ".list-group-item {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-group-item:hover {\r\n    background-color: antiquewhite;\r\n}"

/***/ }),

/***/ "./src/app/components/account-selector/account-selector.component.html":
/***/ (function(module, exports) {

module.exports = "  <ul class=\"list-group\"  *ngFor=\"let account of accounts\" >\n      <li class=\"list-group-item\" (click)=\"select(account)\">{{account.name}}</li>\n    </ul>"

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
            window.location.href = "/";
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

module.exports = ""

/***/ }),

/***/ "./src/app/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let order of orders\">\n     <div>NodeId: {{order.id}}, NodeName={{order.nodeName}}, Account:{{order.accountId}}</div>\n</div>\n"

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

module.exports = ""

/***/ }),

/***/ "./src/app/components/setup-mfa/setup-mfa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n\n    <aside class=\"col-sm-4\">\n\n      <div class=\"card\">\n        <article *ngIf=\"!mfaRegistered\"[hidden]=\"qrCode\" class=\"card-body\">\n          <h4 class=\"card-title text-center mb-4 mt-1\">Setup MFA</h4>\n          <hr>\n          <p class=\"text-success text-center\">For your security please enter your username and password</p>\n          <form onsubmit=\"event.preventDefault();\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                </div>\n                <input #username name=\"\" class=\"form-control\" placeholder=\"Username\" type=\"email\" >\n              </div> <!-- input-group.// -->\n            </div> <!-- form-group// -->\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                </div>\n                <input #password class=\"form-control\" placeholder=\"******\" type=\"password\" >\n              </div> <!-- input-group.// -->\n            </div> <!-- form-group// -->\n            <div class=\"form-group\">\n              <button class=\"btn btn-primary btn-block\" (click)=\"enableMFA(username.value, password.value)\"> Enable MFA </button>\n            </div> <!-- form-group// -->\n            <p class=\"text-center\"><a href=\"#\" class=\"btn\">Forgot password?</a></p>\n          </form>\n        </article>\n        <article *ngIf=\"qrCode && !mfaRegistered\" class=\"card-body\">\n          <h4 class=\"card-title text-center mb-4 mt-1\">Setup MFA</h4>\n          <hr>\n          <p class=\"text-success text-center\">Scan the QR Code below and enter the token into the input box</p>\n          <!-- //<div ><img src=\"{{qrCodeUrl}}\" width=\"300\" height=\"300\"/></div> -->\n          <div style=\"padding:0 0 20px 0\"><qrcode [qrdata]=\"qrCode\" [size]=\"256\" [level]=\"'M'\"></qrcode></div>\n          <form onsubmit=\"event.preventDefault();\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                </div>\n                <input #securetoken name=\"\" class=\"form-control\" placeholder=\"Input Token\" type=\"text\" >\n              </div> <!-- input-group.// -->\n            </div> <!-- form-group// -->\n            <div class=\"form-group\">\n              <button class=\"btn btn-primary btn-block\" (click)=\"enableMFA(username.value, password.value, securetoken.value)\"> Enable MFA </button>\n            </div> <!-- form-group// -->\n          </form>      \n        </article>\n        <article *ngIf=\"mfaRegistered\">\n          <h4 class=\"card-title text-center mb-4 mt-1\">MFA Device Registered!</h4>\n        </article>\n      </div> <!-- card.// -->\n    </aside> <!-- col.// -->\n  </div> <!-- row.// -->\n</div>\n"

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