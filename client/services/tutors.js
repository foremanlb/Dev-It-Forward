import api from "./apiConfig"

export const getTutors = async () => {
  const response = await api.get("/tutors")
  const tutors = response.data;
  return tutors;
};

export const getTutor = async (id) => {
  const response = await api.get(`/tutors/${id}`)
  const tutor = response.data;
  return tutor;

};

export const updateTutor = async (id, data) => {
  const response = await api.put(`/tutors/${id}`, data)
  const updatedTutor = response.data;
  return updatedTutor;
};

export const signUp = async (credentials) => {
  try {
    const response = await api.post("/sign-up", credentials);
    localStorage.setItem("token", response.data.token)
  } catch (err) {
    throw err;
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await api.post("/sign-in", credentials);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw err;
  }
};

export const verifyTutor = async () => {
  const token = await localStorage.getItem("token");
  if (token) {
    const response = await api.get("/verify");
    return response.data;
  } else {
    return false;
  }
};

export const deleteTutor = async (id) => {
  const token = await localStorage.get("token");
  if (token) {
    const deletedTutor = await apt.delete(`/${id}`)
    return deletedTutor;
  }
};

export const changePassword = async (id,data) => {
  const token = await localStorage.get("token");
  if (token) {
    const updatedPassword = await api.put(`/password-change/${id}`)
    return updatedPassword;
  }
};

