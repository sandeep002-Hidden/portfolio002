import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Dashboard", href: "/portfolio", current: true },
  { name: "About-Me", href: "/portfolio/About-Me", current: false },
  { name: "Projects", href: "/portfolio/Projects", current: false },
  { name: "Contact-Me", href: "/portfolio/Connect-me", current: false },
];
export default function Header() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-serif">
            <div className="relative h-16 flex items-center justify-between">
              <div className="animate-on-load flex flex-1 items-center justify-center animate-slidein ">
                <div className="w-1/2 space-x-4 hover:text-xl">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-center rounded-md px-3 py-2 text-xl flex-col align-center justify-around text-black hover:text-2xl hover:text-highlight font-black"
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="flex items-center justify-center w-1/2 text-highlight text-center rounded-md px-3 py-2  text-4xl  font-black">
                  <p className="w-max hover:text-5xl hover:text-black">Sandeep's Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}