export const formatDate = dateStr => {
  const date = new Date(dateStr);

  return `${addZeroIfNeeded(date.getDate())}-${addZeroIfNeeded(
    date.getMonth() + 1,
  )}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export const addZeroIfNeeded = num => {
  return num >= 10 ? num : '0' + num;
};
