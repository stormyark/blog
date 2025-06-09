import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center w-full justify-between bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative border-b border-gray-600">
        <Link href="/" className="text-lg">
          Brand
        </Link>
        <nav className="hidden md:flex items-center space-x-10 text-sm">
          <Link href="/blog" className="">
            Blog
          </Link>
          <Link href="/home" className="">
            Home
          </Link>
          <Link href="/wiki" className="">
            Wiki
          </Link>
        </nav>
        <Link
          href="https://github.com/stormyark/blog"
          className="hidden md:flex"
        >
          Github
        </Link>
      </div>
    </header>
  );
};

export default Header;
