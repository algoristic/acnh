import Panel from './Panel'

const FishPanel = ({ fetch }) => {
    return (
        <Panel id='fish' text='Fische' icon='🐟'
            colors={{ header: '#1a759f', body: '#168aad', text: '#f1faee'}}
            animals={() => fetch()}>
        </Panel>
    );
}
export default FishPanel;
