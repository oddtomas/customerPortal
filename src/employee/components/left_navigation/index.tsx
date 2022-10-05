import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Badge from "@cloudscape-design/components/badge";

type Props = {
};

type State = {
  activeHref: string;
};

export default class LeftNav extends React.Component<Props, State> {
  state: State = {
    activeHref: "/",
  };

  setActiveHref = (href: string) => {
    this.state.activeHref = href;
  };

  render() {
    return (
      <SideNavigation
        activeHref={this.state.activeHref}
        header={{ href: "#/", text: "Service name" }}
        onFollow={event => {
          if (!event.detail.external) {
            event.preventDefault();
            this.setActiveHref(event.detail.href);
          }
        }}
        items={[
          { type: "link", text: "Page 1", href: "#/page1" },
          { type: "link", text: "Page 2", href: "#/page2" },
          { type: "link", text: "Page 3", href: "#/page3" },
          { type: "link", text: "Page 4", href: "#/page4" },
          { type: "divider" },
          {
            type: "link",
            text: "Notifications",
            href: "#/notifications",
            info: <Badge color="red">23</Badge>
          },
          {
            type: "link",
            text: "Documentation",
            href: "https://example.com",
            external: true
          }
        ]}
      />
    );
  }
}