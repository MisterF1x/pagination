import 'modern-normalize';
import './index.css';
import { onBtnPageClick } from './js/handlers';
import { refs } from './js/refs';
import { paginationMarkup, renderMarkup } from './js/renderFn';
import { state } from './js/state';
const { pagination } = refs;

pagination.addEventListener('click', onBtnPageClick);
renderMarkup(paginationMarkup(state.currentPage));
console.log(state.currentPage);
