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
        <div className="avatar">
          <div className="w-48 rounded-full">
            <Image
              src={"/img/campaign/zayn.jpeg"}
              alt="profil"
              width={200}
              height={200}
              className="my-2"
            />
          </div>
        </div>
      </div>
      <p className="text-md lg:text-sm font-semibold">Fashion</p>
      <p className="text-md lg:text-sm my-2">
        Zain Javadd Malik adalah seorang penyanyi dan penulis lagu berkebangsaan
        Inggris. Pada tahun 2010, Malik mengikuti audisi sebagai artis solo
        untuk serial televisi Inggris The X Factor.
      </p>
      <p className="text-md lg:text-sm my-2">Bradford, Britania Raya</p>
    </div>
  );
};
