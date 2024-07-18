import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState();
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      // return setErrorMessage("모든 영역을 채워주세요!");
      dispatch(signInFailure("모든 영역을 채워주세요!"));
    }

    // 유효성 검사

    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success == false) {
        // return setErrorMessage(data.message);
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false);
      dispatch(signInFailure(error));
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen bg-white">
        <main className="flex flex-col items-center flex-grow pl-4 mt-12 sm:px-6 lg:px-8">
          <div className="w-screen max-w-lg p-12 transition duration-500 transform bg-white border-2 rounded-3xl">
            <h2 className="mb-8 text-4xl text-gray-600 font-pretendard font-[900] text-center">
              로그인
            </h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 font-pretendard"
                >
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="이메일을 입력해주세요!"
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-1 transition duration-500 border border-gray-300 rounded-md focus:outline-none focus:border-maingreen sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-700 font-pretendard"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="비밀번호를 입력해주세요!"
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-1 transition duration-500 border border-gray-300 rounded-md focus:outline-none focus:border-maingreen sm:text-sm"
                />
              </div>
              {errorMessage && (
                <div className="p-2 px-4 mt-5 text-red-500 bg-orange-100 font-pretendard">
                  {errorMessage}
                </div>
              )}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center w-full px-4 py-3 text-sm text-white transition duration-500 transform border border-transparent rounded-md font-pretendard bg-maingreen focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  {loading ? (
                    <span className="p-2">Loading...</span>
                  ) : (
                    "가입완료"
                  )}
                </button>
              </div>
            </form>
            <OAuth />

            <div className="mt-4">
              <span className="font-pretendard">계정이 없나요?</span>
              <Link to="/signup" className="ml-2 text-blue-600 font-pretendard">
                회원가입하기
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
