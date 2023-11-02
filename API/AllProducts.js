//All Teas
const URL_ALL_PRODUCTS =
  "https://happy-earth-tea.myshopify.com/collections/all/products.json?limit=9999";
let ALL_PRODUCTS = null;
//Search Lists
const NOT_TEA = [
  "books",
  "accessories",
  "teaware",
  "gift card",
  "gist_gift_card",
  "teaware > matcha bowl > japanese tea bowl > chawan",
  "coconut matcha latte iced",
  "teaware > tea mug > tea cup",
  "pu-erh made tea",
  "teaware > tea mug > tea cup",
  "tea cup carved bellflower 8.5 oz",
  "teaware > tea pot",
  "gifts > tea gifts >",
  "matcha hand sifter",
  "matcha scoop - chashaku",
  "matcha whisk holder",
  "matcha whisk",
  "15-piece tin tea set - assorted styles available",
  "winter spice tin",
  "roch-cha chai tin",
];
// Product Types
const GREEN_TEA_TYPES = ["green tea", "matcha", "yellow tea"];
const BLACK_TEA_TYPES = [
  "black tea",
  "black tea > decaf",
  "black tea > darjeeling first flush > organic black tea > first flush tea > loose leaf",
];
const WHITE_TEA_TYPES = ["white tea"];
const HERBAL_TYPES = ["herbal"];
const OOLONG_TEA_TYPES = [
  "oolong",
  "coconut oolong tea",
  "oolong > chinese oolong > rock oolong > yancha",
];
const PUERH_TEA_TYPES = ["puerh"];
const CHAI_TEA_TYPES = ["chai"];
// Tags
const TEA_TAGS = {}; // Key string : Value array
//Commonly Filtered
const GREEN_TEAS = []; // product_type = Green Tea | Matcha | Yellow Tea
const BLACK_TEAS = []; // Black Tea | Black Tea > Decaf
const WHITE_TEAS = []; // White Tea
const HERBAL = []; //Herbal
const OOLONG_TEA = []; //Oolong | Oolong Tea | Oolong > Chinese Oolong > Rock Oolong > Yancha
const PUERH_TEA = []; //Puerh
const CHAI_TEA = []; //Chai
//surmise
const TEA_CATEGORIES = {};

//Functions
async function getAllProducts() {
  //Get the products
  const response = await fetch(URL_ALL_PRODUCTS);
  const products = await response.json();
  //return the value
  return products.products;
}

//ToDo Combine with main filter
function sortProducts(rawResults) {
  ALL_PRODUCTS = [];
  for (let i = 0; i < rawResults.length; i++) {
    const item = rawResults[i];
    //Check product types
    if (!item.product_type) {
      // use the name instead
      item.product_type = item.title;
    }
    //Sort product types
    const lower_product_type = item.product_type.toLowerCase();
    if (
      (lower_product_type === "matcha" || lower_product_type === "chai") &&
        (NOT_TEA.includes(lower_product_type) ||
      NOT_TEA.includes(item.title.toLowerCase()) ||
      (item.tags?.includes("gifts"))
      )
      ) {
      continue; // trim results, meaning don't add
    }

    //Sort teas
    const index_ALL_PRODUCTS = ALL_PRODUCTS.length;
    if (GREEN_TEA_TYPES.some((name) => lower_product_type === name)) {
      GREEN_TEAS.push(index_ALL_PRODUCTS);
    } else if (BLACK_TEA_TYPES.some((name) => lower_product_type === name)) {
      BLACK_TEAS.push(index_ALL_PRODUCTS);
    } else if (WHITE_TEA_TYPES.some((name) => lower_product_type === name)) {
      WHITE_TEAS.push(index_ALL_PRODUCTS);
    } else if (HERBAL_TYPES.some((name) => lower_product_type === name)) {
      HERBAL.push(index_ALL_PRODUCTS);
    } else if (OOLONG_TEA_TYPES.some((name) => lower_product_type === name)) {
      OOLONG_TEA.push(index_ALL_PRODUCTS);
    } else if (PUERH_TEA_TYPES.some((name) => lower_product_type === name)) {
      PUERH_TEA.push(index_ALL_PRODUCTS);
    } else if (CHAI_TEA_TYPES.some((name) => lower_product_type === name)) {
      CHAI_TEA.push(index_ALL_PRODUCTS);
    } else {
      continue; //meaning don't add
    }
    ALL_PRODUCTS.push(item);
    //tags
    item.tags.forEach((tag) => {
      if (tag in TEA_TAGS) {
        TEA_TAGS[tag].push(index_ALL_PRODUCTS);
      } else {
        TEA_TAGS[tag] = [index_ALL_PRODUCTS];
      }
    });
  }
  //populate the tea categories separate from the tags
  // Keeping the orginal variables To make it easy to display if going into browser console.
  TEA_CATEGORIES["GREEN_TEAS"]  = GREEN_TEAS;
  TEA_CATEGORIES["BLACK_TEAS"]  = BLACK_TEAS;
  TEA_CATEGORIES["WHITE_TEAS"]  = WHITE_TEAS;
  TEA_CATEGORIES["HERBAL"]      = HERBAL;
  TEA_CATEGORIES["OOLONG"]      = OOLONG_TEA;
  TEA_CATEGORIES["PUERH_TEA"]   = PUERH_TEA;
  TEA_CATEGORIES["CHAI_TEA"]    = CHAI_TEA;
}

async function initialize() {
  if (ALL_PRODUCTS == null) {
    const result = await getAllProducts();
    sortProducts(result);
  }
}
