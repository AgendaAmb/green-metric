"use strict";
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 22765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CustomTextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28068);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57661);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55693);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function CustomTextArea({ title , text , maxCharacters  }) {
    const [characterCount, setCharacterCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleChange = ()=>{
        const charactersText = ref?.current?.value;
        if (charactersText.length <= maxCharacters) {
            setCharacterCount(charactersText.length);
        } else {
            setCharacterCount(maxCharacters);
            ref.current.value = charactersText.substring(0, maxCharacters);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__/* .Stack */ .K, {
        w: "100%",
        spacing: "30px",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "green",
                children: title
            }),
            text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .x, {
                className: "self-start",
                children: text
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__/* .Stack */ .K, {
                position: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__/* .Textarea */ .g, {
                        resize: "none",
                        w: "1730px",
                        h: "400px",
                        borderColor: "gray.400",
                        onChange: maxCharacters ? handleChange : undefined,
                        ref: ref
                    }),
                    maxCharacters && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .x, {
                        color: "gray.400",
                        className: "character-count",
                        children: [
                            characterCount,
                            "/",
                            maxCharacters
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;