"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      
      {/* Spacer Above the Logo */}
      <div className="pt-20"></div>

      {/* Centered Logo - Using Correct Path */}
      <img 
        src="/images/logo.svg"  // Corrected Path for Public Folder
        alt="UltraRepo Logo"
        className="w-[520px] h-[80px] mx-auto"
      />

      {/* Subtitle */}
      <p className="mt-6 text-lg text-center">⚡ Private AI Desktop for Mac/Win/Linux ⚡</p>
      <p className="text-md text-center">+ Electron | Next.js</p>
      <p className="text-md text-center">+ Tailwindcss | ShadCn</p>

      {/* Copyright */}
      <p className="mt-6 text-sm text-gray-400 text-center">
        💕 Copyright 2025 UltraRepo.com
      </p>

      {/* Navigation */}
      <a href="/next" className="mt-6 text-blue-400 hover:underline text-center">
        Go to next page
      </a>
    </div>
  );
}