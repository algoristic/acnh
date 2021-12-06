import { Component } from 'react'

import Panel from './Panel'
import RemainingDomain from './RemainingDomain'

import './RemainingAnimalsPanel.css'

class RemainingAnimalsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: [],
            initialized: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(domain) {
        let { active } = this.state;
        if(active.includes(domain)) {
            active = active.filter(val => val !== domain);
        } else {
            active = [];
            active.push(domain);
        }
        let initialized = (active.length === 0);
        this.setState({
            active: active,
            initialized: initialized
        });
    }

    render() {
        const { animals, month, hour } = this.props;
        const { active, initialized } = this.state;
        let activeDomains;
        if(initialized) {
            activeDomains = ['insekten', 'fische', 'meerestiere'];
        } else {
            activeDomains = active;
        }
        return (
            <Panel id='remaining'
                text={ <i style={{ color: 'grey' }}>Noch nicht aktiv</i> }
                icon='🕘'
                colors={{ header: '#343a40', body: '#6c757d', text: '#f1faee'}}
                animals={() => animals.getNext(activeDomains, month, hour)}>
                <div className='select-domain col-12 col-md-6 col-lg-4'>
                    <RemainingDomain color='#386641'
                        active={active.includes('insekten')} text='🐛'
                        action={() => this.toggle('insekten')}>
                    </RemainingDomain>
                    <RemainingDomain color='#1a759f' text='🐟'
                        active={active.includes('fische')}
                        action={() => this.toggle('fische')}>
                    </RemainingDomain>
                    <RemainingDomain color='#184e77' text='🐙'
                        active={active.includes('meerestiere')}
                        action={() => this.toggle('meerestiere')}>
                    </RemainingDomain>
                </div>
            </Panel>
        );
    }
}
export default RemainingAnimalsPanel;
