import axios from 'axios';
import { URI_BOT } from './constans';

export const postMessage = (id, message) => {
  axios.post(URI_BOT, {
    chat_id: id,
    parse_mode: 'html',
    text: message,
  });
};
