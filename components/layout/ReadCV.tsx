import doc from "@/public/svg/doc.svg";
export default function ReadCV() {
  return (
    <section>
      <section className="my-6 space-y-4">
        <div>
          <h2 className=" [ lg:text-2xl text-xl ] font-medium">My resume</h2>
          <p className="text-[#676767] font-medium [ lg:text-[18px] text-md ] lg:mt-2">
            Hey there, which is convenient for you ?
          </p>
        </div>

        <section className="space-y-5">
          <div className="bg-[#F5F5F5] relative rounded-xl h-[120px] px-6  ">
            <a
              href="https://drive.google.com/file/d/16vr2_1F2rsk8PIQJG60m0kEvt2jF6Tav/view"
              target="_blank"
              className="text-black"
            >
              <div className="pt-8 z-30 relative">
                <h1 className=" [ lg:text-2xl text-base ] [ lg:font-normal font-medium ] text-black">
                  Product design resume
                </h1>
                <div className="flex gap-x-4 items-center text-base font-medium">
                  <p className="text-black-200 ">Document</p>
                  <span className="w-[6px] h-[6px] rounded-full bg-gray-400"></span>

                  <p className="text-green-100 ">View</p>
                </div>
              </div>
              <img
                src={doc}
                alt=""
                className="absolute bottom-0 [ lg:right-4 right-0 ] z-10 "
              />
            </a>
          </div>

          <div className="bg-[#F5F5F5] relative rounded-xl h-[120px] px-6 ">
            <div className="pt-8 z-30 relative">
              <h1 className=" [ lg:text-2xl text-base ] [ lg:font-normal font-medium ] ">
                Brand design resume
              </h1>
              <div className="flex gap-x-4 items-center text-base font-medium">
                <p className="text-black-200 ">Document</p>
                <span className="w-[6px] h-[6px] rounded-full bg-gray-400"></span>

                <p className="text-green-100 ">View</p>
              </div>
            </div>
            <img
              src={doc}
              alt=""
              className="absolute bottom-0 [ lg:right-4 right-0 ] z-10 "
            />
          </div>
        </section>
      </section>
    </section>
  );
}
