import qs from 'qs';
import React, { createContext } from 'react';
import mapValues from 'lodash/mapValues';
import { Density, Mode } from '@cloudscape-design/global-styles';
// import { useLocation, matchPath, useMatch } from 'react-router-dom';

interface AppUrlParams {
  density: Density;
  visualRefresh: boolean;
  motionDisabled: boolean;
}

export interface AppContextType<T = unknown> {
  mode: Mode;
  pageId?: string;
  urlParams: AppUrlParams & T;
  setMode: (newMode: Mode) => void;
}

const appContextDefaults: AppContextType = {
  mode: Mode.Light,
  pageId: undefined,
  urlParams: {
    density: Density.Comfortable,
    visualRefresh: true,
    motionDisabled: false,
  },
  setMode: () => {},
};

const AppContext = createContext<AppContextType>(appContextDefaults);

export default AppContext;

function parseQuery(query: string) {
  const queryParams = { ...appContextDefaults.urlParams, ...qs.parse(query.substring(1)) } as Record<string, any>;

  return mapValues(queryParams, value => {
    if (value === 'true' || value === 'false') {
      return value === 'true';
    }
    return value;
  });
}

function formatQuery(params: AppUrlParams) {
  const query = qs.stringify(params, {
    filter: (key, value) => (appContextDefaults.urlParams[key as keyof AppUrlParams] !== value ? value : undefined),
  });
  return query ? `?${query}` : '';
}

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const urlParams = parseQuery(location.search) as AppUrlParams;

  function setUrlParams(newParams: Partial<AppUrlParams>) {
  }

  function updateMode(newMode: Mode) {
  }

  return (
    <AppContext.Provider value={{ mode: "default" as Mode, urlParams, setMode: updateMode }}>
      {children}
    </AppContext.Provider>
  );
}