import { dataButton, dataError } from './data';

import { Error } from '../../components/Error';
import { Button } from '../../components/Button';

export const button = new Button(dataButton, 'button');

export const page404 = new Error(dataError, 'error404', [button]);
