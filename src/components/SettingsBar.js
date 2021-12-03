import { Component } from 'react'

import Hemisphere from '../context/Hemisphere'

import Toggle from './Toggle'

import './SettingsBar.css'

export default class SettingsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const north = 'northernHemisphere';
        const south = 'southernHemisphere';
        const { collapsed } = this.state;
        return (
            <div className={'settings-bar-wrapper' + (collapsed ? ' settings-collapse' : '')}>
                <div className='settings-bar container-fluid'>
                    <span className='app-name'>AC:NH<sub>v1.0.0</sub></span>
                    <button className='menu-toggle' onClick={this.toggle}>
                        <span className='toggle-icon'>🔧</span>
                    </button>
                </div>
                <div className='settings-bar-content container-fluid'>
                    <Hemisphere.Consumer>
                    {({ hemisphere, change }) => {
                        let result;
                        if(hemisphere === north) {
                            result = <Toggle click={() => change(south)} text='Nordhalbkugel' icon={'🌏'} />;
                        } else {
                            result = <Toggle click={() => change(north)} text='Südhalbkugel' icon={'🌍'} />
                        }
                        return result;
                    }}
                    </Hemisphere.Consumer>
                </div>
            </div>
        );
    }
}
