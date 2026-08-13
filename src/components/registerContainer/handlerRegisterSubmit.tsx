import axios from "axios";
import { usePopup } from "../../store/usePopup";
import type { handlerRegisterSubmitType } from "../../type";

export const handlerRegisterSubmit = ({
  firstName,
  secondName,
  email,
  password,
}: handlerRegisterSubmitType): Promise<boolean> => {
  return axios
    .post("https://696cdbeff4a79b31517ff504.mockapi.io/user", {
      firstName,
      secondName,
      email,
      password,
      isAdmin: false,
    })
    .then(() => {
      usePopup.getState().setText("Registration successful!");
      return true;
    })
    .catch((error) => {
      usePopup.getState().setText("Registration failed. Please try again.");
      console.log(error);
      return false;
    });
};
