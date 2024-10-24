import React from "react";
import { FC } from "react";
import { Box, Input, useNavigate, Text } from "zmp-ui";
import { Icon } from "zmp-ui";

export const Inquiry: FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      p={4}
      style={{ backgroundColor: "#001044" }}
      className="box-shadow-bold rounded-lg"
    >
      <Input.Search
        onFocus={() => navigate("/search")}
        placeholder="Tìm trạm dịch vụ gần nhất"
      />
      <div className="flex">
        <div
          className="flex rounded-xl bg-main-2 px-2 mt-2 mr-2"
          style={{ width: "max-content" }}
        >
          <Text
            style={{ color: "#001044", lineHeight: 2 }}
            className="mr-4 font-bold"
            size="xxSmall"
          >
            Tây Hà Nội - 1km
          </Text>
          <Icon icon="zi-location-solid" size={25} />
        </div>
        <div
          className="flex rounded-xl bg-main-2 px-2 mt-2"
          style={{ width: "max-content" }}
        >
          <Text
            style={{ color: "#001044", lineHeight: 2 }}
            className="mr-4 font-bold"
            size="xxSmall"
          >
            Đông Hà Nội - 15km
          </Text>
          <Icon icon="zi-location-solid" size={25} />
        </div>
      </div>
    </Box>
  );
};
