import { useEffect, useRef } from 'react';

const useAutoPlayVideo = (src, options = {}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            // Try to autoplay the video programmatically
            video.play().catch((error) => {
                console.error("Autoplay failed:", error);
                // Retry autoplay if the first attempt fails
                setTimeout(() => {
                    video.play();
                }, 1000); // Retry after 1 second
            });

            // Ensure the video loops manually if loop attribute fails
            const handleVideoEnd = () => {
                video.play();
            };

            video.addEventListener('ended', handleVideoEnd);

            // Cleanup event listener on component unmount
            return () => {
                video.removeEventListener('ended', handleVideoEnd);
            };
        }
    }, [src]);

    return videoRef;
};

export default {
    useAutoPlayVideo
};