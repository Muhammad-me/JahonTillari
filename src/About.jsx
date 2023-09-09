import { useTranslation } from "react-i18next";
import logo from "./assets/jt_logo.jpg";

export default function About() {
  const { t } = useTranslation("translation");

  return (
    <div id="pg1" className="bg-blue-700">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap justify-between items-center py-48 relative">
          <div className="sm:w-1/2">
            <h1 className="text-5xl font-bold w-1/2 text-yellow-500">
              {t("abt")}
            </h1>
            <p className="text-lg font-medium text-white mt-5">{t("desc")}</p>
          </div>
          <div className="w-1/3 hidden md:block">
            <img src={logo} alt="JahonTillari_logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
