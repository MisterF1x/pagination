import { state } from './state';
import { refs } from './refs';
import { paginate } from './createPagination';
import { renderMarkup, paginationMarkup } from './renderFn';
const { pagination } = refs;
// let { currentPage, totalPages } = state;

export const clearHTML = () => {
  pagination.innerHTML = '';
};
export const updateCurrentPage = newPage => {
  state.currentPage = newPage;
  clearHTML();
  renderMarkup(paginationMarkup());
};
export const goToNextPage = () => {
  updateCurrentPage(state.currentPage + 1);
};
export const goToPrevPage = () => {
  updateCurrentPage(state.currentPage - 1);
};
export const goToNextGroupBtn = () => {
  const { pages } = paginate(state.totalPages, state.currentPage);
  const lastPageOfCurrentGroup = pages[pages.length - 1];
  const newPage = Math.min(lastPageOfCurrentGroup + 1, state.totalPages);
  state.currentPage = pages[pages.length - 1] + 1;
  updateCurrentPage(newPage);
};
export const goToPrevGroupBtn = () => {
  const { pages } = paginate(state.totalPages, state.currentPage);
  const firstPageOfCurrentGroup = pages[0];
  const newPage = Math.max(firstPageOfCurrentGroup - 1, 1);
  updateCurrentPage(newPage);
};
export const changePageByClick = evt => {
  const activeBtn = document.querySelector('.active-page');
  const selectedPage = Number(evt.target.textContent) || state.currentPage;
  if (selectedPage === state.currentPage) return;

  updateCurrentPage(selectedPage);
  activeBtn.classList.remove('active-page');
  evt.target.classList.add('active-page');
};
