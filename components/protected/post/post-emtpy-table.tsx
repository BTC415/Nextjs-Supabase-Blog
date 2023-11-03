"use client";

import PostCreateButton from "@/components/protected/post/buttons/post-create-button";
import { sharedEmptyConfig } from "@/config/shared";
import { useRouter } from "next/navigation";

const PostTableEmpty = () => {
  const router = useRouter();
  return (
    <>
      <main className="grid min-h-full place-items-center rounded-lg border-2 border-dashed border-gray-300 bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {sharedEmptyConfig.title}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {sharedEmptyConfig.description}.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <PostCreateButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default PostTableEmpty;
