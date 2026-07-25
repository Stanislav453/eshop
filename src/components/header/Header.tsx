import { DashboardLayout } from "../common/DashboardLayout";
import { HeaderTopView } from "./HeaderTopView";
import { ShopHeaderContainer } from "./ShopHeaderContainer";

export const Header = () => {
  return (
    <header className="px-6 md:px-0">
      <DashboardLayout>
        <HeaderTopView />
      </DashboardLayout>
      <hr />
      <DashboardLayout>
        <ShopHeaderContainer />
      </DashboardLayout>
    </header>
  );
};
