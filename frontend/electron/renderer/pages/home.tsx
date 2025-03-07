import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>UltraRepo Home(with-tailwindcss)</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto"
            src="/images/logo.png"
            alt="Logo image"
            width={974}
            height={150}
          />
        </div>
        <span>⚡ Private AI Desktop for Mac/Win/Linux ⚡</span>
        <span>+</span>
        <span>Electron | Next.js</span>
        <span>+</span>
        <span>Tailwindcss | ShadCn </span>
        <span>=</span>
        <span>💕 Copyright 2025 UltraRepo.com </span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">Go to next page</Link>
      </div>
    </React.Fragment>
  )
}
