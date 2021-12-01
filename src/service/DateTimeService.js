class DateTimeService {
    constructor() {
        const now = new Date();
        this.month = (1 + now.getMonth()).toString();
        this.hour = (now.getHours());
    }
}

export default DateTimeService;
