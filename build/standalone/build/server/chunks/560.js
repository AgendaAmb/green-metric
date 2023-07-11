"use strict";
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 64285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DropImage)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-WKZT7ZXJ.mjs + 3 modules
var chunk_WKZT7ZXJ = __webpack_require__(28068);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs
var chunk_DKFDJSXF = __webpack_require__(77288);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs
var chunk_GYFRIY2Z = __webpack_require__(19878);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(64348);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(113);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
// EXTERNAL MODULE: ./node_modules/react-dropzone/dist/index.js
var dist = __webpack_require__(5399);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/react-image-gallery/build/image-gallery.js
var image_gallery = __webpack_require__(37158);
var image_gallery_default = /*#__PURE__*/__webpack_require__.n(image_gallery);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
;// CONCATENATED MODULE: ./src/components/Gallery.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Gallery({ images , setReference  }) {
    const ref_ = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        if (setReference) {
            setReference(ref_);
        }
        ;
    }, [
        ref_
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((image_gallery_default()), {
        items: images,
        useBrowserFullscreen: false,
        showFullscreenButton: false,
        showPlayButton: false,
        autoPlay: false,
        showNav: false,
        ref: ref_
    });
}

;// CONCATENATED MODULE: ./src/components/DropImage.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function DropImage({ title ="Agregar Evidencia: " , maxPhotos =-1 , evidencename  }) {
    const [images, setImages] = (0,react_.useState)([]);
    const [photos, setPhotos] = (0,react_.useState)(1);
    const [reference, setReference] = (0,react_.useState)(null);
    const ref = (0,react_.useRef)(null);
    const handleImages = (e)=>{
        let count = 0;
        let tmpImages = [
            ...images
        ];
        try {
            if (maxPhotos != -1 && e.length > photos) {
                throw `No puedes agregar más de ${maxPhotos} archivos.`;
            }
            e.forEach((file)=>{
                if (photos > 0 || maxPhotos == -1) {
                    let url = URL.createObjectURL(file);
                    tmpImages.push({
                        original: url
                    });
                }
                count++;
            });
            setPhotos(photos - count);
            setImages(tmpImages);
        } catch (e) {
            sweetalert2_all_default().fire("\xa1Error!", e, "error");
        } finally{
            disableHover();
        }
    };
    const prev = (e)=>{
        const index = reference?.current?.getCurrentIndex();
        reference?.current?.slideToIndex(index - 1);
    };
    const next = (e)=>{
        const index = reference?.current?.getCurrentIndex();
        reference?.current?.slideToIndex(index + 1);
    };
    const enableHover = ()=>{
        let node = ref?.current;
        let classN = node?.className;
        classN ??= "";
        if (!node?.className.includes("hover-container")) {
            node.className = `${classN} hover-container`;
        }
    };
    const disableHover = ()=>{
        let node = ref?.current;
        node.className = `drop-container ${images?.length == 0 ? "" : "hide-container"}`;
    };
    (0,react_.useEffect)(()=>{
        setPhotos(maxPhotos);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_WKZT7ZXJ/* Stack */.K, {
        direction: "column",
        className: "grid-center",
        spacing: "30px 0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "drop-title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "blue",
                        children: `${title} `
                    }),
                    photos > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "red",
                        children: [
                            "(",
                            photos,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((dist_default()), {
                onDrop: handleImages,
                multiple: true,
                onDragEnter: enableHover,
                onDragLeave: disableHover,
                name: "evidence1",
                accept: {
                    "image/*": [
                        "*.*",
                        ".pdf"
                    ]
                },
                children: ({ getRootProps , getInputProps  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "carousel-row",
                        children: [
                            images?.length > 1 ? /*#__PURE__*/ jsx_runtime_.jsx(chunk_DKFDJSXF/* Icon */.J, {
                                as: index_esm/* MdOutlineSkipPrevious */.k9B,
                                className: "icon-hover",
                                onClick: prev,
                                role: "button",
                                name: "evidence8"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                ...getRootProps(),
                                className: "drag-and-drop",
                                name: "evidence9",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        ref: ref,
                                        className: `drop-container ${images?.length == 0 ? "" : "hide-container"}`,
                                        role: "button",
                                        name: "evidence3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* MdOutlineUpload */.EuP, {
                                                    className: "icon",
                                                    name: "evidence4"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Seleccione un archivo o arr\xe1strelo aqu\xed",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("sub", {
                                                        children: "Compatible (im\xe1genes y .pdf)"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Gallery, {
                                        images: images,
                                        setReference: setReference,
                                        name: "evidence5"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_GYFRIY2Z/* Input */.I, {
                                        ...getInputProps(),
                                        name: "evidence6"
                                    })
                                ]
                            }),
                            images?.length > 1 ? /*#__PURE__*/ jsx_runtime_.jsx(chunk_DKFDJSXF/* Icon */.J, {
                                as: index_esm/* MdOutlineSkipNext */.Hcn,
                                className: "icon-hover",
                                onClick: next,
                                role: "button",
                                name: "evidence7"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                        ]
                    })
            })
        ]
    });
}


