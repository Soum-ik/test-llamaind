import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface LayoutProps {
    children: ReactNode;
}
function SmoothScrolling({ children }: LayoutProps) {
    return (
        <ReactLenis root options={{
            lerp: .1,
            duration : 3
        }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;