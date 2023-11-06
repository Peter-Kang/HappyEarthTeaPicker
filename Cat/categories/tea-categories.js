function GetInnerHtmlOfCategories(categoryName)
{
    let results = "";
    if(categoryName === "ALL")
    {
        ALL_PRODUCTS.forEach(tea => {
            results+=(tea.title);
        });
    }
    else if (categoryName in TEA_CATEGORIES)
    {
        TEA_CATEGORIES[categoryName].forEach(index => 
        {
            results.push(`${ALL_PRODUCTS[index].title}`);
        });
    }
    else if (categoryName in TEA_TAGS)
    {
        TEA_TAGS[categoryName].forEach(index => 
            {
                results.push(`${ALL_PRODUCTS[index].title}`);
            });
    }
    return results;
}