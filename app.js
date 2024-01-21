import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./logo.png";

/**
 * *Header
 *    -logo
 *    -nav Item
 *
 * * Body
 *   - Search
 *   - Restaurant Container
 *        - Restro Card
 *
 * * Footer
 *   - Copyright
 *   - links
 *   - Address
 *   - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="data:image/png;base64,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" />
          
      </div>
      <h1 className="company-Name">Food Shala</h1>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantList = [
  {
    info: {
      id: "79466",
      name: "Domino's Pizza",
      cloudinaryImageId: "zkrfls066ckkem8kqc51",
      locality: "Katha",
      areaName: "Whitefield",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-katha-whitefield-bangalore-79466",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23686",
      name: "McDonald's",
      cloudinaryImageId: "405645b3118d83e89db4c65361e43733",
      locality: "Forum Neighbourhood Mall",
      areaName: "Whitefield",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 02:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-forum-neighbourhood-mall-whitefield-bangalore-23686",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17303",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Thubarahalli",
      areaName: "Marathahalli",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-thubarahalli-marathahalli-bangalore-17303",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "48206",
      name: "Kanti Sweets",
      cloudinaryImageId: "sudjbor3ofi1tvlb3yue",
      locality: "AECS Layout",
      areaName: "Itpl Road",
      costForTwo: "₹150 for two",
      cuisines: ["Sweets"],
      avgRating: 4.5,
      veg: true,
      parentId: "4700",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kanti-sweets-aecs-layout-itpl-road-bangalore-48206",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "398804",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Hagadur Main Rd",
      areaName: "Whitefield",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-hagadur-main-rd-whitefield-bangalore-398804",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17733",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "HAGDUR ROAD",
      areaName: "Whitefield",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "21809",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-hagdur-road-whitefield-bangalore-17733",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "65769",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "ITPL Main Road",
      areaName: "Whitefield",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-itpl-main-road-whitefield-bangalore-65769",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "22039",
      name: "Wow! Momo",
      cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
      locality: "Whitefield",
      areaName: "Whitefield",
      costForTwo: "₹250 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "1776",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-whitefield-bangalore-22039",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "1530",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "ogivavhnvivnw1hv9nty",
      locality: "Pattandur Agrahara Village",
      areaName: "Whitefield",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.3,
      veg: true,
      parentId: "22",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-pattandur-agrahara-village-whitefield-bangalore-1530",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "103789",
      name: "Starbucks Coffee",
      cloudinaryImageId: "182191ab163770437b62861a6f987709",
      locality: "Ramagondanahalli",
      areaName: "Whitefield",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.4,
      parentId: "195515",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-ramagondanahalli-whitefield-bangalore-103789",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "156438",
      name: "The Good Bowl",
      cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
      locality: "SJR I Park KIADB Export Promotion Industrial Area",
      areaName: "Whitefield",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "7918",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-sjr-i-park-kiadb-export-promotion-industrial-area-whitefield-bangalore-156438",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "457828",
      name: "Istah - The Mediterranean Way",
      cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
      locality: "1st Phase",
      areaName: "Whitefield",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mediterranean",
        "Snacks",
        "Biryani",
        "Grill",
        "Kebabs",
        "Arabian",
        "Lebanese",
        "Beverages",
        "Desserts",
        "Italian",
        "Turkish",
      ],
      avgRating: 4.3,
      parentId: "3518",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-1st-phase-whitefield-bangalore-457828",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "272268",
      name: "EatFit",
      cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
      locality: "Varthur Main Road",
      areaName: "Whitefield",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 4.2,
      parentId: "76139",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/eatfit-varthur-main-road-whitefield-bangalore-272268",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "1327",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Varthur Main Road",
      areaName: "Whitefield",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.4,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
            shortDescription: "Perfect Cake Delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "D",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                  shortDescription: "Perfect Cake Delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-varthur-main-road-whitefield-bangalore-1327",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "38057",
      name: "Firangi Bake",
      cloudinaryImageId: "skxofhvftno4lio6pr8u",
      locality: "HAGDUR  ROAD",
      areaName: "Whitefield",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Mexican",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "3952",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/firangi-bake-hagdur-road-whitefield-bangalore-38057",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "35843",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "81cf6bfe2760a45a0caf2e28716ca4d7",
      locality: "HAGDUR  ROAD",
      areaName: "Whitefield",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4444",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-hagdur-road-whitefield-bangalore-35843",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "98396",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "wwbit3fguffacvlxzv2f",
      locality: "Virginia Mall",
      areaName: "Mahadevapura",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 3.8,
      parentId: "10804",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-virginia-mall-mahadevapura-bangalore-98396",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "246773",
      name: "Mad Over Donuts",
      cloudinaryImageId: "b15d7f2733cb9445a0123ee0174edd2a",
      locality: "Forum Neighborhood Mall",
      areaName: "Nexus Whitefiled",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Sweets", "Bakery"],
      avgRating: 4.3,
      veg: true,
      parentId: "611",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mad-over-donuts-forum-neighborhood-mall-nexus-whitefiled-bangalore-246773",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "424981",
      name: "Biryani Blues",
      cloudinaryImageId: "49028ad4dc2a8183bbedae4504f49b75",
      locality: "Nallurahalli",
      areaName: "Whitefield",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Hyderabadi", "Lucknowi", "Kebabs"],
      avgRating: 4,
      parentId: "13813",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-21 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biryani-blues-nallurahalli-whitefield-bangalore-424981",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "1313",
      name: "Rolls On Wheels - Shawarma & Wraps",
      cloudinaryImageId: "6ac93749effe35d1ead78d4be0b21972",
      locality: "Whitefield",
      areaName: "Whitefield",
      costForTwo: "₹300 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "Bengali",
        "Kebabs",
        "Beverages",
        "Healthy Food",
        "Chinese",
      ],
      avgRating: 4.1,
      parentId: "784",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-20 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rolls-on-wheels-shawarma-and-wraps-whitefield-bangalore-1313",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla,costForTwo } =
    resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{sla.deliveryTime} minute</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {RestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="copyright">
      <h3>@ Copyright Restristricted</h3>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
