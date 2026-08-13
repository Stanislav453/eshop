import axios from "axios";
import { usePopup } from "../../store/usePopup";
import { useUser } from "../../store/useUser";
import { router } from "../../routes/createRoute";
import type { handlerLogInSubmitType } from "../../type";
import bcrypt from "bcryptjs";

export const handleLogInSubmit = ({
  email,
  password,
}: handlerLogInSubmitType): Promise<boolean> => {
  return axios
    .get(`https://696cdbeff4a79b31517ff504.mockapi.io//user?email=${email}`)
    .then((response) => {
      const user = response.data[0];
      if (user && bcrypt.compareSync(password, user.password)) {
        const { id, firstName, secondName, email, isAdmin } = user;
        useUser
          .getState()
          .setUser({ id, firstName, secondName, email, isAdmin });
        usePopup.getState().setText("Login successful!");
        router.navigate({ to: "/" });
        return true;
      }

      usePopup.getState().setText("Login failed. Please try again.");
      return false;
    })
    .catch((error) => {
      usePopup.getState().setText("Login failed. Please try again.");
      console.log(error);
      return false;
    });
};
