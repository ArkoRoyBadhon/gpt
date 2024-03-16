import { MyContextProvider } from "@/components/provider/MyContextProvider";

const DashBoardLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return <MyContextProvider>
    {children}
  </MyContextProvider>;
};

export default DashBoardLayout;
