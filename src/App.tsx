import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Asset } from 'react-native-unimodules';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Plus, Remove } from './assets/images';
import Store, { persistor } from './lib/Redux/Store';
import { ThemeProvider } from './lib/Theme';
import RootNavigator, { getActiveRouteName } from './navigation';
import Splash from './screens/Splash';

const cacheAssets = (): Promise<any[]> => {
  const loadImages = Asset.loadAsync([Plus, Remove]);
  return Promise.all([loadImages]);
};

const App: FC = () => {
  const [loading, setLoading] = useState(true);
  const routeNameRef = useRef<string>();
  const navigationRef = useRef<NavigationContainerRef>(null);

  useEffect(() => {
    cacheAssets().then(() => setLoading(false));
    const state = navigationRef?.current?.getRootState();
    routeNameRef.current = getActiveRouteName(state);
  }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state): void => {
        const currentRouteName = getActiveRouteName(state);
        routeNameRef.current = currentRouteName;
      }}
    >
      <ThemeProvider>
        <ReduxProvider store={Store}>
          <PersistGate loading={<Splash />} persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </ReduxProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
