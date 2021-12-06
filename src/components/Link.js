import './Link.css'

const InternalLink = ({ className, to, text, icon }) => {
    return (
        <div className={'calendar-link' + (className ? ` ${className}` : '')}>
            <a href={to}>
                { icon && <span className='link-icon'>{ icon }&nbsp;</span> }
                { text && <span className='link-text'>{ text }</span> }
            </a>
        </div>
    );
}

export default InternalLink;
