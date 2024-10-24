import React, { Suspense } from "react";
import { Box, Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { Welcome } from "./welcome";
import { Banner } from "./banner";
import { MyCarsHome } from "./my-cars-home";
import { Recommend } from "./recommend";
import { ProductList } from "./product-list";
import { Divider } from "components/divider";
import { WarningHome } from "./warning-home";

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-main">
      <Banner />
      <Box className="flex-1 overflow-auto px-4">
        <Welcome />
        <Inquiry />
        <Suspense>
          <MyCarsHome />
        </Suspense>
        <WarningHome/>
        <Recommend />
        <Divider />
        <ProductList />
        <Divider />
      </Box>
    </Page>
  );
};

export default HomePage;
