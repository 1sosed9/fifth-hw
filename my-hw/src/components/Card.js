
import { useEffect, useState } from "react";
import Supplie from "./Supplie";

function CardGoods() {
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setGoods(data)
            })
    }, []);


    return (
        <div className="d-flex col-12 flex-wrap p-3 bg-dark">
            {goods.map((supplie, key) => <Supplie supplie={supplie} key={key} />)}
        </div>
    );
}

export default CardGoods;