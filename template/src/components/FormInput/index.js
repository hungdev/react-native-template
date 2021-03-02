import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { initReactI18next, useTranslation } from 'react-i18next';
import { Metrics, Fonts, Colors } from 'themes'

export default function FormInput(props) {
  const { t, i18n } = useTranslation();
  const { title, value, onChangeText, onBlur, errorValue, isRequired, inputWrapperStyle, titleStyle, inputStyle } = props
  return (
    <View style={[styles.wrapper, inputWrapperStyle]}>
      <Text style={{ ...styles.titleInput, ...titleStyle }}>{t(title)} {isRequired && <Text style={styles.asterisk}>*</Text>}</Text>
      <TextInput
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        style={{ ...styles.input, ...inputStyle }}
      />
      {errorValue && <Text style={styles.errorText}>{errorValue?.message}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    alignSelf: 'center'
  },
  titleInput: {
    alignSelf: 'flex-start',
    marginBottom: Metrics.smallMargin,
    fontSize: Fonts.size.medium
  },
  input: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 3,
    height: 40
  },
  errorText: {
    color: 'red',
    marginTop: Metrics.baseMargin
  },
  asterisk: {
    color: 'red'
  }
})