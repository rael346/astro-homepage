import { createEffect, createSignal, onMount } from "solid-js";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);
  const links = [
    { name: "About Me", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Resources", href: "/resources" },
  ];
  const genericHamburgerLine = `h-0.5 w-5 rounded-full bg-black dark:bg-white transition-transform ease transform duration-200`;

  return (
    <>
      <button
        class="ml-2 w-9 h-9 z-50 flex flex-col space-y-1 items-center justify-center rounded-md border visible md:hidden border-slate-400 dark:border-slate-300 group"
        onClick={() => setIsOpen(!isOpen())}
      >
        <div
          class={`${genericHamburgerLine} ${
            isOpen() ? "rotate-[225deg] translate-y-1.5" : ""
          }`}
        />
        <div class={`${genericHamburgerLine} ${isOpen() ? "opacity-0" : ""}`} />
        <div
          class={`${genericHamburgerLine} ${
            isOpen() ? "-rotate-[225deg] -translate-y-1.5" : ""
          }`}
        />
      </button>

      <div
        class={`
          ${isOpen() ? "translate-x-0 " : "translate-x-full"}
          fixed h-screen w-screen z-10 top-0 left-0 py-16 px-8 visible md:hidden flex flex-col 
          bg-slate-100 bg-opacity-90 divide-slate-400 
          dark:bg-slate-800 dark:bg-opacity-90 dark:divide-slate-600 
          ease-in-out duration-300
          divide-y
        `}
      >
        {links.map(({ name, href }) => (
          <a
            class="font-semibold text-lg py-4"
            onClick={() => setIsOpen(false)}
            href={href}
          >
            {name}
          </a>
        ))}
      </div>
    </>
  );
};

export default MobileMenu;
