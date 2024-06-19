"use client";
import { Button } from "@/components/ui/button";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomModal from "@/components/ModalWindow/modal";
type Props = {};

const MarketPlace = (props: Props) => {
  const [nfts, setNfts] = useState();
  const [loading, setLoading] = useState(true);
  const [cw721_address, setCw721Address] = useState<string | undefined>();
  const [marketPlaceContractAddress, setMarketPlaceContractAddress] = useState<
    string | undefined
  >();
  const client = useAndromedaClient();

  useEffect(() => {
    const fetchFromMarketPlace = async () => {
      setLoading(false);
    };
    const getcw721ContractAddress = async () => {
      setCw721Address("");
    };
    fetchFromMarketPlace();
  });

  const buyNft = async (token_id: string) => {
    setLoading(true);

    const query = {
      buy: {
        token_id,
        token_address: cw721_address,
      },
    };
    if (!marketPlaceContractAddress || !query || !client) {
      console.log("Something is missing:", marketPlaceContractAddress, query);
      return;
    }
    try {
      const nft = await client?.execute(marketPlaceContractAddress, query);
      console.log("bought nft", nft);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col mt-3 gap-2 justify-center ">
      <div className="flex">
        <Button className="mx-auto">Query MarketPlace</Button>
      </div>
      <div className="grid lg:grid-cols-4  grid-cols-4 gap-9 relative  mt-[6em] ">
        {["0"].map((item, index) => {
          return (
            <div key={index}>
              <div
                key={index}
                className="relative w-full h-full m-auto rounded-lg shadow-md p-4 overflow-hidden border-3 border-red-400"
                style={{
                  height: "300px",
                  width: "400px",
                }}
              >
                {/* Background Image */}
                <Image
                  src="/NFT-Frame.png"
                  layout="fill"
                  objectFit="contain"
                  alt="NFT Frame"
                  className="absolute inset-0 z-20"
                />
                {/* Foreground Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[384px] h-[225px] z-10 -mt-3">
                  <div className="grid grid-cols-2 grid-rows-2 w-full h-full">

                    <div className="bg-red-400 p-2 relative cursor-pointer">
                      <div className="relative">
                        <Image
                          src="/bg.png"
                          className="contain z-10"
                          width={400}
                          height={400}
                          alt="kdk"
                        />
                        <div className="absolute inset-0 flex items-center justify-center  transition-opacity duration-300">
                          <button className="bg-black text-white z-40 px-4 py-2 rounded">
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-400 p-2 relative">
                      <div className="relative">
                        <Image
                          src="/bg.png"
                          className="contain z-10"
                          width={400}
                          height={400}
                          alt="kdk"
                        />
                        <div className="absolute inset-0 flex items-center justify-center  transition-opacity duration-300">
                          <button className="bg-black text-white z-40 px-4 py-2 rounded">
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-400 p-2 relative">
                      <div className="relative">
                        <Image
                          src="/bg.png"
                          className="contain z-10"
                          width={400}
                          height={400}
                          alt="kdk"
                        />
                        <div className="absolute inset-0 flex items-center justify-center  transition-opacity duration-300">
                          <button className="bg-black text-white z-40 px-4 py-2 rounded">
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-400 p-2 relative">
                      <div className="relative">
                        <Image
                          src="/bg.png"
                          className="contain z-10"
                          width={400}
                          height={400}
                          alt="kdk"
                        />
                        <div className="absolute inset-0 flex items-center justify-center  transition-opacity duration-300">
                          <button className="bg-black text-white z-40 px-4 py-2 rounded">
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <CustomModal />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketPlace;
