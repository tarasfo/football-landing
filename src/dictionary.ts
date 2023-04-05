export const dictionary = {
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
    download: "Завантажити",
  },
};

export type Locales = keyof typeof dictionary
export type Keys = keyof typeof dictionary[Locales]