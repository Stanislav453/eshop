import axios from "axios";

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
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Request completed");
    });
};
