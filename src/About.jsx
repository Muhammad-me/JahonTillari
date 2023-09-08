import logo from "./assets/jt_logo.jpg";

export default function About() {
  return (
    <div id="pg1" className="bg-blue-700">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap justify-between items-center py-48 relative">
          <div className="sm:w-1/2">
            <h1 className="text-5xl font-bold w-1/2 text-yellow-500">
              About our education center
            </h1>
            <p className="text-lg font-medium text-white mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              perferendis praesentium mollitia excepturi modi molestias in
              nostrum cum quibusdam aliquam incidunt nam iure vitae aut illo
              ipsa assumenda sunt tenetur soluta, deleniti asperiores cumque
              voluptates nulla consequatur. Cum, ratione cupiditate. Enim
              eligendi reiciendis fugiat explicabo sunt! Voluptas, sed
              temporibus nobis non natus repellat suscipit doloribus quidem iu
              eum cumque. Ratione quasi ipsa earum, cum animi aspernatur
              quisquam error non quos recusandae, reprehenderit aut! Non dolor
              excepturi alias quaerat aspernatur blanditiis voluptatem eveniet
              laborum doloremque optio eius voluptas vero, magnam expedita
              beatae quod accusamus itaque impedit nemo? Corrupti.
            </p>
          </div>
          <div className="w-1/3 hidden sm:block">
            <img src={logo} alt="JahonTillari_logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
