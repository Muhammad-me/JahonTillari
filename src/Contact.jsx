import { MultiSelect } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("translation");

  function Submit(e) {
    const formEl = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formEl);
    fetch("https://sheetdb.io/api/v1/xsd7zvyh6etuv", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  const data = [
    { value: "Ona tili", label: "Ona tili" },
    { value: "Adabiyot", label: "Adabiyot" },
    { value: "Matematika", label: "Matematika" },
    { value: "Fizika", label: "Fizika" },
    { value: "Tarix", label: "Tarix" },
    { value: "Kimyo", label: "Kimyo" },
    { value: "Biologiya", label: "Biologiya" },
    { value: "Arab tili", label: "Arab tili" },
    { value: "Ingliz tili", label: "Ingliz tili" },
    { value: "Rus tili", label: "Rus tili" },
  ];

  return (
    <div id="pg4" className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("cntc")}
        </h2>
      </div>
      <form
        className="mx-auto mt-16 max-w-md sm:mt-20"
        onSubmit={(e) => Submit(e)}>
        <div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-md font-bold leading-6 text-gray-900">
              {t("fl_name")}
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="IsmFamilya"
                id="first-name"
                placeholder={t("fl_name")}
                autoComplete
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block text-md font-bold leading-6 text-gray-900 mt-5">
              {t("numb")}
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="Raqam"
                id="phone-number"
                placeholder={t("numb")}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <MultiSelect
              data={data}
              label={t("chs")}
              placeholder={t("plh")}
              searchable
              className="text-2xl leading-6 text-gray-900 mt-5 font-semibold"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="message"
              className="block text-md font-bold leading-6 text-gray-900">
              {t("msg")}
            </label>
            <div className="mt-2">
              <textarea
                name="Xabar"
                id="message"
                placeholder={t("msg_txt")}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <input
            onClick={(e) => Submit(e)}
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </div>
      </form>
    </div>
  );
}
