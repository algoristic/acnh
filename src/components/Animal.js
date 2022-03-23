import './Animal.css'

import Info from '../context/Info'
import Hemisphere from '../context/Hemisphere'

const Animal = ({ animal, colors:{ header } }) => {
    return (
        <Info.Consumer>
        {({ sizeInfo }) => {
            return (
                <Hemisphere.Consumer>
                {({ hemisphere }) => {
                    return (
                        <div className='animal-wrapper col-12 col-md-6 col-lg-4'>
                            <section className={`animal ${animal.size ? 'animal-info' : ''}`} style={{ background: header }}
                                onClick={() => sizeInfo(animal.size)}>
                                <header className='animal-header'>
                                    <span className='animal-name'>{animal.name}</span>
                                    <span className='animal-value'>({animal.value}&nbsp;Sternis)</span>
                                </header>
                                <main className='animal-body'>
                                    <img className='animal-image' src={`/img/${animal.slug}.png`} alt={animal.name} title={animal.name} />
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
                                            {
                                                animal.size && (
                                                    <tr>
                                                        <td>Größe:</td>
                                                        <td>{ animal.size }</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </main>
                            </section>
                        </div>
                    );
                }}
                </Hemisphere.Consumer>
            );
        }}
        </Info.Consumer>
    );
}
export default Animal;
