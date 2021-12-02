import './SettingsBar.css'

import Hemisphere from '../context/Hemisphere'

const Toggle = ({ click, text, icon }) => {
    return (
        <a className='hemisphere-toggle' onClick={() => click()}>
            <span className='hemisphere-name'>{ text }</span>
            <span className='hemisphere-icon'>{ icon }</span>
        </a>
    );
}

export default () => {
    const north = 'northernHemisphere';
    const south = 'southernHemisphere';
    return (
        <Hemisphere.Consumer>
        {({ hemisphere, change }) => {
            return (
                <div className='settings-bar'>
                {
                    hemisphere === north && <Toggle click={() => change(south)} text='Nordhalbkugel' icon={'🌐'} />
                }
                {
                    hemisphere === south && <Toggle click={() => change(north)} text='Südhalbkugel' icon={'🌐'} />
                }
                </div>
            );
        }}
        </Hemisphere.Consumer>
    );
}
