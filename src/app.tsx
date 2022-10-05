import React from "react";
import {
  AppLayout,
  Grid,
  Header,
  Container,
  SpaceBetween,
  Button,
  Box,
  Cards,
  Link as LinkComponent,
  TextContent,
} from "@cloudscape-design/components";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import CustomerApp from "./customer/app";
import EmployeeApp from "./employee/app";

import AppSlots, { HeaderSlot } from "./components/AppSlots";
import AppHeader from "./components/AppHeader";

import customerLogo from "./assets/customers.svg";
import employeeLogo from "./assets/employees.svg";

type State = {};
type Props = {};

const cardImgStyle = {
  width: "100%",
  borderStyle: "none",
};

function Layout() {
  const headerContext = React.useState();
  return (
    <AppSlots>
      <AppLayout
        content={<Outlet context={headerContext} />}
        contentHeader={<AppHeader />}
        disableContentHeaderOverlap={true}
        toolsHide={true}
        navigationHide={true}
      />
    </AppSlots>
  );
}

class ContentArea extends React.Component {
  render() {
    return (
      <div>
        <HeaderSlot>
          <SpaceBetween size="m">
            <Header
              variant="h1"
              // info={<LinkComponent>Info</LinkComponent>}
              description="View the portal as a customer or an employee."
            >
              Choose a perspective
            </Header>
          </SpaceBetween>
        </HeaderSlot>

        <Box margin={{ top: "xl" }}>
          <Cards
            variant="full-page"
            cardDefinition={{
              header: (item) => null,
              sections: [
                {
                  id: "Header",
                  content: (item) => {
                    return <img src={item.img} style={cardImgStyle} />;
                  },
                },
                {
                  id: "Content",
                  content: (item) => {
                    return (
                      <LinkComponent fontSize="heading-m" href={item.href}>
                        {item.title}
                      </LinkComponent>
                    );
                  },
                },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
            items={[
              {
                title: "Customer",
                href: "/customer",
                img: customerLogo,
              },
              {
                title: "Employee",
                href: "/employee",
                img: employeeLogo,
              },
            ]}
            loadingText="Loading resources"
          />
        </Box>
      </div>
    );
  }
}

export default class App extends React.Component<Props, State> {
  state: State = {};
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContentArea />} />
          </Route>
          <Route path="customer/*" element={<CustomerApp />} />
          <Route path="employee/*" element={<EmployeeApp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
