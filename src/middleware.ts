import { NextRequest } from "next/server";

/**
 * 中间件
 * @param request 
 */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log(path);
  
}

/**
 * 触发中间件配置
 */
export const config = {
  matcher: ["/api/article/:path*"],
};