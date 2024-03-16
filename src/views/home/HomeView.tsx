import SideBar from "@/components/Sidebar/SideBar";
import SideBarMobile from "@/components/Sidebar/SideBarMobile";
import MainBody from "@/components/body/MainBody";
// import { useMyContext } from "@/components/provider/MyContextProvider";

const HomeView = () => {
  return (
    <div className="flex">
      <div className="hidden md:block bg-gray-100">
        <SideBar />
      </div>
      <div className="block md:hidden bg-gray-100">
        <SideBarMobile />
      </div>
      <MainBody />
    </div>
  );
};

export default HomeView;
