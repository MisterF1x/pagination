const itemsPerPage = 20;
const items = 20000;
const totalPages = Math.ceil(items / itemsPerPage);
export const state = {
  currentPage: 1,
  totalPages: totalPages,
  sprite: new URL('../img/sprite.svg', import.meta.url),
};
