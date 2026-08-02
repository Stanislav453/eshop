import axios from "axios";
import { usePopup } from "../../store/usePopup";

type handlerRegisterSubmitType = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
};

export const handlerRegisterSubmit = ({
  firstName,
  secondName,
  email,
  password,
}: handlerRegisterSubmitType) => {
  axios
    .post("https://696cdbeff4a79b31517ff504.mockapi.io/user", {
      firstName,
      secondName,
      email,
      password,
      isAdmin: false,
    })
    .then(() => {
      usePopup.getState().setText("Registration successful!");
    })
    .catch((error) => {
      usePopup.getState().setText("Registration failed. Please try again.");
      console.log(error);
    })
    .finally(() => {
      console.log("Request completed");
    });
};
