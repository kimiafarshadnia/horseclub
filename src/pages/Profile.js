import SideBar from "../components/SideBar";
import { Outlet, useNavigate } from "react-router";


function Profile() {
 const navigate = useNavigate();
 navigate('/blogs')
  return (
    <>
      <p>my name is kimia farshadnia </p>

      <SideBar />
      <Outlet/>
    </>
  );
}

export default Profile;
