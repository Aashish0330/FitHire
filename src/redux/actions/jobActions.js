import axios from "axios";
import { message } from "antd";

export const getAllJobs = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("http://localhost:8080/api/v2/postjob");
    dispatch({ payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editJob = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  const id = values.id;
  try {
    const response = await axios.put(`http://localhost:8080/api/v2/postjob/editjobs/${id}`, values);

    dispatch({ type: "LOADING", payload: false });
    message.success("Job Updated Successfully");
    console.log(response)
    setTimeout(() => {
      window.location.href = "/user/userpostedjobs";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const applyJob = (job) => async (dispatch) => {

  const id = job.id;
  dispatch({ type: "LOADING", payload: true });
  try {
  const response = await axios.put(`http://localhost:8080/api/v2/postjob/jobs/${id}`, job);

    dispatch({ type: "LOADING", payload: false });
    message.success("Job applied Successfully");
    console.log(response)
    localStorage.setItem("applied", JSON.stringify(job));
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};




export const postJob = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("http://localhost:8080/api/v2/postjob",values);
    dispatch({ type: "LOADING", payload: false });
    message.success("Job Posted Successfully");
    console.log(response)
    setTimeout(() => {
      window.location.href = "/user/userpostedjobs";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteJob = (id) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.delete(`http://localhost:8080/api/v2/postjob/jobs/${id}`);
    dispatch({ type: "LOADING", payload: false });
    message.success("Job Deleted Successfully");
    console.log(response)
    setTimeout(() => {
      window.location.href = "/user/userpostedjobs";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

