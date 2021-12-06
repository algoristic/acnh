import { Link } from "react-router-dom";

import './Link.css'

const InternalLink = ({ className, to, text, icon }) => {
    return (
        <div className={'calendar-link' + (className ? ` ${className}` : '')}>
            <Link to={to}>
                { icon && <span className='link-icon'>{ icon }&nbsp;</span> }
                { text && <span className='link-text'>{ text }</span> }
            </Link>
        </div>
    );
}

export default InternalLink;
