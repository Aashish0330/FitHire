import axios from "axios";
import { message } from "antd";


export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("http://localhost:8080/api/v1/register",user);
    message.success("User Registered Successfully");
    console.log(user);
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("something went wrong , please try later");
    dispatch({ type: "LOADING", payload: false });
  }
};


export const loginUser = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const user = await axios.post("http://localhost:8080/api/v1/login", values);
    message.success("Login success");
    console.log(user);
    localStorage.setItem("trainer", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.href = "/";
      console.log(user);
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("invalid credentials");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const loginUserrole = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const user = await axios.post("http://localhost:8080/api/v1/register", values);
    message.success("Login success");
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.href = "/user/userpostedjobs";
      console.log(user);
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("invalid credentials");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const loginAdmin = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const user = await axios.post("http://localhost:8080/api/v1/adminlogin", values);
    message.success("Login for Admin success");
    console.log(user);
    localStorage.setItem("admin", JSON.stringify(user.data));
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.href = "/admin/adminjobs";
      console.log(user);
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Invalid Credentials");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("http://localhost:8080/api/v1/register");
    dispatch({ type: "GET_ALL_USERS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
    message.success('Logged In');
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const getUser = (user) => async (dispatch) => {
  const id = user.id;
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/register/${id}`);
    dispatch({ type: "GET_ALL_USERS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updatePostedJob = (user) => async (dispatch) => {

  const user = JSON.parse(localStorage.getItem("user"))
  const id = user.id;
  dispatch({ type: "LOADING", payload: true });
  try {
  const response = await axios.put(`http://localhost:8080/api/v1/register/${id}`, user);

    dispatch({ type: "LOADING", payload: false });
    message.success("Job Posted Successfully");
    console.log(response)
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updateUser = (user) => async (dispatch) => {
  const name  = user.name;
  dispatch({ type: "LOADING", payload: true });

  try {
    const user = await axios.put(`http://localhost:8080/api/v1/register/profile/${name}`,user);
    message.success("User updated successfully");
    localStorage.setItem("user", JSON.stringify(user.data));
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error)
    message.error("something went wrong , please try later");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.delete(`http://localhost:8080/api/v1/register/delete/${id}`);
    dispatch({ type: "LOADING", payload: false });
    message.success("User Deleted Successfully");
    console.log(response)
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};