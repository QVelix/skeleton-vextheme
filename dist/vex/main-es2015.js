(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 6508:
/*!********************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": function() { return /* binding */ ProgressBarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-loading-bar/core */ 2252);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




class ProgressBarComponent {
    constructor(loader) {
        this.loader = loader;
    }
    ngOnInit() {
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__.LoadingBarService)); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["vex-progress-bar"]], decls: 3, vars: 7, consts: [["mode", "determinate", 1, "progress-bar", 3, "value"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.loader.useRef("router").value$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.loader.useRef("router").value$));
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__.MatProgressBar], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".progress-bar[_ngcontent-%COMP%] {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n}\n\n.progress-bar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtYmFyIHtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogOTk5OTk7XHJcblxyXG4gICYudmlzaWJsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4855:
/*!*****************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarModule": function() { return /* binding */ ProgressBarModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar.component */ 6508);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ 2252);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/router */ 7525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);






class ProgressBarModule {
}
ProgressBarModule.ɵfac = function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); };
ProgressBarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProgressBarModule });
ProgressBarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule,
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarModule,
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__.LoadingBarRouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressBarModule, { declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule,
        _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarModule,
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__.LoadingBarRouterModule], exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent] }); })();


/***/ }),

/***/ 1025:
/*!********************************************************!*\
  !*** ./src/@vex/components/search/search.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": function() { return /* binding */ SearchComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 4348);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 6857);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layout.service */ 7901);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ 7845);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 8399);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);













const _c0 = ["searchInput"];
function SearchComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
let SearchComponent = class SearchComponent {
    constructor(layoutService, searchService) {
        this.layoutService = layoutService;
        this.searchService = searchService;
        this.show$ = this.layoutService.searchOpen$;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_0__.default;
    }
    ngOnInit() {
        this.searchService.isOpenSubject.next(true);
        this.searchCtrl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(value => this.searchService.valueChangesSubject.next(value));
        this.show$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(show => show), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(() => this.input.nativeElement.focus());
    }
    close() {
        this.layoutService.closeSearch();
        this.searchCtrl.setValue(undefined);
        this.searchService.isOpenSubject.next(false);
    }
    search() {
        this.searchService.submitSubject.next(this.searchCtrl.value);
        this.close();
    }
    ngOnDestroy() {
        this.layoutService.closeSearch();
        this.searchCtrl.setValue(undefined);
        this.searchService.isOpenSubject.next(false);
    }
};
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["vex-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 10, vars: 9, consts: [[1, "search", 3, "keyup.escape"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ltr:right-12", "rtl:left-12", "top-12", "absolute", 3, "click"], [3, "icIcon"], ["placeholder", "Search...", 1, "search-input", 3, "formControl", "keyup.enter"], ["searchInput", ""], [1, "search-hint"], ["class", "search-overlay", 3, "click", 4, "ngIf"], [1, "search-overlay", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.escape", function SearchComponent_Template_div_keyup_escape_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Hit enter to search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx.show$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 7, ctx.show$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  width: 100%;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n\n.search.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  background-color: transparent;\n  border-radius: 0;\n  border-top-width: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n  font-weight: 700;\n  margin: 0;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.search-hint[_ngcontent-%COMP%] {\n  width: 75%;\n  font-weight: 700;\n  font-size: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: right;\n  color: var(--text-hint);\n}\n\n.search-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0VBLGFBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsdUJBQW1CO0VBQW5CLFVBQW1CO0VBQW5CLGVBQW1CO0VBQW5CLE1BQW1CO0VBQW5CLE9BQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixXQUFtQjtFREFqQixZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtEQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtBQUNKOztBQUdBO0VBQ0Usa0RBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VDbEJGLDZCQUFtQjtFQUFuQixnQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHFCQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsZ0JBQW1CO0VBQW5CLFNBQW1CO0FEbUJuQjs7QUFFRTtFQUNFLGFBQUE7QUFBSjs7QUFJQTtFQUNFLFVBQUE7RUMzQkYsZ0JBQW1CO0VBQW5CLGVBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixrQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsdUJBQW1CO0FEMkJuQjs7QUFJQTtFQy9CQSxVQUFtQjtFQUFuQixlQUFtQjtFQUFuQixTQUFtQjtFQUFuQixPQUFtQjtFQUFuQixXQUFtQjtFRGlDakIsWUFBQTtBQURGIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIG9wYWNpdHktMDtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBjdWJpYy1iZXppZXIoLjIsIDEsIC4zLCAxKTtcclxuICB6LWluZGV4OiAxMDUwO1xyXG5cclxuICAmLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKC4yLCAxLCAuMywgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcclxuICBmb250LXNpemU6IDd2dztcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxuICB3aWR0aDogNzUlO1xyXG4gIEBhcHBseSBtLTAgcm91bmRlZC1ub25lIGJvcmRlci1yLTAgYm9yZGVyLWwtMCBib3JkZXItdC0wIGZvbnQtYm9sZCBiZy10cmFuc3BhcmVudDtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1oaW50IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIEBhcHBseSB0ZXh0LWJhc2UgdGV4dC1yaWdodCBweS00IG14LWF1dG8gdGV4dC1oaW50IGZvbnQtYm9sZDtcclxufVxyXG5cclxuLnNlYXJjaC1vdmVybGF5IHtcclxuICBAYXBwbHkgZml4ZWQgdy1mdWxsIGJvdHRvbS0wIGxlZnQtMCBvcGFjaXR5LTA7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbiIsIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzOyJdfQ== */"] });
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], SearchComponent);



