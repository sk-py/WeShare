import React, {useEffect} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {requestPhotoPermission} from './src/utils/Constants';
import {checkFilePermissions} from './src/utils/libraryHelpers';
import {Platform} from 'react-native';

const App = () => {
  useEffect(() => {
    requestPhotoPermission();
    checkFilePermissions(Platform.OS);
  }, []);

  return <AppNavigation />;
};

export default App;
