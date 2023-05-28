import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { getUser } from "../../features/user/UserSlice";
import { useGetMeQuery } from "../../services/api/UserApi";
import FullScreenLoader from "../FullScreenLoader/FullScreenLoader";
// import { userApi } from '../../redux/api/Userapi';

const RequireUser = ({ children }) => {
  const { isFetching, isLoading } = useGetMeQuery();
  const [cookies] = useCookies(["logged_in"]);
  const user = useSelector(getUser)?.data;

  if (isLoading || isFetching) {
    // Loading state, show loader
    return <FullScreenLoader />;
  }

  if (user || cookies?.logged_in) {
    // User is already logged in
    return children;
  } else return null;
};

export default RequireUser;
