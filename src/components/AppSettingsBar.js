import { Component } from 'react'
import { Link } from 'react-router-dom'


import InternalLink from "./Link";
import Toggle from './Toggle'

import './AppSettingsBar.css'

class AppSettingsBar extends Component {
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
        let button;
        if(collapsed) {
            button = <Toggle click={this.toggle} icon={'≡'} />;
        } else {
            button = <Toggle click={this.toggle} icon={'⨉'} />;
        }
        const { active:{ slug, text }, children } = this.props;
        return (
            <div className={'settings-bar-wrapper' + (collapsed ? ' settings-collapse' : '')}>
                <div className='settings-bar container-fluid'>
                    <div className='app-info-wrapper'>
                        <div className='app-name'>
                            <a href='/'>CrossingCalendar</a>
                        </div>
                        <div className='app-date-time'>{ text }</div>
                    </div>
                    { button }
                </div>
                <div className='settings-bar-content container-fluid'>
                    <div className='settings-wrapper link-wrapper'>
                        { (slug !== 'calendar') && <InternalLink to='/?app=calendar' icon='📅' text='Heute' /> }
                        { (slug !== 'data') && <InternalLink to='/?app=data' icon='📚' text='Datenbank' /> }
                    </div>
                </div>
                <div className='settings-bar-content app-settings container-fluid'>
                    { children }
                </div>
            </div>
        );
    }
}

export default AppSettingsBar;
