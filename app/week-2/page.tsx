import StudentInfo from "./student.info";
import Link from "next/link"
export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
          <Link href="/week-2">Go to Week 2</Link>
          

      <StudentInfo />
    </main>
  );
}