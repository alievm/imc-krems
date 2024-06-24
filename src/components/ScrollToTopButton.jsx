import React, { useState, useEffect } from 'react';
import {BsArrowUp} from "react-icons/bs";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Показываем или скрываем кнопку в зависимости от прокрутки
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Обновляем прогресс прокрутки
    const updateScrollProgress = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
    };

    // Прокручиваем страницу вверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('scroll', updateScrollProgress);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    // Вычисляем длину окружности
    const circleLength = 2 * Math.PI * 30; // 30 - это радиус окружности

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-0 w-16 h-16 flex items-center justify-center rounded-full bg-transparent transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {/* SVG Circle for Progress Indicator */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="rgba(96, 165, 250, 0.2)"
                    strokeWidth="8"
                    fill="none"
                />
                <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="rgba(14, 165, 233, 1)"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={circleLength}
                    strokeDashoffset={circleLength - (scrollProgress / 100) * circleLength}
                    strokeLinecap="round"
                    className="transition-all duration-200"
                />
            </svg>
            {/* Icon */}
            <BsArrowUp className="h-6 w-6 text-white" />
        </button>
    );
};

export default ScrollToTopButton;
