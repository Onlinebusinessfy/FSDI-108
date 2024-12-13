import axios from "axios";

var catalog=[
    {
        "title":"Strawberry",
        "category":"Fruit",
        "price":15.93,
        "image":"https://www.pngplay.com/wp-content/uploads/1/Single-Strawberry-PNG-Photos.png",
        "_id":"2947"
    },
    {
        "title":"Cabagge",
        "category":"Fruit",
        "price":9.37,
        "image":"/images/Cabbage.jpg",
        "_id":"94787"
    },
    {
        "title": "Apple",
        "category": "Fruit",
        "price": 10.49,
        "image": "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png",
        "_id": "12345"
    },
    {
        "title": "Cucumber",
        "category": "Vegetable",
        "price": 5.99,
        "image": "https://purepng.com/public/uploads/large/purepng.com-cucumbercucumberfoodvegetablegreen-cucumber-17015272508067ypbj.png",
        "_id": "67890"
    },
    {
        "title": "Banana",
        "category": "Fruit",
        "price": 3.75,
        "image": "https://parspng.com/wp-content/uploads/2023/02/bananapng.parspng.com_.png",
        "_id": "11223"
    },
    {
        "title": "Avocado",
        "category": "Fruit",
        "price": 8.89,
        "image": "https://png.pngtree.com/png-vector/20230930/ourmid/pngtree-avocado-png-avocado-fruit-ai-generated-png-image_10153887.png",
        "_id": "44556"
    },
    {
        "title": "Orange",
        "category": "Fruit",
        "price": 4.99,
        "image": "https://pngimg.com/d/orange_PNG791.png",
        "_id": "99001"
    },
    {
        "title": "Tomato",
        "category": "Vegetable",
        "price": 3.99,
        "image": "https://pngimg.com/d/tomato_PNG12596.png",
        "_id": "55667"
    },
    {
        "title": "Pineapple",
        "category": "Fruit",
        "price": 7.99,
        "image": "https://static.vecteezy.com/system/resources/thumbnails/045/360/029/small_2x/healthy-pineapple-slice-fruit-isolated-on-a-transparent-background-png.png",
        "_id": "33445"
    },
    {
        "title": "Watermelon",
        "category": "Fruit",
        "price": 4.99,
        "image": "https://static.vecteezy.com/system/resources/previews/029/200/216/non_2x/watermelon-transparent-background-free-png.png",
        "_id": "55678"
    }
];

var categories=['Fruit', 'Vegetable'];

class DataService{
    async getProducts(){
        // todo: call the server to retrieve products
        let response= await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
        // hardcore values
        // return catalog;
    }

    getCategories(){
        //todo: call the server

        // hardcoded values
        return categories;
    }

    async saveProduct(product){
        let response=await axios.post("http://127.0.0.1:5000/api/catalog", product)
        return response.data;
    }

    async saveCoupon(coupon){
        let response = await axios.post("http://127.0.0.1:5000/api/coupons", coupon)
        return response.data;
    }

    async getCoupons(){
        let response = await axios.get("http://127.0.0.1:5000/api/coupons");
        return response.data;
    }
}

export default new DataService;