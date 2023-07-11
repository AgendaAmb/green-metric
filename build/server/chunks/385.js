exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 41292:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 59583:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69423));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 74921))

/***/ }),

/***/ 69423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormContext: () => (/* binding */ FormContext),
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_next_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99042);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25949);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31279);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72202);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6135);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28068);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// app/providers.tsx
/* __next_internal_client_entry_do_not_use__ FormContext,Providers auto */ 







const FormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
function FormBase({ children , handleSubmit , handleChange , values  }) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        values,
        handleChange
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormContext.Provider, {
        value: data,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__/* .Stack */ .K, {
            onSubmit: handleSubmit,
            as: "form",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_dnd__WEBPACK_IMPORTED_MODULE_4__/* .DndProvider */ .W, {
                backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__/* .HTML5Backend */ .PD,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_next_js__WEBPACK_IMPORTED_MODULE_6__/* .CacheProvider */ .n, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__/* .ChakraProvider */ .x, {
                        children: children
                    })
                })
            })
        })
    });
}
const Providers = (0,formik__WEBPACK_IMPORTED_MODULE_1__.withFormik)({
    mapPropsToValues: ()=>({}),
    // Custom sync validation
    validate: (values)=>{
        const errors = {};
        /* if (!values.name) {
            errors.name = 'Required';
        } */ return errors;
    },
    handleSubmit: (values, { setSubmitting  })=>{
        console.log("Printing");
        let data = [];
        setTimeout(()=>{
            for (const [key, value] of Object.entries(values)){
                data.push({
                    question: key,
                    value: value
                });
            }
            /* const mysql = require('mysql2');
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                database: 'green-metric'
            });

            // simple query
            connection.query(
                'SELECT * FROM `users`',
                function (err, results, fields) {
                    console.log(results); // results contains rows returned by server
                    console.log(fields); // fields contains extra meta data about results, if available
                }
            ); */ console.log(data);
            //alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: "BasicForm"
})(FormBase);


/***/ }),

/***/ 74921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs
var chunk_6CSUKJP7 = __webpack_require__(23918);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs + 2 modules
var chunk_SMHKDLMK = __webpack_require__(97072);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "navbar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/informacion/",
                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_6CSUKJP7/* Box */.xu, {
                    className: "one-col",
                    w: "100%",
                    bgColor: "#fbba00",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Informaci\xf3n"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/infraestructura/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6CSUKJP7/* Box */.xu, {
                    w: "100%",
                    bgColor: "#008037",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_SMHKDLMK/* Image */.E, {
                            src: "/GreenMetric/navbar/edificio.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Entorno e Infraestructura"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/energia/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6CSUKJP7/* Box */.xu, {
                    w: "100%",
                    bgColor: "#cfaf2e",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_SMHKDLMK/* Image */.E, {
                            src: "/GreenMetric/navbar/climatico.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Energ\xeda y Cambio Clim\xe1tico"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/residuos/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6CSUKJP7/* Box */.xu, {
                    w: "100%",
                    bgColor: "#e09d9a",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_SMHKDLMK/* Image */.E, {
                            src: "/GreenMetric/navbar/basura.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Gesti\xf3n de Residuos"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/agua/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6CSUKJP7/* Box */.xu, {
                    w: "100%",
                    bgColor: "#5271ff",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_SMHKDLMK/* Image */.E, {
                            src: "/GreenMetric/navbar/agua.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Uso de Agua"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/transporte/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6CSUKJP7/* Box */.xu, {
                    w: "100%",
                    bgColor: "#ff1616",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_SMHKDLMK/* Image */.E, {
                            src: "/GreenMetric/navbar/transporte.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Transporte"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/educacion/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6CSUKJP7/* Box */.xu, {
                    w: "100%",
                    bgColor: "#ff914d",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_SMHKDLMK/* Image */.E, {
                            src: "/GreenMetric/navbar/investigacion.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Educaci\xf3n e Investigaci\xf3n"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/reporte/",
                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_6CSUKJP7/* Box */.xu, {
                    className: "one-col",
                    w: "100%",
                    bgColor: "#66cfff",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Reporte General"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs
var chunk_P74GIWPW = __webpack_require__(57661);
;// CONCATENATED MODULE: ./src/components/Header.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-logo",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_SMHKDLMK/* Image */.E, {
                                src: "/GreenMetric/agenda-white.svg",
                                alt: "logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_SMHKDLMK/* Image */.E, {
                                src: "/GreenMetric/green-metric.svg",
                                alt: "logo"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "titles no-overflow",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_P74GIWPW/* Text */.x, {
                                className: "font-header",
                                children: "Universidad Aut\xf3noma de San Luis Potos\xed"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_P74GIWPW/* Text */.x, {
                                className: "font-header",
                                children: "Agenda Ambiental"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_P74GIWPW/* Text */.x, {
                                className: "font-header",
                                children: "Green Metric"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {})
        ]
    });
}
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 21191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/sass/main.scss
var main = __webpack_require__(33887);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./src/app/providers.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\EdwinSaucedoMX\Projects\green-metric\src\app\providers.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["FormContext"];

const e1 = proxy["Providers"];

;// CONCATENATED MODULE: ./src/components/Header.jsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\EdwinSaucedoMX\Projects\green-metric\src\components\Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;


/* harmony default export */ const Header = (Header_default_);
;// CONCATENATED MODULE: ./src/app/layout.js




const metadata = {
    title: "Green Metric",
    description: "Green Metric App"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    href: "/favicon.ico"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `main  main-container body`,
                    suppressHydrationWarning: false,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "main-info-container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                                    children: children
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 56427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)("\\GreenMetricTest", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 33887:
/***/ (() => {



/***/ })

};
;