import {create} from "zustand";
import axios from 'axios';
const API_URL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;


export const useAuthStore = create((set)=>({
  user:null,
  isLoading:false,
  error:null,
  message:null,
  fetchingUser:true,
  
  signup: async (username,email ,  password)=>{
    set({isLoading:true, message:null})
    try {
      const response = await axios.post(`${API_URL}/signup`,{
        username,
        email,
        password
      });
      set({
        user:response.data.user,
        isLoading:false
      })
    }
      catch (error) {
  const message =
    error?.response?.data?.message || error.message || "Signup failed.";
  set({
    isLoading: false,
    error: message,
  });
  throw error;

    
      
    }
  }
  

}))