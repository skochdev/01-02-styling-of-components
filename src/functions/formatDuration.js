import formatDistanceStrict from 'date-fns/formatDistanceStrict';

export function formatDuration(start, end) {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
}
