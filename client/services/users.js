
import api from "./apiConfig";
export const getUsers = async () => {
  try {
    const res = await api.get("/users")
    return res.data;
  } catch (error) {
    throw error
  }
}
export const getUser = async (id) => {
  try {
    let res = await api.get(`/users/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
 
}
export const updatedUser = async (id,user) => {
  try {
    let res = await api.put(`/users/${id}`, user)
    return res.data;
  } catch (error) {
    throw error;
  }
}
export const deleteUser = async (id) => {
  const token = await localStorage.get("token")
  if (token) {
   const deletedUser = await api.delete(`/users/${id}`);
    return deletedUser;
  }
}

export const signUpUser = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-up",credentials);
    localStorage.setItem("token", resp.data.token);
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = await localStorage.getItem("token");
  if (token) {
    const res = await api.get("/users/verify");
    return res.data;
  } else {
    return false;
  }
};
export const changeUserPassword = async () => {
  const token = await localStorage.getItem('token');
  if (token) {
    const res = await api.put("/users/password-change/:id");
    return res.data
  }
  else
    return false
  
}
