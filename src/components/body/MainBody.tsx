import DownArrow from "@/utils/Icons/downArrow";
import ShareIcon from "@/utils/Icons/shareIcon";
import UpBtnArrow from "@/utils/Icons/upBtnArrow";
import MainBodyData from "./mainBodyData";

const MainBody = () => {
  return (
    <div className="w-full relative">
      <div className="sticky top-0 mb-1.5 flex items-center justify-between z-10 h-14 p-2 font-semibold bg-token-main-surface-primary bg-white">
        <div className="absolute left-1/2 -translate-x-1/2"></div>
        <div className="flex items-center gap-2">
          <div className="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary">
            <div>
              ChatGPT <span className="text-token-text-secondary">3.5</span>
            </div>
            <DownArrow />
          </div>
        </div>
        <div className="flex gap-2 pr-1">
          <button className="btn relative btn-neutral btn-small flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-lg">
            <div className="flex w-full gap-2 items-center justify-center">
              <ShareIcon />
            </div>
          </button>
        </div>
      </div>
      {/* main body Data showing  */}
      {/* <div className="overflow-y-auto"> */}
      <div className="h-[calc(100vh-150px)] overflow-y-auto px-4 md:px-0 mx-auto">
        <MainBodyData />
      </div>
      <div className="fixed bottom-0 left-[5%] w-full pt-2 md:pt-0 md:border-transparent bg-white flex items-center justify-center flex-col">
        <form className=" flex flex-row gap-3 w-[60%] lg:w-[75%] md:[50%] last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl mx-auto">
          <div className="relative flex h-full flex-1 flex-col">
            <div className="flex w-full items-center">
              <div className="overflow-hidden flex flex-col w-full flex-grow relative border rounded-2xl">
                <textarea
                  rows={1}
                  placeholder="Message ChatGPT…"
                  className="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 py-[10px] pr-10 md:py-3.5 md:pr-12 max-h-52 placeholder-black/50 pl-3 md:pl-4 rounded-lg"
                ></textarea>
                <button className="absolute bottom-1.5 right-2 rounded-lg border border-black bg-black p-0.5 text-white disabled:text-gray-400 md:bottom-3 md:right-3">
                  <span>
                    <UpBtnArrow />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="relative px-2 py-2 text-center text-xs text-token-text-secondary md:px-[60px]">
          <span>
            ChatGPT can make mistakes. Consider checking important information.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
