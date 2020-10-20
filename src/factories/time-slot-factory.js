export default class TimeSlotFactory {
  constructor(time) {
    // TODO: add disabled value for past times (pass through appropriate date)
    this.value = time;
    this.label = time;
  }
}
