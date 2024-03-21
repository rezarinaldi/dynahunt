import Image from "next/image";

export const InfluencerItem = () => {
  return (
    <div
      id="influencer"
      className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Photo Influencer"
              className="h-full w-full rounded-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="flex justify-center mt-3">
            <h1 className="text-2xl font-semibold flex justify-between">
              <Image
                src={"/img/instagram.svg"}
                width={25}
                height={25}
                alt={"logo"}
                className="mr-2"
              />
              @rezarinaldi
            </h1>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  📍 Malang
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">Programming</p>
            </div>
            <p className="text-sm font-medium text-gray-900">350 Followers</p>
          </div>
        </div>
        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Photo Influencer"
              className="h-full w-full rounded-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="flex justify-center mt-3">
            <h1 className="text-2xl font-semibold flex justify-between">
              <Image
                src={"/img/instagram.svg"}
                width={25}
                height={25}
                alt={"logo"}
                className="mr-2"
              />
              @rezarinaldi
            </h1>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  📍 Malang
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">Programming</p>
            </div>
            <p className="text-sm font-medium text-gray-900">350 Followers</p>
          </div>
        </div>
        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Photo Influencer"
              className="h-full w-full rounded-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="flex justify-center mt-3">
            <h1 className="text-2xl font-semibold flex justify-between">
              <Image
                src={"/img/instagram.svg"}
                width={25}
                height={25}
                alt={"logo"}
                className="mr-2"
              />
              @rezarinaldi
            </h1>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  📍 Malang
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">Programming</p>
            </div>
            <p className="text-sm font-medium text-gray-900">350 Followers</p>
          </div>
        </div>
        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Photo Influencer"
              className="h-full w-full rounded-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="flex justify-center mt-3">
            <h1 className="text-2xl font-semibold flex justify-between">
              <Image
                src={"/img/instagram.svg"}
                width={25}
                height={25}
                alt={"logo"}
                className="mr-2"
              />
              @rezarinaldi
            </h1>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  📍 Malang
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">Programming</p>
            </div>
            <p className="text-sm font-medium text-gray-900">350 Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
