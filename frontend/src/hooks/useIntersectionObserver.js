import { useEffect, useState } from "react";

export const useIntersectionObserver = () => {
    const [hasAnimated, usehasAnimated] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Hanya animasi jika tidak pernah dianimasikan sebelumnya
                    if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
                        entry.target.classList.add("animate-fadeIn");
                        usehasAnimated((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id]').forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, [hasAnimated]);

    return hasAnimated;
};