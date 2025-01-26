export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 20000,
    imageUrl:
      "https://images-cdn.welcomesoftware.com/Zz1mMTdkZjJkNjNmMmExMWVkODk1NGNlYzE3NTliYmMzMw==?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOlsiZjE3ZGYyZDYzZjJhMTFlZDg5NTRjZWMxNzU5YmJjMzMiXSwiZXhwIjoxNjgzNTkzNDU5fQ.e7f_fzmRxU82ufoVUT0j-Yn42xuZreKLuWgaDgWYEpk",
    category: "Breakfast",
  },
  {
    id: 2,
    name: "Product 2",
    price: 24000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
    category: "Snacks",
  },
  {
    id: 3,
    name: "Product 3",
    price: 22000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
    category: "Snacks",
  },
  {
    id: 4,
    name: "Product 4",
    price: 15000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
    category: "Lunch",
  },
];
