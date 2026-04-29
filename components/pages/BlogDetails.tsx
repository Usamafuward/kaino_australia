"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiTag,
} from "react-icons/fi";
import "./wordpress-styles.css";

interface FormattedPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  content: string;
  slug: string;
  imageUrl: string;
  tags: string[];
  readTime: string;
}

interface WPTerm {
  taxonomy: string;
  name: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<FormattedPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const API_URL = `http://127.0.0.1:8000/api/blog/posts/${slug}/`;
        const WORDPRESS_URL = "http://127.0.0.1:8000";
        
        const response = await fetch(API_URL);
        
        if (response.ok) {
          const wpPost = await response.json();
          
          // Format the post data
          const formattedPost: FormattedPost = {
            id: wpPost.id,
            title: wpPost.title,
            excerpt: wpPost.excerpt || '',
            date: new Date(wpPost.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            category: wpPost.categories.length > 0 ? wpPost.categories[0].name : 'Uncategorized',
            author: 'Admin',
            content: wpPost.content || '',
            slug: wpPost.slug,
            imageUrl: wpPost.featured_image 
              ? (wpPost.featured_image.startsWith("http") || wpPost.featured_image.startsWith("data:") ? wpPost.featured_image : WORDPRESS_URL + wpPost.featured_image) 
              : '',
            tags: wpPost.tags.map((tag: any) => tag.name),
            readTime: `${Math.ceil((wpPost.content || "").split(/\s+/).length / 200)} min read`
          };
          setPost(formattedPost);
        } else {
          setError("Post not found");
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const onBack = () => {
    window.history.back();
  };

  const stripHtml = (html: string) => {
    // Guard for Server-Side Rendering
    if (typeof window === "undefined") {
      return "";
    }
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-orange"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <div className="text-5xl mb-4">😢</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Post Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            {error || "We couldn't find the article you were looking for."}
          </p>
          <button
            onClick={onBack}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center mx-auto"
          >
            <FiArrowLeft className="mr-2" />
            Back to Insight
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${post.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10 pt-28 md:pt-32 pb-16">
          <div className="mx-auto">
            <motion.button
              onClick={onBack}
              className="inline-flex items-center text-white hover:text-white/80 mb-8 group bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm sm:text-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Insight
            </motion.button>

            <div className="text-center flex flex-col justify-between items-center">
              <motion.div
                className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FiTag className="mr-2 text-sm text-white" />
                <span className="text-sm font-medium text-white">
                  {post.category}
                </span>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                  {stripHtml(post.title)}
                </h1>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex flex-wrap items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-lg" /> <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="text-lg" /> <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8">
          <div className="w-full mx-auto">
            <motion.article
              className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div
                className="prose prose-lg lg:prose-xl max-w-none 
                          prose-headings:font-bold prose-headings:text-slate-900
                          prose-p:text-slate-700 prose-p:leading-relaxed
                          prose-a:text-brand-deep prose-a:font-medium prose-a:transition-colors hover:prose-a:text-brand-deep
                          prose-img:rounded-xl prose-img:shadow-md
                          prose-blockquote:border-l-4 prose-blockquote:border-brand-orange
                          prose-blockquote:bg-orange-50 prose-blockquote:p-4 prose-blockquote:font-medium prose-blockquote:text-slate-600 prose-blockquote:not-italic
                          prose-ul:list-disc prose-li:my-2 prose-li:marker:text-brand-deep
                          prose-ol:list-decimal prose-ol:marker:text-brand-deep
                          prose-strong:text-slate-800
                          prose-code:bg-slate-100 prose-code:p-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:text-purple-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                className="mt-8 p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-orange-100 text-brand-deep text-sm font-medium px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