/***/ }),

/***/ 1002:
/*!*****************************************************!*\
  !*** ./src/@vex/components/search/search.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": function() { return /* binding */ SearchModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 1025);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ 8399);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);







class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule], exports: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent] }); })();


/***/ }),

/***/ 1414:
/*!**************************************************!*\
  !*** ./src/@vex/interfaces/config-name.model.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigName": function() { return /* binding */ ConfigName; }
/* harmony export */ });
var ConfigName;
(function (ConfigName) {
    ConfigName["apollo"] = "vex-layout-apollo";
    ConfigName["zeus"] = "vex-layout-zeus";
    ConfigName["hermes"] = "vex-layout-hermes";
    ConfigName["poseidon"] = "vex-layout-poseidon";
    ConfigName["ares"] = "vex-layout-ares";
    ConfigName["ikaros"] = "vex-layout-ikaros";
})(ConfigName || (ConfigName = {}));


/***/ }),

/***/ 3728:
/*!*********************************************!*\
  !*** ./src/@vex/layout/layout.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": function() { return /* binding */ LayoutComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 6857);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7057);
/* harmony import */ var _utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/check-router-childs-data */ 5147);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 7901);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 7149);
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/progress-bar/progress-bar.component */ 6508);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search/search.component */ 1025);
















