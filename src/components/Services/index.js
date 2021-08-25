import React from "react";
import Icon1 from "../../image/svg-1.svg";
import Icon2 from "../../image/svg-1.svg";
import Icon3 from "../../image/svg-1.svg";
import {
  ServicesWrapper,
  ServicesH1,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesCard,
  ServicesContainer,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>We provide maximum revenue with less fees</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            Access the platform from anywhere and everywhere.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Membership Benefits</ServicesH2>
          <ServicesP>
            Unlock special membership benefits along with guaranteed cashback.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
