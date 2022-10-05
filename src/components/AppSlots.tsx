import * as React from 'react';

type Props = { children: React.ReactNode }

const SlotsContext = React.createContext({
  getSlot: (name: string) => (<div />) as React.ReactNode,
  setSlot: (name: string, slot: React.ReactNode) => {},
});

export default function AppSlots({ children }: Props) {
  const [slots, setSlots] = React.useState<Record<string, React.ReactNode>>({});
  const getSlot = (name: string): React.ReactNode => slots[name] || <div />;
  const setSlot = (name: string, slot: React.ReactNode) =>
    setSlots((s) => ({ ...s, [name]: slot }));
  return (
    <SlotsContext.Provider value={{ getSlot, setSlot }}>
      {children}
    </SlotsContext.Provider>
  );
}

export const useSlot = (name: string) => {
  const { getSlot } = React.useContext(SlotsContext);
  return getSlot(name);
};

export const Slot = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  const { setSlot } = React.useContext(SlotsContext);
  React.useEffect(() => {
    setSlot(name, children);
  }, [children]);
  return null;
};

export const HeaderSlot = ({ children }: Props) => {
  return <Slot name="header">{children}</Slot>;
};
