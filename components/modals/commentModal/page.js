import { closeCommentModal } from "@/lib/modalSlice/page";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function CoomentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);
  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div
          className=" w-full h-full rounded-lg 
          bg-black border border-gray-500
          sm: w-[600px] sm:h-[386px] text-white
          sm:p-10 p-4"
        >
          <div>
            <div className="flex space-x-3">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="/assets/kylie.png"
              />
              <div>
                <div className="flex space-x-1.5">
                  <h1 className="font-bold">kylie</h1>
                  <h1 className="text-gray">@kylie</h1>
                </div>
                <p className="m-1">This is awesome</p>
                <h1 className="text-gray-500 text-[15px] mt-2">
                  Replying to <span className="text-[#1b9bf0]">@xgs</span>
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-11">
              <div className="flex space-x-3">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="/assets/kylie.png"
                />
                <div className="w-full">
                  <textarea
                    placeholder="Tweet your reply"
                    className="w-full text-lg outline-none bg-transparent resize-none"
                  />
                  <div>
                  <div className="flex space-x-0">
            <div className="iconAnimation">
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
          </div>
                    <button>Tweet </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
