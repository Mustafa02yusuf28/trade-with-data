import React from 'react';
import Link from 'next/link';
import { FaChartLine } from 'react-icons/fa';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/app/posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames
    .filter(filename => filename.endsWith('.md') && filename !== 'template.md')
    .map(filename => ({
      slug: filename
    }));
}

// Get post data
async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src/app/posts');
  const fullPath = path.join(postsDirectory, slug);
  
  console.log('Looking for post at:', fullPath);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log('File contents found:', fileContents.substring(0, 100) + '...');
    const { data, content } = matter(fileContents);
    console.log('Parsed frontmatter:', data);
    return { data, content };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}

export default async function BlogPost({ 
  params 
}: { 
  params: { slug: string }
}) {
  console.log('Received params:', params);
  const post = await getPost(params.slug);
  
  if (!post) {
    console.log('Post not found, returning 404');
    notFound();
  }

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

      {/* Blog Post Content */}
      <article className="w-full max-w-4xl mx-auto py-16 px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.data.title}</h1>
          <div className="flex items-center gap-4 text-gray-400">
            <span>{post.data.date}</span>
            <span>•</span>
            <span>{post.data.author}</span>
          </div>
        </header>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center py-8 border-t border-gray-800 mt-16 text-gray-400 text-base">
        © {new Date().getFullYear()} TradeSmart AI. All rights reserved.
      </footer>
    </div>
  );
} 