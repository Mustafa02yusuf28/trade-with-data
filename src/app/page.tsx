import React from "react";
import { FaRegNewspaper, FaRegComments, FaRegChartBar, FaRegLightbulb } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Community", href: "#community" },
  { name: "News", href: "#news" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Nav Bar */}
      <nav className="w-full flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-gray-950/90 sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-2xl text-cyan-400">
          <span>TradeSmart AI</span>
        </div>
        <div className="flex gap-8 text-gray-300 text-base font-medium">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="hover:text-cyan-400 transition-colors">{link.name}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-28 pb-24 px-4 text-center bg-gray-950">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Your Smartest <br className="hidden md:block" /> Trading Companion
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Track trades, share strategies, and stay ahead with real-time AI & financial insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mb-20 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-10 py-4 rounded-lg transition-colors text-lg shadow-md">
            Get Started Free
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg">
            Explore Features
          </button>
        </div>
        {/* Dashboard Mockup Placeholder */}
        <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-lg p-10 border border-gray-800 flex flex-col items-center mt-6">
          <div className="w-full flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Trade Journal</h2>
              <div className="text-base text-gray-400 mb-3">Recent Trades</div>
              <div className="bg-gray-800 rounded-lg p-4 text-left text-sm">
                <div className="flex justify-between mb-2"><span>Apr 21</span><span className="text-cyan-400">RELIANCE</span><span>₹2,800</span><span>+2.15%</span></div>
                <div className="flex justify-between mb-2"><span>Apr 19</span><span className="text-cyan-400">TCS</span><span>₹3,500</span><span>+1.80%</span></div>
                <div className="flex justify-between"><span>Apr 9</span><span className="text-cyan-400">HDFCBANK</span><span>₹1,600</span><span>+0.95%</span></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center min-w-[220px] mt-8 md:mt-0">
              {/* Placeholder for chart */}
              <div className="w-56 h-32 bg-gradient-to-tr from-cyan-500/30 to-cyan-400/60 rounded-lg flex items-end overflow-hidden">
                <div className="w-3 h-16 bg-cyan-400 mx-1 rounded-t"></div>
                <div className="w-3 h-24 bg-cyan-300 mx-1 rounded-t"></div>
                <div className="w-3 h-10 bg-cyan-500 mx-1 rounded-t"></div>
                <div className="w-3 h-28 bg-cyan-400 mx-1 rounded-t"></div>
                <div className="w-3 h-20 bg-cyan-300 mx-1 rounded-t"></div>
                <div className="w-3 h-32 bg-cyan-500 mx-1 rounded-t"></div>
                <div className="w-3 h-18 bg-cyan-400 mx-1 rounded-t"></div>
              </div>
              <div className="text-sm text-gray-400 mt-3">Performance Overview</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 py-24 px-6">
        {/* Trade Journal Feature */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex flex-col items-start shadow-md min-h-[260px]">
          <div className="flex items-center mb-5 text-cyan-400 text-2xl"><FaRegChartBar className="mr-2" /> Trade Journal</div>
          <div className="text-gray-300 mb-3 text-base">Log every trade, track performance, tag strategies.</div>
          <div className="bg-gray-800 rounded-lg p-4 w-full text-sm">
            <div className="flex justify-between mb-2"><span>Apr 21</span><span className="text-cyan-400">RELIANCE</span><span>₹2,800</span><span>+2.15%</span></div>
            <div className="flex justify-between mb-2"><span>Apr 19</span><span className="text-cyan-400">TCS</span><span>₹3,500</span><span>+1.80%</span></div>
            <div className="flex justify-between"><span>Apr 9</span><span className="text-cyan-400">HDFCBANK</span><span>₹1,600</span><span>+0.95%</span></div>
          </div>
        </div>
        {/* Strategy Hub Feature */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex flex-col items-start shadow-md min-h-[260px]">
          <div className="flex items-center mb-5 text-cyan-400 text-2xl"><FaRegLightbulb className="mr-2" /> Strategy Hub</div>
          <div className="text-gray-300 mb-3 text-base">Discover, build, and share trading strategies.</div>
          <div className="bg-gray-800 rounded-lg p-4 w-full text-sm">
            <div className="flex justify-between mb-2"><span>Jan 21</span><span className="text-cyan-400">INFY</span><span>₹1,400</span><span>₹1,520</span></div>
            <div className="flex justify-between mb-2"><span>Aug 12</span><span className="text-cyan-400">ITC</span><span>₹420</span><span>₹450</span></div>
            <div className="flex justify-between"><span>Feb 15</span><span className="text-cyan-400">SBIN</span><span>₹600</span><span>₹630</span></div>
          </div>
        </div>
        {/* News & AI Updates Feature */}
        <div id="news" className="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex flex-col items-start shadow-md min-h-[260px]">
          <div className="flex items-center mb-5 text-cyan-400 text-2xl"><FaRegNewspaper className="mr-2" /> News & AI Updates</div>
          <div className="text-gray-300 mb-3 text-base">Stay updated with financial news and AI-driven insights.</div>
          <div className="bg-gray-800 rounded-lg p-4 w-full text-sm">
            <div className="mb-2">Nifty hits record high as FIIs pour in</div>
            <div className="mb-2">RBI keeps repo rate unchanged</div>
            <div>AI predicts bullish trend for Indian IT stocks</div>
          </div>
        </div>
        {/* Community Forum Feature */}
        <div id="community" className="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex flex-col items-start shadow-md min-h-[260px]">
          <div className="flex items-center mb-5 text-cyan-400 text-2xl"><FaRegComments className="mr-2" /> Community Forum</div>
          <div className="text-gray-300 mb-3 text-base">Join discussions with thousands of traders & AI enthusiasts.</div>
          <div className="bg-gray-800 rounded-lg p-4 w-full text-sm">
            <div className="mb-2">Is the Nifty rally sustainable?</div>
            <div className="mb-2">Your favorite Indian scalping strategies?</div>
            <div>How do you use AI for Indian stocks?</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center py-8 border-t border-gray-800 mt-auto text-gray-400 text-base">
        © {new Date().getFullYear()} TradeSmart AI. All rights reserved.
      </footer>
    </div>
  );
}
