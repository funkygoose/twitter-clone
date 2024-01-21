"use client";

import Sidebar from "@/components/sidebar/page";
import Image from "next/image";
import PostFeed from "@/components/postfeed/page";
import Trending from "@/components/trending/page";
import BottomBanner from "@/components/bannerBanner/Banner";
import { useSelector } from "react-redux";

export default function Home() {
  const username = useSelector((state) => state.user.username);
  console.log(username);
  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#E7E9EA] 
      max-w-[1400px] mx-auto flex"
      >
        <Sidebar />
        <PostFeed />
        <Trending />
      </div>
      {!username && <BottomBanner />}
    </div>
  );
}
