import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, img, seller, price, stock} = bottle

    return (
        <div className="Bottle">
            <h2>{name} ({seller})</h2>
            <h3 className='stock'>Stock: {stock}</h3>
            <img src={img} alt="Error " />
            <h2>Price- {price}$</h2>
            {/* <button onClick={handle}>Purchase</button> */}
        </div>
    );
};

export default Bottle;