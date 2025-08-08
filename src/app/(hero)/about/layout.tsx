import React from 'react'

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-red-500">
      <h2>我是about页面的layout</h2>
      {children}
    </div>
  )
}
