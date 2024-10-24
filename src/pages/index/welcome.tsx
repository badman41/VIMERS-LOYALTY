import React, { FC } from "react";
import { Box, Header, Text } from "zmp-ui";
import { useRecoilValueLoadable } from "recoil";
import { userState } from "state";
import logo from "static/logo.png";
import appConfig from "../../../app-config.json";
import { getConfig } from "utils/config";

export const Welcome: FC = () => {
  const user = useRecoilValueLoadable(userState);

  return (
    <Header
      className="app-header no-border py-4 mt-2 flex-none bg-main"
      showBackIcon={false}
      title={
        (
            <Box>
              {user.state === "hasValue" ? (
                <Text size="normal" className="font-bold">
                  Xin chào, {user.contents.name}!
                </Text>
              ) : (
                <Text>...</Text>
              )}
          </Box>
        ) as unknown as string
      }
    />
  );
};
