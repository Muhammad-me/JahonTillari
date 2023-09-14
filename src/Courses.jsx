import { useTranslation } from "react-i18next";
import data from "./db/data";

export default function Courses() {
  const { t } = useTranslation("translation");

  return (
    <div id="pg2" className="bg-orange-500">
      <div className="container mx-auto px-5 py-20 sm:py-52">
        <h1 className="text-4xl sm:text-6xl text-center">{t("crs")}</h1>
        <div className="flex flex-wrap justify-center sm:px-10 md:px-20 pt-5 sm:pt-20 sm:justify-between text-center">
          {data.map((el, i) => {
            return (
              <div key={i} className="w-52 m-5 p-5 bg-zinc-500 rounded-2xl">
                <h1 className="text-3xl text-white font-semibold">
                  {t(el.crs_titl)}
                </h1>
                <p className="text-xl font-medium pt-5">{t(el.crs_descr)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
