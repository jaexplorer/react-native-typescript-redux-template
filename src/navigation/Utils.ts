import { NavigationState } from '@react-navigation/native';

export const getActiveRouteName = (state: NavigationState | undefined): string => {
  if (!state) {
    return '';
  }
  const route = state.routes[state.index];
  if (!route.state) {
    return route.name;
  }
  return getActiveRouteName(route.state as NavigationState) || route.name;
};

export default {
  getActiveRouteName,
};
