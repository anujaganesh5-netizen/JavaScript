const Products = [
    {
        id: 'S01',
        name: 'ErgoChair Pro',
        category: 'Furniture',
        price: 299,
        stock: 12,
        rating: 4.8,
        tags: ['office', 'ergonomic']
    },
    {
        id: 'E05',
        name: 'UltraWide Monitor',
        category: 'Electronics',
        price: 450,
        stock: 5,
        rating: 4.5,
        tags: ['tech', 'gaming', 'work']
    },
    {
        id: 'K12',
        name: 'AirFryer 3000',
        category: 'Kitchen',
        price: 120,
        stock: 0,
        rating: 4.2,
        tags: ['home', 'cooking']
    },
    {
        id: 'E09',
        name: 'Noise-Canceling Buds',
        category: 'Electronics',
        price: 199,
        stock: 25,
        rating: 4.7,
        tags: ['tech', 'music', 'travel']
    },
    {
        id: 'S15',
        name: 'Standing Desk',
        category: 'Furniture',
        price: 550,
        stock: 8,
        rating: 4.9,
        tags: ['office', 'work']
    },
    {
        id: 'K02',
        name: 'Espresso Machine',
        category: 'Kitchen',
        price: 850,
        stock: 3,
        rating: 4.6,
        tags: ['home', 'coffee']
    },
    {
        id: 'E11',
        name: 'USB-C Hub',
        category: 'Electronics',
        price: 45,
        stock: 50,
        rating: 4.0,
        tags: ['tech', 'accessory']
    }
];

// Check the below questions and implement the logic:

// - Create an array of products that have a stock of 0 (for the warehouse team).
const outofstock = Products.filter(product => product.stock == 0);
console.log(outofstock);

// - Find all products in the "Furniture" category that are priced above $300.
const carfurniture=Products.filter(product =>product.category== "Furniture" && product.price > 300);
console.log(carfurniture);

// - Create an array of strings that only contains the product names and their prices formatted as: `ErgoChair Pro` - `$299`.
const pro=Products.filter(product => product.name =="ErgoChair Pro" && product.price == 299);
console.log(pro);

// - Create an array containing only the tags array for each product, but convert all tags to UPPERCASE.
const upper=Products.map(product => product.tags.map(tag => tag.toUpperCase()));
console.log(upper);

// - Calculate the total dollar value of the entire warehouse `(sum of price * stock for all items)`
const total=Products.reduce((total,product) => total+product.price*product.stock,0);
console.log(total);

// - Filter for products that include the tag "work".
const work=Products.filter(product => product.tags.includes('work'));
console.log(work);

// - Reduce the result to find the Average Price of these specific "work" items.
const avg=work.reduce((sum, product) => sum + product.price, 0) /work.length;
console.log(avg);
