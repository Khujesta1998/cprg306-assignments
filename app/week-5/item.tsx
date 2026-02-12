interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="border p-2 rounded">
      <span className="font-semibold">{name}</span> — {quantity}
      <span className="ml-2 text-sm text-gray-500 capitalize">
        ({category})
      </span>
    </li>
  );
}
