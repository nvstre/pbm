"use client";

import React from "react";
import { FloatingPathsBackground } from "@/components/floating-paths";

export default function FloatingPathsBackgroundExample() {
  return (
    <FloatingPathsBackground
      className="aspect-16/9 flex items-center justify-center"
      position={-1}
    >
        {/* Child component or content here */}
         <div />
    </FloatingPathsBackground>
  );
}
