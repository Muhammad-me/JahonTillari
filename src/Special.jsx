import { Button } from "@mantine/core";
import sertificate from "./assets/photo_2023-09-09_22-49-56.jpg";
import ArrowLongRight from "./assets/ArrowLongRight";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Special() {
  const { t } = useTranslation("translation");

  return (
    <div id="pg3" className="bg-black">
      <div className="container mx-auto px-5 py-52">
        <div className="sm:flex ml-20 sm:ml-0 justify-center sm:justify-between items-center">
          <div className="sm:w-1/2">
            <h1 className="text-5xl font-bold w-1/2 text-blue-700">
              {t("spc")}
            </h1>
            <p className="text-xl font-medium text-white mt-5 w-2/3 tracking-wider">
              {t("spc_txt")}
            </p>
            <NavLink to="/coding">
              <Button
                variant="filled"
                color="yellow"
                radius="md"
                size="lg"
                className="bg-yellow-500 mt-10">
                {t("lrn")} <ArrowLongRight />
              </Button>
            </NavLink>
          </div>
          <div className="sm:w-1/3 mt-10 sm:mt-0 -rotate-90">
            <img src={sertificate} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
