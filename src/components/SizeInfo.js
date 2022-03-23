import Toggle from './Toggle'

import './SizeInfo.css'

const sizes = ['Winzig', 'Klein', 'Mittel', 'Groß', 'Sehr groß', 'Sehr groß mit Rückenflosse', 'Riesig', 'Schmal'];

const SizeInfo = ({ size, toggle }) => {
    return (
        <section className='size-info'>
            <header className='size-info-header'>
                <h3>Größentabelle</h3>
                <Toggle click={() => toggle('off')} icon={'⨉'} className='' />
            </header>
            <main className='size-info-content'>
            {
                sizes.map(_size => {
                    return (
                        <div key={_size} className={`example-size ${_size === size ? 'marked': ''}`}>
                            <div className='size-text'>{ _size }</div>
                            <div className='size-img-wrapper' >
                                <img alt={ _size } src={`/img/sizes/${_size}.png`} className='size-img' />
                            </div>
                        </div>
                    );
                })
            }
            </main>
        </section>
    );
};

export default SizeInfo;
