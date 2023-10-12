import axios from "axios";


const URL = import.meta.env.VITE_URL;

console.log(URL);


export const getSubscribers = async () => {
  try {
    const res=await axios.get(`${URL}/api/subscription`);
    return res.data;
  } catch (error) {
    console.log("Error while calling getSubscriber API", error);
  }
};

export const subscribe = async (subscriber:any) => {
  const userData = { chatId: subscriber.userId, location: subscriber.city};
  try {
    return await axios.post(`${URL}/subscribe`, userData);
  } catch (error) {
    console.log("Error while subcribing", error);
  }
};

export const unsubscribe = async(userId:any) =>{
  const userData = {chatId: userId};
  try {
    const res= await axios.post(`${URL}/api/subscription/unsubscribe`, userData);

    return res.data;
  } catch (error) {
    console.log("Error while unsubcribing", error);
  }
}

export const  setApi=async(api:any)=>{
   try{
    const res= await axios.post(`${URL}/api/subscription/setApi`, api);

    return res.data;
   }
   catch(err){
    return err;
   }
}

export const getOneSubscriber = async(userId:any) => {
  try{
    console.log("Fetching detail of", userId);
    return await axios.get(`${URL}/${userId}`);
  } catch (error) {
    console.log("Error while getting one subscriber detail", error);
  }
}



export const setuser = async(userdata:any) =>{
  
  console.log(userdata);
  
  try {
    const res= await axios.post(`${URL}/api/subscription/setUser`, userdata);

    return res.data;
  } catch (error) {
    console.log("Error while unsubcribing", error);
  }
}


