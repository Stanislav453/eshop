import axios from "axios";
import { usePopup } from "../../store/usePopup";
import type { handlerLogInSubmitType } from "../../type";
import bcrypt from "bcryptjs";

export const handleLogInSubmit = ({
  email,
  password,
}: handlerLogInSubmitType) => {
  axios
    .get(`https://696cdbeff4a79b31517ff504.mockapi.io//user?email=${email}`)
    .then((response) => {
      const user = response.data[0];
      if (user && bcrypt.compareSync(password, user.password)) {
        usePopup.getState().setText("Login successful!");
      } else {
        usePopup.getState().setText("Login failed. Please try again.");
      }
    })
    .catch((error) => {
      usePopup.getState().setText("Login failed. Please try again.");
      console.log(error);
    });
};
