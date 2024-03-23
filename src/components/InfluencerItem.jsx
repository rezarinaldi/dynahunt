"use client";

import Image from "next/image";
import Link from "next/link";

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
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
          <div className="text-center items-center">
            <button
              onClick={() => document.getElementById("interest").showModal()}
              className="btn bg-[#601FCE] text-white btn-sm links border-none"
            >
              Interest for Collab
            </button>
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
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
          <div className="text-center items-center">
            <button
              onClick={() => document.getElementById("interest").showModal()}
              className="btn bg-[#601FCE] text-white btn-sm links border-none"
            >
              Interest for Collab
            </button>
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
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
          <div className="text-center items-center">
            <button
              onClick={() => document.getElementById("interest").showModal()}
              className="btn bg-[#601FCE] text-white btn-sm links border-none"
            >
              Interest for Collab
            </button>
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
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
          <div className="text-center items-center">
            <button
              onClick={() => document.getElementById("interest").showModal()}
              className="btn bg-[#601FCE] text-white btn-sm links border-none"
            >
              Interest for Collab
            </button>
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
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
          </div>
          <div className="text-center items-center">
            <button
              onClick={() => document.getElementById("interest").showModal()}
              className="btn bg-[#601FCE] text-white btn-sm links border-none"
            >
              Interest for Collab
            </button>
          </div>
        </div>
      </div>
      {/* Modal Interest Collab */}
      <dialog id="interest" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center">
            Hello. Fill this Form First!
          </h3>
          <form>
            <label className="input input-bordered flex items-center gap-2 my-4">
              <input
                type="text"
                className="grow"
                placeholder="Name Company/Brand"
                autoComplete="off"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="email"
                className="grow"
                placeholder="Email"
                autoComplete="off"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
              <input
                type="number"
                className="grow"
                placeholder="Phone Number"
                autoComplete="off"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Title Description"
                autoComplete="off"
              />
            </label>
            <label className="flex items-center gap-2 my-4">
              <textarea
                className="textarea textarea-bordered textarea-lg w-full grow"
                placeholder="Camp Description"
                autoComplete="off"
              ></textarea>
            </label>
            <div className="flex justify-center gap-3">
              <button
                type="submit"
                className="btn bg-[#601FCE] text-white btn-md links border-none"
              >
                Kirim
              </button>
              <button type="reset" className="btn btn-md links border-none">
                Reset
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
