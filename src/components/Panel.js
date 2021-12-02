import { Component } from 'react'

import Animal from './Animal'

import PersistentStorage from '../service/PersistentStorage'

import './Panel.css'

export default class Panel extends Component {
    constructor(props) {
        super(props);
        let { id } = props;
        this.storage = new PersistentStorage();
        this.state = {
            collapsed: this.storage.getPanel(id)
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        let newState = !this.state.collapsed;
        this.setState({
            collapsed: newState
        });
        this.storage.setPanel(this.props.id, newState);
    }

    render() {
        let index = -1;
        const { colors, icon, text, animals } = this.props;
        const { collapsed } = this.state;
        return (
            <article className={'panel' + (collapsed ? ' collapsed' : '')}
                style={{ background: colors.header, borderColor: colors.header, color: colors.text }}>
                <header className='panel-header' style={{ background: colors.header }} onClick={this.toggleCollapse}>
                    <span className='header-icon'>
                        { icon }
                    </span>
                    <span className='header-text'>
                        { text }
                    </span>
                    <span className='panel-toggle'>
                        { collapsed ? '🔎' : '...' }
                    </span>
                </header>
                <main className='panel-body'>
                    { !collapsed && animals().map((animal) => <Animal key={++index} animal={animal} color={colors.body} />) }
                </main>
            </article>
        );
    }
}
