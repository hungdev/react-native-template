import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setLanguage } from 'reducers/auth.reducer';
import { initReactI18next, useTranslation } from 'react-i18next';


export default function Setting() {
  const { t, i18n } = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('hello')}</Text>
    </View>
  )
}
