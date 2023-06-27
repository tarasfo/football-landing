(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5541:
/***/ ((module) => {

// Exports
module.exports = {
	"aboutTextContainer": "About_aboutTextContainer__vMPiN",
	"aboutTitle": "About_aboutTitle___1f4_",
	"aboutSubtitle": "About_aboutSubtitle__groGy",
	"aboutDescription": "About_aboutDescription__c7OjV",
	"cardTitle": "About_cardTitle__JJZy8",
	"cardDescription": "About_cardDescription__yYhoE",
	"box": "About_box__kULlf",
	"textContainer": "About_textContainer__gZKGW",
	"cardWrapper": "About_cardWrapper__4XPt7",
	"card1": "About_card1__fdw1o",
	"card2": "About_card2__pqgUl",
	"card3": "About_card3__5KoOT"
};


/***/ }),

/***/ 1154:
/***/ ((module) => {

// Exports
module.exports = {
	"submitButton": "Connect_submitButton__cNpWm",
	"downloadButton": "Connect_downloadButton__5qUvK",
	"container": "Connect_container__uQTRK",
	"innerContainer": "Connect_innerContainer__WnxFT",
	"startTrial": "Connect_startTrial__9dEDI",
	"connectTitle": "Connect_connectTitle__D3_7E",
	"emailInput": "Connect_emailInput__k13o_"
};


/***/ }),

/***/ 9465:
/***/ ((module) => {

// Exports
module.exports = {
	"faqContainer": "FAQ_faqContainer__hQVil",
	"headingContainer": "FAQ_headingContainer__iE_s_",
	"mainHeading": "FAQ_mainHeading__KFeG0",
	"subHeading": "FAQ_subHeading__GKNzc",
	"additionalInfo": "FAQ_additionalInfo__VwNZA",
	"contactLink": "FAQ_contactLink__sJRNw",
	"accordionGrid": "FAQ_accordionGrid__eYPeB"
};


/***/ }),

/***/ 4672:
/***/ ((module) => {

// Exports
module.exports = {
	"accordin": "Accordin_accordin__vCwd7"
};


/***/ }),

/***/ 5712:
/***/ ((module) => {

// Exports
module.exports = {
	"pricingSection": "PricingSection_pricingSection__GPTEk",
	"pricingSectionHeader": "PricingSection_pricingSectionHeader__T4AUU",
	"pricingSectionTitle": "PricingSection_pricingSectionTitle__jCFT_",
	"pricingSectionDescription": "PricingSection_pricingSectionDescription__5ZDj7",
	"pricingSectionCards": "PricingSection_pricingSectionCards__ZfYX6",
	"pricingCard": "PricingSection_pricingCard__dcgtw",
	"cardTitle": "PricingSection_cardTitle__seM8s",
	"cardSubtitle": "PricingSection_cardSubtitle__gapz9",
	"cardPriseDetails": "PricingSection_cardPriseDetails__Ygtrs",
	"cardPricingPeriod": "PricingSection_cardPricingPeriod__1dYMv",
	"cardBasicButton": "PricingSection_cardBasicButton__578iU",
	"cardPremiumButton": "PricingSection_cardPremiumButton__KMNEK",
	"refundText": "PricingSection_refundText__VvqLr"
};


/***/ }),

/***/ 981:
/***/ ((module) => {

// Exports
module.exports = {
	"seeMoreButton": "Product_seeMoreButton__1gJqN",
	"downloadButtonLink": "Product_downloadButtonLink__Vmnxe",
	"conditionsText": "Product_conditionsText__bKc0y",
	"productSection": "Product_productSection__nn1QQ",
	"productContent": "Product_productContent__U0lwa",
	"productText": "Product_productText__eeywK",
	"productTitle": "Product_productTitle__iId1e",
	"productLink": "Product_productLink__7yL_7",
	"downloadLinkContainer": "Product_downloadLinkContainer__BN45N",
	"downloadButton": "Product_downloadButton__Hwy2O",
	"downloadButtonIcon": "Product_downloadButtonIcon__sXANN",
	"downloadButtonText": "Product_downloadButtonText__BYhFQ",
	"downloadButtonTextBig": "Product_downloadButtonTextBig__drN9G",
	"productImage": "Product_productImage__bxoMA",
	"downloadApple": "Product_downloadApple__3_KVk",
	"downloadGoogle": "Product_downloadGoogle__Oien7"
};


/***/ }),

/***/ 6144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-g11n"
var external_next_g11n_ = __webpack_require__(8904);
// EXTERNAL MODULE: ./src/dictionary.ts
var dictionary = __webpack_require__(2162);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/product-section/Product.module.css
var Product_module = __webpack_require__(981);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/product-section/index.tsx








function ProductSection({ productSectionKeys  }) {
    const router = (0,router_.useRouter)();
    const g11nLocale = (0,external_next_g11n_.getLocale)(router) || "en";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        id: "Product",
        className: (Product_module_default()).productSection,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: (Product_module_default()).productContent,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                    className: (Product_module_default()).productText,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (Product_module_default()).productTitle,
                            children: productSectionKeys.launch[g11nLocale]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: (Product_module_default()).seeMoreButton,
                            href: "#Features",
                            children: productSectionKeys.seeMore[g11nLocale]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                            className: (Product_module_default()).downloadLinkContainer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Product_module_default()).downloadButtonLink,
                                    href: productSectionKeys.links.appStore,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: (Product_module_default()).downloadApple,
                                        alt: "",
                                        src: "/apple_store.svg",
                                        width: 130,
                                        height: 50
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Product_module_default()).downloadButtonLink,
                                    href: productSectionKeys.links.googlePlay,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: (Product_module_default()).downloadGoogle,
                                        alt: "",
                                        src: "/Google_Play_Store_badge_EN.svg",
                                        width: 150,
                                        height: 50
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (Product_module_default()).productImage,
                alt: "",
                src: "/iphone_svg.svg",
                width: 280,
                height: 600,
                priority: true
            })
        ]
    });
}
/* harmony default export */ const product_section = (ProductSection);

