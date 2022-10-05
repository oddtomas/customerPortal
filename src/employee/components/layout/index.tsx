import React from 'react';

import { 
  AppLayout,
  SpaceBetween,
  Header,
  Link,
  Button,
  Alert
} from '@cloudscape-design/components';
import LeftNav from '../left_navigation';
import TopNav from '../top_navigation';

import {
  Outlet,
} from "react-router-dom";

type Props = {
};

type State = {
  alertVisible: boolean;
};

const labels = {
  navigation: 'Side navigation',
  navigationToggle: 'Open navigation',
  navigationClose: 'Close navigation',
  notifications: 'Notifications',
  tools: 'Tools',
  toolsToggle: 'Open tools',
  toolsClose: 'Close tools',
};

export default class EmployeeLayout extends React.Component<Props, State> {
  state: State = {
    alertVisible: true,
  };

  setVisible = (visible: boolean) => {
    this.setState({ alertVisible: visible });
  }

  render() {
    return (
      <div>
        <TopNav userName='Brandon Beveridge' userEmail='brandon@sada.com'/>
        <AppLayout 
          ariaLabels={labels}
          navigation={<LeftNav />}
          contentHeader={
            <SpaceBetween size="m">
              <Header
                variant="h1"
                info={<Link>Info</Link>}
                description="When you create an Amazon CloudFront distribution."
                actions={<Button variant="primary">Create distribution</Button>}
              >
                Create distribution
              </Header>
              {this.state.alertVisible && (
                <Alert dismissible={true} dismissAriaLabel="Close alert" onDismiss={() => this.setVisible(false)}>
                  Demo alert
                </Alert>
              )}
            </SpaceBetween>
          }
          content={<Outlet />}
        />
      </div>
    );
  }
}