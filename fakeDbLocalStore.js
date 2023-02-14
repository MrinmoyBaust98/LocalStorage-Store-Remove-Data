
//Data Add To localStorage 
const addToDataBase=id=>{

    const exist= localStorage.getItem('shopping_cart');

    // Declare Shopping-Cart As a Empty Object
    let shopping_cart={};

    //Then Cheek Exist or not...

    if(!exist){
        // if not available in store , then delcare it's property as [id] and it's value 1
        shopping_cart[id]=1;
    }
    else{
        // storage returns item result as 'string'.So we converted it
        shopping_cart=JSON.parse(exist);
        // if (id) exits in shopping cart.....> then,, increase it;s value for per click to add data.
        if(shopping_cart[id]){
            const newCount=shopping_cart[id]+1;
            shopping_cart[id]=newCount;
        }
        // if (id) not available in shopping cart....> then,, set as value=1
        else{
            shopping_cart[id]=1;
        }
    }
    // finally set localStorage value ...>> as we convert it before ,so we make stringify it and set the value.
    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart));
}



// without comment  remove Item From Database:

const removeFromDataBase=id=>{

    const exist= localStorage.getItem('shopping_cart');
    let shopping_cart={};
    if(!exist){
        return;
    }
    else{ 
        shopping_cart=JSON.parse(exist);
        delete shopping_cart[id];
        localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart));
    }
    
}

