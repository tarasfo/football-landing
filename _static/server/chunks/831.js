exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 5138:
/***/ ((module) => {

// Exports
module.exports = {
	"downloadButton": "Header_downloadButton__Ld4vK",
	"appBar": "Header_appBar__rgnej",
	"toolbar": "Header_toolbar__437OD",
	"title": "Header_title__ukuib",
	"buttons": "Header_buttons__fp_hQ",
	"button": "Header_button__I987w",
	"popover": "Header_popover__vH_nU"
};


/***/ }),

/***/ 6788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5138);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_g11n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8904);
/* harmony import */ var next_g11n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_g11n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);







function Header({ header , download , calendly  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const g11nLocale = (0,next_g11n__WEBPACK_IMPORTED_MODULE_4__.getLocale)(router) || "en";
    const matches = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)("(min-width:600px)");
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
        component: "nav",
        position: "fixed",
        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().appBar),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().toolbar),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                    children: "DIGITALIZE"
                }),
                matches ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttons),
                    children: [
                        header.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                onClick: ()=>router.push(`/#${item["en"]}`),
                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                children: item[g11nLocale]
                            }, item[g11nLocale])),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: calendly,
                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().downloadButton),
                            children: download[g11nLocale]
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                            "aria-controls": open ? "basic-menu" : undefined,
                            "aria-haspopup": "true",
                            "aria-expanded": open ? "true" : undefined,
                            onClick: handleClick,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiMoreVertical, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                            id: "basic-menu",
                            anchorEl: anchorEl,
                            open: open,
                            onClose: handleClose,
                            PopoverClasses: {
                                paper: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().popover)
                            },
                            children: [
                                header.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                        onClick: ()=>{
                                            router.push(`/#${item["en"]}`), handleClose();
                                        },
                                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                        children: item[g11nLocale]
                                    }, item[g11nLocale])),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        style: {
                                            backgroundColor: "#21bf73",
                                            border: "none",
                                            color: "white"
                                        },
                                        href: calendly,
                                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().downloadButton),
                                        children: download[g11nLocale]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 2162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ dictionary)
