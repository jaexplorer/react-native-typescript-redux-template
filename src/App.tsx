import React, { FC, useState, useEffect, useRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { Asset } from 'react-native-unimodules';
import { Plus, Remove } from './assets/images';
import Splash from './screens/Splash';
import RootNavigator, { getActiveRouteName } from './navigation';
import { ThemeProvider } from './lib/Theme';

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
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
