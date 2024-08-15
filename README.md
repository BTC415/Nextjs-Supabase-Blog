<p align="center" style="margin-top: 120px">

  <h1 align="center">Nextjs - Supabase Blogging Applicaition</h1>

<p align="center">
  The <em>all-in-one</em> starter kit <br/>
  for building multi-user, full-stack blogging applications.
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="https://ub.cafe"><strong>Demo</strong></a> ·
  <a href="#"><strong>Guide</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## Introduction

The [Blogging application](https://ub.cafe) is a multi-user, full-stack Next.js app with Supabase support. Built with [Next.js App Router](https://nextjs.org/docs/app), [Supabase Auth](https://supabase.com/docs/guides/auth) and [Supabase Database](https://supabase.com/docs/guides/database), [Supabase Storage](https://supabase.com/docs/guides/storage).

## 💻 Frontend

https://github.com/BTC415/Nextjs-Supabase-Blog/assets/25026241/c0488b1b-ff48-4871-849d-806f09c39322

## 🧰 Backend

https://github.com/BTC415/Nextjs-Supabase-Blog/assets/25026241/29c35c5f-ad67-4f5b-9943-0fd0d94448b8

## 📚 Tech Stacks

- App Router,
- Server Actions
- Server and Client Components
- Data Fetching, Insertion using [Supabase-JS-Client](https://supabase.com/docs/reference/javascript/introduction)
- API Routes and Middlewares
- Cookie based Authentication using [Supabase Auth](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- CMS using [Supabase Database](https://supabase.com/docs/guides/database)
- Metadata files
- Open Graph Image Generation using [Vercel/Og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- Image Upload using [Uppy](https://uppy.io) and [Supabase Storage](https://supabase.com/docs/guides/storage/uploads)
- Styled using [Tailwind CSS](https://tailwindcss.com/)
- UI Components using [HeadlessUI](https://headlessui.com), [Radix-UI](https://radix-ui.com), [Shadcn-UI](https://ui.shadcn.com/)
- WYSIWYG editor using [Novel](https://novel.sh/)
- Loading, Error, NotFound, Empty pages
- Sending emails using [NodeMailer](https://nodemailer.com) and [React Email](https://https://react.email/), [Gmail](https://gmail.com)
- Forms using [React-Hook-Forms](https://www.react-hook-form.com/)
- Toasts using [React-Hot-Toast](https://react-hot-toast.com/)
- Validations using [Zod](https://zod.dev)
- Icons using [HeroIcons](https://heroicons.com/) & [Lucide-Icon](https://lucide.dev/icons/)
- Newsletter using [ConvertKit](https://convertkit.com/)
- Drawer using [Vaul](https://vaul.emilkowal.ski/)
- Written in [TypeScript](https://www.typescriptlang.org/)

## ⌨️ Code Quality

- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## 📈 Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics)

# ⚙️ Getting Started

## Requirements

To run this app locally you need

- [Node.js (Version: >=18.x)](https://nodejs.org/en/download/)
- Node Package Manager NPM - included in Node.js
- [PostgreSQL (local or remote)](https://www.postgresql.org/download/)

## Developer Quickstart

Want to get up and running quickly? Follow these steps:

- [Clone the repository](https://help.github.com/articles/cloning-a-repository/) it to your local device.

  ```sh
  git clone https://github.com/BTC415/Nextjs-Supabase-Blog.git
  ```

- Set up your [Supabase Database](https://supabase.com/docs/guides/database) and Auth wit with [Social Logins](https://supabase.com/docs/guides/auth/social-login)
- Set up your [ConverKit](https://ihatetomatoes-nextjs-101.vercel.app/post/convertkit-api-variables)
- Set up your `.env` file using the recommendations in the `.env.example` file.
- Run `npm installation` in the root directory
  ```sh
  npm installation --legacy-peer-deps
  ```
- Run `npm run dev` in the root directory
- Want it even faster? Just use
  ```sh
  npm run d
  ```

That's it! You should now be able to access the app at http://localhost:3000

Admin dashboard will also be available on http://localhost:300/editor/posts

