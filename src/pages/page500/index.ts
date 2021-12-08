// import { render } from '../../utils/render';
// import error from '../../components/Error';
// import { data } from './data';

// export const page500 = render(error, data);
import { dataButton, dataError } from './data';

import { Error } from '../../components/Error';
import { Button } from '../../components/Button';

export const button = new Button(dataButton, 'button');

export const page500 = new Error(dataError, 'error404', [button]);
