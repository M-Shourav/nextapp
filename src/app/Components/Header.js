"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const navbar = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Catagories", href: "/catagories" },
    { title: "Favorite", href: "/favorite" },
    { title: "Cart", href: "/cart" },
    { title: "Orders", href: "/orders" },
  ];
  const pathName = usePathname();

  return (
    <header className="w-full bg-black text-gray-200">
      <div className="max-w-screen-xl mx-auto h-20 px-4 lg:px-2 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold ">
          Ecomarce
        </Link>
        <div>
          <p>Searchbar</p>
        </div>
        <div className="flex items-center gap-x-7 tracking-wide uppercase font-semibold text-sm cursor-pointer">
          {navbar?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className={`underline underline-offset-4 hover:text-orange-500 duration-200 ${
                item?.href === pathName && "text-orange-500"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
