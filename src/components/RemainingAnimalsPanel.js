import Panel from './Panel'

export default ({ animals, month, hour }) => {
    return (
        <Panel text='...' icon='🕘'
            colors={{ header: '#343a40', body: '#6c757d', text: '#f1faee'}}
            animals={() => animals.getNext(month, hour)}>
        </Panel>
    );
}
