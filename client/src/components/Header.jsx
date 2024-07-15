import { Link } from "react-router-dom";
import { BsMoonStars } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

export default function Header() {
  return (
    <>
      <div className="w-3/5 flex justify-between items-center m-auto font-pretendard mt-8 mb-8">
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

        <div className="flex gap-4 justify-end items-center">
          <Link>
            <BsMoonStars className="w-5 h-5" />
          </Link>
          <Link>
            <CiMenuKebab className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="border-b w-4/6 m-auto"></div>
    </>
  );
}
