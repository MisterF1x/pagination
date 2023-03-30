export const paginate = (totalPages, currentPage) => {
  const groupSize = 5;
  const numGroups = Math.ceil(totalPages / groupSize);
  const currentGroup = Math.ceil(currentPage / groupSize);
  const startPage = (currentGroup - 1) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const hasPrevGroup = currentGroup > 1;
  const hasNextGroup = currentGroup < numGroups;
  return {
    pages,
    hasPrevGroup,
    hasNextGroup,
  };
};