const _c0 = ["quickpanel"];
const _c1 = ["sidenav"];
function LayoutComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function LayoutComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function LayoutComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function LayoutComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
let LayoutComponent = class LayoutComponent {
    constructor(cd, breakpointObserver, layoutService, configService, router, document) {
        this.cd = cd;
        this.breakpointObserver = breakpointObserver;
        this.layoutService = layoutService;
        this.configService = configService;
        this.router = router;
        this.document = document;
        this.isLayoutVertical$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.layout === 'vertical'));
        this.isBoxed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.boxed));
        this.isToolbarFixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.toolbar.fixed));
        this.isFooterFixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.footer.fixed));
        this.isFooterVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.footer.visible));
        this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
        this.isDesktop$ = this.layoutService.isDesktop$;
        this.scrollDisabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.scrollDisabled)));
        this.containerEnabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.containerEnabled)));
        this.searchOpen$ = this.layoutService.searchOpen$;
    }
    ngOnInit() {
        /**
         * Expand Sidenav when we switch from mobile to desktop view
         */
        this.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(matches => !matches), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(() => this.layoutService.expandSidenav());
        /**
         * Open/Close Quickpanel through LayoutService
         */
        this.layoutService.quickpanelOpen$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(open => open ? this.quickpanel.open() : this.quickpanel.close());
        /**
         * Open/Close Sidenav through LayoutService
         */
        this.layoutService.sidenavOpen$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(open => open ? this.sidenav.open() : this.sidenav.close());
        /**
         * Mobile only:
         * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
         */
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.withLatestFrom)(this.isDesktop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([event, matches]) => !matches), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(() => this.sidenav.close());
    }
    ngAfterViewInit() {
        /**
         * Enable Scrolling to specific parts of the page using the Router
         */
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.Scroll), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(e => {
            if (e.position) {
                // backward navigation
                this.sidenavContainer.scrollable.scrollTo({
                    start: e.position[0],
                    top: e.position[1]
                });
            }
            else if (e.anchor) {
                // anchor navigation
                const scroll = (anchor) => this.sidenavContainer.scrollable.scrollTo({
                    behavior: 'smooth',
                    top: anchor.offsetTop,
                    left: anchor.offsetLeft
                });
                let anchorElem = this.document.getElementById(e.anchor);
                if (anchorElem) {
                    scroll(anchorElem);
                }
                else {
                    setTimeout(() => {
                        anchorElem = this.document.getElementById(e.anchor);
                        scroll(anchorElem);
                    }, 100);
                }
            }
            else {
                // forward navigation
                this.sidenavContainer.scrollable.scrollTo({
                    top: 0,
                    start: 0
                });
            }
        });
    }
};
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["vex-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.quickpanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
    } }, inputs: { sidenavRef: "sidenavRef", toolbarRef: "toolbarRef", footerRef: "footerRef", quickpanelRef: "quickpanelRef" }, decls: 34, vars: 69, consts: [[1, "page-container"], [1, "sidenav-container"], [1, "sidenav", 3, "disableClose", "fixedInViewport", "mode", "opened"], ["sidenav", ""], [4, "ngTemplateOutlet"], ["mode", "over", "position", "end", 1, "quickpanel", 3, "fixedInViewport"], ["quickpanel", ""], [1, "sidenav-content"], [1, "content"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "vex-progress-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "vex-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LayoutComponent_ng_container_24_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-sidenav", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, LayoutComponent_ng_container_28_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-sidenav-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LayoutComponent_ng_container_30_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "main", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, LayoutComponent_ng_container_33_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("boxed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 31, ctx.isBoxed$))("horizontal-layout", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 33, ctx.isLayoutVertical$))("is-mobile", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 35, ctx.isDesktop$))("vertical-layout", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 37, ctx.isLayoutVertical$))("has-fixed-footer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 39, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 41, ctx.isFooterFixed$) && ctx.isFooterVisible$))("has-footer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 43, ctx.isFooterVisible$))("scroll-disabled", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 45, ctx.scrollDisabled$))("toolbar-fixed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 47, ctx.isToolbarFixed$))("sidenav-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 49, ctx.sidenavCollapsed$))("content-container", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 51, ctx.containerEnabled$))("with-search", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 53, ctx.searchOpen$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disableClose", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 55, ctx.isDesktop$))("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 57, ctx.isDesktop$))("mode", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 59, ctx.isDesktop$) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 61, ctx.isLayoutVertical$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 63, ctx.isDesktop$) && !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 65, ctx.isLayoutVertical$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.sidenavRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 67, ctx.isDesktop$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.quickpanelRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.toolbarRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerRef);
    } }, directives: [_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: [".page-container[_ngcontent-%COMP%] {\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background: var(--sidenav-background);\n}\n\n.sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  position: relative;\n  width: 100%;\n}\n\n.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.scroll-disabled[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  min-height: unset;\n  overflow: hidden;\n}\n\n.scroll-disabled.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scroll-disabled.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n  min-height: unset;\n}\n\n.is-mobile[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: 100%;\n}\n\n.is-mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: var(--toolbar-height);\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.sidenav-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.with-search[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n}\n\n.with-search[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);\n  transform-origin: 50vw 50vh;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n  border-radius: 0.25rem;\n  overflow: visible;\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: var(--toolbar-width);\n  z-index: 50;\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: calc(var(--toolbar-height) + var(--navigation-height));\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]     .vex-footer {\n  box-shadow: var(--footer-elevation);\n  position: fixed;\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-bottom: var(--footer-height);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.has-fixed-footer.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQ0FBQTtFQUNBLHlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxnR0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLHFFQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBRUUsNEZBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPRTtFQUNFLGlDQUFBO0FBTEo7O0FBU0E7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBTkY7O0FBUUU7RUFDRSxvQkFBQTtFQUNBLCtFQUFBO0VBQ0EsMkJBQUE7RUFDQSx1REFBQTtFQ3pFSixzQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLGtEQUFtQjtFQUFuQixrREFBbUI7RUFBbkIsdUdBQW1CO0FEb0VuQjs7QUFXRTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFSSjs7QUFXRTtFQUNFLGtFQUFBO0FBVEo7O0FBY0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUFYSjs7QUFjRTtFQUNFLG1DQUFBO0VBQ0EsZ0dBQUE7QUFaSjs7QUFlRTtFQUNFLDRGQUFBO0FBYkoiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtYmFja2dyb3VuZCk7XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGFzLWZvb3RlciAuY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG59XHJcblxyXG4uc2Nyb2xsLWRpc2FibGVkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XHJcbiAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmLmhhcy1maXhlZC1mb290ZXIgLmNvbnRlbnQsXHJcbiAgJi5oYXMtZm9vdGVyIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaXMtbW9iaWxlIHtcclxuICA6Om5nLWRlZXAgLnZleC10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMiwgMSwgLjMsIDEpO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250ZW50IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLndpdGgtc2VhcmNoIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcbiAgLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDUwdmgsIDApIHJvdGF0ZTNkKDEsIDAsIDAsIDMwZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwdncgNTB2aDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yLCAxLCAuMywgMSk7XHJcbiAgICBAYXBwbHkgcm91bmRlZCBzaGFkb3ctMnhsIG92ZXJmbG93LXZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbGJhci1maXhlZCB7XHJcbiAgOjpuZy1kZWVwIC52ZXgtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tdG9vbGJhci1oZWlnaHQpICsgdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcclxuICB9XHJcbn1cclxuXHJcbi5oYXMtZml4ZWQtZm9vdGVyIHtcclxuICA6Om5nLWRlZXAgLnZleC1mb290ZXIge1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZm9vdGVyLWVsZXZhdGlvbik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcclxuICB9XHJcblxyXG4gICYuc2Nyb2xsLWRpc2FibGVkIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzOyJdfQ== */"] });
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()
], LayoutComponent);



