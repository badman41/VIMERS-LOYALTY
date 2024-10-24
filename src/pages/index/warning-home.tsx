import React from "react";
import { FC } from "react";
import { Box, Icon, Text } from "zmp-ui";

export const WarningHome: FC = () => {
  return (
    <Box className="bg-main-2 mt-4 p-2 box-shadow-bold rounded-lg">
      <Box className="bg-main-3 box-shadow-normal flex items-center px-2 py-4 rounded-lg">
        <Icon icon="zi-calendar" style={{ color: "orange" }} className="mr-2" />
        <Text size="xSmall" className="text-white">
          Bạn có lịch thay dầu đã đến hạn 10/10/2024
        </Text>
      </Box>
      <Box className="bg-main-3 box-shadow-normal flex items-center px-2 py-4 rounded-lg mt-3">
        <Icon icon="zi-warning" style={{ color: "red" }} className="mr-2" />
        <Text size="xSmall" className="text-white">
          Xe của bạn cần kiếm tra cấp má phanh sau 1 vạn Km đã đi
        </Text>
      </Box>
      <Box className="bg-main-3 box-shadow-normal flex items-center px-2 py-4 rounded-lg mt-3">
        <Icon icon="zi-check-circle" style={{ color: "green" }} className="mr-2" />
        <Text size="xSmall" className="text-white">
          Xe của bạn đã được khám thành công bởi bác sĩ HOWO
        </Text>
      </Box>
    </Box>
  );
};
