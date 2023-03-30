import {
  goToNextGroupBtn,
  goToNextPage,
  goToPrevPage,
  goToPrevGroupBtn,
  changePageByClick,
} from './services';
import { state } from './state';

export const onBtnPageClick = evt => {
  if (evt.target.nodeName !== 'BUTTON') return;
  if (Number(evt.target.textContent) === state.currentPage) return;
  if (evt.target.classList.contains('next-btn')) goToNextPage();
  if (evt.target.classList.contains('prev-btn')) goToPrevPage();
  if (evt.target.classList.contains('next-dots')) goToNextGroupBtn();
  if (evt.target.classList.contains('prev-dots')) goToPrevGroupBtn();
  changePageByClick(evt);
  console.log(`current-page: ${state.currentPage}`);
};
