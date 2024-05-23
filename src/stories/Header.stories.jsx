import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'

import Header from '../components/layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

const authReducer = () => ({
  auth: {
    user: {
      name: 'Jane Doe'
    }
  }
})

const loadingBarReducer = () => ({
  loadingBar: {
    default: 0
  }
})

const rootReducer = combineReducers({
  auth: authReducer,
  loadingBar: loadingBarReducer
})

const store = createStore(rootReducer)

const TemplateMain = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Header {...args} />
    </BrowserRouter>
  </Provider>
)

export const MainHeader = TemplateMain.bind({})

export default {
  title: 'Components/Header',
  component: Header
}
