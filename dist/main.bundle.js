webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/album-photos/album-photos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photos{\r\n  margin-left: 50px;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/album-photos/album-photos.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/album\">\r\n  <i class=\"fa fa-angle-left fa-2x\" aria-hidden=\"true\"></i>\r\n  <i class=\"fa fa-folder fa-2x\" aria-hidden=\"true\"></i>\r\n</a>\r\n\r\n<div *ngFor=\"let photo of photos\">\r\n  <img class=\"photos\" [src]=\"lazyImage\" [lazyLoad]=\"photo.src_big\" width=\"400px\" height=\"400px\" placement=\"bottom\" [ngbTooltip]=\"tipInfo\">\r\n  <a [routerLink]=\"['/photo', photo.owner_id, photo.pid]\">\r\n    <i class=\"fa fa-check\" aria-hidden=\"true\">Select</i>\r\n  </a>\r\n  <ng-template #tipInfo>\r\n    Created: {{photo.created * 1000 | date}}<br>\r\n    Likes: {{photo.likes.count}}<br>\r\n    Comments: {{photo.comments.count}}\r\n  </ng-template>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/album-photos/album-photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumPhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_albums_service__ = __webpack_require__("../../../../../src/app/services/user-albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumPhotosComponent = (function () {
    function AlbumPhotosComponent(userAlbum, http, route) {
        var _this = this;
        this.userAlbum = userAlbum;
        this.http = http;
        this.route = route;
        this.token = '0a1e6ed259335e9cb535b9a11f698062aff54079a71c890f999206798d2f3a27a9f4a6730f853c47e00a0';
        this.lazyImage = 'https://js.cx/lazyimg/1.gif';
        this.offset = 100;
        route.url.subscribe(function () {
            _this.id = route.snapshot.params.id;
        });
        console.log(this.id);
    }
    AlbumPhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAlbum.getService()
            .subscribe(function (data) {
            _this.temp_albums = data;
            _this.albums = _this.temp_albums.response;
            _this.http.get("https://api.vk.com/method/photos.get?album_id=" + _this.id + "&extended=1&need_covers=1?v=5.52&access_token=" + _this.token)
                .subscribe(function (result) {
                _this.temp_photos = result;
                _this.photos = _this.temp_photos.response;
                console.log(_this.photos);
            });
        });
    };
    AlbumPhotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-photos',
            template: __webpack_require__("../../../../../src/app/album-photos/album-photos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/album-photos/album-photos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_albums_service__["a" /* UserAlbumsService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], AlbumPhotosComponent);
    return AlbumPhotosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a href=\"https://oauth.vk.com/authorize?client_id=6320917&display=page&redirect_uri=https://github.com/vlad31011/vk-api/&scope=photos&response_type=token&v=5.52\">\n    <h3>Authorization</h3>https://shilodp.github.io/Photowork/&scope=photos\n  </a>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_albums_service__ = __webpack_require__("../../../../../src/app/services/user-albums.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userAlbum) {
        this.userAlbum = userAlbum;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAlbum.getTempToken()
            .subscribe(function (data) {
            _this.token = data;
            console.log(_this.token);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_albums_service__["a" /* UserAlbumsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_icons__ = __webpack_require__("../../../../ngx-icons/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_lazyload_image__ = __webpack_require__("../../../../ng2-lazyload-image/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_albums_user_albums_component__ = __webpack_require__("../../../../../src/app/user-albums/user-albums.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_albums_service__ = __webpack_require__("../../../../../src/app/services/user-albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__album_photos_album_photos_component__ = __webpack_require__("../../../../../src/app/album-photos/album-photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload_photo_upload_photo_component__ = __webpack_require__("../../../../../src/app/upload-photo/upload-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__photo_information_photo_information_component__ = __webpack_require__("../../../../../src/app/photo-information/photo-information.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'album', component: __WEBPACK_IMPORTED_MODULE_8__user_albums_user_albums_component__["a" /* UserAlbumsComponent */] },
    { path: 'album/:id', component: __WEBPACK_IMPORTED_MODULE_10__album_photos_album_photos_component__["a" /* AlbumPhotosComponent */] },
    { path: 'photo/:oid/:pid', component: __WEBPACK_IMPORTED_MODULE_13__photo_information_photo_information_component__["a" /* PhotoInformationComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_11__upload_photo_upload_photo_component__["a" /* UploadPhotoComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_albums_user_albums_component__["a" /* UserAlbumsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__album_photos_album_photos_component__["a" /* AlbumPhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_13__photo_information_photo_information_component__["a" /* PhotoInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__upload_photo_upload_photo_component__["a" /* UploadPhotoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_icons__["a" /* FontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_user_albums_service__["a" /* UserAlbumsService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/photo-information/photo-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photo-information/photo-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let inf of info\">\r\n\r\n<a [routerLink]=\"['/album', inf.album_id]\">\r\n  <i class=\"fa fa-angle-left fa-3x\" aria-hidden=\"true\"></i>\r\n  <i class=\"fa fa-folder fa-2x\" aria-hidden=\"true\"></i>\r\n</a>\r\n\r\n<img class=\"info\" src=\"{{inf.sizes[6].src}}\" width=\"700\" height=\"600\">\r\n  Date add: {{inf.date | date}}<br>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/photo-information/photo-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_albums_service__ = __webpack_require__("../../../../../src/app/services/user-albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoInformationComponent = (function () {
    function PhotoInformationComponent(userAlbum, http, route) {
        var _this = this;
        this.userAlbum = userAlbum;
        this.http = http;
        this.token = '0a1e6ed259335e9cb535b9a11f698062aff54079a71c890f999206798d2f3a27a9f4a6730f853c47e00a0';
        route.url.subscribe(function () {
            _this.owner_id = route.snapshot.params.oid;
            _this.photo_id = route.snapshot.params.pid;
            console.log(_this.owner_id);
            console.log(_this.photo_id);
        });
    }
    PhotoInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("https://api.vk.com/method/photos.getById?photos=" + this.owner_id + "_" + this.photo_id + "&extended=1&photo_sizes=1&v=5.52&access_token=" + this.token)
            .subscribe(function (result) {
            _this.temp_info = result;
            _this.info = _this.temp_info.response;
            console.log(_this.info);
        });
    };
    PhotoInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'photo-information',
            template: __webpack_require__("../../../../../src/app/photo-information/photo-information.component.html"),
            styles: [__webpack_require__("../../../../../src/app/photo-information/photo-information.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_albums_service__["a" /* UserAlbumsService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PhotoInformationComponent);
    return PhotoInformationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/user-albums.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAlbumsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAlbumsService = (function () {
    function UserAlbumsService(http, route) {
        this.http = http;
        this.route = route;
        this.pageID = '93968091';
        this.appID = '6320917';
        this.getToken = 'https://oauth.vk.com/authorize?client_id=6320917&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=photos&response_type=token&v=5.52';
        this.token = '0a1e6ed259335e9cb535b9a11f698062aff54079a71c890f999206798d2f3a27a9f4a6730f853c47e00a0';
        this.albumCovers = "https://api.vk.com/method/photos.getAlbums?need_covers=1?v=5.52&access_token=" + this.token;
        this.album_id = 250811889;
        this.uploadImage = "https://api.vk.com/method/photos.getUploadServer?album_id=" + this.album_id + "&v=5.52&access_token=" + this.token;
        this.toUpload = 'https://pu.vk.com/c831109/upload.php?act=do_add&mid=93968091&aid=250811889&gid=0&hash=564f9a003a1debe22b533687c8f347a3&rhash=267767afefa0918df5cd9c2cf190f232&swfupload=1&api=1';
        this.album_method = "https://api.vk.com/method/photos.getAlbums?owner_id=93968091&v=5.52&access_token=" + this.token;
        this.userInfo = "https://api.vk.com/method/users.get?user_ids=93968091&name_case=nom&v=5.52&access_token=" + this.token;
    }
    UserAlbumsService.prototype.getTempToken = function () {
        var _this = this;
        return this.route.url.map(function () {
            _this.token_temp = _this.route.snapshot.params.access_token;
        });
    };
    UserAlbumsService.prototype.getUserInfo = function () {
        return this.http.get(this.userInfo);
    };
    UserAlbumsService.prototype.getAlbums = function () {
        return this.http.get(this.album_method);
    };
    UserAlbumsService.prototype.getService = function () {
        return this.http.get(this.albumCovers);
    };
    UserAlbumsService.prototype.getUrl = function () {
        return this.http.get(this.uploadImage);
    };
    UserAlbumsService.prototype.upload = function (fileToUpload) {
        var input = new FormData();
        input.append("file", fileToUpload);
        return this.http
            .post(this.toUpload, input);
    };
    UserAlbumsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], UserAlbumsService);
    return UserAlbumsService;
}());



/***/ }),

/***/ "../../../../../src/app/upload-photo/upload-photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#upload {\r\n  width: 500px;\r\n  height: 300px;\r\n  margin: auto;\r\n}\r\n\r\n#upload-images {\r\n  width: 500px;\r\n  height: 200px;\r\n  background-color: #FAFAFA;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-photo/upload-photo.component.html":
/***/ (function(module, exports) {

module.exports = "  <a routerLink=\"/album\">back</a>\r\n\r\n  <form id=\"upload\" name=\"upload\" enctype=\"multipart/form-data\">\r\n    <select id=\"select-folder\" class=\"form-control form-control-sm\" name=\"folder\">\r\n      <option *ngFor=\"let album of albums\">{{album.title}}</option>\r\n    </select>\r\n    <div class=\"form-group\" id=\"upload-images\">\r\n      <label for=\"image\">Upload file</label>\r\n      <input type=\"file\" name=\"file\" class=\"form-control-file\" id=\"image\" #uploadImage>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addFile()\">Submit</button>\r\n    </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/upload-photo/upload-photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_albums_service__ = __webpack_require__("../../../../../src/app/services/user-albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadPhotoComponent = (function () {
    function UploadPhotoComponent(fb, route, http, userAlbum) {
        this.fb = fb;
        this.route = route;
        this.http = http;
        this.userAlbum = userAlbum;
        this.token = '0a1e6ed259335e9cb535b9a11f698062aff54079a71c890f999206798d2f3a27a9f4a6730f853c47e00a0';
    }
    UploadPhotoComponent.prototype.addFile = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        if (fi.files) {
            var fileToUpload = fi.files[0];
            this.userAlbum
                .upload(fileToUpload)
                .subscribe(function (res) {
                _this.temp_image = res;
                console.log(res);
                _this.http.get("https://api.vk.com/method/photos.save?server=" + _this.temp_image.server + "&photos_list=" + _this.temp_image.photos_list + "&album_id=" + _this.temp_image.aid + "&hash=" + _this.temp_image.hash + "&v=5.52&access_token=" + _this.token)
                    .subscribe(function (data) {
                    _this.image = data;
                    console.log(_this.image);
                });
            });
        }
    };
    UploadPhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAlbum.getAlbums()
            .subscribe(function (data) {
            _this.albums = data.response.items;
            console.log(_this.albums);
        });
        this.userAlbum.getUrl()
            .subscribe(function (data) {
            _this.temp_result = data;
            _this.result = _this.temp_result.response;
            console.log(_this.result);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("uploadImage"),
        __metadata("design:type", Object)
    ], UploadPhotoComponent.prototype, "fileInput", void 0);
    UploadPhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'upload-photos',
            template: __webpack_require__("../../../../../src/app/upload-photo/upload-photo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload-photo/upload-photo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_user_albums_service__["a" /* UserAlbumsService */]])
    ], UploadPhotoComponent);
    return UploadPhotoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-albums/user-albums.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".covers {\r\n  margin: 10px;\r\n}\r\n.upload {\r\n  margin: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-albums/user-albums.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user_info\">\r\n  <h3>Welcome, {{user_info[0].first_name}}.</h3>\r\n</div>\r\n\r\n<div *ngFor=\"let cover of albums\">\r\n  <img class=\"covers\" src=\"{{cover.thumb_src}}\" width=\"100px\" height=\"100px\">\r\n  <a [routerLink]=\"['/album', cover.aid]\">\r\n    <i class=\"fa fa-angle-double-right fa-2x\" aria-hidden=\"true\">{{cover.title}}</i>\r\n  </a>\r\n  <div>\r\n    Size: {{cover.size}}<br>\r\n    Created: {{cover.created * 1000 | date}}<br>\r\n    Last updated: {{cover.updated * 1000 | date}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"upload\">\r\n  <a [routerLink]=\"['/upload']\">upload</a>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user-albums/user-albums.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAlbumsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_albums_service__ = __webpack_require__("../../../../../src/app/services/user-albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAlbumsComponent = (function () {
    function UserAlbumsComponent(http, userAlbum) {
        this.http = http;
        this.userAlbum = userAlbum;
        this.token = '0a1e6ed259335e9cb535b9a11f698062aff54079a71c890f999206798d2f3a27a9f4a6730f853c47e00a0';
    }
    UserAlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("https://api.vk.com/method/photos.getAlbums?need_covers=1?v=5.52&access_token=" + this.token)
            .subscribe(function (data) {
            _this.temp_albums = data;
            _this.albums = _this.temp_albums.response;
            console.log(_this.albums);
        });
        this.userAlbum.getUserInfo()
            .subscribe(function (result) {
            _this.user_info = result.response;
            console.log(_this.user_info);
        });
    };
    UserAlbumsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-albums',
            template: __webpack_require__("../../../../../src/app/user-albums/user-albums.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-albums/user-albums.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_user_albums_service__["a" /* UserAlbumsService */]])
    ], UserAlbumsComponent);
    return UserAlbumsComponent;
}());

/*ngAfterViewInit(){
  this.t1.nativeElement.style.width = '500px';
  this.t1.nativeElement.style.height = '100px';
  this.t1.nativeElement.style.color = '#000000';
}*/


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map