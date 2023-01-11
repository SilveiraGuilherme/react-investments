const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const months = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function formatMonth(month) {
  return months[month];
}

export function formatPercentage(percentage) {
  const symbol = percentage > 0 ? '+' : '';
  return symbol + percentage.toFixed(2) + '%';
}

export function formatMoney(value) {
  return moneyFormatter.format(value);
}
