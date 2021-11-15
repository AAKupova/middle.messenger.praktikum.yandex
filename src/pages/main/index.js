import { render } from '../../utils/render';
import main from '../../components/Main/main.hbs';
import { data } from './data';

export const index = render(main, data);
