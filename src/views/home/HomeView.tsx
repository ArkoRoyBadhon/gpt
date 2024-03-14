import SideBar from "@/components/SideBar";
import MainBody from "@/components/body/MainBody";

const HomeView = () => {
  return (
    <div className="flex">
      <div className=" bg-gray-100">
        <SideBar />
      </div>
      <MainBody />
    </div>
  );
};

export default HomeView;
