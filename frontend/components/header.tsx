import clsx from "clsx";
import { MenuMain } from "components/menu-main";
import { Menu, X } from "lucide-react";
import { DrupalMenuLinkContent } from "next-drupal";
import Link from "next/link";
import * as React from "react";

export interface HeaderProps {
  menus: {
    main: DrupalMenuLinkContent[];
  };
}

export function Header({ menus }: HeaderProps) {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false);

  return (
    <header className="bg-white">
      <div className="container relative flex-wrap items-center justify-between py-6 md:flex lg:py-10">
        <Link href="/" passHref>
          R E L O A D<span className="sr-only">Reload</span>
        </Link>
        <button
          className="absolute transition-all border border-transparent md:hidden right-4 hover:border-link"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={clsx(
            "max-h-0 transition-all overflow-hidden md:max-h-screen",
            {
              "max-h-screen": showMenu,
            }
          )}
        >
          <MenuMain items={menus.main} />
        </div>
      </div>
    </header>
  );
}
