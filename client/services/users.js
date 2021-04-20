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
    
  }
 
}
export const signUp = async (Credential) => {
  try {
    const resp = await api.post("/users/sign-up",Credential);
    localStorage.setItem("token", resp.data.token);
  } catch (error) {
    throw error;
  }
};

export const signIn = async (Credential) => {
  try {
    const resp = await api.post("/users/sign-in", Credential);
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
