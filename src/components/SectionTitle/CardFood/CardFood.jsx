
const CardFood = ({item}) => {
    const {name,image,price,recipe} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Food" /></figure>
  <p className="bg-slate-900 text-white  absolute right-0 mt-4 mr-4 px-4 rounded-sm">{price} <small>TK</small> </p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default CardFood;