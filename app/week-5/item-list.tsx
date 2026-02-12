"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./item.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState<"name" | "category" | "grouped">("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category
  const groupedItems = itemsData.reduce<Record<string, typeof itemsData>>(
    (groups, item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
      return groups;
    },
    {}
  );

  return (
    <div>
      {/* Sort Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-rose-300 text-black" : "bg-stone-700"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-rose-300 text-black" : "bg-stone-700"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("grouped")}
          className={`px-3 py-1 rounded ${
            sortBy === "grouped" ? "bg-rose-300 text-black" : "bg-stone-700"
          }`}
        >
          Group by Category
        </button>
      </div>



      {/* Render Items */}
      {sortBy !== "grouped" && (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}

      {/* Grouped View */}
      {sortBy === "grouped" &&
        Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <div key={category} className="mb-4">
              <h2 className="font-bold capitalize">{category}</h2>
              <ul className="ml-4 space-y-1">
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
              </ul>
            </div>
          ))}
    </div>
  );
}
