import React from "react"

const Cards = (props) => {
return (
        <div className="card m-1 mb-2" style={{width: "18rem"}}>
            <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut porro debitis, repellendus eum repellat quos inventore recusandae tempora ducimus, reiciendis iste ratione ullam magnam eius magni! Veritatis placeat quasi eum.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
        )
}

export default Cards;