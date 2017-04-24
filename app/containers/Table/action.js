import {
  HOVER_TXT,
  ADD_TXT,
  DEL_TXT,
  INIT_TXT
} from './constant';

export function hoverMsg(id) {
  return {
    type: HOVER_TXT,
    id
  }
}

export function addMsg(text) {
  return {
    type: ADD_TXT,
    text
  }
}

export function delMsg(text) {
  return {
    type: DEL_TXT,
    text
  }
}

export function initMsg() {
  return {
    type: INIT_TXT
  }
}
