"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || name.length < 2) {
      alert("Item name must be at least 2 characters long.");
      return;
    }

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  }

  const isFormInvalid = !name || name.length < 2;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded-lg shadow"
    >
      {/* Name */}
      <div>
        <label className="block font-medium mb-1">Item Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          className={`w-full p-2 border rounded
            ${
              nameTouched && !name
                ? "border-red-500"
                : "border-gray-300"
            }`}
        />
        {nameTouched && !name && (
          <p className="text-red-500 text-sm mt-1">
            Item name is required.
          </p>
        )}
      </div>

      {/* Quantity */}
      <div>
        <label className="block font-medium mb-1">Quantity</label>
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          required
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isFormInvalid}
        className="w-full bg-blue-600 text-white py-2 rounded
          hover:bg-blue-700
          disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add Item
      </button>
    </form>
  );
}
