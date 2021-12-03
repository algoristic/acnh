import './Toggle.css'

const Toggle = ({ className, click, text, icon }) => {
    return (
        <span className={'settings-wrapper' + (className ? ` ${className}` : '')}>
            <span className='settings-toggle' onClick={() => click()}>
                {
                    text && <span className='settings-name'>{ text }</span>
                }
                <span className='settings-icon'>{ icon }</span>
            </span>
        </span>
    );
}
export default Toggle;