/***/ }),

/***/ 638:
/*!******************************************!*\
  !*** ./src/@vex/layout/layout.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": function() { return /* binding */ LayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ 3728);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/progress-bar/progress-bar.module */ 4855);
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/search/search.module */ 1002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);







class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
            _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__.ProgressBarModule,
            _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
        _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__.ProgressBarModule,
        _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule], exports: [_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent] }); })();


/***/ }),

/***/ 7149:
/*!*********************************************!*\
  !*** ./src/@vex/services/config.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": function() { return /* binding */ ConfigService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 4442);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ 5075);
/* harmony import */ var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/config-name.model */ 1414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.service */ 7901);







class ConfigService {
    constructor(document, layoutService) {
        this.document = document;
        this.layoutService = layoutService;
        this.defaultConfig = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__.ConfigName.apollo;
        this.configs = _configs__WEBPACK_IMPORTED_MODULE_1__.configs;
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(this.configs.find(c => c.id === this.defaultConfig));
        this.config$ = this._configSubject.asObservable();
        this.config$.subscribe(config => this._updateConfig(config));
    }
    setConfig(config) {
        const settings = this.configs.find(c => c.id === config);
        if (settings) {
            this._configSubject.next(settings);
        }
    }
    updateConfig(config) {
        this._configSubject.next((0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, this._configSubject.getValue()), config));
    }
    _updateConfig(config) {
        const body = this.document.body;
        this.configs.forEach(c => {
            if (body.classList.contains(c.id)) {
                body.classList.remove(c.id);
            }
        });
        body.classList.add(config.id);
        config.sidenav.state === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
        this.document.body.dir = config.rtl ? 'rtl' : 'ltr';
        // Workaround so charts and other externals know they have to resize on Layout switch
        if (window) {
            window.dispatchEvent(new Event('resize'));
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 200);
        }
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService)); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5075:
/*!**************************************!*\
  !*** ./src/@vex/services/configs.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configs": function() { return /* binding */ configs; }
