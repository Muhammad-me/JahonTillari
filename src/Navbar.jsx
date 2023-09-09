import { Burger, Drawer, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "./assets/jt_logo.jpg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const languageMap = {
  "uz-UZ": { label: "UZ", dir: "ltr", active: true },
  "ru-RU": { label: "RU", dir: "ltr", active: false },
  "en-EN": { label: "EN", dir: "ltr", active: false },
};

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const { t } = useTranslation("translation");

  return (
    <div className="bg-blue-800 w-full z-50 fixed top-0 left-0">
      <div>
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center py-5">
            <div className="w-20 h-20">
              <a href="/">
                <img className="w-full h-full" src={logo} alt="JahonTillari" />
              </a>
            </div>
            <div className="hidden sm:block">
              <ul className="flex gap-5 text-2xl text-white">
                <a href="#pg1">
                  <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                    {t("nav1")}
                  </li>
                </a>
                <a href="#pg2">
                  <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                    {t("nav2")}
                  </li>
                </a>
                <a href="#pg3">
                  <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                    {t("nav3")}
                  </li>
                </a>
                <a href="#pg4">
                  <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                    {t("nav4")}
                  </li>
                </a>
              </ul>
            </div>
            <Menu>
              <Menu.Target>
                <button className="p-3 rounded-xl bg-yellow-500 text-white">
                  {t("lang")}
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                {Object.keys(languageMap)?.map((item) => {
                  return (
                    <>
                      <Menu.Item
                        component="button"
                        className="dropdown-item"
                        style={{ color: "black" }}
                        key={item}
                        onClick={() => {
                          i18next.changeLanguage(item);
                        }}>
                        {languageMap[item].label}
                      </Menu.Item>
                    </>
                  );
                })}
              </Menu.Dropdown>
            </Menu>
            <div className="sm:hidden">
              <Group position="center">
                <Burger
                  color="#fff"
                  size={25}
                  opened={opened}
                  onClick={open}
                  aria-label={label}
                />
              </Group>
              <Drawer
                opened={opened}
                onClose={close}
                overlayProps={{ opacity: 0.5, blur: 4 }}
                className="bg-blue-800">
                <div className="w-20 h-20">
                  <a href="/">
                    <img
                      className="w-full h-full"
                      src={logo}
                      alt="JahonTillari"
                    />
                  </a>
                </div>
                <ul className="gap-5 text-2xl">
                  <a href="#pg1">
                    <li className="ease-in-out py-2 px-3 cursor-pointer border-2 my-3 hover:text-white hover:bg-zinc-500 rounded-lg">
                      {t("nav1")}
                    </li>
                  </a>
                  <a href="#pg2">
                    <li className="ease-in-out py-2 px-3 cursor-pointer border-2 my-3 hover:text-white hover:bg-zinc-500 rounded-lg">
                      {t("nav2")}
                    </li>
                  </a>
                  <a href="#pg3">
                    <li className="ease-in-out py-2 px-3 cursor-pointer border-2 my-3 hover:text-white hover:bg-zinc-500 rounded-lg">
                      {t("nav3")}
                    </li>
                  </a>
                  <a href="#pg4">
                    <li className="ease-in-out py-2 px-3 cursor-pointer border-2 my-3 hover:text-white hover:bg-zinc-500 rounded-lg">
                      {t("nav4")}
                    </li>
                  </a>
                </ul>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
