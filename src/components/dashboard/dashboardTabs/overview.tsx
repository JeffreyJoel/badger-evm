import React, { useState } from "react";
import InfoCard from "../shared/InfoCard";
import { TokenOverview } from "../token/TokenOverview";
import { NFTOverview } from "../nft/NFTOverview";


export function OverviewComponent() {
  const [contractCreated, setContractCreated] = useState(false);

  return (
    <div className="mt-14 rounded-lg  border-dashed border-gray-200 p-8  dark:border-gray-700">
      {contractCreated ? (
        <div>
          <h2 className="text-center text-2xl font-bold lg:text-3xl">
            You have not created any projects
          </h2>

          <p className="mt-2 text-center text-lg leading-7">
            Pick from one one of our available options
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">Overview</h2>

          <div className="mt-4 flex">
            <InfoCard title="Contracts Deployed" content={1} />
            <InfoCard title="Tokens Deployed" content={1} />
            <InfoCard title="NFTs Deployed" content={1} />
          </div>

          <TokenOverview/>
          <NFTOverview/>
          {/* <NFTOverview /> */}
        </div>
      )}
    </div>
  );
}