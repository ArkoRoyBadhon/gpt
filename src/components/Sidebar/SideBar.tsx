"use client";
import ArchiveIcon from "@/utils/Icons/archiveIcon";
import ChatgptIcon from "@/utils/Icons/chatgptIcon";
import NewChatIcon from "@/utils/Icons/newChatIcon";
import ThreeDotIcon from "@/utils/Icons/threeDotIcon";
import { ChatData } from "@/utils/mocks";
import Link from "next/link";
import SideBarBottom from "./SideBarBottom";
import ArrowIcon from "@/utils/Icons/arrowIcon";
import { useState } from "react";

const SideBar = () => {
  const [collapseBtn, setCollapseBtn] = useState(false);
  return (
    <div
      className={`relative transition-all ease-in ${collapseBtn ? "w-[0px]" : "w-[260px]"}  h-[100vh]`}
    >
      <div
        onClick={() => setCollapseBtn(!collapseBtn)}
        className="absolute top-[50%] z-30 right-[-20px] cursor-pointer"
      >
        {collapseBtn ? (
          <div className="">
            <ArrowIcon />
          </div>
        ) : (
          <div className="transform rotate-180">
            <ArrowIcon />
          </div>
        )}
      </div>
      <div
        className={`flex-shrink-0 overflow-x-hidden   visible h-[100vh] overflow-y-scroll bg-gray-100 ${
          collapseBtn ? " hidden" : "block"
        }`}
      >
        <div className="px-[10px]  pb-[85px]">
          <div className="h-[40px] hover:bg-gray-200 w-[228px] flex justify-between items-center px-[9px] rounded-md mt-[14px] fixed z-30 bg-gray-100 cursor-pointer">
            <div className="flex gap-[12px] items-center">
              <ChatgptIcon />
              <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                New chat
              </div>
            </div>
            <div className="">
              <NewChatIcon />
            </div>
          </div>

          <nav className=" pt-[75px] pb-[40px] z-50">
            <div className="">
              <h3 className="text-[#9b9b9b]  text-xs px-2 pt-3 pb-2 h-9 font-medium text-ellipsis break-all capitalize">
                today
              </h3>
              <ol>
                {ChatData &&
                  ChatData.filter((itemData) => {
                    return itemData?.category === "today";
                  }).map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="relative group z-[15] rounded-lg"
                        style={{
                          opacity: 1,
                          height: "auto",
                          overflow: "hidden",
                        }}
                      >
                        <div className="group relative rounded-lg opacity-90">
                          <Link
                            href="prothomalo.com"
                            className="flex items-center gap-2 p-2 group-hover:bg-gray-200"
                          >
                            <div className="relative grow overflow-hidden whitespace-nowrap font-semibold text-sm">
                              {item?.title}
                              <div className="absolute bottom-0 right-0 top-0 custom-gradient-bg w-20 z-0 custom-group-hover"></div>
                            </div>
                          </Link>
                          <div className="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 flex custom-group-hover">
                            <button
                              className="flex items-center justify-center transition"
                              type="button"
                            >
                              <span className="" data-state="closed">
                                <ThreeDotIcon />
                              </span>
                            </button>
                            <span className="" data-state="closed">
                              <button
                                className="flex items-center justify-center transition"
                                type="button"
                              >
                                <ArchiveIcon />
                              </button>
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ol>
            </div>
            <div className="pt-[14px]">
              <h3 className="text-[#9b9b9b]  text-xs px-2 pt-3 pb-2 h-9 font-medium text-ellipsis break-all capitalize">
                yestarday
              </h3>
              <ol>
                {ChatData &&
                  ChatData.filter((itemData) => {
                    return itemData?.category === "yesterday";
                  }).map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="relative group z-[15] rounded-lg"
                        style={{
                          opacity: 1,
                          height: "auto",
                          overflow: "hidden",
                        }}
                      >
                        <div className="group relative rounded-lg opacity-90">
                          <Link
                            href="prothomalo.com"
                            className="flex items-center gap-2 p-2 group-hover:bg-gray-200"
                          >
                            <div className="relative grow overflow-hidden whitespace-nowrap font-semibold text-sm">
                              {item?.title}
                              <div className="absolute bottom-0 right-0 top-0 custom-gradient-bg w-20 z-0 custom-group-hover"></div>
                            </div>
                          </Link>
                          <div className="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 flex custom-group-hover">
                            <button
                              className="flex items-center justify-center transition"
                              type="button"
                            >
                              <span className="" data-state="closed">
                                <ThreeDotIcon />
                              </span>
                            </button>
                            <span className="" data-state="closed">
                              <button
                                className="flex items-center justify-center transition"
                                type="button"
                              >
                                <ArchiveIcon />
                              </button>
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ol>
            </div>
            <div className="pt-[14px]">
              <h3 className="text-[#9b9b9b]  text-xs px-2 pt-3 pb-2 h-9 font-medium text-ellipsis break-all capitalize">
                last 30 days
              </h3>
              <ol>
                {ChatData &&
                  ChatData.filter((itemData) => {
                    return itemData?.category === "last";
                  }).map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="relative group z-[15] rounded-lg"
                        style={{
                          opacity: 1,
                          height: "auto",
                          overflow: "hidden",
                        }}
                      >
                        <div className="group relative rounded-lg opacity-90">
                          <Link
                            href="prothomalo.com"
                            className="flex items-center gap-2 p-2 group-hover:bg-gray-200"
                          >
                            <div className="relative grow overflow-hidden whitespace-nowrap font-semibold text-sm">
                              {item?.title}
                              <div className="absolute bottom-0 right-0 top-0 custom-gradient-bg w-20 z-0 custom-group-hover"></div>
                            </div>
                          </Link>
                          <div className="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 flex custom-group-hover">
                            <button
                              className="flex items-center justify-center transition"
                              type="button"
                            >
                              <span className="" data-state="closed">
                                <ThreeDotIcon />
                              </span>
                            </button>
                            <span className="" data-state="closed">
                              <button
                                className="flex items-center justify-center transition"
                                type="button"
                              >
                                <ArchiveIcon />
                              </button>
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ol>
            </div>
          </nav>
        </div>
        <div className="">
          <SideBarBottom />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
