
import { Button } from "@material-tailwind/react";
import { instance } from "./../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Products = () => {
  const handleGet = async () => {
    const res = await instance.get("/products");
    return res.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: handleGet,
  });

  if (isLoading) return <h1 className="text-xl text-center mt-10">Loading...</h1>;
  if (error) return <h1 className="text-xl text-red-500 text-center mt-10">Error: {error.message}</h1>;

  return (
    <div className="container">
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((product) => (
        <div
          key={product.id}
          className="bg-white w-64 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          
          <img src={product.img} alt="" />
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <p className=" text-gray-600 text-sm">{product.price}</p>
          <p className="text-blue-600 font-bold text-2xl mb-1">${product.decs}</p>
          <Link to={`/tanlash/${product.id}`}>
          <Button className="bg-orange-300 hover:bg-orange-400 ">Buyuortma </Button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;





