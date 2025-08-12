"use client";

import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { postComment } from "./actions";
import { motion } from "framer-motion";

interface Review {
  id: string;
  comment: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
  createdAt?: string;
}

const ReviewComp: React.FC = () => {
  const { data: session, status } = useSession();
  const [text, setText] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/all-reviews");
        setReviews(response.data.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleBtn = async () => {
    if (!text) return;

    setIsSubmitting(true);
    const result = await postComment({ text });

    if (result.success && result.data) {
      setReviews([result.data, ...reviews]);
      setText("");
    } else {
      console.error(result.message);
    }
    setIsSubmitting(false);
  };

  if (isLoading || status === "loading") {
    return (
      <div className="flex w-full flex-col items-center justify-center mt-80 animate-pulse">
        Loading . . .
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto min-h-screen border-x baseBorder pt-20 sm:pt-20">
      {session?.user ? (
        <div className="flex flex-col gap-4 px-2 sm:px-5">
          <Button
            variant={"ghost"}
            onClick={() => signOut()}
            className="w-fit self-end cursor-pointer rounded border border-red-500"
          >
            Logout
          </Button>
          <Textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
            value={text}
            className="placeholder:text-gray-400 min-h-[10px] border border-gray-300 rounded-md p-2"
            placeholder="comment here . . ."
            autoFocus={true}
          />
          <div className="flex justify-between">
            <Button
              onClick={handleBtn}
              className="w-fit cursor-pointer  text-white dark:text-black disabled:border disabled:border-slate-300"
              disabled={!text.length || isSubmitting}
            >
              {isSubmitting
                ? "Posting..."
                : `Add review as @${session.user.name}`}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex h-full justify-end px-2 sm:px-5">
          <Button
            variant={"ghost"}
            className="cursor-pointer flex items-center gap-2 border baseBorder rounded"
            onClick={() =>
              signIn("google", {
                redirect: true,
                callbackUrl: "/reviews",
              })
            }
          >
            Login
            <FcGoogle className="size-5" />
            for review
          </Button>
        </div>
      )}

      {reviews.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-5 space-y-5 divide-y"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex items-start gap-2 baseBorder pb-2 px-2 sm:px-5"
            >
              <Image
                src={review.user.avatarUrl}
                alt={`${review.user.name}'s avatar`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col w-full">
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 items-center">
                    <h2 className="sm:text-lg font-semibold capitalize">
                      {review.user.name}
                    </h2>
                  </div>
                  {review.createdAt && (
                    <div className="text-xs italic text-slate-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </div>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center">No reviews Yet.</div>
      )}
    </div>
  );
};

export default ReviewComp;
