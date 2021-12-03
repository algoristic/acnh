import Panel from './Panel'

const InsectsPanel = ({ animals, month, hour }) => {
    return (
        <Panel id='insects' text='Insekten' icon='🐛'
            colors={{ header: '#386641', body: '#6a994e', text: '#f1faee'}}
            animals={() => animals.get('insekten', month, hour)}>
        </Panel>
    );
}
export default InsectsPanel;
