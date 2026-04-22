import { CircularProgress } from "react-loader-spinner";

export const LoadingSpiner = () => {
  return (
    <div>
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
    </div>
  );
};
