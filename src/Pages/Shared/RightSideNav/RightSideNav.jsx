import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Q_Zone1 from "../../../assets/qZone1.png"
import Q_Zone2 from "../../../assets/qZone2.png"
import Q_Zone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div className="">
            <div className="p-4 space-y-2 border rounded-y-4 rounded-lg">
        <h1 className="text-2xl font-bold">Login With</h1>
        <button className="btn w-full  btn-outline btn-primary">
          <FaGoogle></FaGoogle>
          With Google
        </button>
        <button className="btn w-full  btn-outline">
          <FaGithub></FaGithub>
          With Github
        </button>
          </div>
          <div className="space-y-2 mt-6">
              <h1 className="text-2xl font-bold ">Find Us On</h1>
              <div className="text-[#706F6F]">
                  <a href="#" className="flex items-center gap-2 p-3 border">
                      <FaFacebook className="text-2xl text-[#3B599C]"></FaFacebook>
                      FaceBook</a>
                  <a href="#" className="flex items-center gap-2 p-3 border">
                      <FaInstagram className="text-2xl text-[#D82D7E] "></FaInstagram>
                      Instagram</a>
                  <a href="#" className="flex items-center gap-2 p-3 border">
                      <FaTwitter className="text-2xl text-[#58A7DE]"></FaTwitter>
                      Twitter</a>
              </div>
          </div>
          <div className="mt-6">
              <h1 className="text-2xl font-bold">Q-Zone</h1>
              <img src={Q_Zone1} alt="" />
              <img src={Q_Zone2} alt="" />
              <img src={Q_Zone3} alt="" />
          </div>
    </div>
  );
};

export default RightSideNav;
