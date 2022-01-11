(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_dashboard_dashboard_module_ts"], {
    /***/
    4497:
    /*!*******************************************!*\
      !*** ./src/app/classes-getter.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassesGetterService": function ClassesGetterService() {
          return (
            /* binding */
            _ClassesGetterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _ClassesGetterService = /*#__PURE__*/function () {
        function _ClassesGetterService(http) {
          _classCallCheck(this, _ClassesGetterService);

          this.http = http;
        }

        _createClass(_ClassesGetterService, [{
          key: "GetClasses",
          value: function GetClasses() {
            return this.http.get('./assets/links.json');
          }
        }]);

        return _ClassesGetterService;
      }();

      _ClassesGetterService.ɵfac = function ClassesGetterService_Factory(t) {
        return new (t || _ClassesGetterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _ClassesGetterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ClassesGetterService,
        factory: _ClassesGetterService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    425:
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardRoutingModule": function DashboardRoutingModule() {
          return (
            /* binding */
            _DashboardRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.component */
      7528);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }];

      var _DashboardRoutingModule = function _DashboardRoutingModule() {
        _classCallCheck(this, _DashboardRoutingModule);
      };

      _DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
        return new (t || _DashboardRoutingModule)();
      };

      _DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _DashboardRoutingModule
      });
      _DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    7528:
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _classes_getter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../classes-getter.service */
      4497);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      5618);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _c0 = function _c0(a1) {
        return ["/products", a1];
      };

      function DashboardComponent_a_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var class_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, class_r1.link));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/apps/taxcom/assets", class_r1.img_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](class_r1.name);
        }
      }

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent(classesGetter) {
          var _this = this;

          _classCallCheck(this, _DashboardComponent);

          this.classesGetter = classesGetter;
          classesGetter.GetClasses().subscribe(function (data) {
            _this.classList = data;

            _this.classList.forEach(function (element) {
              var length;
              length = element.file_name.length;
              element.link = element.file_name.substr(0, length - 5);
              return element;
            });
          });
        }

        _createClass(_DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_classes_getter_service__WEBPACK_IMPORTED_MODULE_0__.ClassesGetterService));
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["vex-dashboard"]],
        decls: 13,
        vars: 1,
        consts: [[1, "info"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "30px", 1, "my-12", "container"], ["class", "card p-6", "fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "start center", 3, "routerLink", 4, "ngFor", "ngForOf"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "start center", 1, "card", "p-6", 3, "routerLink"], [1, "inline-block", "p-6", "rounded-full", "text-primary", "mx-auto", "flex", "items-center", "justify-center", "bg-primary-light"], ["size", "48px", 3, "src"], [1, "headline", "my-2"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0414\u0430\u043D\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0411\u0438\u0442\u0440\u0438\u043A\u044124 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u042D\u0426\u041F, \u0443\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u0438\u0445 \u0432\u0438\u0434\u0430\u0445 \u0438 \u0434\u043B\u044F \u0447\u0435\u0433\u043E \u043E\u043D\u0438 \u043D\u0443\u0436\u043D\u044B.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u042D\u0426\u041F (\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0446\u0438\u0444\u0440\u043E\u0432\u0430\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044C) - \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0430 \u043A \u0434\u0440\u0443\u0433\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u0438\u043B\u0438 \u0438\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0441\u0432\u044F\u0437\u0430\u043D\u0430 \u0441 \u0442\u0430\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u0438 \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043B\u0438\u0446\u0430, \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0435\u0433\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0412\u044B \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u042D\u0426\u041F \u0438 \u0443\u0437\u043D\u0430\u0442\u044C \u043E \u043D\u0451\u043C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435, \u0447\u0442\u043E \u0432 \u043D\u0435\u0433\u043E \u0432\u0445\u043E\u0434\u0438\u0442, \u0446\u0435\u043D\u0443 \u0438 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DashboardComponent_a_12_Template, 5, 5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.classList);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective],
        styles: [".card[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 150px;\n  margin-bottom: 3%;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 90px;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin-left: 9em;\n  margin-right: 9.6em;\n  border-radius: 5px;\n  background: rgba(251, 255, 27, 0.5);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.065), 0 6px 20px 0 rgba(0, 0, 0, 0.065);\n  margin-top: -50px;\n  margin-bottom: -60px;\n}\n\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0VBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFJSiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuLmluZm97XHJcbiAgICBtYXJnaW4tbGVmdDogOWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5LjZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUxLCAyNTUsIDI3LCAwLjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2NSksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDY1KTtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTYwcHg7XHJcbn1cclxuLmluZm8gcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQ6IGJvbGQ7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    4814:
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.component */
      7528);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      425);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      5830);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _DashboardModule = function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      };

      _DashboardModule.ɵfac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts-es5.js.map