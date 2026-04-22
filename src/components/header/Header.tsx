import { DashboardLayout } from "../common/DashboardLayout";
import { HeaderTopView } from "./HeaderTopView";
import { ShopHeaderView } from "./ShopHeaderView";

export const Header = () => {
  return (
    <header>
      <DashboardLayout>
        <HeaderTopView />
      </DashboardLayout>
        <hr />
      <DashboardLayout>
        <ShopHeaderView />
      </DashboardLayout>
    </header>
  );
};
