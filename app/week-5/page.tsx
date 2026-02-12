import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
      <a href="/week-5" className="text-blue-600 underline">Week 5</a>
    </main>
  );
}
