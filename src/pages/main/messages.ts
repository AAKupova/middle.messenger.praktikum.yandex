import { Message } from '../../components/Message';
import { dataMessage } from './data';

export const messages: any= [];

dataMessage.forEach(data => {
  const message = new Message(data, 'message');
  messages.push(message);
});