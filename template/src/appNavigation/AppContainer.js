import React, { useEffect, useCallback } from 'react';
import { Button, View, Text, BackHandler, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from './NavigationService';
import TopLevelNavigator from './Router';
import { useTranslation } from 'react-i18next';


export default function AppContainer() {
  const { t, i18n } = useTranslation();
  const language = useSelector(store => store.auth.language);

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);


  const handleBackButton = () => {
    // Alert.alert('Are you sure you want to exit?')
    return true;
  };

  return (
    <TopLevelNavigator
      refs={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    ></TopLevelNavigator>
  );
}