/* harmony export */ });
const dictionary = {
    en: {
        product: "Product",
        features: "Features",
        pricing: "Pricing",
        contact: "Contact",
        reviews: "Reviews",
        FAQ: "FAQ",
        about: "About",
        privacy: "Privacy",
        terms: "Terms",
        download: "Download",
        // product section
        launch: "Launch your product",
        connect: " Connect better with interactive stream.",
        "see-more": "See more",
        trial: "Free unrestricted usage for 14 days.",
        "no-credit-card": "No credit card required*",
        // about section
        inside: "What's inside",
        "connect-title": "Будьте на зв'язку зі своїми фанами",
        "connect-description": "Тримайте прямий зв'язок з вашими фанами використовуючи різні інструменти комунікації, включаючи текстові трансляції матчів, пуш-сповіщення та анкетування.",
        "manage-title": "Зручне управління контентом",
        "manage-description": "Використовуйте нашу мобільно-оптимізовану панель адміністрації для легкого та ефективного управління контентом прямо з вашого телефону. Керуйте розкладом матчів, новинами та інформацією про гравців та команду.",
        "show-title": "Висвітлюйте життя основної та молодіжної команд",
        "show-description": "Незалежно від того, скільки команд входить до вашого клубу, наш додаток надає змогу вболівати за кожну команду. Всі ваші команди можуть бути включені в один додаток.",
        "events-title": "Події в реальному часі",
        "events-description": "Отримуйте найсвіжішу інформацію прямо тоді, коли вона стає доступною. Розклади матчів, огляди матчів, прямі трансляції та детальний аналіз подій - все це відбувається в реальному часі.",
        "agree-title": "Дізнайтесь думку фанів",
        "agree-description": "Збирайте відгуки і відповіді ваших фанів, використовуючи анкети, опитування та голосування. Навчайтесь та реагуйте на побажання своєї аудиторії, щоб підвищити її задоволеність та взаємодію.",
        "football-title": "Футбол у кишені ваших фанів",
        "football-description": "Ваші фани зможуть з легкістю відстежувати всі новини, ігри та оновлення своєї улюбленої команди, завдяки нашому додатку, який забезпечує постійний зв'язок з командою.",
        // features section
        data: "Data Sharing.",
        "data-description": " When you get staright to the point the presentation looks attractive on your web pages.",
        definition: "High Definition",
        "definition-description": "When you get staright to the point the presentation looks attractive on your web pages.",
        broadcasts: "  Realtime broadcasts",
        upload: " Upload and sit tight",
        stats: "View realtime stats",
        // reviews section
        results: "OUR RESULTS",
        "results-description": "Our awesome results worth displaying",
        "mobile-users": "Mobile Users",
        dally: "Daily Views",
        "annual-grow": "Annual Growth",
        "monthly-returns": "Monthly Returns",
        reviewTitle: "Stories from our customers",
        "review-description": "When you get staright to the point the presentation looks attractive.",
        "review-1": "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. We use Connect for key for easy and seamless weekly communication with our clients and .",
        "review-2": "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. We use Connect for key for easy and seamless weekly communication with our clients and .",
        "review-3": "We use Connect for key for easy and seamless weekly communication with our clients. Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
        // pricing section
        "pricing-title": "Simple & Affordable Pricing.",
        "pricing-description": "Our plans are designed to meet the requirements of both beginners and players. Get the right plan that suits you.",
        "pricing-basic": "Basic Free",
        "pricing-basic-description": "Limited features",
        free: "Free",
        "pricing-basic-period": "One year",
        "pricing-premium-title": "Premium",
        "pricing-premium-description": "Unlimited Lifetime",
        "pricing-premium-period": "Lifetime",
        "pricing-premium": "$99.99",
        subscribe: "Subscribe",
        refund: "* Refund requests can be accepted with in 10 days of the purchase.",
        //FAQ
        "faq-title": "Frequently Asked Queries",
        "faq-description": "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
        questions: "Still have questions?",
        "contact-us": "Contact us",
        "faq-1": "What is Connect?",
        "faq-1-description": "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        "faq-2": "How much does template cost?",
        "faq-2-description": "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        "faq-3": "How can updates be downloaded?",
        "faq-3-description": "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        "faq-4": "Some other Support related queries.",
        "faq-4-description": "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        // contact section
        "start-trial": "Start your trial",
        "contact-title": "Connect is made just for you. Ready to build your next project?",
        email: "Enter email address"
    },
    ua: {
        product: "Продукт",
        features: "Особливості",
        pricing: "Ціни",
        contact: "Контакти",
        reviews: "Відгуки",
        FAQ: "FAQ",
        about: "Про нас",
        privacy: "Конфіденційність",
        terms: "Умови",
        download: "Зв'язатись",
        // product section
        launch: "Запустіть мобільний застосунок для свого футбольного клубу",
        connect: "Підключайтеся краще з інтерактивним потоком.",
        "see-more": "Дізнатись більше",
        trial: "Безкоштовне використання без обмежень протягом 14 днів.",
        "no-credit-card": "Кредитна карта не потрібна*",
        // about section
        inside: "Що в середині?",
        "connect-title": "Будьте на зв'язку зі своїми фанами",
        "connect-description": "Тримайте прямий зв'язок з вашими фанами, використовуючи різні інструменти комунікації, включаючи текстові трансляції матчів, пуш-сповіщення та анкетування.",
        "manage-title": "Зручне управління контентом",
        "manage-description": "Використовуйте нашу мобільно-оптимізовану панель адміністрації для легкого та ефективного управління контентом прямо з вашого телефону. Керуйте розкладом матчів, новинами та інформацією про гравців з комфортом.",
        "show-title": "Висвітлюйте життя основної і молодійжної команди",
        "show-description": "Незалежно від того, скільки команд входить до вашого клубу, наш додаток надає змогу вболівати за кожну команду. Всі ваші команди можуть бути включені в один додаток.",
        "events-title": "Події в реальному часі",
        "events-description": "Отримуйте найсвіжішу інформацію одразу, як вона стає доступною. Розклади матчів, огляди матчів, прямі трансляції та детальний аналіз подій - все це відбувається в реальному часі.",
        "agree-title": "Дізнайтесь думку фанів",
        "agree-description": "Збирайте відгуки і відповіді ваших фанів, використовуючи анкети, опитування та голосування. Реагуйте на побажання своєї аудиторії, щоб підвищити її задоволеність та взаємодію.",
        "football-title": "Футбол у кишені ваших фанів",
        "football-description": " Ваші фани зможуть з легкістю відстежувати всі новини, ігри та оновлення своєї улюбленої команди, завдяки нашому додатку.",
        // features section
        data: "Обмін даними.",
        "data-description": "Коли ви прямо до суті, презентація виглядає привабливо на ваших веб-сторінках.",
        definition: "Висока якість",
        "definition-description": "Коли ви прямо до суті, презентація виглядає привабливо на ваших веб-сторінках.",
        broadcasts: "Реальні трансляції",
        upload: "Завантажити та спостерігати",
        stats: "Переглянути статистику у реальному часі",
        // reviews section
        results: "Наші результати",
        "results-description": "Ми дуже задоволені нашими результатами.",
        "mobile-users": "Мобільні користувачі",
        dally: "Щоденні перегляди",
        "annual-grow": "Річний приріст",
        "monthly-returns": "Щомісячні повернення",
        reviewTitle: "Історії від наших клієнтів",
        "review-description": "Коли ви переходите безпосередньо до суті, презентація виглядає привабливо.",
        "review-1": "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. We use Connect for key for easy and seamless weekly communication with our clients and .",
        "review-2": "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. We use Connect for key for easy and seamless weekly communication with our clients and .",
        "review-3": "We use Connect for key for easy and seamless weekly communication with our clients. Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
        // pricing section
        "pricing-title": "Прості та доступні плани",
        "pricing-description": "Наші плани розроблені таким чином, щоб задовольнити вимоги як новачків, так і гравців. Оберіть правильний план, який вам підходить.",
        "pricing-basic": "Базовий Безкоштовний",
        "pricing-basic-description": "Обмеженні можливості",
        free: "Безкоштовно",
        "pricing-basic-period": "Один рік",
        "pricing-premium-title": "Преміум",
        "pricing-premium-description": "Без обмежень",
        "pricing-premium-period": "Пожиттєво",
        "pricing-premium": "$99.99",
        subscribe: "Підписатись",
        refund: "* Запити на повернення можна прийняти протягом 10 днів після покупки.",
        // FAQ section
        "faq-title": "Часті запитання",
        "faq-description": "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
        questions: "Залишилися запитання?",
        "contact-us": "Зв'яжіться з нами",
        "faq-1": "Що таке Connect?",
        "faq-1-description": "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        "faq-2": "Скільки коштує шаблон?",
        "faq-2-description": "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        "faq-3": "Як можна завантажити оновлення?",
        "faq-3-description": "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        "faq-4": "Деякі інші запити, пов’язані з підтримкою.",
        "faq-4-description": "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        // contact section
        "start-trial": "Розпочніть пробну версію",
        "contact-title": "Connect створено спеціально для вас. Готові створити свій наступний проект?",
        email: "електронна адреса"
    }
};


/***/ })

};
;