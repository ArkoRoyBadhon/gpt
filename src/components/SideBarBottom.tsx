import UpgradeIcon from "@/utils/Icons/UpgradeIcon";

const SideBarBottom = () => {
  return (
    <div className="fixed bottom-0 w-[260px] bg-gray-100 z-20 px-[10px] pb-[14px]">
      <div className="flex items-center gap-2 hover:bg-gray-200 py-[10px] px-[8px]">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light">
          <UpgradeIcon />
        </span>
        <div className="flex flex-col">
          <span>Upgrade plan</span>
          <span className="text-xs text-token-text-tertiary line-clamp-1">
            Get GPT-4, DALL·E, and more
          </span>
        </div>
      </div>
      <div className="flex gap-2 hover:bg-gray-200 w-full py-[10px] px-[8px] rounded-lg items-center">
        <div className="w-8 h-8 rounded-full bg-red-400 overflow-hidden">
          img
        </div>
        <p className="font-semibold">Arko Roy</p>
      </div>
    </div>
  );
};

export default SideBarBottom;
