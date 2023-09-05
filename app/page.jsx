'use client'
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Home() {

  //return new Error("LoL")  // error file autometicaly activet

 // notFound()   // not-found file autometicaly activet


  return (
    <main className="topDiv">
     home page

    </main>
  );
}

// Data Fetching

//1. Server Side Rendering (SSR)
//2. Static Site Generation (SSG)
//3. Incremental Static Generation (ISR)
