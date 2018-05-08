webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBPageModule", function() { return ListBPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_b__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListBPageModule = /** @class */ (function () {
    function ListBPageModule() {
    }
    ListBPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_b__["a" /* ListBPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_b__["a" /* ListBPage */]), __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
            ],
        })
    ], ListBPageModule);
    return ListBPageModule;
}());

//# sourceMappingURL=list-b.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyLoad; });
var LazyLoad = /** @class */ (function () {
    function LazyLoad() {
        if (LazyLoad.instance) {
            throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
        }
        LazyLoad.instance = this;
    }
    LazyLoad.getInstance = function () {
        return LazyLoad.instance;
    };
    LazyLoad.prototype.scrollEnd = function (content) {
        var _this = this;
        setTimeout(function () {
            var el = content._elementRef.nativeElement;
            var imgs = el.querySelectorAll("[src-lazy]");
            _this.loadImg(content, imgs);
        }, 200);
    };
    LazyLoad.prototype.loadImg = function (content, imgs) {
        var _this = this;
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            var lazySrc = img.getAttribute("src-lazy");
            var offsetTop = LazyLoad._calcOffsetTop(img);
            if (offsetTop >= content.scrollTop && offsetTop <= content.scrollTop + content.contentHeight && lazySrc && !img.getAttribute("lazy-loaded")) {
                img.setAttribute("lazy-loaded", "1");
                if (img.nodeName == "IMG") {
                    img.src = lazySrc;
                    img.onload = function () {
                        _this.loadImg(content, imgs);
                    };
                    img.onerror = function () {
                        _this.loadImg(content, imgs);
                    };
                }
                else {
                    img.style.backgroundImage = "url('" + lazySrc + "')";
                    this.loadImg(content, imgs);
                }
                break;
            }
        }
    };
    LazyLoad._calcOffsetTop = function (img, top) {
        if (top === void 0) { top = 0; }
        top = top + img.offsetTop;
        if (img.offsetParent) {
            if (img.offsetParent.className == "scroll-content") {
                return top;
            }
            return LazyLoad._calcOffsetTop(img.offsetParent, top);
        }
        return top;
    };
    LazyLoad.instance = new LazyLoad();
    return LazyLoad;
}());

//# sourceMappingURL=lazy.load.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lazy_src_lazy_src__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__lazy_src_lazy_src__["a" /* LazySrcDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__lazy_src_lazy_src__["a" /* LazySrcDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazySrcDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_lazy_load__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SrcLazyDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var LazySrcDirective = /** @class */ (function () {
    function LazySrcDirective(elementRef) {
        this.elementRef = elementRef;
    }
    LazySrcDirective.prototype.ngOnInit = function () {
        var _this = this;
        var img = this.elementRef.nativeElement;
        img.setAttribute("src-lazy", this.src);
        img.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///+fn5////yH5BAEAAAMALAAAAAABAAEAAAICVAEAOw==");
        var content = this.content;
        setTimeout(function () {
            var offsetTop = __WEBPACK_IMPORTED_MODULE_2__app_lazy_load__["a" /* LazyLoad */]._calcOffsetTop(img);
            if (offsetTop >= content.scrollTop && offsetTop <= content.scrollTop + content.contentHeight && _this.src && !img.getAttribute("lazy-loaded")) {
                img.setAttribute("lazy-loaded", "1");
                if (img.nodeName == "IMG") {
                    img.src = _this.src;
                }
                else {
                    img.style.backgroundImage = "url('" + _this.src + "')";
                }
            }
        }, 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("lazy-src"),
        __metadata("design:type", String)
    ], LazySrcDirective.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("lazy-content"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], LazySrcDirective.prototype, "content", void 0);
    LazySrcDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[lazy-src]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], LazySrcDirective);
    return LazySrcDirective;
}());

//# sourceMappingURL=lazy-src.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_lazy_load__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListBPage = /** @class */ (function () {
    function ListBPage(navCtrl, navParams, httpClint) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClint = httpClint;
        this.items = [];
    }
    ListBPage.prototype.ionViewDidLoad = function () {
        this.loadList();
    };
    ListBPage.prototype.loadList = function (e) {
        var _this = this;
        this.httpClint.get("https://randomuser.me/api/?results=20").subscribe(function (data) {
            console.log(data);
            _this.items = _this.items.concat(data["results"]);
            e && e.complete();
        });
    };
    ListBPage.prototype.refresh = function (e) {
        this.items = [];
        this.loadList(e);
    };
    ListBPage.prototype.loadMore = function (e) {
        this.loadList(e);
    };
    ListBPage.prototype.scrollEnd = function (content) {
        __WEBPACK_IMPORTED_MODULE_2__app_lazy_load__["a" /* LazyLoad */].getInstance().scrollEnd(content);
    };
    ListBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-b',template:/*ion-inline-start:"E:\work_new\ionic-image-lazyloader\src\pages\list-b\list-b.html"*/'<!--\n  Generated template for the ListAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list-b</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content" #content (ionScrollEnd)="scrollEnd(content)">\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      <ion-thumbnail item-start><div [lazy-src]="item.picture.large" [lazy-content]="content"></div></ion-thumbnail>\n      <h3>{{item.name.first}} {{item.name.last}}</h3>\n      <p>{{item.dob}}</p>\n      <ion-note item-end>{{item.phone}}</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"E:\work_new\ionic-image-lazyloader\src\pages\list-b\list-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ListBPage);
    return ListBPage;
}());

//# sourceMappingURL=list-b.js.map

/***/ })

});
//# sourceMappingURL=0.js.map