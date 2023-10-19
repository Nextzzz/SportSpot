import { useNavigate } from 'react-router-dom';
import config from "../../config";

const useChangePage = () => {
  const navigate = useNavigate();
  return ({
    path,
  }) => {
    // console.log(`${config.BASE_FRONTEND_URL}${path}`)
    return navigate(`..${path}`)
  };
};

export default useChangePage;