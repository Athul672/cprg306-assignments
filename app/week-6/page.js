"use client";
import React from "react";
import ItemList from "./item-list";

function Page() {
  return (
    <main className="max-w-md mx-auto bg-gray-100 min-h-screen p-6 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}

export default Page;
