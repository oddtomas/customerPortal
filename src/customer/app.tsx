import React from "react";

import CustomerLayout from "./components/layout";
import Home from "./pages/home";
import Foo from "./pages/help";
import Bar from "./pages/billing";
// import Help from "./pages/help";
import Help from "./pages/help";

import { Routes, Route } from "react-router-dom";
import Billing from "./pages/billing";
import Documents from "./pages/documents";

type Props = {};

type State = {};

export default class CustomerApp extends React.Component<Props, State> {
  state: State = {};
  render() {
    return (
      <Routes>
        <Route path="/*" element={<CustomerLayout />}>
          <Route index element={<Home />} />
          <Route path="bar" element={<Bar />} />
          <Route path="help" element={<Help />} />
          <Route path="billing" element={<Billing />} />
          <Route path="documents" element={<Documents />} />
        </Route>
      </Routes>
    );
  }
}
