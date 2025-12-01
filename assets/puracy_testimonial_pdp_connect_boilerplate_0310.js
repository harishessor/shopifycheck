window.__WWAI__ = window.__WWAI__ || {};
  
// Environment + Mode Config
// Use metafield-based subscription in sandbox/local
window.__WWAI__.useMockSubscription = true;

// Options: "local" | "sandbox" | "prod"
window.__WWAI__.deployMode = "prod";

// Enables dev/debugger mode, values are dev, prod
window.__WWAI__.MODE = "prod";

// Controls Liquid-product rendering
window.__WWAI__.RENDER_WITH_LIQUID = true;

// Which connector to use for hydration
window.__WWAI__.CONNECTOR_TYPE = "shopify";

// Enable logging for grid height debugging
window.__WWAI__.heightEqualizeLogging = true;

// Currency Config
// Active currency from Shopify
window.__WWAI__.CURRENCY = Shopify.currency.active;

// Currency conversion factor
window.__WWAI__.CURRENCY_FACTOR = 0.01;

// Product mapping object
window.__WWAI__.JS_PRODUCT_MAPPING_OBJECT = {};

// Product group config
window.__WWAI__.WWAI_PRODUCT_GROUP_CONFIG = {
  "puracy_testimonial_hero_banner_XWHnYi": {
    "defaults": {
      "pricingConfig": {
        "discountPercent": 0,
        "subscriptionDiscountPercent": 0,
        "defaultSubscriptionOption": null,
        "useVariantCompareAtPriceForSubscription": true,
        "discountCodeToApply": [],
        "roundDiscount": true,
        "addOffSuffixToDiscount": false
      },
      "uxConfig": {
        "variantOptionRemovePrefix": "Every",
        "defaultPurchaseType": "onetime",
        "imageCarouselConfig": {
          "useCustomImages": true
        },
        "variantUXConfig": {
          "hideSingleLengthVariants": false,
          "onlyShowVariantsWithLabelContains": null,
          "refreshUxOnVariantChange": true
        },
        "preAddToCartFlowConfig": {
          "journeyType": "overlay",
          "overlayContents": [],
          "postSelectionAction": "na",
          "postSelectionActionParams": {
            "custom_url": null,
            "redirect_variant_options": null
          }
        }
      },
      "flowConfig": {
        "destination": "checkout",
        "loader": "add-to-cart-submit-button",
        "showSuccessNotification": false,
        "showErrorNotification": false,
        "sideCartLabel": "",
        "successNotificationMessage": "✅ Added to cart!",
        "errorNotificationMessage": "Oops, couldn't add item.",
        "notificationOptions": {
          "backgroundColor": "#E8DDFA",
          "textColor": "#000000",
          "borderColor": "transparent",
          "fontFamily": "sans-serif"
        }
      }
    },
    "natural-dishwasher-detergent-packs": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "natural-dishwasher-detergent-packs",
        "defaultVariantOption1": "Unscented",
        "defaultVariantOption2": "Pack of 18",
        "defaultVariantOption3": null,
        "allProducts": "natural-dishwasher-detergent-packs",
        "allOptions": {
          "option1": "Unscented | Citrus Skies",
          "option2": "Pack of 18 | Pack of 50 | Two Packs of 50",
          "option3": ""
        }
      }
    }
  },
  "puracy_testimonial_pdp_v1_CBRjkj": {
    "defaults": {
      "pricingConfig": {
        "discountPercent": 0,
        "subscriptionDiscountPercent": 0,
        "defaultSubscriptionOption": null,
        "useVariantCompareAtPriceForSubscription": true,
        "discountCodeToApply": [],
        "roundDiscount": true,
        "addOffSuffixToDiscount": false
      },
      "uxConfig": {
        "variantOptionRemovePrefix": "Every",
        "defaultPurchaseType": "onetime",
        "imageCarouselConfig": {
          "useCustomImages": true
        },
        "variantUXConfig": {
          "hideSingleLengthVariants": false,
          "onlyShowVariantsWithLabelContains": null,
          "refreshUxOnVariantChange": true
        },
        "preAddToCartFlowConfig": {
          "journeyType": "overlay",
          "overlayContents": [],
          "postSelectionAction": "na",
          "postSelectionActionParams": {
            "custom_url": null,
            "redirect_variant_options": null
          }
        }
      },
      "flowConfig": {
        "destination": "side-cart",
        "loader": "add-to-cart-submit-button",
        "showSuccessNotification": false,
        "showErrorNotification": false,
        "sideCartLabel": "",
        "successNotificationMessage": "✅ Added to cart!",
        "errorNotificationMessage": "Oops, couldn't add item.",
        "notificationOptions": {
          "backgroundColor": "#E8DDFA",
          "textColor": "#000000",
          "borderColor": "transparent",
          "fontFamily": "sans-serif"
        }
      }
    },
    "natural-dishwasher-detergent-packs-sticky": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": {
        "destination": "checkout",
        "loader": "add-to-cart-submit-button",
        "showSuccessNotification": false,
        "showErrorNotification": false,
        "sideCartLabel": "",
        "successNotificationMessage": "✅ Added to cart!",
        "errorNotificationMessage": "Oops, couldn't add item.",
        "notificationOptions": {
          "backgroundColor": "#E8DDFA",
          "textColor": "#000000",
          "borderColor": "transparent",
          "fontFamily": "sans-serif"
        }
      },
      "variantDispatchConfig": {
        "defaultProduct": "natural-dishwasher-detergent-packs",
        "defaultVariantOption1": "Unscented",
        "defaultVariantOption2": "Pack of 18",
        "defaultVariantOption3": null,
        "allProducts": "natural-dishwasher-detergent-packs",
        "allOptions": {
          "option1": "Unscented | Citrus Skies",
          "option2": "Pack of 18 | Pack of 50 | Two Packs of 50",
          "option3": ""
        }
      }
    },
    "natural-dishwasher-detergent-packs": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": {
        "destination": "side-cart",
        "loader": "add-to-cart-submit-button",
        "showSuccessNotification": false,
        "showErrorNotification": false,
        "sideCartLabel": "rco",
        "successNotificationMessage": "✅ Added to cart!",
        "errorNotificationMessage": "Oops, couldn't add item.",
        "notificationOptions": {
          "backgroundColor": "#E8DDFA",
          "textColor": "#000000",
          "borderColor": "transparent",
          "fontFamily": "sans-serif"
        }
      },
      "variantDispatchConfig": {
        "defaultProduct": "natural-dishwasher-detergent-packs",
        "defaultVariantOption1": "Unscented",
        "defaultVariantOption2": "Pack of 18",
        "defaultVariantOption3": null,
        "allProducts": "natural-dishwasher-detergent-packs",
        "allOptions": {
          "option1": "Unscented | Citrus Skies",
          "option2": "Pack of 18 | Pack of 50 | Two Packs of 50",
          "option3": ""
        }
      }
    }
  }
};

// Variant overrides
window.__WWAI__.WWAI_PRODUCT_VARIANT_OVERRIDES = {
  "puracy_testimonial_hero_banner_XWHnYi": {
    "natural-dishwasher-detergent-packs": {
      "natural-dishwasher-detergent-packs": {
        "Unscented | Pack of 18": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Pack of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Two Packs of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Pack of 18": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Pack of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Two Packs of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    }
  },
  "puracy_testimonial_pdp_v1_CBRjkj": {
    "natural-dishwasher-detergent-packs-sticky": {
      "natural-dishwasher-detergent-packs": {
        "Unscented | Pack of 18": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Pack of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Two Packs of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Pack of 18": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Pack of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Two Packs of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    },
    "natural-dishwasher-detergent-packs": {
      "natural-dishwasher-detergent-packs": {
        "Unscented | Pack of 18": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Pack of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Two Packs of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Pack of 18": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Pack of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Citrus Skies | Two Packs of 50": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    }
  }
};

// Labeled images
window.__WWAI__.WWAI_LABELED_IMAGES = {};

// Action buttons
window.__WWAI__.ACTION_BUTTONS = {};
