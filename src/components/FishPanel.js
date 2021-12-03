import Panel from './Panel'

const FishPanel = ({ animals, month, hour }) => {
    return (
        <Panel id='fish' text='Fische' icon='🐟'
            colors={{ header: '#1a759f', body: '#168aad', text: '#f1faee'}}
            animals={() => animals.get('fische', month, hour)}>
        </Panel>
    );
}
export default FishPanel;
