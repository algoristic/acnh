export default ({ animal }) => {
    return (
        <p className='animal'>
            <div>
                <span className='animal-name'>{animal.name}</span>
                <span className='animal-value'>({animal.value}&nbsp;Sternis)</span>
            </div>
            <div className='animal-active-wrapper'>
                Aktiv: <span className='animal-active'>{animal.activeLiteral}</span>
            </div>
            <div className='animal-location-wrapper'>
                Fundort: <span className='animal-location'>{animal.location}</span>
            </div>
        </p>
    );
}
