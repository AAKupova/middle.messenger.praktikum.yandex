import { render } from '../../utils/render';
import error from '../../components/Error';
import { data } from './data';

export const page500 = render(error, data);
