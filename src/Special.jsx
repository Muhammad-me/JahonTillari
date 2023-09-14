import { Button } from "@mantine/core";
import sertificate from "./assets/photo_2023-09-09_22-49-56.jpg";
import ArrowLongRight from "./assets/ArrowLongRight";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Special() {
  const { t } = useTranslation("translation");

  return (
    <div id="pg3" className="bg-black">
      <div className="container mx-auto px-5 py-20 sm:py-52">
        <div className="block sm:flex sm:ml-0 justify-center sm:justify-between items-center">
          <div className="w-full sm:w-1/2">
            <h1 className="text-xl sm:text-5xl font-semibold sm:w-1/2 text-blue-700">
              {t("spc")}
            </h1>
            <p className="text-md sm:text-xl font-medium text-white mt-5 sm:w-2/3 tracking-wider">
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
          <div className="w-2/3 sm:w-1/3 mt-10 sm:mt-0 -rotate-90 mx-auto">
            <img src={sertificate} alt="sertificate" />
          </div>
        </div>
      </div>
    </div>
  );
}
