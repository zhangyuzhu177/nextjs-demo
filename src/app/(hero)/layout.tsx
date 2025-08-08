import Header from "~/components/Header";


/**
 * 路由组中的layout组件，所有路由组中的组件都会被这个组件包裹
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <Header />
      <div className="w-full h-full pt-16 flex items-center justify-center">
        { children }
      </div>
    </div>
  );
}

