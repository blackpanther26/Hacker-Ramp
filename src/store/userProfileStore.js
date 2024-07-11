import { create } from "zustand"

const useUserProfileStore = create((set)=>({
    userProfile:null,
    setUserProfile:(userProfile)=>set({userProfile}),
    // resetUserProfile:()=>set({userProfile:null})
}))

export default useUserProfileStore