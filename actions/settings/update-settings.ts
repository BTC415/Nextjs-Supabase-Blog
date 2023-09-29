"use server";

import { profileSchema } from "@/lib/validation/profile";
import { Database } from "@/types/supabase";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import * as z from "zod";

export async function UpdateSettings(context: z.infer<typeof profileSchema>) {
  const supabase = createServerActionClient<Database>({ cookies });
  try {
    const profile = profileSchema.parse(context);
    const { data, error } = await supabase
      .from("profiles")
      .update({
        full_name: `${profile.fistName} ${profile.lastName}`,
        username: profile.userName,
        avatar_url: profile.avatarUrl,
        website: profile.website,
      })
      .eq("id", profile.id);

    if (error) {
      console.log(error);
      return false;
    }
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);
      return false;
    }
    return false;
  }
}
