import { Popup } from '../../components/Popup';
import ViewBlock from '../../components/ViewBlock/ViewBlock';

export const createPopup = (data: any, children: ViewBlock[]) =>
  new Popup(data, 'popup', children);
