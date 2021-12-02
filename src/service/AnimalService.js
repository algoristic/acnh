import DateTimeService from './DateTimeService'
import data from '../assets/data.min.js'

let maxValue = (a, b) => { return b.value - a.value };

class AnimalService {
    constructor(hemisphere) {
        this.hemisphere = hemisphere;
    }

    get(domain, month, hour) {
        return data[this.hemisphere][month][domain]
            .map(slug => data.animals[slug])
            .filter(animal => animal.active[hour])
            .sort(maxValue);
    }

    getNext(month, hour) {
        const monthData = data[this.hemisphere][month];
        const { insekten, fische, meerestiere } = monthData;
        const all = insekten.concat(fische, meerestiere)
            .map(slug => data.animals[slug])
            .filter(animal => {
                if(animal.active[hour]) {
                    return false;
                }
                for(let j = (hour + 1); j <= 23; j++) {
                    if(animal.active[j]) {
                        return true;
                    }
                }
                return false;
            })
            .sort(maxValue);
        return all;
    }
}

export default AnimalService;
