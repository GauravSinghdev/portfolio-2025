import ReviewComp from "./ReviewComp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
};

export default async function ReviewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ReviewComp />
    </div>
  );
}
