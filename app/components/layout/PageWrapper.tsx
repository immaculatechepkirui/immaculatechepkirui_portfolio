import { ReactNode } from "react";

export default function PageWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {children}
    </main>
  );
}