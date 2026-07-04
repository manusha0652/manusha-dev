import { Navigate, Route, Routes } from "react-router-dom";
import PageShell from "./components/PageShell";
import HomePage from "./pages/HomePage";
import LearningTopicPage from "./pages/LearningTopicPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageShell>
            <HomePage />
          </PageShell>
        }
      />
      <Route path="/learning/:slug" element={<LearningTopicPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
