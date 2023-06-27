(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(324);
// EXTERNAL MODULE: ./src/createEmotionCache.ts
var createEmotionCache = __webpack_require__(896);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(377);
;// CONCATENATED MODULE: ./src/pages/_app.tsx










// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
const MyApp = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
                theme: theme/* default */.Z,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp));


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 223:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ 308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273], () => (__webpack_exec__(271)));
module.exports = __webpack_exports__;

})();