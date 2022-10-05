import * as React from 'react';
import { useSlot } from './AppSlots';

const AppHeader = () => {
  const header = useSlot('header');
  if (!header) return null;
  return <React.Fragment>{header}</React.Fragment>;
};

export default AppHeader;
