import { useState } from "react"
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/postStore";


const usePostComment = () => {
  const [isCommenting,setIsCommenting] = useState(false);
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  const addComment = usePostStore(state=>state.addComment)
  const handlePostComment = async (postId,comment) => {
    if (isCommenting) return;
    if (!authUser) return showToast("Error","You must be logged in","error");
    setIsCommenting(true)
    const newComment = {
        comment,
        createdAt:Date.now(),
        createdBy: authUser.uid,
        postId
    }
    try {
        await updateDoc(doc(firestore,"posts",postId),{comments:arrayUnion(newComment)});
        addComment(postId,newComment)
    } catch (error) {
        showToast("Error", "Failed to post comment", "error");
    } finally {
        setIsCommenting(false);
    }
  }
  return { handlePostComment, isCommenting };
}

export default usePostComment