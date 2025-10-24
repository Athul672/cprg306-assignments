"use client";
import NewItem from "./new-item";
import React, {useState} from "react";
import ItemList from "./item-list";
import itemsData from "./item.json";

function Page() {

  const[items, setItems]= useState(itemsData);
  const addItem= (newItem) =>{
    setItems((previousItems) => [...previousItems, newItem]);

  }
    
  return (
    <main className="max-w-md mx-auto bg-gray-100 min-h-screen p-6 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Shopping List
      </h1>
      <NewItem onAddItem={addItem}/>
      <ItemList items = {items}/>
    </main>
  );
}

export default Page;
