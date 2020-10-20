import dayjs from 'dayjs';

const getDayOptions = (days) => {
  const options = [];
  let n = 0;

  while (n < days) { // 4 weeks
    const day = dayjs().add(n, 'day');
    options.push({
      value: day.format('YYYY-MM-DD'),
      label: day.format('D ddd MMM'),
      selected: day.isSame(dayjs(), 'day'),
    });
    n += 1;
  }

  return options;
};

export default getDayOptions;
