import axios from "axios";
import { CiCircleAlert, CiCircleInfo, CiWarning } from "react-icons/ci";
import { ErrorItem } from "./ErrorItem";

type ErrorActiveProps = {
  error: Error;
};

export const ErrorActive = ({ error }: ErrorActiveProps) => {
  if (!error) return null;

  console.log("%cApi answer:", "color: red; font-weight: bold;", error.message);

  if (axios.isAxiosError(error)) {
    const status = error.response?.status;

    if (!status) {
      return (
        <ErrorItem
          icon={CiCircleAlert}
          color="text-red-500"
          message="Connection problem. Please try it again."
        />
      );
    }

    if (status >= 300 && status < 400) {
      return (
        <ErrorItem
          icon={CiCircleInfo}
          color="text-blue-500"
          message="Information update in progress. Please refresh if needed."
        />
      );
    }

    if (status >= 400 && status < 500) {
      return (
        <ErrorItem
          icon={CiWarning}
          color="text-yellow-500"
          message="We could not process your request. Please check the page or try
            again."
        />
      );
    }

    if (status >= 500) {
      return (
        <ErrorItem
          icon={CiCircleAlert}
          color="text-red-500"
          message="Our server is having problems right now. Please try again later."
        />
      );
    }
  } else {
    <div className="text-red-500">
      We have a problem and are trying to resolve it. Please refresh the page
      later.
    </div>;
  }
};
