
const CardFood = ({item}) => {
    const {name,image,price,recipe} = item;

    return (
        <div className=" border card w-96 bg-base-100 shadow-xl ">
  <figure><img className="h-[250px] w-[500px]" src={image} alt="Food" /></figure>
  <p className="bg-slate-900 text-white  absolute right-0 mt-4 mr-4 px-4 rounded-sm">{price} <small>TK</small> </p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions  justify-end mr-2">
      {/* <button className="bg-rose-900 h-[35px] bold w-[120px]  text-white rounded-md ">Add to Cart</button> */}
      <button className="btn btn-outline font-bold bg-slate-100 text-black border-0 border-rose-900 border-b-4 mt-4 ml-80">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default CardFood;