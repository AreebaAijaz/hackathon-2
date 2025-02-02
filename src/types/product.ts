export interface Product{
    _id: string,
    productName : string,
    _type : "products",
    image? :{
        asset :{
            _ref : string , 
            _type : "image";
        }
    };
    price : number,
    description? : string,
    slug : {
        _type : "slug" , 
        current : string
    };
    quantity : number
}