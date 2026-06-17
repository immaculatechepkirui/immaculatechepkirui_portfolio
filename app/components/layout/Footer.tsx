export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">
      <p>© {new Date().getFullYear()} Immaculate Chepkirui</p>
      <p className="mt-2">Software Engineer • AI • Product Builder</p>
    </footer>
  );
}