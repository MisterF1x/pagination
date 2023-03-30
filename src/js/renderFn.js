import { state } from './state';
import { paginate } from './createPagination';
import { refs } from './refs';
const { pagination } = refs;

export const paginationMarkup = () => {
  const { pages, hasPrevGroup, hasNextGroup } = paginate(
    state.totalPages,
    state.currentPage
  );
  const firstPage = `<button type="button" class="start-btn page-btn">1</button>`;
  const lastPage = `<button type="button" class="end-btn page-btn">${state.totalPages}</button>`;
  const prev = `<button type="button" class="prev-btn page-btn"><svg class="icon icon-arrow-left">
    <use xlink:href="${state.sprite}#icon-arrow-left"></use>
  </svg></button>`;
  const next = `<button type="button" class="next-btn page-btn"><svg class="icon icon-arrow-right">
    <use xlink:href="${state.sprite}#icon-arrow-right"></use>
  </svg></button>`;
  const dotsBtnPrev = `<button class="page-btn prev-dots">...</button>`;
  const dotsBtnNext = `<button class="page-btn next-dots">...</button>`;
  const btnPages = pages
    .map(num => {
      const isActive = num === state.currentPage ? 'active-page' : '';
      return `<button type="button" class="page-btn ${isActive}
        ">${num}</button>`;
    })
    .join('');

  const leftGroup = hasPrevGroup ? prev + firstPage + dotsBtnPrev : '';
  const rightGroup = hasNextGroup ? dotsBtnNext + lastPage + next : '';
  return leftGroup + btnPages + rightGroup;
};

export const renderMarkup = markup => {
  pagination.insertAdjacentHTML('beforeend', markup);
};
