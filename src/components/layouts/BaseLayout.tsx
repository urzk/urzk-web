import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <div className="bg-plus min-h-screen bg-slate-50">
      <Header />
      <div className="mx-auto max-w-[1048px] px-3">{children}</div>
      <Footer />
    </div>
  );
};
export default BaseLayout;
