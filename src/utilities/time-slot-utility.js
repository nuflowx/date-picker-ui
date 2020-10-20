import dayjs from 'dayjs';

import TimeSlot from '../factories/time-slot-factory'; // TODO: add aliases to not need relative paths

const getTimeSlots = (startHour, intervals, amount) => {
  const slots = [];
  let n = 0;

  while (n < amount) {
    const day = dayjs().hour(startHour).minute(n * intervals);
    slots.push(new TimeSlot(day.format('H:mm')));
    n += 1;
  }

  return slots;
};

export default getTimeSlots;
