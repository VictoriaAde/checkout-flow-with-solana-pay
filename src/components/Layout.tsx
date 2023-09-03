import { PropsWithChildren } from "react";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen flex flex-col gap-16">
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
