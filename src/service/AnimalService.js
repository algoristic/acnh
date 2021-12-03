import data from '../assets/data.min.js'

const sort = {
    value: {
        descending: (a, b) => { return b.value - a.value },
        ascending: (a, b) => { return a.value - b.value }
    },
    alphabetic: {
        descending: (a, b) => {
            const nameA = a.name;
            const nameB = b.name;
            if(nameA < nameB) {
                return 1;
            }
            if(nameA > nameB) {
                return -1;
            }
            return 0;
        },
        ascending: (a, b) => {
            const nameA = a.name;
            const nameB = b.name;
            if(nameA < nameB) {
                return -1;
            }
            if(nameA > nameB) {
                return 1;
            }
            return 0;
        }
    }
};

class AnimalService {
    constructor(hemisphere, sort) {
        this.hemisphere = hemisphere;
        this.sort = sort;
    }

    get(domain, month, hour) {
        return data[this.hemisphere][month][domain]
            .map(slug => data.animals[slug])
            .filter(animal => animal.active[hour])
            .sort(sort[this.sort.property][this.sort.order]);
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
            .sort(sort[this.sort.property][this.sort.order]);
        return all;
    }
}

export default AnimalService;
