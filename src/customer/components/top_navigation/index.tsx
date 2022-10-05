import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import brandLogo from "./SADA_logo_rgb_wht.png";
import { generatePath } from "react-router-dom";

type Props = {
  userName: string;
  userEmail: string;
};

type State = {
  value: string;
};

export default class TopNav extends React.Component<Props, State> {
  render() {
    return (
      <div id="h" style={{ position: "sticky", top: 0, zIndex: 1002 }}>
        <TopNavigation
          identity={{
            href: generatePath("/customer"),
            title: "Customer View",
            logo: {
              src: brandLogo,
              alt: "Service",
            },
          }}
          utilities={[
            {
              type: "button",
              text: "Get Help",
              href: generatePath("/customer/help"),
              external: true,
              externalIconAriaLabel: " (opens in a new tab)",
            },
            {
              type: "button",
              iconName: "notification",
              title: "Notifications",
              ariaLabel: "Notifications (unread)",
              badge: true,
              disableUtilityCollapse: false,
            },
            {
              type: "menu-dropdown",
              iconName: "settings",
              ariaLabel: "Settings",
              title: "Settings",
              items: [
                {
                  id: "settings-org",
                  text: "Organizational settings",
                },
                {
                  id: "settings-project",
                  text: "Project settings",
                },
              ],
            },
            {
              type: "menu-dropdown",
              text: this.props.userName,
              description: this.props.userEmail,
              iconName: "user-profile",
              items: [
                { id: "profile", text: "Profile" },
                { id: "preferences", text: "Preferences" },
                { id: "security", text: "Security" },
                {
                  id: "support-group",
                  text: "Support",
                  items: [
                    {
                      id: "documentation",
                      text: "Documentation",
                      href: "#",
                      external: true,
                      externalIconAriaLabel: " (opens in new tab)",
                    },
                    { id: "support", text: "Support" },
                    {
                      id: "feedback",
                      text: "Feedback",
                      href: "#",
                      external: true,
                      externalIconAriaLabel: " (opens in new tab)",
                    },
                  ],
                },
                { id: "signout", text: "Sign out" },
                { id: "main", text: "Main", href: "/" },
              ],
            },
          ]}
          i18nStrings={{
            searchIconAriaLabel: "Search",
            searchDismissIconAriaLabel: "Close search",
            overflowMenuTriggerText: "More",
            overflowMenuTitleText: "All",
            overflowMenuBackIconAriaLabel: "Back",
            overflowMenuDismissIconAriaLabel: "Close menu",
          }}
        />
      </div>
    );
  }
}
