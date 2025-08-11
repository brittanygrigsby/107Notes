const products = [
  {
    _id: 1, //the id most be UNIQUE
    title: "Headphone",
    price: 60.0,
    image: "headphones.webp",
    category: "Electronics",
  },
  {
    _id: 2, //the id most be UNIQUE
    title: "Mouse",
    price: 60.0,
    image: "mouse.webp",
    category: "Electronics",
  },
  {
    _id: 3, //the id most be UNIQUE
    title: "Keyboard",
    price: 60.0,
    image: "Keyboard.webp",
    category: "Electronics",
  },
  {
    _id: 4, //the id most be UNIQUE
    title: "Camera",
    price: 60.0,
    image: "https://picsum.photos/300/200?random=4",
    category: "Electronics",
  },
  {
    _id: 5, //the id most be UNIQUE
    title: "Mic",
    price: 60.0,
    image: "https://picsum.photos/300/200?random=5",
    category: "Electronics",
  },
];

class DataService {
  //get all products
  static getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  }
 
 
}
export default DataService