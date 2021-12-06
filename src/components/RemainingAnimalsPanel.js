import { Component } from 'react'

import Panel from './Panel'
import RemainingDomain from './RemainingDomain'

import './RemainingAnimalsPanel.css'

class RemainingAnimalsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ['insekten', 'fische', 'meerestiere']
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(domain) {
        let { active } = this.state;
        if(active.includes(domain)) {
            active = active.filter(val => val !== domain);
        } else {
            active.push(domain);
        }
        this.setState({ active: active });
    }

    render() {
        const { animals, month, hour } = this.props;
        const { active } = this.state;
        return (
            <Panel id='remaining'
                text={ <i style={{ color: 'grey' }}>Noch nicht aktiv</i> }
                icon='🕘'
                colors={{ header: '#343a40', body: '#6c757d', text: '#f1faee'}}
                animals={() => animals.getNext(active, month, hour)}>
                <div className='select-domain col-12 col-md-6 col-lg-4'>
                    <RemainingDomain color='#386641' active={active.includes('insekten')} action={() => this.toggle('insekten')} text='🐛' />
                    <RemainingDomain color='#1a759f' active={active.includes('fische')} action={() => this.toggle('fische')} text='🐟' />
                    <RemainingDomain color='#184e77' active={active.includes('meerestiere')} action={() => this.toggle('meerestiere')} text='🐙' />
                </div>
            </Panel>
        );
    }
}
export default RemainingAnimalsPanel;
