import { useTranslation } from "react-i18next";
import Location from "./assets/Location";
import Mail from "./assets/Mail";
import Phone from "./assets/Phone";
import logo from "./assets/jt_logo.jpg";

export default function Footer() {
  const { t } = useTranslation("translation");

  return (
    <div className="bg-blue-900 text-white">
      <div className="container mx-auto py-10 px-5">
        <div className="flex flex-wrap justify-between">
          <div className="w-1/2 sm:w-1/4">
            <div className="w-20 h-20">
              <a href="/">
                <img className="w-full h-full" src={logo} alt="JahonTillari" />
              </a>
            </div>
            <p className="text-base sm:text-lg font-medium mt-2">{t("mtt")}</p>
          </div>
          <div>
            <ul>
              <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                <a href="#pg1">{t("nav1")}</a>
              </li>
              <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                <a href="#pg2">{t("nav2")}</a>
              </li>
              <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                <a href="#pg3">{t("nav3")}</a>
              </li>
              <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                <a href="#pg4">{t("nav4")}</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="flex items-center gap-1 text-lg">
                <Phone /> +998 94 157 1656
              </li>
              <li className="flex items-center gap-1 text-lg">
                <Mail /> javlonbekabduganiyev5@gmail.com
              </li>
              <li className="flex items-center gap-1 text-lg">
                <Location /> Yangiqo'rg'on tumani Xalq ta'limi yonida
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
