//All Teas

let ALL_PRODUCTS = null;
//Search Lists

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
const YELLOW_TEA = []; //Yellow.
//surmise

const TEA_CATEGORIES = {};

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
        item.tags?.includes("gifts"))
    ) {
      continue; // trim results, meaning don't add
    }

    //Sort teas
    const index_ALL_PRODUCTS = ALL_PRODUCTS.length;
    if (GREEN_TEA_TYPES.some((name) => lower_product_type === name)) {
      GREEN_TEAS.push(index_ALL_PRODUCTS);
      if (lower_product_type === YELLOW_TEA_TYPE) {
        YELLOW_TEA.push(index_ALL_PRODUCTS);
      }
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
  }
  //populate the tea categories separate from the tags
  // Keeping the original variables To make it easy to display if going into browser console.
  TEA_CATEGORIES["GREEN_TEA"] = GREEN_TEAS;
  TEA_CATEGORIES["BLACK_TEA"] = BLACK_TEAS;
  TEA_CATEGORIES["WHITE_TEA"] = WHITE_TEAS;
  TEA_CATEGORIES["HERBAL"] = HERBAL;
  TEA_CATEGORIES["OOLONG_TEA"] = OOLONG_TEA;
  TEA_CATEGORIES["PUERH_TEA"] = PUERH_TEA;
  TEA_CATEGORIES["CHAI_TEA"] = CHAI_TEA;
  TEA_CATEGORIES["YELLOW_TEA"] = YELLOW_TEA;
}
