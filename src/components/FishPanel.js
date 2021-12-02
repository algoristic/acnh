import Panel from './Panel'

export default ({ animals, month, hour }) => {
    return (
        <Panel text='Fische' icon='🐟'
            animals={animals.get('fische', month, hour)}>
        </Panel>
    );
}
