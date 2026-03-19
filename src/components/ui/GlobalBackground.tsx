"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <HeroScene />
    </div>
  );
}
