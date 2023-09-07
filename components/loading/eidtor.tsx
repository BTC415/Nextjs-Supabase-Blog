import React from "react";

const LoadingEditor = () => {
  return (
    <div className="mx-auto flex max-w-7xl justify-center">
      <div className="flex w-full max-w-3xl flex-col space-y-5">
        <div
          role="status"
          className="flex animate-pulse flex-col justify-start"
        >
          <div className="mb-5 h-5 w-[560px] rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-5 h-5 w-[560px] rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-5 h-5 w-[560px] rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-5 w-[560px] rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="flex h-56 w-[560px] animate-pulse flex-col items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700"
        >
          <svg
            className="h-10 w-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="w-w-[560px] flex animate-pulse flex-col space-y-2.5"
        >
          <div className="flex w-[560px] flex-row items-center space-x-2">
            <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full max-w-[480px] items-center space-x-2">
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full max-w-[400px] items-center space-x-2">
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full max-w-[480px] items-center space-x-2">
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full max-w-[440px] items-center space-x-2">
            <div className="h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex w-full max-w-[360px] items-center space-x-2">
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="flex w-[560px] animate-pulse flex-col space-y-2.5"
        >
          <div className="flex w-[560px] flex-row items-center space-x-2">
            <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full max-w-[480px] items-center space-x-2">
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full max-w-[400px] items-center space-x-2">
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full max-w-[480px] items-center space-x-2">
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full max-w-[440px] items-center space-x-2">
            <div className="h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex w-full max-w-[360px] items-center space-x-2">
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingEditor;
