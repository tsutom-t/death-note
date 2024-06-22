"use client";

import React, { Suspense } from "react";
import Form from "@/components/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function HomeContent() {
  const searchParams = useSearchParams();
  const targets = searchParams.get("targets")?.split(",");
  const isBlank = !targets || targets.length === 0;

  if (isBlank) {
    return <Form />;
  }

  return (
    <main className="min-h-dvh grid place-content-center">
      <Button variant="outline" asChild>
        <Link href="/">リセット</Link>
      </Button>
      <div className="[perspective:1000px] group">
        <div className="w-80 group transition duration-1000 group-hover:[transform:translateX(50%)_rotateX(40deg)] aspect-[3/4] [transform-style:preserve-3d] [transform:rotateX(40deg)] relative">
          <div className="absolute text-center pt-20 [transform-style:preserve-3d] origin-left transition duration-1000 group-hover:[transform:rotateY(-160deg)] inset-0 bg-zinc-800 text-white p-6 font-bold text-3xl">
            <div className="[transform:translateZ(1px)] absolute inset-0 bg-zinc-800"></div>
            <h1 className="[transform:translateZ(1px)]">DEATH NOTE</h1>
          </div>
          <div className="absolute w-5 bg-zinc-800 inset-y-0 left-0 origin-left [transform:rotateY(90deg)]"></div>
          <div className="bg-white p-6 border [transform-style:preserve-3d] absolute inset-y-4 left-0 right-4 [transform:translateZ(-1px)]">
            <ul>
              {targets.map((target) => (
                <li key={target}>{target}</li>
              ))}
            </ul>
            <div className="w-full h-5 [transform:rotateX(90deg)] origin-bottom bg-white border absolute bottom-0 inset-x-0"></div>
          </div>
          <div className="absolute [transform:translateZ(-20px)] inset-0 bg-zinc-800 text-white p-6 font-bold text-3xl"></div>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
