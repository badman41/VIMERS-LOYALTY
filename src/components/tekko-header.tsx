import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { Box, Header, Icon, Text, useNavigate } from "zmp-ui";
import { HeaderProps } from "zmp-ui/header";

export interface TekkoHeaderProps extends HeaderProps {
  showHomeIcon?: boolean;
}

export const TekkoHeader: FC<PropsWithChildren<TekkoHeaderProps>> = ({
  children,
  showHomeIcon = true,
  ...props
}) => {
  const navigate = useNavigate();
  return (
    <div className="zaui-header justify-space-between" backIcon="zi-arrow-left" {...props}  >
      {props.showBackIcon ? <div onClick={() => navigate(-1)}>
        <Icon icon="zi-arrow-left" />
      </div> : <></>}
      <Text size="small" className="font-bold">
        {props.title}
      </Text>
      {showHomeIcon ? <div onClick={() => navigate("/")}>
        <Icon icon="zi-home" />
      </div> : <></>}

    </div>
  );
};
