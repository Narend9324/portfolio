'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/app/lib/data';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Feel free to reach out for collaborations or just a friendly chat"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Email */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
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
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {personalInfo.email}
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        {personalInfo.socialLinks.map((link) => (
                            <Button
                                key={link.name}
                                variant="secondary"
                                size="lg"
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

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center pt-8"
                    >
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            I&apos;m always interested in hearing about new projects and opportunities.
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                        >
                            Send me an email
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
