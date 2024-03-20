import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "About-Me", href: "/About-Me", current: false },
  { name: "Projects", href: "/Projects", current: false },
  { name: "Contact-Me", href: "/Contact-me", current: false },
];
export default function Header() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="h-16  w-full flex items-center justify-evenly animate-slidein">
              {navigation.map((item) => (
                <Link
                  to={item.href}
                  className="text-center text-base text-wrap lg:text-xl  text-black hover:text-2xl hover:text-highlight font-black"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </>
      )}
    </Disclosure>
  );
}

