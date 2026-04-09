import { CircularProgress } from "react-loader-spinner";
import { DashboardLayout } from "./DashboardLayout";

export const LoadingSpiner = () => {
  return (
    <DashboardLayout direction="flex-row" childrenClassName="justify-center">
      <CircularProgress
        height="50"
        width="50"
        color="#333"
        ariaLabel="circular-progress-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
        strokeWidth={2}
        animationDuration={1}
      />
    </DashboardLayout>
  );
};
