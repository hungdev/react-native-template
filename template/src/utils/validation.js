// import I18n from '../i18n'
import I18n from "i18next";

export const REQUIRED = ({
  required: {
    value: true,
    message: I18n.t('required')
  }
});
export const EMAIL = ({
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: I18n.t('email.invalid')
  }
});