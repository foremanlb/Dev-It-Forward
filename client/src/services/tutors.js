import api from "./apiConfig"

export const getTutors = async () => {
  try {
    const response = await api.get("/tutors")
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTutor = async (id) => {
  try {
    const response = await api.get(`/tutors/tutor/${id}`)
    return response.data;
  } catch (error) {
    throw error;
  }

};

export const updateTutor = async (id, data) => {
  const response = await api.put(`/tutors/${id}`, data)
  const updatedTutor = response.data;
  return updatedTutor;
};

export const signUpTutor = async (credentials) => {
  try {
    const response = await api.post("/tutors/sign-up", credentials);
    localStorage.setItem("token", response.data.token)
  } catch (error) {
    throw error;
  }
};

export const signInTutor = async (credentials) => {
  try {
    const response = await api.post("/tutors/sign-in", credentials);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyTutor = async () => {
  const token = await localStorage.getItem("token");
  if (token) {
    const response = await api.get("/tutors/verify");
    return response.data;
  } else {
    return false;
  }
};

export const deleteTutor = async (id) => {
  const token = await localStorage.get("token");
  if (token) {
    const deletedTutor = await api.delete(`/tutors/${id}`)
    return deletedTutor;
  }
};

export const changeTutorPassword = async (id,data) => {
  const token = await localStorage.get("token");
  if (token) {
    const updatedPassword = await api.put(`/tutors/password-change/${id}`, data)
    return updatedPassword;
  }
};