/***/ }),

/***/ 18560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ModuleInput)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs + 4 modules
var chunk_NAA7TEES = __webpack_require__(97273);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs
var chunk_P74GIWPW = __webpack_require__(57661);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-WKZT7ZXJ.mjs + 3 modules
var chunk_WKZT7ZXJ = __webpack_require__(28068);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/select/dist/chunk-GJO77I2I.mjs + 1 modules
var chunk_GJO77I2I = __webpack_require__(39489);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/input/dist/chunk-6XCF7NSR.mjs
var chunk_6XCF7NSR = __webpack_require__(62333);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/input/dist/chunk-ARKOWLPR.mjs
var chunk_ARKOWLPR = __webpack_require__(3610);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs
var chunk_GYFRIY2Z = __webpack_require__(19878);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs
var chunk_DKFDJSXF = __webpack_require__(77288);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(64348);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/app/providers.js
var providers = __webpack_require__(69423);
// EXTERNAL MODULE: ./src/components/DropImage.jsx + 1 modules
var DropImage = __webpack_require__(64285);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/checkbox/dist/chunk-Y65KPFRX.mjs + 2 modules
var chunk_Y65KPFRX = __webpack_require__(60334);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/checkbox/dist/chunk-VFYM6BU6.mjs + 5 modules
var chunk_VFYM6BU6 = __webpack_require__(53567);
;// CONCATENATED MODULE: ./src/components/CheckboxItem.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function CheckboxItem({ element , area , hasInput =false , index =1 , questioncheckbox  }) {
    const [enabled, setEnabled] = (0,react_.useState)(false);
    const form = (0,react_.useContext)(providers.FormContext);
    const handleEnabled = ()=>{
        setEnabled(!enabled);
    };
    (0,react_.useEffect)(()=>{}, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_WKZT7ZXJ/* Stack */.K, {
        direction: [
            "column",
            "row"
        ],
        spacing: "10px",
        w: "100%",
        className: "grid-center-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(chunk_VFYM6BU6/* Checkbox */.X, {
                onChange: handleEnabled,
                name: `checkbox.${index}.selected`,
                h: "35px",
                w: "100%",
                onSelect: form.handleChange,
                children: element
            }),
            hasInput && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_WKZT7ZXJ/* Stack */.K, {
                className: `relative-container grid-center${area ? "-3" : ""}`,
                spacing: "10px",
                w: "100%",
                direction: [
                    "column",
                    "row"
                ],
                children: [
                    !enabled && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "disabled"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_GYFRIY2Z/* Input */.I, {
                        placeholder: `${area ? "Investigador" : "Representante"}`,
                        w: "100%",
                        className: "grid-center",
                        name: `${questioncheckbox}.${index} .value`,
                        onKeyUp: form.handleChange
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/CustomCheckbox.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const generateKey = (pre)=>{
    return `${pre}_${new Date().getTime()}`;
};
function CustomCheckbox({ checkbox , question  }) {
    const [content, setContent] = (0,react_.useState)({});
    (0,react_.useEffect)(()=>{
        setContent(checkbox);
    }, [
        content
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(chunk_Y65KPFRX/* CheckboxGroup */.c, {
        colorScheme: "green",
        w: "100%",
        children: content?.data?.map((element, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(CheckboxItem, {
                element: element,
                hasInput: content?.hasInput,
                index: index,
                questioncheckbox: question
            }, "cb" + index);
        //return <h1 key={generateKey("checkbox")}>Hi</h1>;
        })
    });
}

;// CONCATENATED MODULE: ./src/components/CustomSelect.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function CustomSelect({ data , setSelected , classes , holder ="Seleccione:" , nameSelect  }) {
    const form = (0,react_.useContext)(providers.FormContext);
    const handleSelected = (e)=>{
        if (setSelected) {
            setSelected();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(chunk_GJO77I2I/* Select */.P, {
        placeholder: holder,
        className: classes,
        name: nameSelect,
        onClick: form.handleChange,
        onChange: handleSelected,
        children: data?.map((el, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: el,
                children: el
            }, "el" + index);
        })
    });
}
/* harmony default export */ const components_CustomSelect = (CustomSelect);

;// CONCATENATED MODULE: ./src/components/ModuleInput.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







/*
* * Elementos
* * Tipo 1: Texto
* * Tipo 2: Numérico
* * Tipo 3: Porcentaje
* * Tipo 4: Kilogramos
* * Tipo 5: Metros Cuadrados
*/ function ModuleInput({ title , elements , selectValue , checkbox , area =false , select , add , addTitle ="A\xf1adir otro m\xf3dulo" , column =false , span =false , inputLarge =false , text , addModule , colorTitle ="blue" , questionSelect ="undefined" , questionEvidence ="undefined" , questionCheckBox ="undefined" , hasSelect  }) {
    const form = (0,react_.useContext)(providers.FormContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: `expand-2 ${colorTitle}`,
                children: title
            }),
            addModule && /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                className: "add-button",
                size: "sm",
                onClick: addModule.func,
                children: ` + `
            }),
            text && /*#__PURE__*/ jsx_runtime_.jsx(chunk_P74GIWPW/* Text */.x, {
                className: "expand-2 blue",
                children: text
            }),
            elements?.map(({ text , holder , type =0 , evidence , span , half , dicotomic , left , title ="Evidencias " , helper , textTitle ="" , leftTitle =false , maxPhotos =-1 , vertical =false , additional , disabled =false , customName ="undefined" , question ="undefinied" , questionDicotomic ="undefined"  }, index)=>{
                const isInputEnable = hasSelect && dicotomic && selectValue === "1";
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_WKZT7ZXJ/* Stack */.K, {
                    direction: "column",
                    className: `${span ? "expand-2" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_WKZT7ZXJ/* Stack */.K, {
                            direction: `${column ? "column" : "row"}`,
                            gridTemplateColumns: `${vertical ? "repeat1fr" : "1.3fr 1fr 1fr 1fr"}`,
                            display: "grid",
                            gridTemplateRows: `${vertical ? "1fr" : "repeat(auto-fit, minmax(50px, 1fr))"}`,
                            children: [
                                text && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_P74GIWPW/* Text */.x, {
                                    className: inputLarge ? "" : "expand-2",
                                    children: [
                                        textTitle,
                                        " ",
                                        text
                                    ]
                                }),
                                hasSelect && dicotomic ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_GJO77I2I/* Select */.P, {
                                    gridColumn: "span 4",
                                    onChange: form.handleChange,
                                    name: questionDicotomic,
                                    value: selectValue,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "-1",
                                            children: "Seleccione:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "1",
                                            children: "Si"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "0",
                                            children: "No"
                                        })
                                    ]
                                }) : type != null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6XCF7NSR/* InputGroup */.B, {
                                    onKeyUp: form.handleChange,
                                    w: "100%",
                                    className: `${text == null ? "expand-4" : ""} ${inputLarge ? "expand-3" : "expand-2"}`,
                                    size: "sm",
                                    children: [
                                        type > 0 && /*#__PURE__*/ jsx_runtime_.jsx(chunk_ARKOWLPR/* InputLeftAddon */.Ui, {
                                            pointerEvents: "none",
                                            color: "gray.600",
                                            fontSize: "1.2em",
                                            children: `${left ? left : type == 1 ? "abc" : type == 2 ? "123" : type == 3 ? "%" : type == 4 ? "kg" : type == 5 ? "m2" : type == 6 ? "MXN" : "in"}`
                                        }),
                                        type != 0 && /*#__PURE__*/ jsx_runtime_.jsx(chunk_GYFRIY2Z/* Input */.I, {
                                            name: question,
                                            id: "input",
                                            type: type == 1 ? "text" : "number",
                                            placeholder: holder != null ? holder : type == 1 ? "Respuesta libre" : "Cantidad num\xe9rica",
                                            marginRight: "15px"
                                        }),
                                        additional != null && /*#__PURE__*/ jsx_runtime_.jsx(chunk_GYFRIY2Z/* Input */.I, {
                                            name: "none",
                                            type: additional.type == 1 ? "text" : "number",
                                            placeholder: additional.holder != null ? additional.holder : additional.type == 1 ? "Respuesta libre" : "Cantidad num\xe9rica",
                                            marginRight: "15px",
                                            disabled: additional.disabled
                                        })
                                    ]
                                }),
                                helper && /*#__PURE__*/ jsx_runtime_.jsx(chunk_P74GIWPW/* Text */.x, {
                                    className: "expand-4 sub-text",
                                    w: "100%",
                                    color: "gray.500",
                                    textAlign: "justify",
                                    children: helper
                                })
                            ]
                        }),
                        evidence && /*#__PURE__*/ jsx_runtime_.jsx(DropImage/* default */.Z, {
                            title: `${title}`,
                            maxPhotos: maxPhotos
                        })
                    ]
                }, index);
            }),
            checkbox && /*#__PURE__*/ jsx_runtime_.jsx(CustomCheckbox, {
                checkbox: checkbox,
                question: questionCheckBox
            }),
            select && /*#__PURE__*/ jsx_runtime_.jsx(components_CustomSelect, {
                data: select,
                nameSelect: questionSelect
            }),
            add && /*#__PURE__*/ jsx_runtime_.jsx(chunk_WKZT7ZXJ/* Stack */.K, {
                direction: "column",
                className: `add-module`,
                spacing: "30px",
                height: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_WKZT7ZXJ/* Stack */.K, {
                    className: "grid-center",
                    gridRow: `${span ? "span 2" : "span 1"}`,
                    children: [
                        !span && /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: " blue",
                            children: addTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_WKZT7ZXJ/* Stack */.K, {
                            spacing: "30px",
                            className: "border-dashed",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_DKFDJSXF/* Icon */.J, {
                                as: index_esm/* MdLibraryAdd */.jCV,
                                role: "button",
                                fontSize: "80px",
                                className: "blue icon-button"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;