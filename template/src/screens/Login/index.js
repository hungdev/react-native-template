import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'reducers/auth.reducer';
import { Images, Metrics } from 'themes'
import Input from 'components/FormInput'
import { useForm, Controller } from "react-hook-form";
import { REQUIRED } from "app/utils/validation";
import { initReactI18next, useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
  const { t, i18n } = useTranslation();
  const { control, handleSubmit, errors } = useForm();

  const [fieldState, setFieldState] = useState({})
  const dispatch = useDispatch()
  const onLogin = () => dispatch(login('cee'))

  const onSubmit = data => {
    console.tron.log(data);
    dispatch(login('cee'))
  }

  return (
    <View style={styles.container}>
      <Icon name="rocket" size={30} color="#900" />
      <View>
        <Text style={styles.logo}>{t('logo')}</Text>
        <Image source={Images.line} style={styles.line} />
        <Text style={styles.txtSignIn}>{t('signIn')}</Text>
      </View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            inputWrapperStyle={{ marginTop: 60 }}
            title='userName'
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            errorValue={errors.email}
            isRequired
          />
        )}
        name="email"
        rules={{
          ...REQUIRED,
        }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            inputWrapperStyle={{ marginTop: 10 }}
            title='password'
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            errorValue={errors.password}
            isRequired
          />
        )}
        name="password"
        rules={{
          ...REQUIRED,
        }}
        defaultValue=""
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>{t('iForgotPassword')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnSignIn}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.txtBtnLogin}>{t('signIn')}</Text>
      </TouchableOpacity>
    </View >
  )
}



