import React from "react";
// 🚨 assets

export default function Clients({  }) {
   const clientList = [
    '/images/geeftme.png',
    '/images/cloverleaf.png',
    '/images/myartstock.webp'
   ] 
  let allClients;
  if (clientList) {
    allClients = [...clientList, ...clientList];
  }
  return (
    <section className="space-y-4 global-gap ">
      <h2 className="text-center font-bold lg:text-2xl text-md">
        Helping founders build impactful product. My clients <br className="hidden lg:block" /> have raised
        over $20M+ in funding.
      </h2>

      <section
        className={`  relative wrapper overflow-hidden h-[100px] client-wrapper `}
      >
        {clientList &&
          allClients?.map((img, index) => {
            const arrLen = allClients.length;
            return (
              <div
                key={index}
                style={{
                  animationDelay: `calc(25s/${arrLen} * (8 - ${
                    index + 1
                  } ) * -1)`,

                  left: ` max(calc(100px * ${arrLen}),100%)`,
                }}
                className=" absolute w-[100px]  left-[100%] client-img top-[50%] -translate-y-[50%] "
              >
                <img src={img} alt="" className="[ lg:w-[80px] w-[50px] ]" />
              </div>
            );
          })}
      </section>
    </section>
  );
}
