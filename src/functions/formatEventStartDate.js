import format from 'date-fns/format';

export function formatEventStartDate(time) {
  return format(Date.parse(time), 'dd MMMM yyyy, HH:mm');
}
