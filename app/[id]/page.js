"use client";

import PostFeed from "@/components/postfeed/page";
import Sidebar from "@/components/sidebar/page";
import Trending from "@/components/trending/page";
import Tweet from "@/components/tweets/page";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { collection, doc, documentId, getDoc, getDocs, query } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Moment from "react-moment";

export default function CommentsPage() {
  const [tweetData, setTweetData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
        const docRef = doc(db, "posts", documentId);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        const formattedData = {
          username: data.username,
          name: data.name,
          photoUrl: data.photoUrl,
          text: data.tweet,
          comments: data.comments || null,
          timestamp: data.timestamp ? data.timestamp.toDate().toString() : null,
        };
        setTweetData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#E7E9EA] 
      max-w-[1400px] mx-auto flex"
      >
        <Sidebar />
        <div
          className=" sm:ml-16 xl:ml-80 max-w-2xl flex-grow 
        border-gray-700 border-x items-center justify-center"
        >
          <div
            className="flex space-x-2 px-3 py-2 text-lg sm:text-xl 
            font-bold border-b border-gray-700 sticky top-0 z-50 "
          >
            <Link href={"/"}>
              <ArrowLeftIcon className="w-7 cursor-pointer" />
            </Link>
            <h1>Tweet</h1>
          </div>
            <div className="border-b border-gray-700">
              <div className="flex space-x-3 p-3  border-gray-700">
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src={tweetData.photoUrl}
                />
                <div>
                  <div className="text-gray-500 flex items-center space-x-2 mb-1">
                    <h1 className="text-white font-bold">{tweetData.name}</h1>
                    <span>@{tweetData.username}</span>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <Moment fromNow>{tweetData.timestamp}</Moment>
                  </div>
                  <span>{tweetData.text}</span>
                </div>
              </div>
            </div>
          <Tweet />
        </div>
        <Trending />
      </div>
    </div>
  );
}
