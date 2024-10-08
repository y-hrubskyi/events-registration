export const setPaginationOptions = (page, limit) => {
  const skip = (page - 1) * limit;

  return {
    skip,
    limit: Number(limit)
  };
};
