import { useState } from "react";
import LoginNavBar from "../Components/NavbarLogin";
import mainLogo from "../assets/isometric-vr-game-headset-for-playing-video-games.gif";

export default function LoginPage() {
  const [visible, setVisible] = useState(false);
  const [register, setRegsiter] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/login`, {
        Email,
        Password,
      });
      // console.log(data.access_token)
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("email", Email);
      if (localStorage.access_token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (!localStorage.access_token) {
        navigate("/login");
      }
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      setRegsiter(false);
      setVisible(true);
    } catch (error) {}
  }

  return (
    <>
      <LoginNavBar />
      {/* <div className="w-full h-screen bg-slate-900 flex bg-[url('https://upload.wikimedia.org/wikipedia/en/9/9d/A_selection_of_Roblox_games.png')] bg-contain">
        <div className="relative z-1 h-[90vh] w-full bg-slate-200 mt-[10vh] bg-opacity-90 bg-black flex">
            <div className="w-[50%] h-full bg-slate-100">
                <div className="w-[90%] h-[50%] pt-10  mt-[15vh] ml-[5vw] bg-slate-500">
                <span className="span1 text-7xl">Let The Game</span>
                <p className="span2 text-8xl ml-[vw]">Begin !!</p>
                <p className="mt-[8%] text-1xl text-white">Are you ready to dive into a captivating gaming experience like no other? Get excited because Rina Fathan and Dylan have teamed up to bring you a groundbreaking game that’s set to redefine your gaming adventures! </p>
                </div>
                <div className="w-[90%] h-[30%] flex ml-[5vw]">
                    <div className="w-[50%] h-auto flex items-center justify-center">
                    <button className="border border-slate-200 w-[50%] h-[80%] border-2 rounded-lg" onClick={()=>{setVisible(true)}}>Login</button>
                    </div>
                     <div className="w-[50%] h-auto flex items-center ">
                    <button className="border border-slate-200 w-[50%] h-[80%] border-2 rounded-lg" onClick={()=>{setRegsiter(true)}}>Register</button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-full flex items-start justify-center">
                <img className="logoFoto h-[80%] w-[80%] object-cover" src={mainLogo} />
            </div>
        </div>
        {visible && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex justify-center items-center">
            <div className="backdrop-blur-xl h-[50vh] w-[25vw] rounded-lg border border-slate-400"> 
            <div className="flex justify-center w-full h-[20%] flex">
              <div className="w-[80%] h-full text-3xl text-slate-300 flex justify-around ml-[17%] mt-2" id="font1">Login Now!</div>
              <div className="w-[20%] h-full flex justify-end pr-4 text-slate-600 cursor-pointer" onClick={()=>{setVisible(false)}}>x</div>
            </div>
            <form className="w-full h-[80%]">
              <div className="w-[90%] h-[34%] ml-4">
                <label className="flex justify-center text-2xl text-slate-50 mb-2" id="">Email</label>
                <input 
                type="email"
                placeholder="index@gmail.com..."
                className="w-full bg-transparent h-[40%] border border-slate-50 rounded-lg px-3 text-slate-50"
                onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="w-[90%] h-[33%] ml-4">
                <label className="flex justify-center text-2xl text-slate-50 mb-2"> Password</label>
                <input 
                 type="password"
                 placeholder="*********"
                 className="w-full bg-transparent h-[40%] border border-slate-400 rounded-lg px-3"
                 onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <div className="h-[1px] bg-slate-100 w-[80%] ml-[9%]" />
              <div className="w-full h-[33%] flex justify-center items-center">
                <button className="h-[40%] bg-slate-100 w-[50%] border rounded-lg text-1xl text-slate-600" onClick={handleLogin}>Login</button>
              </div>
            </form>
           
            </div>
          </div>
        )}
           {register && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex justify-center items-center">
            <div className="backdrop-blur-xl h-[50vh] w-[25vw] rounded-lg border border-slate-400"> 
            <div className="flex justify-center w-full h-[20%] flex">
              <div className="w-[80%] h-full text-3xl text-slate-300 flex justify-around ml-[17%] mt-2" id="font1">Register Now!</div>
              <div className="w-[20%] h-full flex justify-end pr-4 text-slate-600 cursor-pointer" onClick={()=>{setRegsiter(false)}}>x</div>
            </div>
            <form className="w-full h-[80%]">
              <div className="w-[90%] h-[34%] ml-4">
                <label className="flex justify-center text-2xl text-slate-50 mb-2" id="">Email</label>
                <input 
                type="email"
                placeholder="index@gmail.com..."
                className="w-full bg-transparent h-[40%] border border-slate-50 rounded-lg px-3 text-slate-50"
                onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="w-[90%] h-[33%] ml-4">
                <label className="flex justify-center text-2xl text-slate-50 mb-2"> Password</label>
                <input 
                 type="password"
                 placeholder="*********"
                 className="w-full bg-transparent h-[40%] border border-slate-400 rounded-lg px-3"
                 onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <div className="h-[1px] bg-slate-100 w-[80%] ml-[9%]" />
              <div className="w-full h-[33%] flex justify-center items-center">
                <button className="h-[40%] bg-slate-100 w-[50%] border rounded-lg text-1xl text-slate-600" onClick={handleRegister}>Register</button>
              </div>
            </form>
           
            </div>
          </div>
        )}
        </div>  */}
      <div className="w-full h-screen bg-slate-900 flex bg-[url('https://upload.wikimedia.org/wikipedia/en/9/9d/A_selection_of_Roblox_games.png')] bg-cover bg-center">
        <div className="relative z-1 h-full w-full bg-black mt-0 bg-opacity-90 bg-black flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-full p-4 md:p-10 flex flex-col justify-center items-start">
            <div className="w-full  p-4 md:p-8 rounded-lg">
              <span className="span1 text-4xl md:text-7xl">Let The Game</span>
              <p className="span2 text-5xl md:text-8xl">Begin !!</p>
              <p className="mt-10 text-sm md:text-lg text-white">
                Are you ready to dive into a captivating gaming experience like
                no other? Get excited because Rina Fathan and Dylan have teamed
                up to bring you a groundbreaking game that’s set to redefine
                your gaming adventures!
              </p>
            </div>
            <div className="w-full mt-6 flex justify-center items-center gap-10 pr-[7vw] md:py-3 md:text-lg md:text-xl">
              <button
                className=" border border-slate-200 rounded-lg py-2 px-1 md:py-3 md:px-6 text-lg md:text-x text-slate-300"
                onClick={() => setVisible(true)}
              >
                Login
              </button>
              <button
                className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl mt-4 md:mt-0 text-slate-300"
                onClick={() => setRegsiter(true)}
              >
                Register
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <img
              className="logoFoto w-4/4 md:w-4/5 h-[70%] object-cover"
              src={mainLogo}
              alt="Main Logo"
            />
          </div>
        </div>
        {visible && (
          <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex justify-center items-center z-20">
            <div className="backdrop-blur-xl h-[50vh] w-[25vw] rounded-lg border border-slate-400">
              <div className="flex justify-center w-full h-[20%] flex">
                <div
                  className="w-[80%] h-full text-3xl text-slate-300 flex justify-around ml-[17%] mt-2"
                  id="font1"
                >
                  Login Now!
                </div>
                <div
                  className="w-[20%] h-full flex justify-end pr-4 text-slate-600 cursor-pointer"
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  x
                </div>
              </div>
              <form className="w-full h-[80%]">
                <div className="w-[90%] h-[34%] ml-4">
                  <label
                    className="flex justify-center text-2xl text-slate-50 mb-2"
                    id=""
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="index@gmail.com..."
                    className="w-full bg-transparent h-[40%] border border-slate-50 rounded-lg px-3 text-slate-50"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="w-[90%] h-[33%] ml-4">
                  <label className="flex justify-center text-2xl text-slate-50 mb-2">
                    {" "}
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="*********"
                    className="w-full bg-transparent h-[40%] border border-slate-400 rounded-lg px-3"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="h-[1px] bg-slate-100 w-[80%] ml-[9%]" />
                <div className="w-full h-[33%] flex justify-center items-center">
                  <button
                    className="h-[40%] bg-slate-100 w-[50%] border rounded-lg text-1xl text-slate-600"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {register && (
          <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex justify-center items-center z-20">
            <div className="backdrop-blur-xl h-auto w-[25vw] rounded-lg border border-slate-400 p-6">
              <div className="flex justify-between items-center w-full mb-4">
                <div
                  className="text-3xl text-slate-300 font-semibold text-center w-full"
                  id="font1"
                >
                  Register Now!
                </div>
                <div
                  className="text-2xl text-slate-600 cursor-pointer absolute top-4 right-4"
                  onClick={() => setRegsiter(false)}
                >
                  x
                </div>
              </div>
              <form className="w-full" onSubmit={handleRegister}>
                <div className="mb-6">
                  <label className="block text-xl text-slate-50 mb-2 text-center">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username..."
                    className="w-full bg-transparent h-[40px] border border-slate-50 rounded-lg px-3 text-slate-50"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-xl text-slate-50 mb-2 text-center">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="index@gmail.com..."
                    className="w-full bg-transparent h-[40px] border border-slate-50 rounded-lg px-3 text-slate-50"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-xl text-slate-50 mb-2 text-center">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="*********"
                    className="w-full bg-transparent h-[40px] border border-slate-50 rounded-lg px-3 text-slate-50"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="h-[1px] bg-slate-100 w-full mb-6" />
                <div className="w-full flex justify-center">
                  <button
                    className="h-[40px] bg-slate-100 w-[50%] border rounded-lg text-xl text-slate-600"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