// EXTERNAL MODULE: ./src/components/about-section/About.module.css
var About_module = __webpack_require__(5541);
var About_module_default = /*#__PURE__*/__webpack_require__.n(About_module);
;// CONCATENATED MODULE: ./src/components/about-section/index.tsx







function AboutSection({ aboutSectionKeys  }) {
    const router = (0,router_.useRouter)();
    const g11nLocale = (0,external_next_g11n_.getLocale)(router) || "en";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        id: "Features",
        className: (About_module_default()).box,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (About_module_default()).aboutTextContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (About_module_default()).textContainer,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (About_module_default()).aboutTitle,
                        children: aboutSectionKeys.inside[g11nLocale]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (About_module_default()).cardWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (About_module_default()).card1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/link.png",
                                width: "72",
                                alt: "Feature",
                                height: 72
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (About_module_default()).cardTitle,
                                        children: aboutSectionKeys.connectTitle[g11nLocale]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (About_module_default()).cardDescription,
                                        children: aboutSectionKeys.connectDescription[g11nLocale]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (About_module_default()).card2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/analytics.png",
                                width: "72",
                                alt: "Feature",
                                height: 72
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (About_module_default()).cardTitle,
                                        children: aboutSectionKeys.manageTitle[g11nLocale]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (About_module_default()).cardDescription,
                                        children: aboutSectionKeys.manageDescription[g11nLocale]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (About_module_default()).card3,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/team.png",
                                width: "72",
                                alt: "Feature",
                                height: 72
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (About_module_default()).cardTitle,
                                        children: aboutSectionKeys.showTitle[g11nLocale]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (About_module_default()).cardDescription,
                                        children: aboutSectionKeys.showDescription[g11nLocale]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (About_module_default()).card3,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/time-management.png",
                                width: "72",
                                alt: "Feature",
                                height: 72
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (About_module_default()).cardTitle,
                                        children: aboutSectionKeys.eventsTitle[g11nLocale]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (About_module_default()).cardDescription,
                                        children: aboutSectionKeys.eventDescription[g11nLocale]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (About_module_default()).card2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/disagree.png",
                                width: "72",
                                alt: "Feature",
                                height: 72
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (About_module_default()).cardTitle,
                                        children: aboutSectionKeys.agreeTitle[g11nLocale]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (About_module_default()).cardDescription,
                                        children: aboutSectionKeys.agreeDescription[g11nLocale]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (About_module_default()).card1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/football.png",
                                width: "72",
                                alt: "Feature",
                                height: 72
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (About_module_default()).cardTitle,
                                        children: aboutSectionKeys.footballTitle[g11nLocale]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (About_module_default()).cardDescription,
                                        children: aboutSectionKeys.footballDescription[g11nLocale]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const about_section = (AboutSection);

// EXTERNAL MODULE: ./src/components/pricing-section/PricingSection.module.css
var PricingSection_module = __webpack_require__(5712);
var PricingSection_module_default = /*#__PURE__*/__webpack_require__.n(PricingSection_module);
;// CONCATENATED MODULE: ./src/components/pricing-section/index.tsx







function PricingSection({ pricingSectionKeys  }) {
    const router = (0,router_.useRouter)();
    const g11nLocale = (0,external_next_g11n_.getLocale)(router) || "en";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        id: "Pricing",
        className: (PricingSection_module_default()).pricingSection,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: (PricingSection_module_default()).pricingSectionHeader,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    variant: "h2",
                    className: (PricingSection_module_default()).pricingSectionTitle,
                    children: "Підписки"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: (PricingSection_module_default()).pricingSectionCards,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                        className: (PricingSection_module_default()).pricingCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.CardContent, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        className: (PricingSection_module_default()).cardTitle,
                                        children: "Благодійна"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/solidarity.png",
                                        width: 120,
                                        height: 120,
                                        alt: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        className: (PricingSection_module_default()).cardPriseDetails,
                                        gutterBottom: true,
                                        children: pricingSectionKeys.free[g11nLocale]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        className: (PricingSection_module_default()).cardSubtitle,
                                        children: "для дитячих команд"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        style: {
                                            textAlign: "left",
                                            marginTop: "10px",
                                            fontSize: "12px",
                                            width: "100%"
                                        },
                                        children: "- підтримка по email"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CardActions, {
                                style: {
                                    width: "100%",
                                    padding: "0px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    className: (PricingSection_module_default()).cardBasicButton,
                                    size: "small",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        style: {
                                            textDecoration: "none",
                                            color: "white"
                                        },
                                        href: pricingSectionKeys.calendly,
                                        children: pricingSectionKeys.download[g11nLocale]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                        className: (PricingSection_module_default()).pricingCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.CardContent, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        className: (PricingSection_module_default()).cardTitle,
                                        children: "Стандартна"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/standard.png",
                                        width: 120,
                                        height: 120,
                                        alt: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        className: (PricingSection_module_default()).cardPriseDetails,
                                        gutterBottom: true,
                                        children: "400$/міс"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        style: {
                                            textAlign: "left",
                                            marginTop: "25px",
                                            fontSize: "12px",
                                            width: "100%"
                                        },
                                        children: "- підтримка по email протягом 48 годин"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CardActions, {
                                style: {
                                    width: "100%",
                                    padding: "0px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    className: (PricingSection_module_default()).cardBasicButton,
                                    size: "small",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        style: {
                                            textDecoration: "none",
                                            color: "white"
                                        },
                                        href: pricingSectionKeys.calendly,
                                        children: pricingSectionKeys.download[g11nLocale]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                        className: (PricingSection_module_default()).pricingCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.CardContent, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        className: (PricingSection_module_default()).cardTitle,
                                        children: "Преміум"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/premium.png",
                                        width: 120,
                                        height: 120,
                                        alt: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        className: (PricingSection_module_default()).cardPriseDetails,
                                        gutterBottom: true,
                                        children: "800$/міс"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        style: {
                                            textAlign: "left",
                                            marginTop: "25px",
                                            fontSize: "12px",
                                            width: "100%"
                                        },
                                        children: "- можливість додати функціонал саме під ваші потреби"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        style: {
                                            textAlign: "left",
                                            fontSize: "12px",
                                            width: "100%"
                                        },
                                        children: "- швидка підтримка в чаті/телефоном"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CardActions, {
                                style: {
                                    width: "100%",
                                    padding: "0px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    className: (PricingSection_module_default()).cardBasicButton,
                                    size: "small",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        style: {
                                            textDecoration: "none",
                                            color: "white"
                                        },
                                        href: pricingSectionKeys.calendly,
                                        children: pricingSectionKeys.download[g11nLocale]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const pricing_section = (PricingSection);

// EXTERNAL MODULE: ./src/components/faq-section/FAQ.module.css
var FAQ_module = __webpack_require__(9465);
var FAQ_module_default = /*#__PURE__*/__webpack_require__.n(FAQ_module);
// EXTERNAL MODULE: ./src/components/faq-section/components/Accordin.module.css
var Accordin_module = __webpack_require__(4672);
var Accordin_module_default = /*#__PURE__*/__webpack_require__.n(Accordin_module);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./src/components/faq-section/components/index.tsx





function FAQAccordion({ title , description  }) {
    const [expanded, setExpanded] = external_react_default().useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Accordion, {
        className: (Accordin_module_default()).accordin,
        onChange: ()=>setExpanded(!expanded),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.AccordionSummary, {
                style: {
                    borderColor: "transparent",
                    padding: "0px"
                },
                expandIcon: expanded ? /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMinus, {}) : /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlinePlus, {}),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.AccordionDetails, {
                style: {
                    borderColor: "transparent",
                    padding: "0px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    children: description
                })
            })
        ]
    });
}
/* harmony default export */ const components = (FAQAccordion);

;// CONCATENATED MODULE: ./src/components/faq-section/index.tsx







function FAQSection({ faqSectionKeys , data  }) {
    const router = (0,router_.useRouter)();
    const g11nLocale = (0,external_next_g11n_.getLocale)(router) || "en";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        id: "FAQ",
        className: (FAQ_module_default()).faqContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: (FAQ_module_default()).headingContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (FAQ_module_default()).mainHeading,
                        children: faqSectionKeys.faqTitle[g11nLocale]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (FAQ_module_default()).additionalInfo,
                        children: faqSectionKeys.questions[g11nLocale]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (FAQ_module_default()).contactLink,
                        href: "#",
                        children: faqSectionKeys.contactUs[g11nLocale]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: (FAQ_module_default()).accordionGrid,
                children: data.map((item, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(components, {
                        title: item.question,
                        description: item.answer
                    }, index);
                })
            })
        ]
    });
}
/* harmony default export */ const faq_section = (FAQSection);

