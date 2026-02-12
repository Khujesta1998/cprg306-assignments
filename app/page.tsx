import Link from "next/link";
 
export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="/week-2">Go to week 2 Page</Link>
        </li>
        <li>
          <Link href="/week-3">Go to week 3 Page</Link>
        </li>
        <li>
          <Link href="/week-4">Go to week 4 Page</Link>
        </li>
        <li>
          <Link href="/week-5">Go to week 5 Page</Link>
        </li>
      </ul>
      
    </main>
  );
}