import React, { useEffect, useState } from "react";

function UseGetScroll() {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrolled;
}

export default UseGetScroll;
