"use client";

import dynamic from "next/dynamic";

const Studio = dynamic(() => import("./studio-component"), { ssr: false });

export default function StudioPage() {
  return <Studio />;
}
