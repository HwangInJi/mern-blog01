import { Link } from "react-router-dom";
import { BsMoonStars } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex items-center justify-between w-3/5 m-auto mt-8 mb-8 font-pretendard">
        <Link to="/" className="text-3xl font-cafe24lovingu">
          INJI
        </Link>

        <div className="text-xl font-[900]">
          <ul className="flex gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/signin">SignIn</Link>
            </li>

            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link className="w-5 h-5" onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? <BsMoonStars /> : <FaMoon />}
          </Link>
          <Link className="w-5 h-5">
            <CiMenuKebab />
          </Link>
          {currentUser ? (
            <>
              <img
                className="rounded-full w-11 h-11"
                src={currentUser.profilePicture}
              />
              <div className="absolute flex flex-col p-4 mr-32 border top-20 right-5 w-60">
                <span>{currentUser.username}</span>
                <span>{currentUser.email}</span>
                <Link to={"/dashboard?tab=profile"}>Profile</Link>
                <span>로그아웃</span>
              </div>
            </>
          ) : (
            <Link to={"/signin"}>로그인</Link>
          )}
        </div>
      </div>

      <div className="w-4/6 m-auto border-b"></div>
    </>
  );
}
