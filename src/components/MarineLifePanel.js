import Panel from './Panel'

const MarineLifePanel = ({ animals, month, hour }) => {
    return (
        <Panel id='maringLife' text='Meerestiere' icon='🐙'
            colors={{ header: '#184e77', body: '#1e6091', text: '#f1faee'}}
            animals={() => animals.get('meerestiere', month, hour)}>
        </Panel>
    );
}
export default MarineLifePanel;
