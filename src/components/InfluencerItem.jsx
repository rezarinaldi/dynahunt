"use client";

import Image from "next/image";
import Link from "next/link";

export const InfluencerItem = () => {
  return (
    <>
      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/azizah.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @azizahsalsha_
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Tangerang Selatan, Banten</p>
            <p>4.6M Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion </div>
            <div className="badge badge-outline">Beauty </div>
            <div className="badge badge-outline">Lifestyle</div>
            <div className="badge badge-outline">Food</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/malaikha.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @malaikha
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Jakarta, DKI Jakarta</p>
            <p>362K Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Beauty</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/iqbal.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @iqbaal.e
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Jakarta, DKI Jakarta</p>
            <p>14.4M Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Lifestyle</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/deddy.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @mastercorbuzier
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Jakarta, DKI Jakarta</p>
            <p>11.8M Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sport</div>
            <div className="badge badge-outline">Lifestyle</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/raffi.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @raffinagita1717
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Tangerang, Banten</p>
            <p>75.3M Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Beauty</div>
            <div className="badge badge-outline">Food</div>
            <div className="badge badge-outline">Travel</div>
            <div className="badge badge-outline">Lifestyke</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/ansel.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @ansellmaputri
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Bandung, Jawa Barat</p>
            <p>1.6M Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Beauty</div>
            <div className="badge badge-outline">Lifestyle</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/angga.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @angga
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Jakarta, DKI Jakarta</p>
            <p>11.1M Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Lifestlye</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/pev.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @pevpearce
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Jakarta, DKI Jakarta</p>
            <p>18.3M Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Beuaty</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/daddy.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @daddykuliner
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Jakarta, DKI Jakarta</p>
            <p>277K Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Food</div>
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

      <div className="card card-compact w-full bg-slate-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full mt-4">
            <Image
              src={"/img/fotoprofil/fuji.jpg"}
              width={25}
              height={25}
              alt={"logo"}
            />
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
            @fuji_an
          </h2>
          <div className="flex flex-col justify-between text-center font-semibold text-[16px] gap-2">
            <p>Jakarta, DKI Jakarta</p>
            <p>16.1M Followers</p>
          </div>
          <div className="card-actions flex justify-center my-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Beauty</div>
            <div className="badge badge-outline">Lifesty</div>
            <div className="badge badge-outline">Food</div>
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
