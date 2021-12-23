export default function numberFormat(number) {
  const formatNumbering = new Intl.NumberFormat('de-DE').format(number);
  return formatNumbering;
}
