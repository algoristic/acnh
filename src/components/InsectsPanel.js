import Panel from './Panel'

const InsectsPanel = ({ fetch }) => {
    return (
        <Panel id='insects' text='Insekten' icon='🐛'
            colors={{ header: '#386641', body: '#6a994e', text: '#f1faee'}}
            animals={() => fetch()}>
        </Panel>
    );
}
export default InsectsPanel;
