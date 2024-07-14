import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import GroupPage from "./pages/GroupPage/GroupPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <>
      <PageLayout>
        <Routes>
          <Route
            path="/"
            element={authUser ? <HomePage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!authUser ? <AuthPage /> : <Navigate to="/" />}
          />
          <Route path="/:username" element={<ProfilePage />} />
          <Route
            path="/:username/group"
            element={authUser ? <GroupPage /> : <Navigate to="/" />}
          />
          <Route
            path="/:username/group/create"
            element={authUser ? <CreatePage /> : <Navigate to="/" />}
          />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
