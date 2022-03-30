const axios = require("axios");

const SERVER_URL = "http://localhost:8080";

export const getLabReportsById = async (patientId) => {
  const response = await axios.get(SERVER_URL + "/api/labResults/getAllLabReportsByPatientId?patientId=" + patientId, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  return response;
};

export const createDiagnosis = async (data) => {
  const response = await axios.post(SERVER_URL + "/api/diagnosis/createDiagnosis", data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response;
};
