'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/app/lib/data';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { SectionHeading } from '@/app/components/ui/SectionHeading';
import { TechBadge } from '@/app/components/ui/TechBadge';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
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

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Blog"
                        subtitle="Thoughts, tutorials, and insights on web development"
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {blogPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                            >
                                {/* Date and Read Time */}
                                <div className="mb-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                    <span>{post.readTime}</span>
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="mb-4 text-gray-600 dark:text-gray-400 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <TechBadge key={tag} tech={tag} />
                                    ))}
                                </div>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                >
                                    Read more
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
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {blogPosts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 dark:text-gray-400">
                                No blog posts yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
