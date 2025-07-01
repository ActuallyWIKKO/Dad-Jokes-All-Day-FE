import ManageJokes from "../components/Admin/ManageJokes";
import { Footer } from "../components/Footer/Footer";
import {AdminHeader} from "../components/Header/AdminHeader"
export const Admin:React.FC = () => {
  return (
  <>
  <AdminHeader />
  <ManageJokes/>
  <Footer />
  </>
) 
};
export default Admin;