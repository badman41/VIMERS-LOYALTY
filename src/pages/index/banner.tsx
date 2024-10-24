import React, { FC } from "react";
import { Box } from "zmp-ui";
import home_header from "../../../assets/images/home_header.png"

export const Banner: FC = () => {
  return (
    <Box
      className="w-full aspect-[2/1] bg-cover bg-center box-shadow-bold"
      style={{ backgroundImage: `url(${home_header})` }}
      
    />
  );
};
