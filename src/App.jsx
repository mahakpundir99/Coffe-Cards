import React from "react";
import Card from "./Components/Card";

function App() {
  const products = [
    {
      id: 1,
      title: "Ice Matcha",
      price: "10",
      image: "https://images.unsplash.com/photo-1749280447307-31a68eb38673?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      deliveryDate: "16/06/2026",
      tags: ["Matcha", "Ice Cubes", "Honey", "Milk"],
    },
    {
      id: 2,
      title: "Strawberry Matcha",
      price: "12",
      image: "https://www.acozykitchen.com/wp-content/uploads/2025/03/StrawberryMatchaLatte-1.jpg",
      deliveryDate: "20/06/2026",
      tags: ["Matcha", "Strawberry", "Oat Milk", "Ice"],
    },
    {
      id: 3,
      title: "Matcha Float",
      price: "14",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1lX7CWQhGzRA2HOMp9s4X4Zj59-7QExV1fhFN-tSLVQYzwwG-xrYkUs&s=10",
      deliveryDate: "24/06/2026",
      tags: ["Matcha", "Ice Cream", "Almond Milk", "Honey"],
    },
    {
      id: 4,
      title: "Iced Americano",
      price: "8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYJm2dWOUQt3NLktr0BbLkWQQh6C0VENqzPDuEW0pJ4vOmbOzlHYzz-OA&s=10",
      deliveryDate: "18/06/2026",
      tags: ["Espresso", "Water", "Ice Cubes", "Strong"],
    },
    {
      id: 5,
      title: "Iced Latte",
      price: "9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuvQqc1JrCzogmtyb2-SKc15vA5ovcARygRn06l94UUkjILHIJY3xcK2M&s=10",
      deliveryDate: "19/06/2026",
      tags: ["Espresso", "Whole Milk", "Ice", "Syrup"],
    },
    {
      id: 6,
      title: "Mango Smoothie",
      price: "11",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFo3X8r7-s_gA6BqD1MkHGIwb2JADwotlUJIfKcpZw70ejkhzsDwMHHo&s=10",
      deliveryDate: "22/06/2026",
      tags: ["Mango Puree", "Yogurt", "Honey", "Mint"],
    },
    {
      id: 7,
      title: "Berry Blast",
      price: "13",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfR0ePFg2uXHowkHbRFdbSQNaUC6XbD3DbfQ9PoBTiZjGwuANqv2e0SWvw&s=10",
      deliveryDate: "25/06/2026",
      tags: ["Blueberry", "Strawberry", "Apple Juice", "Ice"],
    },
    {
      id: 8,
      title: "Cold Brew Coffee",
      price: "10",
      image: "https://thegirlonbloor.com/wp-content/uploads/2024/04/Iced-coffee-recipe-hero-shot.jpg",
      deliveryDate: "17/06/2026",
      tags: ["Steeped Coffee", "Ice", "Black Coffee"],
    },
    {
      id: 9,
      title: "Taro Milk Tea",
      price: "11",
      image: "https://tyberrymuch.com/wp-content/uploads/2022/07/taro-milk-tea-recipe-1-735x735.jpg",
      deliveryDate: "21/06/2026",
      tags: ["Taro Root", "Milk", "Boba Pearls", "Sugar"],
    },
    {
      id: 10,
      title: "Iced Matcha Latte",
      price: "7",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOedW7MLNfT3U5ChvA_zQg-dShtNxIEFWPsFyFGBQliZbv67ObDbcjCm0W&s=10",
      deliveryDate: "15/06/2026",
      tags: ["Green Tea", "Lemon", "Ice", "Stevia"],
    },
  ];

  return (
    <div className=" min-h-screen bg-[#f4f6f2] flex items-center justify-center p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center">
        {products.map((e, idx) => {
          
          return <Card  key={idx} title= {e.title} price = {e.price} img = {e.image} deliveryDate={e.deliveryDate} tags={e.tags}/>
        })}
      </div>
    </div>
  );
}

export default App;
