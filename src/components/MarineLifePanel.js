import Panel from './Panel'

export default ({ animals, month, hour }) => {
    return (
        <Panel text='Meerestiere' icon='🐙'
            animals={animals.get('meerestiere', month, hour)}>
        </Panel>
    );
}
