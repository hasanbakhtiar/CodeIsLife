type propsType ={
    title:string,
    rang:number,
    year:number
}

const SingleCard = (props:propsType) => {
  return (
<div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Rang:{props.rang}</h6>
    <p className="card-text">year:{props.year}</p>
  </div>
</div>

  )
}

export default SingleCard