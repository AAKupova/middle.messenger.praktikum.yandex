import ViewBlock from '../../components/ViewBlock/ViewBlock';
import { Message } from '../../components/Message';
import { dataMessage } from './data';

export const messages: ViewBlock[] = [];

dataMessage.forEach(data => {
  const message = new Message(data, 'message');
  messages.push(message);
});