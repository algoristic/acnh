import './Animal.css'

import Hemisphere from '../context/Hemisphere'

export default ({ animal, colors:{ header } }) => {
    return (
        <Hemisphere.Consumer>
        {({ hemisphere }) => {
            return (
                <div className='animal-wrapper col-12 col-md-6 col-lg-4'>
                    <section className='animal' style={{ background: header }}>
                        <header className='animal-header'>
                            <span className='animal-name'>{animal.name}</span>
                            <span className='animal-value'>({animal.value}&nbsp;Sternis)</span>
                        </header>
                        <main className='animal-body'>
                            <img className='animal-image' src={`/img/${animal.slug}.png`} />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Zeit:</td>
                                        <td>{ animal.activeLiteral }</td>
                                    </tr>
                                    <tr>
                                        <td>Fundort:</td>
                                        <td>{ animal.location }</td>
                                    </tr>
                                    <tr>
                                        <td>Aktiv:</td>
                                        <td>{ animal[hemisphere] }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </main>
                    </section>
                </div>
            );
        }}
        </Hemisphere.Consumer>
    );
}
