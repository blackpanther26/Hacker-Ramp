import { useEffect, useState } from "react"
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";


const useGetUserProfileById = (userId) => {
  const [isLoading,setIsLoading] =useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const showToast = useShowToast();
  useEffect(()=>{
    const getUserProfile = async () => {
      setIsLoading(true);
      setUserProfile(null);
      try {
        const userRef = doc(firestore, "users", userId);
        const docSnap = await getDoc(userRef);
        if (!docSnap.exists()) {
          showToast("Error", "User not found", "error");
          return;
        }
        setUserProfile(docSnap.data());
      } catch (error) {
        showToast("Error", "Failed to load user profile", "error");
      } finally {
        setIsLoading(false);
      }
    }
    getUserProfile();
  },[showToast,setUserProfile,userId])
  return { isLoading, userProfile ,setUserProfile};
}

export default useGetUserProfileById