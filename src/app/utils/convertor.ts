export const formatKoreanDate = (date?: string | Date): string => {
  if (!date) {
    return '';
  }
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');

  return `${year}-${month}`;
};
