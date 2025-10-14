import { Navigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const ADMIN_UUID = "c1adad23-ad50-420a-91a2-33eebbfb4f6f";

export default function ProtectedAdminRoute({ user }) {
  if (!user || user.id !== ADMIN_UUID) return <Navigate to="/admin/login" />;
  return <AdminDashboard user={user} />;
}