/* harmony export */ });
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 4442);
/* harmony import */ var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/config-name.model */ 1414);


const defaultConfig = {
    id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.apollo,
    name: 'Apollo',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
    layout: 'horizontal',
    boxed: false,
    sidenav: {
        title: 'VEX',
        imageUrl: 'assets/img/demo/logo.svg',
        showCollapsePin: true,
        state: 'expanded'
    },
    toolbar: {
        fixed: true
    },
    navbar: {
        position: 'below-toolbar'
    },
    footer: {
        visible: true,
        fixed: true
    }
};
const configs = [
    defaultConfig,
    (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.hermes,
        name: 'Hermes',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
        layout: 'vertical',
        boxed: true,
        toolbar: {
            fixed: false
        },
        footer: {
            fixed: false
        }
    }),
    (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.ares,
        name: 'Ares',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
        toolbar: {
            fixed: false
        },
        navbar: {
            position: 'in-toolbar'
        },
        footer: {
            fixed: false
        }
    }),
    (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.zeus,
        name: 'Zeus',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
        sidenav: {
            state: 'collapsed'
        },
    }),
    (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.ikaros,
        name: 'Ikaros',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
        layout: 'vertical',
        boxed: true,
        toolbar: {
            fixed: false
        },
        navbar: {
            position: 'in-toolbar'
        },
        footer: {
            fixed: false
        }
    })
];


/***/ }),

/***/ 7901:
/*!*********************************************!*\
  !*** ./src/@vex/services/layout.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": function() { return /* binding */ LayoutService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);





class LayoutService {
    constructor(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
        this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
        this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
        this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
        this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
        this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.searchOpen$ = this._searchOpen.asObservable();
        this.isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);
        this.isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);
    }
    openQuickpanel() {
        this._quickpanelOpenSubject.next(true);
    }
    closeQuickpanel() {
        this._quickpanelOpenSubject.next(false);
    }
    openSidenav() {
        this._sidenavOpenSubject.next(true);
    }
    closeSidenav() {
        this._sidenavOpenSubject.next(false);
    }
    collapseSidenav() {
        this._sidenavCollapsedSubject.next(true);
    }
    expandSidenav() {
        this._sidenavCollapsedSubject.next(false);
    }
    collapseOpenSidenav() {
        this._sidenavCollapsedOpenSubject.next(true);
    }
    collapseCloseSidenav() {
        this._sidenavCollapsedOpenSubject.next(false);
    }
    openConfigpanel() {
        this._configpanelOpenSubject.next(true);
    }
    closeConfigpanel() {
        this._configpanelOpenSubject.next(false);
    }
    openSearch() {
        this._searchOpen.next(true);
    }
    closeSearch() {
        this._searchOpen.next(false);
    }
    enableRTL() {
        this.router.navigate([], {
            queryParams: {
                rtl: 'true'
            }
        });
    }
    disableRTL() {
        this.router.navigate([], {
            queryParams: {
                rtl: 'false'
            }
        });
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver)); };
LayoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7360:
/*!*************************************************!*\
  !*** ./src/@vex/services/navigation.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": function() { return /* binding */ NavigationService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class NavigationService {
    constructor() {
        this.items = [];
        this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.openChange$ = this._openChangeSubject.asObservable();
    }
    triggerOpenChange(item) {
        this._openChangeSubject.next(item);
    }
    isLink(item) {
        return item.type === 'link';
    }
    isDropdown(item) {
        return item.type === 'dropdown';
    }
    isSubheading(item) {
        return item.type === 'subheading';
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7845:
/*!*********************************************!*\
  !*** ./src/@vex/services/search.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);


class SearchService {
    constructor() {
        this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
        this.valueChanges$ = this.valueChangesSubject.asObservable();
        this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.submit$ = this.submitSubject.asObservable();
        this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.isOpen$ = this.isOpenSubject.asObservable();
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3671:
/*!****************************************************!*\
  !*** ./src/@vex/services/splash-screen.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenService": function() { return /* binding */ SplashScreenService; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







class SplashScreenService {
    constructor(router, document, animationBuilder) {
        this.router = router;
        this.document = document;
        this.animationBuilder = animationBuilder;
        this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen');
        if (this.splashScreenElem) {
            this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => this.hide());
        }
    }
    hide() {
        const player = this.animationBuilder.build([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                opacity: 1
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                opacity: 0
            }))
        ]).create(this.splashScreenElem);
        player.onDone(() => this.splashScreenElem.remove());
        player.play();
    }
}
SplashScreenService.ɵfac = function SplashScreenService_Factory(t) { return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder)); };
SplashScreenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SplashScreenService, factory: SplashScreenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5147:
/*!****************************************************!*\
  !*** ./src/@vex/utils/check-router-childs-data.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkRouterChildsData": function() { return /* binding */ checkRouterChildsData; },
