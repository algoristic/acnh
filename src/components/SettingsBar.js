import { Component } from 'react'

import Hemisphere from '../context/Hemisphere'
import Update from '../context/Update'
import Sort from '../context/Sort'

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
        const { collapsed } = this.state;
        return (
            <div className={'settings-bar-wrapper' + (collapsed ? ' settings-collapse' : '')}>
                <div className='settings-bar container-fluid'>
                    <span className='app-name'>AC:NH📅<sub>v1.0.0</sub></span>
                    <button className='menu-toggle' onClick={this.toggle}>
                        <span className='toggle-icon'>≡</span>
                    </button>
                </div>
                <div className='settings-bar-content container-fluid'>
                    <Hemisphere.Consumer>
                    {({ hemisphere, change }) => {
                        let result;
                        const north = 'northernHemisphere';
                        const south = 'southernHemisphere';
                        if(hemisphere === north) {
                            return <Toggle click={() => change(south)} text='Nordhalbkugel' icon={'🌏'} />;
                        } else {
                            return <Toggle click={() => change(north)} text='Südhalbkugel' icon={'🌍'} />
                        }
                    }}
                    </Hemisphere.Consumer>
                    <div className='settings-wrapper'>
                        <Update.Consumer>
                        {({ setSortProperty, sort:{ property } }) => {
                            const value = 'value';
                            const alphabetic = 'alphabetic';
                            if(property === value) {
                                return <Toggle click={() => setSortProperty(alphabetic)} text={'Sternis'} icon={'💰'} />
                            } else {
                                return <Toggle click={() => setSortProperty(value)} text={'Alphabetisch'} icon={'🔤'} />
                            }
                        }}
                        </Update.Consumer>
                        <Update.Consumer>
                        {({ setSortOrder, sort:{ order } }) => {
                            const ascending = 'ascending';
                            const descending = 'descending';
                            if(order === ascending) {
                                return <Toggle className='ml-33' click={() => setSortOrder(descending)} icon={'⬇️'} />
                            } else {
                                return <Toggle className='ml-33' click={() => setSortOrder(ascending)} icon={'⬆️'} />
                            }
                        }}
                        </Update.Consumer>
                    </div>
                    <Update.Consumer>
                    {({ update }) => {
                        return <Toggle click={() => {}} icon={'🔄'} />
                    }}
                    </Update.Consumer>
                </div>
            </div>
        );
    }
}
