import 'bootstrap/dist/css/bootstrap.min.css'
import { required, email, min, regex } from '@vee-validate/rules'
import en from '@vee-validate/i18n/dist/locale/en.json'
import { localize, setLocale  } from '@vee-validate/i18n'
import { configure, defineRule } from 'vee-validate'
import { createApp } from 'vue'
import App from './App.vue'

defineRule('required', required)
defineRule('min', min)
defineRule('email', email)
defineRule('regex', regex)

configure({
    generateMessage: localize({ en })
})
setLocale('en')

createApp(App).mount('#app')
