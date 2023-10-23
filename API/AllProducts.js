//All Teas
const URL_ALL_PRODUCTS = "https://happy-earth-tea.myshopify.com/collections/all/products.json?limit=9999"
let ALL_PRODUCTS = null;
//Commonly Filtered
const GREEN_TEAS = [];  // product_type = Green Tea | Matcha | Yellow Tea
const BLACK_TEAS = [];  // Black Tea | Black Tea > Decaf
const WHITE_TEAS = [];  // White Tea
const HERBAL = [];      //Herbal
const OOLONG_TEA = [];  //Oolong | Oolong Tea | Oolong > Chinese Oolong > Rock Oolong > Yancha
const PUERH_TEA = [];   //Puerh
const CHAI_TEA = [];    //Chai

//Functions
async function getAllProducts()
{
    //Get the products
    const response = await fetch(URL_ALL_PRODUCTS);
    const products = await response.json();
    //return the value
    return products;
}

function sortProducts()
{
    ALL_PRODUCTS.array.forEach(element => {
        if(!element.product_type){return;}
        
    });
}

async function getRandomProduct(button)
{
    if(ALL_PRODUCTS == null)
    {
        ALL_PRODUCTS = await getAllProducts();
        sortProducts();
    }
    
}