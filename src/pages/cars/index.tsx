import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { useVirtualKeyboardVisible } from "hooks";
import { TekkoHeader } from "components/tekko-header";

const CarsPage: FC = () => {
  const keyboardVisible = useVirtualKeyboardVisible();

  return (
    <Page className="flex flex-col">
      <TekkoHeader title="Xe của bạn" showBackIcon={true} showHomeIcon={true}/>
      Xe của tôi
      {/* <CartItems />
      <Delivery />
      <Divider size={12} />
      <TermsAndPolicies />
      <Divider size={32} className="flex-1" />
      {!keyboardVisible && <CartPreview />} */}
    </Page>
  );
};

export default CarsPage;
