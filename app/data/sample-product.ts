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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis cursus faucibus. Pellentesque purus sem, volutpat at dapibus sed, malesuada viverra ipsum. Vivamus sit amet rutrum est. Donec egestas tempus mi sed iaculis. Maecenas porta, nibh vitae sagittis imperdiet, sem mauris cursus risus, in maximus augue ligula vel purus. Nam vulputate consectetur pellentesque. Vivamus sagittis eleifend nunc nec dignissim. Vestibulum tristique est sem, non ultrices dui pharetra eget. Phasellus nec tortor neque. Mauris pulvinar ligula a posuere pretium. Nulla laoreet eros tortor, ac mattis enim condimentum volutpat. Duis quis urna et sem cursus tempus id at turpis.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 24000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
    category: "Snacks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis cursus faucibus. Pellentesque purus sem, volutpat at dapibus sed, malesuada viverra ipsum. Vivamus sit amet rutrum est. Donec egestas tempus mi sed iaculis. Maecenas porta, nibh vitae sagittis imperdiet, sem mauris cursus risus, in maximus augue ligula vel purus. Nam vulputate consectetur pellentesque. Vivamus sagittis eleifend nunc nec dignissim. Vestibulum tristique est sem, non ultrices dui pharetra eget. Phasellus nec tortor neque. Mauris pulvinar ligula a posuere pretium. Nulla laoreet eros tortor, ac mattis enim condimentum volutpat. Duis quis urna et sem cursus tempus id at turpis.",
  },
  {
    id: 3,
    name: "Product 3",
    price: 22000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
    category: "Snacks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis cursus faucibus. Pellentesque purus sem, volutpat at dapibus sed, malesuada viverra ipsum. Vivamus sit amet rutrum est. Donec egestas tempus mi sed iaculis. Maecenas porta, nibh vitae sagittis imperdiet, sem mauris cursus risus, in maximus augue ligula vel purus. Nam vulputate consectetur pellentesque. Vivamus sagittis eleifend nunc nec dignissim. Vestibulum tristique est sem, non ultrices dui pharetra eget. Phasellus nec tortor neque. Mauris pulvinar ligula a posuere pretium. Nulla laoreet eros tortor, ac mattis enim condimentum volutpat. Duis quis urna et sem cursus tempus id at turpis.",
  },
  {
    id: 4,
    name: "Product 4",
    price: 15000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
    category: "Lunch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis cursus faucibus. Pellentesque purus sem, volutpat at dapibus sed, malesuada viverra ipsum. Vivamus sit amet rutrum est. Donec egestas tempus mi sed iaculis. Maecenas porta, nibh vitae sagittis imperdiet, sem mauris cursus risus, in maximus augue ligula vel purus. Nam vulputate consectetur pellentesque. Vivamus sagittis eleifend nunc nec dignissim. Vestibulum tristique est sem, non ultrices dui pharetra eget. Phasellus nec tortor neque. Mauris pulvinar ligula a posuere pretium. Nulla laoreet eros tortor, ac mattis enim condimentum volutpat. Duis quis urna et sem cursus tempus id at turpis.",
  },
];
