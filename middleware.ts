import authConfig from '@/auth.config';
import NextAuth from 'next-auth';

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from '@/routes';

//all app needs to be protected by default

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // the order of the check matters !
  if (isApiAuthRoute) {
    return undefined;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      // try to read ?callbackUrl=… from the URL
      const returnTo = nextUrl.searchParams.get('callbackUrl');
      // if it was a relative path ("/foo"), make it absolute in this origin
      const dest = returnTo
        ? new URL(returnTo, nextUrl)
        : new URL(DEFAULT_LOGIN_REDIRECT, nextUrl);

      return Response.redirect(dest);
    }
    return undefined;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl.origin)
    );
  }
  return undefined;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],

  //matcher from clerk
  //   [
  //   // Skip Next.js internals and all static files, unless found in search params
  //   '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  //   // Always run for API routes
  //   '/(api|trpc)(.*)',
  // ],
};
