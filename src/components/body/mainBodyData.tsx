import ChatgptIcon from "@/utils/Icons/chatgptIcon";
import { ChatWithGPT } from "@/utils/mocks";
import React from "react";

const MainBodyData = () => {
  return (
    <div className="">
      {ChatWithGPT &&
        ChatWithGPT.map((item) => {
          return (
            <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 md:max-w-3xl lg:max-w-[40rem] group mb-[20px]">
              <div className="flex-shrink-0 flex flex-col relative items-end">
                <div>
                  <div className="pt-0.5">
                    <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                      <div
                        className="relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center"
                        style={{
                          backgroundColor: "rgb(25, 195, 125)",
                          width: "24px",
                          height: "24px",
                        }}
                      >
                        {item?.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full flex-col agent-turn">
                <div className="font-semibold select-none">{item?.name}</div>
                <div className="flex-col gap-1 md:gap-3">
                  <div className="flex flex-grow flex-col max-w-full">
                    <div className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                      <div className="markdown prose w-full break-words dark:prose-invert light">
                        {item?.message}
                      </div>
                    </div>
                  </div>
                  <div className="pr-2 lg:pr-0"></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MainBodyData;
