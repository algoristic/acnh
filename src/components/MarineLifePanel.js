import Panel from './Panel'

const MarineLifePanel = ({ fetch }) => {
    return (
        <Panel id='maringLife' text='Meerestiere' icon='🐙'
            colors={{ header: '#184e77', body: '#1e6091', text: '#f1faee'}}
            animals={() => fetch()}>
        </Panel>
    );
}
export default MarineLifePanel;
