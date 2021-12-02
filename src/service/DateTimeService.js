class DateTimeService {
    constructor() {
        this.now = new Date();
        this.month = (1 + this.now.getMonth()).toString();
        this.hour = (this.now.getHours());
    }

    getMillisRemaining() {
        // how many seconds does one hour have
        const secondsInAnHour = (60 * 60);
        const minutesPassed = this.now.getMinutes();
        const secondsPassed = ((minutesPassed * 60) + this.now.getSeconds());
        return (1000 * (secondsInAnHour - secondsPassed));
    }
}

export default DateTimeService;
