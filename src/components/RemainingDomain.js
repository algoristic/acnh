const RemainingDomain = ({ active, color, text, action }) => {
    const coloring = (active ? color : '#343a40');
    return (
        <div className={'remaining-domain' + (active ? ' active' : '')} style={{ background: coloring }}
            onClick={() => action()}>
            { text }
        </div>
    );
}

export default RemainingDomain;
