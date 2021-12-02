import { Component } from 'react'

import Hemisphere from '../context/Hemisphere'

import AnimalService from '../service/AnimalService'
import DateTimeService from '../service/DateTimeService'

import FishPanel from './FishPanel'
import InsectsPanel from './InsectsPanel'
import MarineLifePanel from './MarineLifePanel'
import RemainingAnimalsPanel from './RemainingAnimalsPanel'

import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        const hemisphere = 'northernHemisphere';
        this.state = {
            hemisphere: hemisphere,
            dateTimeService: new DateTimeService(),
            animalService: new AnimalService(hemisphere)
        };
        this.refresh = this.refresh.bind(this);

        setTimeout(this.refresh, this.state.dateTimeService.getMillisRemaining());
    }

    refresh() {
        const dateTimeService = new DateTimeService();
        this.setState({
            dateTimeService: dateTimeService
        });
        setTimeout(this.refresh, dateTimeService.getMillisRemaining());
        console.log('Refreshed all domains');
    }

    render() {
        const { hemisphere, animalService, dateTimeService } = this.state;
        return (
            <div className="app">
                <Hemisphere.Provider value={hemisphere}>
                    <InsectsPanel animals={animalService}
                        month={dateTimeService.month}
                        hour={dateTimeService.hour}>
                    </InsectsPanel>
                    <FishPanel animals={animalService}
                        month={dateTimeService.month}
                        hour={dateTimeService.hour}>
                    </FishPanel>
                    <MarineLifePanel animals={animalService}
                        month={dateTimeService.month}
                        hour={dateTimeService.hour}>
                    </MarineLifePanel>
                    <RemainingAnimalsPanel animals={animalService}
                        month={dateTimeService.month}
                        hour={dateTimeService.hour}>
                    </RemainingAnimalsPanel>
                </Hemisphere.Provider>
            </div>
        );
    }
}
