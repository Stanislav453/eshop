import { DashboardLayout } from "../common/DashboardLayout";
import { HeaderTopView } from "./HeaderTopView";
import { ShopHeaderContainer } from "./ShopHeaderContainer";

export const Header = () => {
  return (
    <header>
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
