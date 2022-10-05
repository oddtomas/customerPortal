import React from "react";

import EmployeeLayout from "./components/layout";
import Home from "./pages/home";
import Foo from "./pages/foo";
import Bar from "./pages/bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

type Props = {};

type State = {};

export default class EmployeeApp extends React.Component<Props, State> {
  state: State = {};
  render() {
    return (
      <Routes>
        <Route path="/*" element={<EmployeeLayout />}>
          <Route index element={<Home />} />
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
        </Route>
      </Routes>
    );
  }
}
