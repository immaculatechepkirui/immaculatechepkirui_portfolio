"use client";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px] animate-pulse" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
    </div>
  );
}