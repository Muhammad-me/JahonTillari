import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger, Group, Button } from "@mantine/core";

import logo from "./assets/jt_logo.jpg";
import { useState } from "react";

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

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
                <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                  <a href="#pg1">About</a>
                </li>
                <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                  <a href="#pg2">Courses</a>
                </li>
                <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                  <a href="#pg3">Special</a>
                </li>
                <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                  <a href="#pg4">Contact</a>
                </li>
              </ul>
            </div>
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
                  <li className="ease-in-out py-2 px-3 cursor-pointer border-2 my-3 hover:text-white hover:bg-zinc-500 rounded-lg">
                    <a href="#pg1">About</a>
                  </li>
                  <li className="ease-in-out py-2 px-3 cursor-pointer border-2 my-3 hover:text-white hover:bg-zinc-500 rounded-lg">
                    <a href="#pg2">Courses</a>
                  </li>
                  <li className="ease-in-out py-2 px-3 cursor-pointer border-2 my-3 hover:text-white hover:bg-zinc-500 rounded-lg">
                    <a href="#pg3">Special</a>
                  </li>
                  <li className="ease-in-out py-2 px-3 cursor-pointer border-2 my-3 hover:text-white hover:bg-zinc-500 rounded-lg">
                    <a href="#pg4">Contact</a>
                  </li>
                </ul>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
