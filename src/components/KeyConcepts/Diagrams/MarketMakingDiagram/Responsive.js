import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import { MQLarge, MQMedium, MQSmall } from "../../../../utils/media-queries.js";

const MarketMakingDiagramResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small className="max-w-[20rem] mx-auto" />
      </MQSmall>
      <MQMedium>
        <Medium />
      </MQMedium>
      <MQLarge>
        <Large />
      </MQLarge>
    </div>
  );
};
export default MarketMakingDiagramResponsive;