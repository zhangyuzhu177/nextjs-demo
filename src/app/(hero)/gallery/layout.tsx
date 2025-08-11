
/**
 * 路由组中的layout组件，所有路由组中的组件都会被这个组件包裹
 */
export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {

  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

