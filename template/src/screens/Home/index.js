import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { reset, setLanguage } from 'app/reducers/auth.reducer';
import { initReactI18next, useTranslation } from 'react-i18next';


export default function Home() {
  const dispatch = useDispatch()
  const language = useSelector(store => store.auth.language);
  const { t, i18n } = useTranslation();

  const onLogout = () => dispatch(reset())
  const changeVNLanguage = () => {
    dispatch(setLanguage('vi'))
  }
  const changeENLanguage = () => {
    dispatch(setLanguage('en'))
  }

  return (
    <View style={styles.container}>
      <Text>{t('hello')}</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
        {/* <Text>hello</Text> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={changeVNLanguage}>
        <Text>Change Language to VN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeENLanguage}>
        <Text>Change Language to EN</Text>
      </TouchableOpacity>
    </View>
  )
}
