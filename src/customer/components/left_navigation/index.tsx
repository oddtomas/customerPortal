import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Badge from "@cloudscape-design/components/badge";
import { generatePath } from "react-router-dom";

type Props = {};

type State = {
  activeHref: string;
};

export default class LeftNav extends React.Component<Props, State> {
  state: State = {
    activeHref: "/customer",
  };

  setActiveHref = (href: string) => {
    this.setState({ activeHref: href });
  };

  render() {
    return (
      <SideNavigation
        activeHref={this.state.activeHref}
        // header={{ href: "#/", text: "Service name" }}
        onFollow={(event) => {
          if (!event.detail.external) {
            // event.preventDefault();
            this.setActiveHref(event.detail.href);
          }
        }}
        items={[
          { type: "link", text: "Overview", href: "/customer/" },
          { type: "link", text: "Support", href: "/customer/help" },
          {
            type: "link",
            text: "Billing & Projects",
            href: "/customer/billing",
          },
          // { type: "link", text: "Projects", href: "#/page4" },
          { type: "link", text: "Documents", href: "/customer/documents" },
          { type: "divider" },
          {
            type: "link",
            text: "Notifications",
            href: "#/notifications",
            info: <Badge color="red">23</Badge>,
          },
          // {
          //   type: "link",
          //   text: "Documentation",
          //   href: "https://example.com",
          //   external: true,
          // },
          { type: "divider" },
          // { type: "link", text: "Foo", href: generatePath("/customer/foo") },
          // { type: "link", text: "Bar", href: generatePath("/customer/bar") },
        ]}
      />
    );
  }
}
