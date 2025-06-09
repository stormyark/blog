import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center w-full justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="text-lg font-semibold">Brand</div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/home" className="">
          Home
        </Link>
        <Link href="/blog" className="">
          Blog
        </Link>
        <Link href="/wiki" className="">
          Wiki
        </Link>
      </nav>
      <Button>Contact</Button>
    </header>
  );
};

export default Header;
