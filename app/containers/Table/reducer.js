import {
  HOVER_TXT,
  ADD_TXT,
  DEL_TXT,
  INIT_TXT
} from './constant';

const initialState = {
  list: [
    {
      id: '1',
      name: '呵呵',
      text: '呵呵',
      hover: false
    }, {
      id: '2',
      name: '哈哈',
      text: '哈哈',
      hover: false
    }, {
      id: '3',
      name: '嘿嘿',
      text: '嘿嘿',
      hover: false
    }
  ]
};

const tabelReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOVER_TXT:
      let list = state.list.slice(0);
      list.map((val, idx) => {
        if (action.id == val.id) {
          val.hover = !val.hover;
        }
      });
      return Object.assign({}, state, {list: list});
    case INIT_TXT:
      return state;
    default:
      return state;
  }
};

export default tabelReducer;
