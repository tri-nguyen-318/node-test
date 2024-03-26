import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(timezone);
dayjs.extend(utc);

function generateIsoTimes() {
  let isoTimes = [];

  let currentTime = dayjs().startOf('day').format();
  const endTime = dayjs().endOf('day').format();

  while (currentTime < endTime) {
    isoTimes.push(currentTime.slice(11, 19));
    currentTime = dayjs(currentTime).add(30, 'minutes').format();
  }
  return isoTimes;
}

// Example usage
const isoTimesArray = generateIsoTimes();
console.log(isoTimesArray);
console.log('test', 1 + 1)