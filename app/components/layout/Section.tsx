import { ReactNode } from "react";

export default function Section({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}