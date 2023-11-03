"use client";

import { LoginSection } from "@/components/login";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { detailCommentConfig } from "@/config/detail";
import React from "react";

const DetailPostSignInToComment = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="group flex w-full rounded-lg bg-gradient-to-t from-gray-200 via-gray-100 to-gray-50 p-2 text-center text-gray-400 shadow-md shadow-black/5 ring-1 ring-black/10 transition duration-200 hover:bg-gradient-to-tr hover:from-gray-200 hover:via-gray-100 hover:to-gray-50 active:scale-[96%] active:ring-black/20"
        >
          <span className="text-gray-600">
            {detailCommentConfig.leaveComment}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="font-sans sm:max-w-[425px]">
        <LoginSection />
      </DialogContent>
    </Dialog>
  );
};

export default DetailPostSignInToComment;
