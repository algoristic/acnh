import Panel from './Panel'

const RemainingAnimalsPanel = ({ animals, month, hour }) => {
    return (
        <Panel id='remaining'
            text={ <i style={{ color: 'grey' }}>Noch nicht aktiv</i> }
            icon='🕘'
            colors={{ header: '#343a40', body: '#6c757d', text: '#f1faee'}}
            animals={() => animals.getNext(month, hour)}>
        </Panel>
    );
}
export default RemainingAnimalsPanel;
