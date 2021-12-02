import { Component } from 'react'

import Animal from './Animal'

import './Panel.css'

export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        });
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
