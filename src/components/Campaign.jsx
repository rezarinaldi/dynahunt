import Image from "next/image";

export const Campaign = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-8">
      <h2 className="text-4xl text-center lg:text-left font-bold tracking-tight">
        Campaigns
      </h2>
      <div className="w-full px-4 mt-5">
        <div className="flex flex-wrap items-center justify-center">
          <a
            href="#"
            className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <img src="/img/campaign/google.svg" alt="Google" />
          </a>
          <a
            href="#"
            className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <img src="/img/campaign/gojek.svg" alt="Gojek" />
          </a>
          <a
            href="#"
            className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <img src="/img/campaign/tokopedia.svg" alt="Tokopedia" />
          </a>
          <a
            href="#"
            className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <img src="/img/campaign/traveloka.svg" alt="Traveloka" />
          </a>
          <a
            href="#"
            className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <img src="/img/campaign/shopee.png" alt="Shopee" />
          </a>
        </div>
      </div>
    </div>
  );
};
