import { Component } from 'react'

import AnimalService from '../service/AnimalService'
import DateTimeService from '../service/DateTimeService'

import InsectsPanel from './InsectsPanel'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.dateTimeService = new DateTimeService();
        this.animalService = new AnimalService('northernHemisphere');
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        this.setState({
            dateTimeService: new DateTimeService()
        })
    }

    render() {
        return (
            <div className="app">
                <InsectsPanel animals={this.animalService}
                    month={this.dateTimeService.month}
                    hour={this.dateTimeService.hour}>
                </InsectsPanel>
            </div>
        );
    }
}
