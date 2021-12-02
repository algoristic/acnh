import './Animal.css'

import Hemisphere from '../context/Hemisphere'

export default ({ animal, color }) => {
    return (
        <Hemisphere.Consumer>
        {({ hemisphere }) => {
            return (
                <section className='animal col-12 col-md-6' style={{ background: color }}>
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
                        <div className='animal-seasons-wrapper'>
                            <span className=''>{animal[hemisphere]}</span>
                        </div>
                    </main>
                </section>
            );
        }}
        </Hemisphere.Consumer>
    );
}
