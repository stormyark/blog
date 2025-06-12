import Link from "next/link";

const Header = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-500 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
            <Link href="/kontakt" className="hover:text-white">
              Kontakt
            </Link>
          </div>

          {/* Right side copyright */}
          <div className="text-sm">
            © {currentYear} stormy. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
