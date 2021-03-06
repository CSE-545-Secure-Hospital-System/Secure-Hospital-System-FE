import { SERVER_URL } from "../helpers/Constants";

const axios = require("axios");

export const getLabReportsById = async (patientId) => {
  const response = await axios.get(SERVER_URL + "/api/labResults/getAllLabReportsByPatientId?patientId=" + patientId, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
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


export const getAllLabReports = async (patientId) => {
  const response = await axios.get(SERVER_URL + "/api/labResults/getAllLabReports" , {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};


export const updateLabReportByPatientId = async (data) => {
  const response = await axios.post(SERVER_URL + "/api/labResults/updateLabReportByPatientId", data , {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

