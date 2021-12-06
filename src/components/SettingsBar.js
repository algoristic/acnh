import { Component } from 'react'

import Hemisphere from '../context/Hemisphere'
import Update from '../context/Update'

import AppSettingsBar from './AppSettingsBar'
import Toggle from './Toggle'

export default class SettingsBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { active, dateTime } = this.props;
        return (
            <AppSettingsBar dateTime={dateTime} active={active}>
                <Hemisphere.Consumer>
                {({ hemisphere, change }) => {
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
            </AppSettingsBar>
        );
    }
}
