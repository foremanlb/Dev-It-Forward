import api from "./apiConfig";
export const signUp = async (Credential) => {
  try {
    const resp = await api.post("/sign-up", Credential);
    localStorage.setItem("token", resp.data.token);
  } catch (error) {
    throw error;
  }
};

export const signIn = async (Credential) => {
  try {
    const resp = await api.post("/sign-in", Credential);
    localStorage.setItem("token", resp.data.token);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = await localStorage.getItem("token");
  if (token) {
    const res = await api.get("/verify");
    return res.data;
  } else {
    return false;
  }
};
