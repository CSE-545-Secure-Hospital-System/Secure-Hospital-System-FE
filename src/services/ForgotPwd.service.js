import { SERVER_URL } from "../helpers/Constants";

const axios = require("axios");

export const requestOTP = async (data) => {
  const response = await axios.post(
    SERVER_URL + "/api/auth/forgotpassword",
    data,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).catch(function(error){
    if(error.response){
      alert(error.response.data);
    }
  })

  return response;
};

export const confirmOTP = async (data) => {
  const response = await axios.post(
    SERVER_URL + "/api/auth/forgotpassword/confirmotp",
    data,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).catch(function(error){
    if(error.response){
      alert(error.response.data);
    }
  })
  return response;
};