// EXTERNAL MODULE: ./src/components/connect-section/Connect.module.css
var Connect_module = __webpack_require__(1154);
var Connect_module_default = /*#__PURE__*/__webpack_require__.n(Connect_module);
;// CONCATENATED MODULE: ./src/components/connect-section/index.tsx





function ConnectSection({ connectSectionKeys  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        id: "cta",
        className: (Connect_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: (Connect_module_default()).innerContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Connect_module_default()).startTrial,
                        children: "Запустіть мобільний застосунок для свого футбольного клубу"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (Connect_module_default()).connectTitle,
                        children: "Готові підняти рівень комунікації з фанами?"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (Connect_module_default()).downloadButton,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: {
                        color: "white",
                        textDecoration: "none"
                    },
                    href: connectSectionKeys.calendly,
                    children: "Зв'язатись"
                })
            })
        ]
    });
}
/* harmony default export */ const connect_section = (ConnectSection);

// EXTERNAL MODULE: ./src/components/header/index.tsx
var components_header = __webpack_require__(6788);
// EXTERNAL MODULE: ./src/components/footer/index.tsx
var footer = __webpack_require__(2172);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./src/pages/index.tsx











function Home({ header , download , productSectionKeys , aboutSectionKeys , pricingSectionKeys , faqSectionKeys , connectSectionKeys , footerSectionKeys , data , calendly  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Digitalize"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Lending page for football app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_header/* default */.Z, {
                        download: download,
                        header: header,
                        calendly: calendly
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(product_section, {
                        productSectionKeys: productSectionKeys
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(about_section, {
                        aboutSectionKeys: aboutSectionKeys
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(pricing_section, {
                        pricingSectionKeys: pricingSectionKeys
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(faq_section, {
                        faqSectionKeys: faqSectionKeys,
                        data: data
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(connect_section, {
                        connectSectionKeys: connectSectionKeys
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {
                        footerSectionKeys: footerSectionKeys
                    })
                ]
            })
        ]
    });
}


const getStaticProps = async ()=>{
    const filePath = external_path_default().join(process.cwd(), "landing.config.json");
    const jsonData = external_fs_default().readFileSync(filePath, "utf8");
    const CONFIG = JSON.parse(jsonData);
    const product = (0,external_next_g11n_.createStaticTerm)("product", dictionary/* dictionary */.F);
    const features = (0,external_next_g11n_.createStaticTerm)("features", dictionary/* dictionary */.F);
    const pricing = (0,external_next_g11n_.createStaticTerm)("pricing", dictionary/* dictionary */.F);
    const faq = (0,external_next_g11n_.createStaticTerm)("FAQ", dictionary/* dictionary */.F);
    const download = (0,external_next_g11n_.createStaticTerm)("download", dictionary/* dictionary */.F);
    const header = [
        product,
        features,
        pricing,
        faq
    ];
    // product section
    const launch = (0,external_next_g11n_.createStaticTerm)("launch", dictionary/* dictionary */.F);
    const connect = (0,external_next_g11n_.createStaticTerm)("connect", dictionary/* dictionary */.F);
    const seeMore = (0,external_next_g11n_.createStaticTerm)("see-more", dictionary/* dictionary */.F);
    const trial = (0,external_next_g11n_.createStaticTerm)("trial", dictionary/* dictionary */.F);
    const noCredit = (0,external_next_g11n_.createStaticTerm)("no-credit-card", dictionary/* dictionary */.F);
    const productSectionKeys = {
        launch,
        connect,
        seeMore,
        trial,
        noCredit,
        download,
        links: {
            appStore: CONFIG.appStore,
            googlePlay: CONFIG.googlePlay
        }
    };
    // about section
    const inside = (0,external_next_g11n_.createStaticTerm)("inside", dictionary/* dictionary */.F);
    const connectTitle = (0,external_next_g11n_.createStaticTerm)("connect-title", dictionary/* dictionary */.F);
    const connectDescription = (0,external_next_g11n_.createStaticTerm)("connect-description", dictionary/* dictionary */.F);
    const manageTitle = (0,external_next_g11n_.createStaticTerm)("manage-title", dictionary/* dictionary */.F);
    const manageDescription = (0,external_next_g11n_.createStaticTerm)("manage-description", dictionary/* dictionary */.F);
    const showTitle = (0,external_next_g11n_.createStaticTerm)("show-title", dictionary/* dictionary */.F);
    const showDescription = (0,external_next_g11n_.createStaticTerm)("show-description", dictionary/* dictionary */.F);
    const eventsTitle = (0,external_next_g11n_.createStaticTerm)("events-title", dictionary/* dictionary */.F);
    const eventDescription = (0,external_next_g11n_.createStaticTerm)("events-description", dictionary/* dictionary */.F);
    const agreeTitle = (0,external_next_g11n_.createStaticTerm)("agree-title", dictionary/* dictionary */.F);
    const agreeDescription = (0,external_next_g11n_.createStaticTerm)("agree-description", dictionary/* dictionary */.F);
    const footballTitle = (0,external_next_g11n_.createStaticTerm)("football-title", dictionary/* dictionary */.F);
    const footballDescription = (0,external_next_g11n_.createStaticTerm)("football-description", dictionary/* dictionary */.F);
    const aboutSectionKeys = {
        inside,
        connectTitle,
        connectDescription,
        manageTitle,
        manageDescription,
        showTitle,
        showDescription,
        eventsTitle,
        eventDescription,
        agreeTitle,
        agreeDescription,
        footballTitle,
        footballDescription
    };
    // features section
    const data = (0,external_next_g11n_.createStaticTerm)("data", dictionary/* dictionary */.F);
    const dataDescription = (0,external_next_g11n_.createStaticTerm)("data-description", dictionary/* dictionary */.F);
    const definition = (0,external_next_g11n_.createStaticTerm)("definition", dictionary/* dictionary */.F);
    const definitionDescription = (0,external_next_g11n_.createStaticTerm)("definition-description", dictionary/* dictionary */.F);
    const broadcasts = (0,external_next_g11n_.createStaticTerm)("broadcasts", dictionary/* dictionary */.F);
    const upload = (0,external_next_g11n_.createStaticTerm)("upload", dictionary/* dictionary */.F);
    const stats = (0,external_next_g11n_.createStaticTerm)("stats", dictionary/* dictionary */.F);
    const featuresSectionKeys = {
        data,
        dataDescription,
        definition,
        definitionDescription,
        broadcasts,
        upload,
        stats
    };
    // reviews section
    const results = (0,external_next_g11n_.createStaticTerm)("results", dictionary/* dictionary */.F);
    const resultsDescription = (0,external_next_g11n_.createStaticTerm)("results-description", dictionary/* dictionary */.F);
    const mobileUsers = (0,external_next_g11n_.createStaticTerm)("mobile-users", dictionary/* dictionary */.F);
    const dallyViews = (0,external_next_g11n_.createStaticTerm)("dally", dictionary/* dictionary */.F);
    const annualGrow = (0,external_next_g11n_.createStaticTerm)("annual-grow", dictionary/* dictionary */.F);
    const monthlyReturns = (0,external_next_g11n_.createStaticTerm)("monthly-returns", dictionary/* dictionary */.F);
    const reviewTitle = (0,external_next_g11n_.createStaticTerm)("reviewTitle", dictionary/* dictionary */.F);
    const reviewDescription = (0,external_next_g11n_.createStaticTerm)("review-description", dictionary/* dictionary */.F);
    const review1 = (0,external_next_g11n_.createStaticTerm)("review-1", dictionary/* dictionary */.F);
    const review2 = (0,external_next_g11n_.createStaticTerm)("review-2", dictionary/* dictionary */.F);
    const review3 = (0,external_next_g11n_.createStaticTerm)("review-3", dictionary/* dictionary */.F);
    const reviewsSectionKeys = {
        results,
        resultsDescription,
        mobileUsers,
        dallyViews,
        annualGrow,
        monthlyReturns,
        reviewTitle,
        reviewDescription,
        review1,
        review2,
        review3
    };
    // pricing section
    const pricingTitle = (0,external_next_g11n_.createStaticTerm)("pricing-title", dictionary/* dictionary */.F);
    const pricingDescription = (0,external_next_g11n_.createStaticTerm)("pricing-description", dictionary/* dictionary */.F);
    const pricingBasic = (0,external_next_g11n_.createStaticTerm)("pricing-basic", dictionary/* dictionary */.F);
    const pricingBasicDescription = (0,external_next_g11n_.createStaticTerm)("pricing-basic-description", dictionary/* dictionary */.F);
    const free = (0,external_next_g11n_.createStaticTerm)("free", dictionary/* dictionary */.F);
    const pricingBasicPeriod = (0,external_next_g11n_.createStaticTerm)("pricing-basic-period", dictionary/* dictionary */.F);
    const pricingPremiumTitle = (0,external_next_g11n_.createStaticTerm)("pricing-premium-title", dictionary/* dictionary */.F);
    const pricingPremiumDescription = (0,external_next_g11n_.createStaticTerm)("pricing-premium-description", dictionary/* dictionary */.F);
    const pricingPremiumPeriod = (0,external_next_g11n_.createStaticTerm)("pricing-premium-period", dictionary/* dictionary */.F);
    const pricingPremium = (0,external_next_g11n_.createStaticTerm)("pricing-premium", dictionary/* dictionary */.F);
    const subscribe = (0,external_next_g11n_.createStaticTerm)("subscribe", dictionary/* dictionary */.F);
    const refund = (0,external_next_g11n_.createStaticTerm)("refund", dictionary/* dictionary */.F);
    const pricingSectionKeys = {
        pricingTitle,
        pricingDescription,
        pricingBasic,
        pricingBasicDescription,
        free,
        pricingBasicPeriod,
        pricingPremiumTitle,
        pricingPremiumDescription,
        pricingPremiumPeriod,
        pricingPremium,
        subscribe,
        refund,
        download,
        calendly: CONFIG.calendly
    };
    // FAQ section
    const faqTitle = (0,external_next_g11n_.createStaticTerm)("faq-title", dictionary/* dictionary */.F);
    const faqDescription = (0,external_next_g11n_.createStaticTerm)("faq-description", dictionary/* dictionary */.F);
    const questions = (0,external_next_g11n_.createStaticTerm)("questions", dictionary/* dictionary */.F);
    const contactUs = (0,external_next_g11n_.createStaticTerm)("contact-us", dictionary/* dictionary */.F);
    const faqQuestion1 = (0,external_next_g11n_.createStaticTerm)("faq-1", dictionary/* dictionary */.F);
    const faqAnswer1 = (0,external_next_g11n_.createStaticTerm)("faq-1-description", dictionary/* dictionary */.F);
    const faqQuestion2 = (0,external_next_g11n_.createStaticTerm)("faq-2", dictionary/* dictionary */.F);
    const faqAnswer2 = (0,external_next_g11n_.createStaticTerm)("faq-2-description", dictionary/* dictionary */.F);
    const faqQuestion3 = (0,external_next_g11n_.createStaticTerm)("faq-3", dictionary/* dictionary */.F);
    const faqAnswer3 = (0,external_next_g11n_.createStaticTerm)("faq-3-description", dictionary/* dictionary */.F);
    const faqQuestion4 = (0,external_next_g11n_.createStaticTerm)("faq-4", dictionary/* dictionary */.F);
    const faqAnswer4 = (0,external_next_g11n_.createStaticTerm)("faq-4-description", dictionary/* dictionary */.F);
    const faqSectionKeys = {
        faqTitle,
        faqDescription,
        questions,
        contactUs,
        faqQuestion1,
        faqAnswer1,
        faqQuestion2,
        faqAnswer2,
        faqQuestion3,
        faqAnswer3,
        faqQuestion4,
        faqAnswer4
    };
    // contact section
    const startTrial = (0,external_next_g11n_.createStaticTerm)("start-trial", dictionary/* dictionary */.F);
    const contactTitle = (0,external_next_g11n_.createStaticTerm)("contact-title", dictionary/* dictionary */.F);
    const email = (0,external_next_g11n_.createStaticTerm)("email", dictionary/* dictionary */.F);
    const contactSectionKeys = {
        startTrial,
        contactTitle,
        email,
        calendly: CONFIG.calendly
    };
    // footer section
    const about = (0,external_next_g11n_.createStaticTerm)("about", dictionary/* dictionary */.F);
    const contact = (0,external_next_g11n_.createStaticTerm)("contact", dictionary/* dictionary */.F);
    const terms = (0,external_next_g11n_.createStaticTerm)("terms", dictionary/* dictionary */.F);
    const privacy = (0,external_next_g11n_.createStaticTerm)("privacy", dictionary/* dictionary */.F);
    const footerSectionKeys = {
        about,
        contact,
        terms,
        privacy
    };
    return {
        props: {
            header: header,
            download: download,
            calendly: CONFIG.calendly,
            productSectionKeys: productSectionKeys,
            aboutSectionKeys: aboutSectionKeys,
            featuresSectionKeys: featuresSectionKeys,
            reviewsSectionKeys: reviewsSectionKeys,
            pricingSectionKeys: pricingSectionKeys,
            faqSectionKeys: faqSectionKeys,
            connectSectionKeys: contactSectionKeys,
            footerSectionKeys: footerSectionKeys,
            data: CONFIG.faq
        }
    };
};


/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 8904:
/***/ ((module) => {

"use strict";
module.exports = require("next-g11n");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,831,172], () => (__webpack_exec__(6144)));
module.exports = __webpack_exports__;

})();