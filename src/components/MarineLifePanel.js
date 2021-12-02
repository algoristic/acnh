import Panel from './Panel'

export default ({ animals, month, hour }) => {
    return (
        <Panel text='Meerestiere' icon='🐙'
            colors={{ header: '#184e77', body: '#1e6091', text: '#f1faee'}}
            animals={() => animals.get('meerestiere', month, hour)}>
        </Panel>
    );
}
