import React from "react";
import { FC } from "react";
import { Box, Icon, Text } from "zmp-ui";
import myCarImg from "../../../assets/images/my_car.png";
import myCarImg2 from "../../../assets/images/check_option.png";

export const MyCarsHome: FC = () => {
  return (
    <Box className="bg-main-2 grid grid-cols-2 gap-2 mt-4 p-8 box-shadow-bold rounded-lg">
      <div>
        <img className="w-full h-40 rounded-lg" src={myCarImg} />
        <div className="flex items-center justify-center py-2">
          <Icon icon="zi-warning" style={{ color: "red" }} className="mr-2" />
          <Text size="small" className="font-bold">
            Xe của bạn
          </Text>
        </div>
      </div>
      <div>
        <img className="w-full h-40 rounded-lg" src={myCarImg2} />
        <div className="flex items-center justify-center py-2">
          <Icon icon="zi-calendar" style={{ color: "orange" }} className="mr-2" />
          <Text size="small" className="font-bold">
            Tra cứu phụ tùng
          </Text>
        </div>
      </div>
    </Box>
  );
};
