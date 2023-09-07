import Telegram from "./assets/Telegram";
import Instagram from "./assets/Instagram";
import logo from "./assets/jt_logo.jpg";

export default function Footer() {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container mx-auto py-10">
        <div className="flex justify-between">
          <div className="w-1/4">
            <div className="w-20 h-20">
              <img className="w-full h-full" src={logo} alt="JahonTillari" />
            </div>
            <p className="text-lg font-medium mt-2">
              Make the world a better place through the best learning.
            </p>
            <div className="flex mt-5">
              <a href="@mmm_0126">
                <Telegram />
              </a>
              <a href="/*">
                <Instagram />
              </a>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
