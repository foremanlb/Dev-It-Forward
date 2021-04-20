import api from "./apiConfig";
export const signUp = async (Credential) => {
  try {
    const resp = await api.post('/sign-up', Credential);
    localStorage.setItem("token",resp.data.token)
  } catch (error) {
    throw error;
  }
}