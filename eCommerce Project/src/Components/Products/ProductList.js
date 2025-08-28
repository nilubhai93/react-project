import Jeans from '../../assets/Jeans.png'
import Hoodie from '../../assets/hoodie.png'
import LeatherJacket from '../../assets/leather-jacket.png'
import Skirt from '../../assets/skirt.png'
import TShirt from '../../assets/tshirt.png'
import Sleepsuit from '../../assets/sleepsuit.png'
import Shirt from '../../assets/shirt.png'
import Dress from '../../assets/dress.png'
import Skater from '../../assets/skater.png'
import Sweater from '../../assets/sweater.png'
import BabyShirt from '../../assets/baby-shirt.png'
import ShirtDress from '../../assets/shirt-dress.png'


const products = [
    {
        id: 1,
        name: "Sports TShirt",
        image: TShirt,
        price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        newArrival: false,
        category: "Mens",
    },
    {
        id: 2,
        name: "Casual Jeans",
        image: Jeans,
        price: 45.00,
        oldPrice: 60.00,
        category: "Mens",
    },
    {
        id: 3,
        name: "Winter Hoodie",
        image: Hoodie,
        price: 30.00,
        oldPrice: 50.00,
        onSale: false,
        newArrival: true,
        category: "Mens",
    },
    {
        id: 4,
        name: "Leather Jacket",
        image: LeatherJacket,
        price: 120.00,
        oldPrice: 150.00,
        onSale: true,
        newArrival: false,
        category: "Mens",
    },
    {
        id: 5,
        name: "Stylish Skirt",
        image: Skirt,
        price: 20.00,
        oldPrice: 35.00,
        newArrival: true,
        category: "Womens",
    },
    {
        id: 6,
        name: "Baby Sleepsuit",
        image: Sleepsuit,
        price: 15.00,
        oldPrice: 25.00,
        category: "Kids",
    },
    {
        id: 7,
        name: "Formal Shirt",
        image: Shirt,
        price: 40.00,
        oldPrice: 55.00,
        onSale: true,
        newArrival: false,
        category: "Mens",
    },
    {
        id: 8,
        name: "Stripes Sweater",
        image: Sweater,
        price: 65.00,
        oldPrice: 85.00,
        onSale: true,
        newArrival: false,
        category: "Kids",
    },
    {
        id: 9,
        name: "Party Dress",
        image: Dress,
        price: 70.00,
        oldPrice: 90.00,
        newArrival: true,
        category: "Womens",
    },
    {
        id: 10,
        name: "Skater Outfit",
        image: Skater,
        price: 35.00,
        oldPrice: 50.00,
        onSale: true,
        newArrival: false,
        category: "Mens",
    },
    {
        id: 11,
        name: "Baby Shirt",
        image: BabyShirt,
        price: 12.00,
        oldPrice: 20.00,
        newArrival: true,
        category: "Kids",
    },
    {
        id: 12,
        name: "Full Sleeve Shirt",
        image: ShirtDress,
        price: 10.00,
        oldPrice: 18.00,
        onSale: true,
        category: "Womens",
    },
];

export default  products
