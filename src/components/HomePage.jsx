import landing from "../assets/background.jpg";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { GrContactInfo } from "react-icons/gr";
import { BsInfoLg } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineContactPhone, MdEmail } from "react-icons/md";
import { FaQuestion, FaSquarePhone, FaLocationDot } from "react-icons/fa6";

function HomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-32 overflow-x-hidden scroll-smooth bg-black">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full h-20 bg-white/15 backdrop-blur-md flex justify-between items-center px-10 z-50">
        <div className="logo">
          <h1 className="text-white font-bold text-2xl"></h1>
        </div>
        <div className="flex gap-3 absolute right-24">
          <button className="px-7 py-3 border-2 border-black rounded-full font-bold text-white hover:bg-green-500 transition-transform transform hover:scale-105">
            SIGN IN
          </button>
          <button className="px-7 py-3 border-2 border-black rounded-full font-bold text-gray-400 hover:bg-white transition-transform transform hover:scale-105">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Landing Section */}
      <div className="flex flex-col items-center mt-10">
        <img alt="Landing" className="w-full max-w-3xl mb-2" />
        <p className="text-white text-2xl font-bold text-center tracking-wider mb-8">
          YOUR CITY, YOUR VOICE, YOUR HUB
        </p>
      </div>

      {/* Icons */}
      <div className="grid grid-cols-3 grid-rows-2 gap-10 justify-center items-center w-11/12 max-w-xl bg-white/15 backdrop-blur-md p-12 rounded-xl shadow-lg mb-12 min-h-[25rem]">
        <div className="flex flex-col items-center cursor-pointer text-white text-center hover:scale-110 transform transition">
          <HiMiniPencilSquare size={50} />
          <p>Lodge Query</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-white text-center hover:scale-110 transform transition">
          <GrContactInfo size={50} />
          <p>Lodge Complaint</p>
        </div>
        <a href="#about-us" className="flex flex-col items-center text-white text-center hover:scale-110 transform transition">
          <BsInfoLg size={50} />
          <p>About Us</p>
        </a>
        <a href="#notice-section" className="flex flex-col items-center text-white text-center hover:scale-110 transform transition">
          <IoIosNotifications size={50} />
          <p>Notice</p>
        </a>
        <a href="#contact-us" className="flex flex-col items-center text-white text-center hover:scale-110 transform transition">
          <MdOutlineContactPhone size={50} />
          <p>Contact Us</p>
        </a>
        <div className="flex flex-col items-center cursor-pointer text-white text-center hover:scale-110 transform transition">
          <FaQuestion size={50} />
          <p>FAQ</p>
        </div>
      </div>

      {/* About Us */}
      <div id="about-us" className="text-center max-w-[1300px] px-4 mb-16">
        <h2 className="text-white text-4xl font-bold mb-4">ABOUT US</h2>
        <div className="w-24 h-1.5 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-orange-500 rounded"></div>
        <p className="text-white text-xl font-semibold">
          MunicipalHub is a comprehensive, digital platform designed to enhance the efficiency, transparency,
          and accessibility of government services for citizens, while improving operational effectiveness for staff and administrators.
          It builds on the conceptual framework by implementing real-time digital processes, automation, and integrated data management.
        </p>
      </div>

      {/* Notice Board */}
      <div id="notice-section" className="text-center max-w-[1500px] w-full mb-16">
        <h3 className="text-white text-4xl font-bold mb-4">NOTICE BOARD</h3>
        <div className="w-24 h-1.5 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-orange-500 rounded"></div>
        <div className="grid grid-cols-2 gap-8 px-10">
          {/* Table */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 shadow-md text-white">
            <h3 className="text-2xl text-center mb-4">General Notices</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-cyan-400 px-3 py-2">Date</th>
                  <th className="border-b-2 border-cyan-400 px-3 py-2">Notice</th>
                  <th className="border-b-2 border-cyan-400 px-3 py-2">Ward</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["10 Sept", "Council meeting at 10 AM", "Ward 5"],
                  ["12 Sept", "Water supply maintenance", "Ward 3"],
                  ["15 Sept", "Planned loadshedding", "Ward 1"],
                  ["17 Sept", "Emergency electricity repair", "Ward 7"],
                  ["26 Sept", "Water supply disruption", "Ward 3"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/30">
                    <td className="px-3 py-2">{row[0]}</td>
                    <td className="px-3 py-2">{row[1]}</td>
                    <td className="px-3 py-2">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Image Cards */}
          {[0, 1, 2].map((i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-3 shadow-md flex flex-col items-center">
            {/* Placeholder Box */}
            <div className="w-full h-52 bg-gray-500/30 rounded-lg mb-2 flex items-center justify-center">
              <span className="text-white text-lg">Image Placeholder</span>
            </div>
            <p className="text-white text-center text-sm">
              {i === 0
                ? "The transformer at Mabopane is being replaced. Restoration time will be communicated"
                : i === 1
                ? "Fixing the transformer at Soshanguve, Block-XX, estimated time until completion is 19:30"
                : "Water tanks are deployed in Hammanskraal due to water outages."}
            </p>
          </div>
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <div id="contact-us" className="text-center max-w-[800px] mb-16 px-4">
        <h2 className="text-white text-4xl font-bold mb-4">CONTACT US</h2>
        <div className="w-24 h-1.5 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-orange-500 rounded"></div>
        <p className="text-white text-lg mb-2">For any queries or assistance, reach out to us:</p>
        <p className="text-white text-lg flex items-center justify-center gap-2 mb-1"><MdEmail size={30} /> Email: support@municipalhub.gov.za</p>
        <p className="text-white text-lg flex items-center justify-center gap-2 mb-1"><FaSquarePhone size={30} /> Phone: +27 12 345 6789</p>
        <p className="text-white text-lg flex items-center justify-center gap-2"><FaLocationDot size={30} /> Address: 2 Aubrey Matlakala St, Soshanguve, 0152</p>
      </div>

      {/* Footer */}
      <div className="w-full bg-white/15 backdrop-blur-md text-center py-2 text-white text-sm">
        &copy; 2025 MunicipalHub. All rights reserved.
      </div>
    </div>
  );
}

export default HomePage;
