import Link from "next/link";

import { PreviewAlert } from "components/preview-alert";
import { DrupalMenuLinkContent } from "next-drupal";
import { Header } from "./header";

export interface LayoutProps {
  menus: {
    main: DrupalMenuLinkContent[];
    footer: DrupalMenuLinkContent[];
  };
  children?: React.ReactNode;
}

export function Layout({ menus, children }: LayoutProps) {
  return (
    <>
      <PreviewAlert />
      <div className="max-w-screen-md px-6 mx-auto">
        <Header menus={{ main: menus.main }} />
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  );
}
