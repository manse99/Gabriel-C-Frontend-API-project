import api from "./apiConfig.js";

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/users/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/id/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser= async (id) => {
  try {
    const response = await api.delete(`/users/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};