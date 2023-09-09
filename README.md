<p align="center" style="margin-top: 120px">
  <a href="https://ub.cafe">
   <img src="https://github.com/timtbdev/sign-dictionary/assets/25026241/2038fd10-f9e7-4035-8c14-28bef92729f9" width="100px" alt="Blog App Logo">
  </a>
</p>

  <p align="center">
  Fullstack Blog app built with Next.js 13 & Supabase
  <br>
    <a href="https://ub.cafe"><strong>Demo</strong></a> | 
    <strong>Documentation(Coming soon)</strong></a>
  </p>

<img width="1040" alt="Cover" src="https://github.com/timtbdev/sign-dictionary/assets/25026241/537b830a-4ea0-40cb-bb26-7b3b744a4fce">

## 💻 Preview

https://github.com/timtbdev/Next.js-Blog-App/assets/25026241/28c88539-ce40-4283-8239-10c0024bf349

## 💾 Database Schema

### Database schema & dummy data: [here](./database_schema/)

<img width="992" alt="Screenshot 2023-06-10 at 10 00 18 PM" src="https://github.com/timtbdev/Next.js-Blog-App/assets/25026241/729e2d22-2467-4d5b-9c6c-e6a5ea58c717">

## 📊 Google Lighthouse performance statistics

<img width="992" alt="Screenshot 2023-06-10 at 10 00 18 PM" src="https://github.com/timtbdev/Next.js-Blog-App/assets/25026241/2a4f693b-5c0d-4647-8444-291e1f635ee7">

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
- Image Upload using [Supabase-JS-Client](https://supabase.com/docs/reference/javascript/introduction) and [Supabase Storage](https://supabase.com/docs/guides/storage/uploads)
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
  git clone https://github.com/timtbdev/Next.js-Blog-App.git
  ```

- Set up your [Supabase Database](https://supabase.com/docs/guides/database) and Auth wit with [Social Logins](https://supabase.com/docs/guides/auth/social-login)
- Set up your [ConverKit](https://ihatetomatoes-nextjs-101.vercel.app/post/convertkit-api-variables)
- Set up your `.env` file using the recommendations in the `.env.example` file.
- Run `npm installation --legacy-peer-deps` in the root directory
  ```sh
  npm installation --legacy-peer-deps
  ```
- Run `npm run dev` in the root directory
- Want it even faster? Just use
  ```sh
  npm run d
  ```

That's it! You should now be able to access the app at http://localhost:3000

Admin dashboard will also be available on http://localhost:300/dashboard

## 🙇 Author

- Tim ([@timtbdev](https://twitter.com/timtbdev))

## License

Licensed under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).