/* harmony export */   "getAllParams": function() { return /* binding */ getAllParams; }
/* harmony export */ });
function checkRouterChildsData(route, compareWith) {
    if (compareWith(route.data)) {
        return true;
    }
    if (!route.firstChild) {
        return false;
    }
    return checkRouterChildsData(route.firstChild, compareWith);
}
/**
 * Used to get params from children in their parent
 */
function getAllParams(route, result = new Map()) {
    if (route.params) {
        for (const key of Object.keys(route.params)) {
            result.set(key, route.params[key]);
        }
    }
    if (!route.firstChild) {
        return result;
    }
    return getAllParams(route.firstChild, result);
}


/***/ }),

/***/ 4442:
/*!**************************************!*\
  !*** ./src/@vex/utils/merge-deep.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeDeep": function() { return /* binding */ mergeDeep; }
/* harmony export */ });
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
    const isObject = (obj) => obj && typeof obj === 'object';
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}


/***/ }),

/***/ 1410:
/*!********************************!*\
  !*** ./src/@vex/vex.module.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VexModule": function() { return /* binding */ VexModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.module */ 638);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




class VexModule {
}
VexModule.ɵfac = function VexModule_Factory(t) { return new (t || VexModule)(); };
VexModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VexModule });
VexModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule
        ], _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VexModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule], exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule] }); })();


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 5530);
/* harmony import */ var _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-layout/custom-layout.component */ 8374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    {
        path: '',
        component: _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_0__.CustomLayoutComponent,
        children: [
            {
                path: 'dashboard',
                redirectTo: '/',
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_flex-layout_js"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule)
            },
            {
                path: 'products/:class.link',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_flex-layout_js"), __webpack_require__.e("src_app_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 8980)).then(m => m.ProductsModule)
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
                preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkStrategy,
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'corrected',
                anchorScrolling: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ 5429);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-layers */ 168);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@vex/services/config.service */ 7149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@vex/services/navigation.service */ 7360);
/* harmony import */ var _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@vex/services/splash-screen.service */ 3671);











