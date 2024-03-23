import Image from "next/image";

export const InfluencerItem = () => {
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            <Image
              src={"/img/instagram.svg"}
              width={25}
              height={25}
              alt={"logo"}
            />
            @testsaja
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Malang</p>
            <p>350 Followers</p>
          </div>
          <div className="card-actions flex justify-center mt-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
        </div>
      </div>
      <div className="card card-compact w-full bg-base-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            <Image
              src={"/img/instagram.svg"}
              width={25}
              height={25}
              alt={"logo"}
            />
            @testsaja
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Malang</p>
            <p>350 Followers</p>
          </div>
          <div className="card-actions flex justify-center mt-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
        </div>
      </div>
      <div className="card card-compact w-full bg-base-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            <Image
              src={"/img/instagram.svg"}
              width={25}
              height={25}
              alt={"logo"}
            />
            @testsaja
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Malang</p>
            <p>350 Followers</p>
          </div>
          <div className="card-actions flex justify-center mt-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
        </div>
      </div>
      <div className="card card-compact w-full bg-base-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            <Image
              src={"/img/instagram.svg"}
              width={25}
              height={25}
              alt={"logo"}
            />
            @testsaja
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Malang</p>
            <p>350 Followers</p>
          </div>
          <div className="card-actions flex justify-center mt-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
        </div>
      </div>
    </>
  );
};
