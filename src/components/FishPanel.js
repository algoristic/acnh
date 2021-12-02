import Panel from './Panel'

export default ({ animals, month, hour }) => {
    return (
        <Panel text='Fische' icon='🐟'
            colors={{ header: '#1a759f', body: '#168aad', text: '#f1faee'}}
            animals={animals.get('fische', month, hour)}>
        </Panel>
    );
}
