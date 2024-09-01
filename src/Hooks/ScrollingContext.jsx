import Lenis from 'lenis';
import { useEffect, useState, createContext, useContext } from 'react';

const smootherScrollerContext = createContext();
export const useSmotherContext = () => useContext(smootherScrollerContext);

export default function Section({ children }) {
    const [lenisRef, setLenis] = useState(null);
    const [rafState, setRafState] = useState(null);

    useEffect(() => {
        const scroller = new Lenis();
        let rf;

        function raf(time) {
            scroller.raf(time);
            requestAnimationFrame(raf);
        }

        rf = requestAnimationFrame(raf);
        setRafState(rf);
        setLenis(scroller);

        return () => {
            if (lenisRef) {
                cancelAnimationFrame(rafState);
                lenisRef.destroy();
            }
        };
    }, [lenisRef]);

    // Provide the lenisRef and rafState as context values
    const contextValue = { lenisRef, rafState };

    return (
        <smootherScrollerContext.Provider value={lenisRef}>
            {children}
        </smootherScrollerContext.Provider>
    );
}