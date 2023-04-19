import apiClient from "./client";

const login = async (email, password) => apiClient.post('/auth',{ email,password});
const register = async(userInfo) => apiClient.post('/users', { userInfo }) 

export default {
    login,
    register
}
