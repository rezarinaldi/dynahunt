import Image from "next/image";

export const ProfileItem = () => {
  return (
    <div className="text-center mb-4 bg-slate-200 rounded-2xl p-4">
      <p className="text-xl font-semibold">Zayn Malik</p>
      <div className="my-2 flex gap-1 justify-center">
        <p className="text-sm lg:text-md font-bold">12K</p>
        <p className="text-sm lg:text-md">Followers</p>
      </div>
      <div className="flex justify-center">
        <Image
          src={"/img/zayn.jpeg"}
          alt="profil"
          width={200}
          height={200}
          className="my-2"
        />
      </div>
      <p className="text-md lg:text-sm font-semibold">Fashion</p>
      <p className="text-md lg:text-sm my-2">
        Zain Javadd Malik adalah seorang penyanyi dan penulis lagu berkebangsaan
        Inggris. Pada tahun 2010, Malik mengikuti audisi sebagai artis solo
        untuk serial televisi Inggris The X Factor.
      </p>
      <p className="text-md lg:text-sm my-2">Bradford, Britania Raya</p>
      <p className="text-md lg:text-sm my-2">
        Rate : Rp 5.000.000 - 25.000.000,-
      </p>
      <div className="border border-[#601FCE] rounded-xl p-2 sm:max-w-[30vw] lg:max-w-[15vw] m-auto">
        <div>
          <p className="">Interest for Collaboration with</p>
          <p className="text-red-500 font-bold">Zayn Malik?</p>
        </div>
        <button className="bg-yellow-400 px-6 py-1 rounded-lg my-2">
          Yes!
        </button>
      </div>
    </div>
  );
};
