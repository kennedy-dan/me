import triggerMail from "@/public/svg/triggerMail.svg";
import whatsapp from "@/public/svg/whatsapp.svg";
// import calendar from "@/assets/svg/calendar.svg";
export default function Contact() {
  return (
    <section>
      <section className="my-6 space-y-4">
        <div>
          <h2 className=" [ lg:text-2xl text-xl ] font-medium">Contact me</h2>
          <p className="text-[#676767] font-medium [ lg:text-[18px] text-md ] lg:mt-1">
            Hey there, which is convenient for you ?
          </p>
        </div>

        <section className="space-y-5">
          <div className="bg-[#F5F5F5] relative rounded-xl h-[120px] px-6 ">
            <a href="mailto:abdullahihabeeb98@gmail.com">
              {" "}
              <div className="pt-8 z-30 relative">
                <h1 className=" text-black [ lg:text-2xl text-base ] [ lg:font-normal font-medium ]">
                  Email contact
                </h1>
                <div className="flex gap-x-4 items-center text-base font-medium">
                  <p className="text-black-200 ">Link</p>
                  <span className="w-[6px] h-[6px] rounded-full bg-gray-400"></span>

                  <a href="mailto:abdullahihabeeb98@gmail.com">
                    <p className="text-green-100 ">Trigger a mail</p>
                  </a>
                </div>
              </div>
            </a>
            <img
              src={triggerMail}
              alt=""
              className="absolute bottom-0 [ lg:right-4 right-0 ] z-10  [ lg:w-[125px] w-[90px]  ] "
            />
          </div>

          {/* calendly  */}
          {/* <div className="bg-[#F5F5F5] relative rounded-xl h-[120px] px-6 ">
            <div className="pt-8 z-30 relative">
              <h1 className=" [ lg:text-2xl text-base ] [ lg:font-normal font-medium ] ">
                Calendly
              </h1>
              <div className="flex gap-x-4 items-center text-base font-medium">
                <p className="text-black-200 ">Direct phone chat</p>
                <span className="w-[6px] h-[6px] rounded-full bg-gray-400"></span>

                <p className="text-green-500 ">View</p>
              </div>
            </div>
            <img
              src={calendar}
              alt=""
              className="absolute bottom-0 [ lg:right-4 right-0 ] z-10 [ lg:w-[125px] w-[60px]  ] "
            />
          </div> */}

          {/*🚨 Whatsap  */}
          <a href={`https://wa.me/+2348030638306`} target="_blank">
            <div className="bg-[#F5F5F5] relative text-black rounded-xl h-[120px] px-6 ">
              <div className="pt-8 z-30 relative">
                <h1 className=" [ lg:text-2xl text-base ] [ lg:font-normal font-medium ] ">
                  Whatsapp contact
                </h1>
                <div className="flex-responsive !gap-y-1 gap-x-4 lg:items-center text-base font-medium">
                  <p className="text-black-200 ">Direct phone chat</p>
                  <span className="w-[6px] h-[6px] rounded-full bg-gray-400 lg-show"></span>

                  <p className="text-green-500 ">Drop chat</p>
                </div>
              </div>

              <img
                src={whatsapp}
                alt=""
                className="absolute bottom-0 [ lg:right-4 right-0 ] z-10 [ lg:w-[125px] w-[80px]  ]"
              />
            </div>
          </a>
        </section>
      </section>
    </section>
  );
}
