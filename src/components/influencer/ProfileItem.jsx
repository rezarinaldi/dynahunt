import Image from "next/image";

export const ProfileItem = () => {
  return (
    <div className="text-center mb-4 bg-slate-200 rounded-2xl p-4">
      <p className="text-xl font-semibold">Pevita Pearce</p>
      <div className="my-2 flex gap-1 justify-center">
        <p className="text-sm lg:text-md font-bold">18.3M</p>
        <p className="text-sm lg:text-md">Followers</p>
      </div>
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-48 rounded-full">
            <Image
              src={"/img/fotoprofil/pev.jpg"}
              alt="profil"
              width={200}
              height={200}
              className="my-2"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3 mb-2 gap-2">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Beuaty</div>
        <div className="badge badge-outline">Sport</div>
      </div>
      <p className="text-md lg:text-sm mb-1">
        Pevita Cleo Eileen Pearce adalah pemeran dan model Indonesia keturunan
        Wales dan Banjar. Ia dikenal luas berkat perannya dalam film 5 cm dan
        Tenggelamnya Kapal Van der Wijck.
      </p>
      <p className="text-md lg:text-sm mb-2 font-semibold">
        Jakarta, DKI Jakarta
      </p>
    </div>
  );
};
