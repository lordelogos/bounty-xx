import { ReactNode } from "react";
import { NavBar } from "../nav";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};
