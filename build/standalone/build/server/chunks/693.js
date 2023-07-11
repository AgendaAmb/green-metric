"use strict";
exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 55693:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48291);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77258);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78875);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90727);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19507);
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79768);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
// src/textarea.tsx




// ../../utilities/object-utils/src/index.ts
function omit(object, keysToOmit = []) {
  const clone = Object.assign({}, object);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}

// src/textarea.tsx

var omitted = ["h", "minH", "height", "minHeight"];
var Textarea = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .G)((props, ref) => {
  const styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__/* .useStyleConfig */ .mq)("Textarea", props);
  const { className, rows, ...rest } = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__/* .omitThemingProps */ .Lr)(props);
  const textareaProps = (0,_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__/* .useFormControl */ .Y)(rest);
  const textareaStyles = rows ? omit(styles, omitted) : styles;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__/* .chakra */ .m.textarea,
    {
      ref,
      rows,
      ...textareaProps,
      className: (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-textarea", className),
      __css: textareaStyles
    }
  );
});
Textarea.displayName = "Textarea";




/***/ })

};
;