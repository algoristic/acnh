import './Animal.css'

export default ({ animal, color }) => {
    return (
        <section className='animal' style={{ background: color }}>
            <header className='animal-header'>
                <span className='animal-name'>{animal.name}</span>
                <span className='animal-value'>({animal.value}&nbsp;Sternis)</span>
            </header>
            <main className='animal-body'>
                <div className='animal-active-wrapper'>
                    Aktiv: <span className='animal-active'>{animal.activeLiteral}</span>
                </div>
                <div className='animal-location-wrapper'>
                    Fundort: <span className='animal-location'>{animal.location}</span>
                </div>
            </main>
        </section>
    );
}
