import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return <div className=" max-w-[1720px] mx-auto px-5">{children}</div>;
}

export default Layout;
