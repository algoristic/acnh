import Animal from './Animal'

export default ({ animals, text, icon }) => {
    return (
        <section className='panel'>
            <header className='panel-header'>
                <span className='header-icon'>
                    { icon }
                </span>
                <span className='header-text'>
                    { text }
                </span>
            </header>
            <body className='panel-body'>
                { animals.map((animal) => <Animal animal={animal} />) }
            </body>
        </section>
    );
}
