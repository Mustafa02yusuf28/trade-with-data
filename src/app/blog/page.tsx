import React from 'react';
import Link from 'next/link';
import { FaChartLine } from 'react-icons/fa';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags?: string[];
}

async function getPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'src/app/posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames
    .filter(filename => filename.endsWith('.md') && filename !== 'template.md')
    .map(filename => {
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: filename,
        ...data
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav Bar */}
      <nav className="w-full flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-gray-950/90 sticky top-0 z-10">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-cyan-400">
          <FaChartLine className="h-8 w-8" />
          <span>TradeSmart AI</span>
        </Link>
        <div className="flex gap-8 text-gray-300 text-base font-medium">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="/#features" className="hover:text-cyan-400 transition-colors">Features</Link>
          <Link href="/blog" className="text-cyan-400">Blog</Link>
          <Link href="/#pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
          <Link href="/#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Blog Header */}
      <header className="w-full max-w-7xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Trading Insights & Analysis</h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Stay informed with the latest market trends, trading strategies, and AI-powered insights.
        </p>
      </header>

      {/* Blog Posts Grid */}
      <main className="w-full max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-colors">
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center py-8 border-t border-gray-800 mt-16 text-gray-400 text-base">
        © {new Date().getFullYear()} TradeSmart AI. All rights reserved.
      </footer>
    </div>
  );
} 