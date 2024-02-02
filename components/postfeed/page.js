"use client";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import TweetInput from "../tweetInput/page";
import Tweet from "../tweets/page";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PostFeed() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs);
    });

    return unsubscribe;
  }, []);
  return (
    <div
      className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow 
        border-gray-700 border-x items-center justify-center"
    >
      <div
        className="px-3 py-2 text-lg sm:text-xl 
            font-bold border-b border-gray-700 sticky top-0 z-50 "
      >
        Home
      </div>
      <TweetInput />
      {tweets.map((tweet) => {
        return (
          <Link href={tweet.id} key={tweet.id}>
            <Tweet key={tweet.id} id={tweet.id} data={tweet.data()} />
          </Link>
        );
      })}
      <Tweet />
    </div>
  );
}
