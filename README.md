# Next.js Advanced Authentication App

Welcome to the Next.js Advanced Authentication App!
This project was built by following an educational tutorial to learn how to integrate advanced authentication features using Auth.js (next-auth v5), Next.js app router server actions, and additional libraries.

The live app is deployed at Vercel:
🔗 **<a href="https://auth-v5-2wfv.vercel.app/" target="_blank">Live
Demo</a>**

## 🛠 Tech Stack & Resources

🔗 **<a href="https://nextjs.org/docs" target="_blank">Next.js 15</a>**

🔗 **<a href="https://authjs.dev/getting-started/migrating-to-v5" target="_blank">Auth.js (next-auth v5)</a>**

🔗 **<a href="https://resend.com/docs/introduction" target="_blank">Resend</a> (for emails)**

🔗 **<a href="https://nodejs.org/en" target="_blank">Node.js</a>**

🔗 **<a href="https://ui.shadcn.com/" target="_blank">Shadcn UI</a>**

🔗 **<a href="https://clerk.com/docs" target="_blank">Clerk</a>**

🔗 **<a href="https://sonner.emilkowal.ski/" target="_blank">Sonner</a>**

🔗 **<a href="https://zod.dev/?id=introduction" target="_blank">Zod</a> for validation**

🔗 **<a href="https://www.prisma.io/docs/guides/nextjs?_gl=1*gfisl3*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwq7fABhB2EiwAwk-YbAN_TEy4x6GmPvWLbd2BGxur5CVvSmJi0xApYZawalHPZoSHTdL3NxoC0W4QAvD_BwE&gbraid=0AAAAA9nNp_eoV7Fb88Ucnyym2WwdiCzdz" target="_blank">Prisma</a>** or **<a href="https://authjs.dev/getting-started/adapters/prisma" target="_blank">Prisma in Auth.js</a>**

🔗 **<a href="https://neon.tech/" target="_blank">Neon</a> as database**

## 🔑 Key Features

- Next-auth v5 (Auth.js) authentication
- Server Actions in Next.js 15
- Credentials Provider (email/password login)
- OAuth Provider (Social login with Google & GitHub)
- Forgot Password Functionality
- Email Verification
- Two-Factor Authentication (2FA)
- User Roles (Admin & User)
- Login and Register Components (Redirect or Modal)
- Forgot Password, Verification, and Error Components
- Login and Logout Buttons
- Role-Based Access Control (Role Gate)
- Middleware Protection using Next.js middleware
- Extended Session Handling with NextAuth callbacks

- **Custom Hooks:**

  \* useCurrentUser, \* useRole

- **Utilities:**

  \* currentUser, \* currentRole

- Server and Client Component Examples
- Admin-Only Content Rendering using RoleGate
- Protect API Routes and Server Actions (Admins Only)
- Change Email (with re-verification)
- Change Password (confirm old password)
- Enable/Disable Two-Factor Authentication (2FA)
- Change User Role (for development/testing purposes)

## 📚 Learning Goals

- Learn how to set up OAuth login with Credentials, Google and GitHub
- Implement authentication flows (login, registration, email verification, password reset)
- Protect pages, components, APIs, and server actions
- Use Next.js server actions with Auth.js
- Understand and extend next-auth sessions and callbacks
- Add Two-Factor Authentication (2FA)
- Manage user roles (Admin/User)
- Explore middleware to protect routes
- Explore advanced UI flows with Shadcn UI
