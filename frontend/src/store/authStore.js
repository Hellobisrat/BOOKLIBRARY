import {create} from "zustand";
import axios from 'axios';
const API_URL = 'http://book.local/api';
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
  },
  

 login : async(username,email,password)=>{
    set({isLoading:true,message:null,error:null})
    try {
      const response = await axios.post(`${API_URL}/login`,{
        username,
        password
      }, { withCredentials: true })
      const {user, message}=response.data;
      set({
        user,
        isLoading:false,
        message: response.data.message || "LogIn successful"
      })
      return {user,message}
    } catch (error) {
      set({
        error:error.response.data.message || "Error logging in",
        isLoading:false
      });
      throw error;
      
    }
  },

  fetchUser : async()=>{
    set({fetchingUser:true,error:null})
    try {
      const response = await axios.get(`${API_URL}/fetch-user`, { withCredentials: true });
      set({user: response.data.user,fetchingUser:false})
    } catch (error) {
      set({
         message : error?.response?.data?.message || "Failed to fetch user",
        error:null,
        fetchingUser:false,
        user:null,
        
      })
      throw error;

    }
  },

  logout: async ()=>{
    set({isLoading: true, error:null, message: null});
    try {
      const response = await axios.post(`${API_URL}/logout`);
      const {message} = response.data;
      set({
        message,
        isLoading: false,
        user: null,
        error:null
      });
      return {message}
    } catch (error) {
      set({
        error:error.response.data.message || "Error logging out",
        isLoading: false,
      });
      throw error;
    }
  }
  

}))