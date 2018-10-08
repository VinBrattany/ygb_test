/**
 * 按需加载 Mint UI
 * 开发参考 https://mint-ui.github.io/docs/#/zh-cn2/
 */
import 'mint-ui/lib/style.css'
import {
  // Toast,
  MessageBox,
  Actionsheet,
  DatetimePicker,
  Popup,
  Cell,
  Button,
  Field,
  Switch,
  Picker,
  Checklist,
  Radio
} from 'mint-ui'

const initMint = Vue => {
  Vue.prototype.$messageBox = MessageBox
  Vue.component(MessageBox.name, MessageBox)
  Vue.component(Actionsheet.name, Actionsheet)
  Vue.component(DatetimePicker.name, DatetimePicker)
  Vue.component(Popup.name, Popup)
  Vue.component(Cell.name, Cell)
  Vue.component(Button.name, Button)
  Vue.component(Field.name, Field)
  Vue.component(Switch.name, Switch)
  Vue.component(Picker.name, Picker)
  Vue.component(Checklist.name, Checklist)
  Vue.component(Radio.name, Radio)
}

export default initMint
