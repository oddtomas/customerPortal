import React from 'react';

import {
  AppLayout,
 } from '@cloudscape-design/components';
import LeftNav from '../left_navigation';
import TopNav from '../top_navigation';

import {
  Outlet,
} from "react-router-dom";

import AppSlots from '../../../components/AppSlots';
import AppHeader from '../../../components/AppHeader';

const labels = {
  navigation: 'Side navigation',
  navigationToggle: 'Open navigation',
  navigationClose: 'Close navigation',
  notifications: 'Notifications',
  tools: 'Tools',
  toolsToggle: 'Open tools',
  toolsClose: 'Close tools',
};

export default function CustomerLayout() {
  const headerContext = React.useState();
  return (
      <AppSlots>
        <TopNav userName='Brandon Beveridge' userEmail='brandon@sada.com'/>
        <AppLayout 
          ariaLabels={labels}
          content={<Outlet context={headerContext}/>}
          contentHeader={<AppHeader />}
          navigation={<LeftNav />}
          headerSelector="#h"
        />
      </AppSlots>
    );
}