class AppComponent {
    constructor(configService, 
    //private styleService: StyleService,
    //private renderer: Renderer2,
    //private platform: Platform,
    document, localeId, 
    //private layoutService: LayoutService,
    route, navigationService, splashScreenService) {
        this.configService = configService;
        this.document = document;
        this.localeId = localeId;
        this.route = route;
        this.navigationService = navigationService;
        this.splashScreenService = splashScreenService;
        this.title = 'vex';
        luxon__WEBPACK_IMPORTED_MODULE_4__.Settings.defaultLocale = this.localeId;
        // if (this.platform.BLINK) {
        //   this.renderer.addClass(this.document.body, 'is-blink');
        // }
        /**
         * Customize the template to your needs with the ConfigService
         * Example:
         *  this.configService.updateConfig({
         *    sidenav: {
         *      title: 'Custom App',
         *      imageUrl: '//placehold.it/100x100',
         *      showCollapsePin: false
         *    },
         *    showConfigButton: false,
         *    footer: {
         *      visible: false
         *    }
         *  });
         */
        /**
         * Config Related Subscriptions
         * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
         * Example: example.com/?layout=apollo&style=default
         */
        this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(queryParamMap => queryParamMap.has('rtl') && (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(queryParamMap.get('rtl')))).subscribe(isRtl => {
            this.document.body.dir = isRtl ? 'rtl' : 'ltr';
            this.configService.updateConfig({
                rtl: isRtl
            });
        });
        this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(queryParamMap => queryParamMap.has('layout'))).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout')));
        // this.route.queryParamMap.pipe(
        //   filter(queryParamMap => queryParamMap.has('style'))
        // ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));
        this.navigationService.items = [
            {
                type: 'link',
                label: 'Dashboard',
                route: '/',
                icon: _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_0__.default
            }
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__.SplashScreenService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["vex-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@vex/vex.module */ 1410);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-layout/custom-layout.module */ 3372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            // Vex
            _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__.VexModule,
            _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__.CustomLayoutModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        // Vex
        _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__.VexModule,
        _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__.CustomLayoutModule] }); })();


/***/ }),

/***/ 8374:
/*!**********************************************************!*\
  !*** ./src/app/custom-layout/custom-layout.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLayoutComponent": function() { return /* binding */ CustomLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@vex/services/layout.service */ 7901);
/* harmony import */ var _vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@vex/layout/layout.component */ 3728);



//import { filter, map, startWith } from 'rxjs/operators';
//import { NavigationEnd, Router } from '@angular/router';
//import { checkRouterChildsData } from '../../@vex/utils/check-router-childs-data';
//import { BreakpointObserver } from '@angular/cdk/layout';
//import { ConfigService } from '../../@vex/services/config.service';
//import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
//import { SidebarComponent } from '../../@vex/components/sidebar/sidebar.component';
//@UntilDestroy()
class CustomLayoutComponent {
    // toolbarShadowEnabled$ = this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   startWith(null),
    //   map(() => checkRouterChildsData(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled))
    // );
    //@ViewChild('configpanel', { static: true }) configpanel: SidebarComponent;
    constructor(layoutService) {
        this.layoutService = layoutService;
        // sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
        // isFooterVisible$ = this.configService.config$.pipe(map(config => config.footer.visible));
        this.isDesktop$ = this.layoutService.isDesktop$;
    }
    ngOnInit() {
        // this.layoutService.configpanelOpen$.pipe(
        //   untilDestroyed(this)
        // ).subscribe(open => open ? this.configpanel.open() : this.configpanel.close());
    }
}
CustomLayoutComponent.ɵfac = function CustomLayoutComponent_Factory(t) { return new (t || CustomLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService)); };
CustomLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomLayoutComponent, selectors: [["vex-custom-layout"]], decls: 1, vars: 0, template: function CustomLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-layout");
    } }, directives: [_vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3372:
/*!*******************************************************!*\
  !*** ./src/app/custom-layout/custom-layout.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLayoutModule": function() { return /* binding */ CustomLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@vex/layout/layout.module */ 638);
/* harmony import */ var _custom_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-layout.component */ 8374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




// import { SidenavModule } from '../../@vex/layout/sidenav/sidenav.module';
// import { ToolbarModule } from '../../@vex/layout/toolbar/toolbar.module';
// import { FooterModule } from '../../@vex/layout/footer/footer.module';
// import { ConfigPanelModule } from '../../@vex/components/config-panel/config-panel.module';
// import { SidebarModule } from '../../@vex/components/sidebar/sidebar.module';
// import { QuickpanelModule } from '../../@vex/layout/quickpanel/quickpanel.module';
class CustomLayoutModule {
}
CustomLayoutModule.ɵfac = function CustomLayoutModule_Factory(t) { return new (t || CustomLayoutModule)(); };
CustomLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomLayoutModule });
CustomLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
            // SidenavModule,
            // ToolbarModule,
            // FooterModule,
            // ConfigPanelModule,
            // SidebarModule,
            // QuickpanelModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomLayoutModule, { declarations: [_custom_layout_component__WEBPACK_IMPORTED_MODULE_1__.CustomLayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map