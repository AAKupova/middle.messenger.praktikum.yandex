import { render } from '../../utils/render'
import form from '../../components/Form/form.hbs';
import { data } from './data';

export const login = render(form, data);
