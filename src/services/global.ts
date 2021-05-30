export const getUrl = (
  search: string,
  imagesByPage: number,
  currentPage: number
) => {
  const key = "21437505-d3c00650deccb5ae292399e76";
  return `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesByPage}&page=${currentPage}`;
};
