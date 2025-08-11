import Link from "next/link";

export default function ParallelLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  
  return (
    <div className="w-[800px] h-full flex flex-col gap-4">
      <div className="flex gap-4">
        <Link href="/parallel">parallel</Link>
        <Link href="/parallel/test">test</Link>
      </div>
      <div className="flex gap-4">
        {/* 并行路由 */}
        {team}
        {analytics}
      </div>
      {children}
    </div>
  );
}
