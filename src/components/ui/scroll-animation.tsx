'use client';
import { motion, UseInViewOptions } from 'framer-motion';
import React from 'react';

interface ScrollElementProps {
    children: React.ReactNode;
    className?: string;
    viewport?: UseInViewOptions;
}

const ScrollElement: React.FC<ScrollElementProps> = ({ children, className, viewport }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport || { once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollElement;
