import DateTimeService from './DateTimeService'
import data from '../assets/data.min.js'

class AnimalService {
    constructor(hemisphere) {
        this.hemisphere = hemisphere;
    }

    get(domain, month, hour) {
        return data[this.hemisphere][month][domain]
            .map(slug => data.animals[slug])
            .filter(animal => animal.active[hour]);
    }
}

export default AnimalService;
