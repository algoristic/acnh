import { Component } from 'react'

import AnimalService from '../service/AnimalService'
import DateTimeService from '../service/DateTimeService'

import FishPanel from './FishPanel'
import InsectsPanel from './InsectsPanel'
import MarineLifePanel from './MarineLifePanel'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.dateTimeService = new DateTimeService();
        this.animalService = new AnimalService('northernHemisphere');
        this.refresh = this.refresh.bind(this);

        setTimeout(this.refresh, this.dateTimeService.getMillisRemaining());
    }

    refresh() {
        this.setState({
            dateTimeService: new DateTimeService()
        });
        alert('Sachen aktualisiert');
    }

    render() {
        return (
            <div className="app">
                <InsectsPanel animals={this.animalService}
                    month={this.dateTimeService.month}
                    hour={this.dateTimeService.hour}>
                </InsectsPanel>
                <FishPanel animals={this.animalService}
                    month={this.dateTimeService.month}
                    hour={this.dateTimeService.hour}>
                </FishPanel>
                <MarineLifePanel animals={this.animalService}
                    month={this.dateTimeService.month}
                    hour={this.dateTimeService.hour}>
                </MarineLifePanel>
            </div>
        );
    }
}
