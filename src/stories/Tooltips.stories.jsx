import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'

import Tooltips from '../components/tooltips'
import { FaArrowRight } from 'react-icons/fa'

const authReducer = () => ({ id: 1, name: 'Jane Doe' })

const rootReducer = combineReducers({
  auth: authReducer
})

const store = createStore(rootReducer)

const TemplateToolip = (args) => (
    <Provider store={store}>
        <BrowserRouter>
        <Tooltips {...args} />
        </BrowserRouter>
    </Provider>
)

export const ToolipThread = TemplateToolip.bind({})
ToolipThread.args = {
  vote: {
    id: 1,
    upVotesBy: [12],
    downVotesBy: [221]
  },
  type: 'thread'
}

export const ToolipComment = TemplateToolip.bind({})
ToolipComment.args = {
  vote: {
    id: 1,
    upVotesBy: [13],
    downVotesBy: [42]
  },
  type: 'comment'
}

export const ToolipDisabled = TemplateToolip.bind({})
ToolipDisabled.args = {
  vote: {
    id: 1,
    upVotesBy: ['1'],
    downVotesBy: [2]
  },
  type: 'thread',
  disabled: true
}

export const ToolipUpvotes = TemplateToolip.bind({})
ToolipUpvotes.args = {
  vote: {
    id: 1,
    upVotesBy: [1],
    downVotesBy: [2]
  }
}

export const ToolipDownvotes = TemplateToolip.bind({})
ToolipDownvotes.args = {
  vote: {
    id: 1,
    upVotesBy: [2],
    downVotesBy: [1]
  }
}

export const ToolipNoVotes = TemplateToolip.bind({})
ToolipNoVotes.args = {
  vote: {
    id: 1,
    upVotesBy: [],
    downVotesBy: []
  }
}

// tooltip with children
export const ToolipWithChildren = TemplateToolip.bind({})
ToolipWithChildren.args = {
  vote: {
    id: 1,
    upVotesBy: [1],
    downVotesBy: [2]
  },
  children: (
    <a className="btn btn-primary btn-sm float-end">
        <FaArrowRight className="me-2" />
          Read More
    </a>
  )
}

export default {
  title: 'Components/Tooltips',
  component: Tooltips
}
