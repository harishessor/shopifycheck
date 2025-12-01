window.__WWAI__ = window.__WWAI__ || {};
    
// Environment + Mode Config
// Use metafield-based subscription in sandbox/local
window.__WWAI__.useMockSubscription = false;

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
  "drmtlgy_zive_24jun_wwai_hero_banner_video_image_2_b4mPPU": {
    "defaults": {
      "pricingConfig": {
        "discountPercent": 0,
        "subscriptionDiscountPercent": 0,
        "defaultSubscriptionOption": null,
        "discountCodeToApply": [],
        "roundDiscount": true,
        "addOffSuffixToDiscount": false
      },
      "uxConfig": {
        "variantOptionRemovePrefix": "Every",
        "defaultPurchaseType": "onetime",
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
    "natural-laundry-stain-remover-wwai-1": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "natural-laundry-stain-remover-wwai-1",
        "defaultVariantOption1": "Unscented",
        "defaultVariantOption2": "Standard",
        "defaultVariantOption3": null,
        "allProducts": "natural-laundry-stain-remover-wwai-1",
        "allOptions": {
          "option1": "Unscented",
          "option2": "Travel | Travel (Pack of 2) | Standard | Standard (Pack of 2) | Standard & Refill | Refill | Refill (Pack of 2)",
          "option3": ""
        }
      }
    }
  },
  "product_section_puracy_gFXzY8": {
    "defaults": {
      "pricingConfig": {
        "discountPercent": 0,
        "subscriptionDiscountPercent": 0,
        "defaultSubscriptionOption": null,
        "discountCodeToApply": [],
        "roundDiscount": true,
        "addOffSuffixToDiscount": false
      },
      "uxConfig": {
        "variantOptionRemovePrefix": "Every",
        "defaultPurchaseType": "subscription",
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
    "natural-laundry-stain-remover-wwai-1": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "natural-laundry-stain-remover-wwai-1",
        "defaultVariantOption1": "Unscented",
        "defaultVariantOption2": "Travel",
        "defaultVariantOption3": null,
        "allProducts": "natural-laundry-stain-remover-wwai-1",
        "allOptions": {
          "option1": "Unscented",
          "option2": "Travel | Travel (Pack of 2) | Standard | Standard (Pack of 2) | Standard & Refill | Refill | Refill (Pack of 2)",
          "option3": ""
        }
      }
    }
  },
  "nwkw_val_zive_20fab_wwai_products_grid_1_T4jjed": {
    "defaults": {
      "pricingConfig": {
        "discountPercent": 0,
        "subscriptionDiscountPercent": 0,
        "defaultSubscriptionOption": null,
        "discountCodeToApply": [],
        "roundDiscount": true,
        "addOffSuffixToDiscount": false
      },
      "uxConfig": {
        "variantOptionRemovePrefix": "Every",
        "defaultPurchaseType": "onetime",
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
    "natural-laundry-detergent-wwai": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "natural-laundry-detergent-wwai",
        "defaultVariantOption1": "Unscented",
        "defaultVariantOption2": "Standard",
        "defaultVariantOption3": null,
        "allProducts": "natural-laundry-detergent-wwai",
        "allOptions": {
          "option1": "Unscented | Fresh Linen | Cherry Blossom",
          "option2": "Standard | Standard (Pack of 2) | Standard & Refill | Refill | Refill (Pack of 2)",
          "option3": ""
        }
      }
    },
    "laundry-stain-remover-brush": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "laundry-stain-remover-brush",
        "defaultVariantOption1": "One size",
        "defaultVariantOption2": null,
        "defaultVariantOption3": null,
        "allProducts": "laundry-stain-remover-brush",
        "allOptions": {
          "option1": "One size",
          "option2": "",
          "option3": ""
        }
      }
    }
  }
};

// Variant overrides
window.__WWAI__.WWAI_PRODUCT_VARIANT_OVERRIDES = {
  "drmtlgy_zive_24jun_wwai_hero_banner_video_image_2_b4mPPU": {
    "natural-laundry-stain-remover-wwai-1": {
      "natural-laundry-stain-remover-wwai-1": {
        "Unscented | Travel": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Travel (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Standard": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Standard (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Standard & Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Refill (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    }
  },
  "product_section_puracy_gFXzY8": {
    "natural-laundry-stain-remover-wwai-1": {
      "natural-laundry-stain-remover-wwai-1": {
        "Unscented | Travel": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Travel (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Standard": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Standard (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Standard & Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Refill (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    }
  },
  "nwkw_val_zive_20fab_wwai_products_grid_1_T4jjed": {
    "natural-laundry-detergent-wwai": {
      "natural-laundry-detergent-wwai": {
        "Unscented | Standard": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Standard (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Standard & Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Unscented | Refill (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Fresh Linen | Standard": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Fresh Linen | Standard (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Fresh Linen | Standard & Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Fresh Linen | Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Fresh Linen | Refill (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cherry Blossom | Standard": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cherry Blossom | Standard (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cherry Blossom | Standard & Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cherry Blossom | Refill": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cherry Blossom | Refill (Pack of 2)": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    },
    "laundry-stain-remover-brush": {
      "laundry-stain-remover-brush": {
        "One size": {
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