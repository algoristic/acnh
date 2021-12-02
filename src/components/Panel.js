import Animal from './Animal'

import './Panel.css'

export default ({ animals, text, icon, colors }) => {
    let index = -1;
    return (
        <article className='panel' style={{ background: colors.header, borderColor: colors.header, color: colors.text }}>
            <header className='panel-header' style={{ background: colors.header }}>
                <span className='header-icon'>
                    { icon }
                </span>
                <span className='header-text'>
                    { text }
                </span>
            </header>
            <main className='panel-body'>
                { animals.map((animal) => <Animal key={++index} animal={animal} color={colors.body} />) }
            </main>
        </article>
    );
}
