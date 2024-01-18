import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Link to Users</Link>
    </main>
  );
}

// const Main = styled.main`
//   background-color: grey;
//   padding: 10px;
//   & > a {
//     color: red;
//     font-size: 25px;
//   }
// `;
// const PageName = styled.h1`
//   font-size: 50px;
// `;
