'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/app/lib/data';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section
            id="about"
            className="relative flex items-center justify-center px-4 py-16 sm:py-20 lg:py-24"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto text-center"
            >
                {/* Profile Image */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-2xl" />
                        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-900">
                                <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
                                    {personalInfo.name.charAt(0)}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl"
                >
                    {personalInfo.name}
                </motion.h1>

                {/* Title */}
                <motion.p
                    variants={itemVariants}
                    className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-400"
                >
                    {personalInfo.title}
                </motion.p>

                {/* Bio */}
                <motion.p
                    variants={itemVariants}
                    className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                    {personalInfo.bio}
                </motion.p>

                {/* Location */}
                {personalInfo.location && (
                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-sm text-gray-500 dark:text-gray-500 flex items-center justify-center gap-2"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        {personalInfo.location}
                    </motion.p>
                )}

                {/* Social Links */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    {personalInfo.socialLinks.map((link) => (
                        <Button
                            key={link.name}
                            variant="secondary"
                            size="md"
                            onClick={() => window.open(link.url, '_blank')}
                            className="gap-2"
                        >
                            <span>{link.name}</span>
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </Button>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="mt-10">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({
                                behavior: 'smooth',
                            });
                        }}
                    >
                        Get in Touch
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-gray-400 dark:text-gray-600"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};
