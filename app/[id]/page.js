import PostFeed from "@/components/postfeed/page";
import Sidebar from "@/components/sidebar/page";
import Trending from "@/components/trending/page";
import Tweet from "@/components/tweets/page";

export default function CommentsPage() {
  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#E7E9EA] 
      max-w-[1400px] mx-auto flex"
      >
        <Sidebar />
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
            <Tweet />
      
          </div>
        <Trending />
      </div>
    </div>
  );
}
