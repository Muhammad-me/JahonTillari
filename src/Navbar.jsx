import logo from "./assets/jt_logo.jpg";

export default function Navbar() {
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
            <div>
              <ul className="flex gap-5 text-2xl text-white">
                <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                  <a href="#pg1">About</a>
                </li>
                <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                  <a href="#pg2">Courses</a>
                </li>
                <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                  <a href="#pg3">FAQ</a>
                </li>
                <li className="ease-in-out py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-lg">
                  <a href="#pg4">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
