"use server";

import { z } from "zod";
import { formSchema } from "../bbs-posts/create/page";
import prisma from "../../lib/prismaClient";
import { revalidatePath } from "@/node_modules/next/cache";
import { redirect } from "@/node_modules/next/navigation";

export const postBBS = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });

  revalidatePath("/");
  redirect("/");
};
