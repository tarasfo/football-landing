exports.id = 172;
exports.ids = [172];
exports.modules = {

/***/ 2155:
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "Footer_footerContainer__2VO4a",
	"textContainerEN": "Footer_textContainerEN__ftBkn",
	"textContainerUA": "Footer_textContainerUA__akjyb",
	"iconContainer": "Footer_iconContainer__eWwfB",
	"link": "Footer_link__QqHwT",
	"logo": "Footer_logo__swypI"
};


/***/ }),

/***/ 2172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_g11n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8904);
/* harmony import */ var next_g11n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_g11n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2155);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_7__);








function Footer({ footerSectionKeys  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const g11nLocale = (0,next_g11n__WEBPACK_IMPORTED_MODULE_4__.getLocale)(router) || "en";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
        style: {
            display: "flex",
            backgroundColor: "#f0f5f9",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
            component: "footer",
            className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().footerContainer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),
                    children: "DIGITALIZE"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: g11nLocale === "en" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().textContainerEN) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().textContainerUA),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                style: {
                                    textDecoration: "none",
                                    color: "inherit"
                                },
                                href: "/privacy",
                                children: footerSectionKeys.privacy[g11nLocale]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                style: {
                                    textDecoration: "none",
                                    color: "inherit"
                                },
                                href: "/terms",
                                children: footerSectionKeys.terms[g11nLocale]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                style: {
                                    textDecoration: "none",
                                    color: "inherit"
                                },
                                href: "/contacts",
                                children: footerSectionKeys.contact[g11nLocale]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;