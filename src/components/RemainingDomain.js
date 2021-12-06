const RemainingDomain = ({ active, color, text, action }) => {
    const coloring = (active ? color : '#343a40');
    return (
        <div onClick={() => action()}
            className={'remaining-domain' + (active ? ' active' : '')}
            style={{ background: coloring }}>
            { text }
        </div>
    );
}

export default RemainingDomain;
