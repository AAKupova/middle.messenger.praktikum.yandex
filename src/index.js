
import Handlebars from 'handlebars';
import index from './template/index.hbs';
import header from './template/header.hbs';

import './normalize.css';
import './index.scss';

Handlebars.registerPartial('header', header);
const template = Handlebars.compile(index);

document.body.innerHTML = template({ title: "Nils",  body: '111'});

