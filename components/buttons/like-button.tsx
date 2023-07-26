"use client";

import { setPostLike } from "@/actions/set-post-like";
import HeartOutline from "@/components/icons/heart-outline";
import HeartSolid from "@/components/icons/heart-solid";
import { buttonConfig } from "@/config/buttons";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

interface LikeButtonProps {
  slug?: string;
  likes?: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ slug = "", likes = 0 }) => {
  const [isHovering, setIsHovered] = React.useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const [liking, setLiking] = React.useState(false);
  const router = useRouter();

  return (
    <button
      type="button"
      disabled={liking}
      onClick={async () => {
        setLiking(true);
        const response = await setPostLike(slug);
        if (response) {
          setLiking(false);
          toast.success(buttonConfig.thankyou);
          router.refresh();
        } else {
          setLiking(false);
          toast.error(buttonConfig.doubleLike);
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group relative mx-auto inline-flex w-full items-center justify-center rounded-md border border-black/5 bg-white py-2 hover:bg-gray-50 hover:shadow-sm"
    >
      {isHovering ? (
        <HeartSolid className="-ml-0.5 h-5 w-5 text-red-600" />
      ) : (
        <HeartOutline className="-ml-0.5 h-5 w-5 text-gray-400" />
      )}
      <span className="absolute -right-[5px] -top-[10px] rounded-full bg-white px-[4px] text-xs font-semibold text-gray-500 shadow-sm ring-1 ring-black/5">
        {likes}
      </span>
      <span className="ml-2 text-sm text-gray-400 group-hover:text-gray-900">
        {buttonConfig.like}
      </span>
    </button>
  );
};

export default LikeButton;