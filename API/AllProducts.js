//All Teas
const URL_ALL_PRODUCTS = "https://happy-earth-tea.myshopify.com/collections/all/products.json?limit=9999"
let ALL_PRODUCTS = null;
//Search Lists
const NOT_TEA = ['books','accessories', 'teaware', 'gift card', 'gist_gift_card','teaware > matcha bowl > japanese tea bowl > chawan', 'coconut matcha latte iced','teaware > tea mug > tea cup','pu-erh made tea','teaware > tea mug > tea cup', 'tea cup carved bellflower 8.5 oz','teaware > tea pot','gifts > tea gifts >','matcha hand sifter','matcha scoop - chashaku','Matcha Whisk Holder']
    // Product Types
const GREEN_TEA_TYPES = ['green tea', 'matcha', 'yellow tea'];
const BLACK_TEA_TYPES = ['black tea','black tea > decaf','black tea > darjeeling first flush > organic black tea > first flush tea > loose leaf'];
const WHITE_TEA_TYPES = ['white tea'];
const HERBAL_TYPES = ['herbal'];
const OOLONG_TEA_TYPES = ['oolong','coconut oolong tea','oolong > chinese oolong > rock oolong > yancha'];
const PUERH_TEA_TYPES = ['puerh'];
const CHAI_TEA_TYPES = ['chai'];
    // Tags
const SortByTags = {}; // Key string : Value array
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
    return products.products;
}

function sortProducts()
{
    for( let i =0; i< ALL_PRODUCTS.length; i++)
    {
        const element = ALL_PRODUCTS[i];
        //Check product types
        if(!element.product_type)
        {// use the name instead
            element.product_type = element.title;
        }
        const lower_product_type = element.product_type.toLowerCase();
        //Sort teas
        if(GREEN_TEA_TYPES.some(item => lower_product_type === (item)))
        {
            GREEN_TEAS.push(i);
        }
        else if(BLACK_TEA_TYPES.some(item => lower_product_type === (item)))
        {
            BLACK_TEAS.push(i);
        }
        else if(WHITE_TEA_TYPES.some(item => lower_product_type == (item)))
        {
            WHITE_TEAS.push(i);
        }
        else if ( HERBAL_TYPES.some(item => lower_product_type === (item)))
        {
            HERBAL.push(i);
        }
        else if (OOLONG_TEA_TYPES.some(item => lower_product_type === (item)))
        {
            OOLONG_TEA.push(i)
        }
        else if (PUERH_TEA_TYPES.some(item => lower_product_type === (item)))
        {
            PUERH_TEA.push(i);
        }
        else if( CHAI_TEA_TYPES.some(item => lower_product_type === (item)) )
        {
            CHAI_TEA.push(i);
        }
    }
}

function filterBodyHtmlString(bodyHtml)
{
    return bodyHtml.replace(/(<img.*">)+/g,'').replace(/(<iframe.*iframe>)+/g,'');
}

async function getRandomProduct(button)
{
    if(ALL_PRODUCTS == null)
    {
        let result = await getAllProducts();
        ALL_PRODUCTS = result.filter((e) => 
        {
            //filter
            return !(NOT_TEA.includes(e.product_type.toLowerCase())) 
            && !(NOT_TEA.includes(e.title.toLowerCase()))
        });
        ALL_PRODUCTS.forEach(item => {
            item.body_html = filterBodyHtmlString(item.body_html).trim();
        });
        sortProducts();
    }
    // Randomly select a tea
    const randomIndex = Math.floor(Math.random()*ALL_PRODUCTS.length);
    console.log(randomIndex);
    let resultObject = ALL_PRODUCTS[randomIndex];
    const resultDisplay = JSON.stringify(resultObject.title)
    + (resultObject.body_html)
    + "<div'><img width='25%' src="+JSON.stringify(resultObject.images[0].src)+"></img></div>";
    document.getElementById("tempFill").innerHTML = resultDisplay;
}