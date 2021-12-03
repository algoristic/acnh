import './Toggle.css'

export default ({ click, text, icon }) => {
    return (
        <div className='settings-toggle' onClick={() => click()}>
            <span className='settings-name'>{ text }</span>
            <span className='settings-icon'>{ icon }</span>
        </div>
    );
}
