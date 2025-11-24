import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import outDoorData from "../JsonData/OutDoor.json";
import electronicsData from "../JsonData/ConsumerElectronics.json";
import timerData from "../JsonData/TimerSection.json";
import recomendedItems from "../JsonData/RecommendedItem.json";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const numericId = Number(id);

    const foundProduct =
      outDoorData.find((item) => item.id === numericId) ||
      electronicsData.find((item) => item.id === numericId) ||
      timerData.find((item) => item.id === numericId) ||
      recomendedItems.find((item) => item.id === numericId);

    setProduct(foundProduct);
  }, [id]);

  const BtnAdd = () => {
    alert("Product is added successfully");
  };

  return (
    <div>
      <TopBar />

      <div className="border border-gray-200">
        <div className="sm:ml-12 sm:mr-12 ml-4 mr-4 pt-10 pb-10">
          {product ? (
            <div className="flex justify-center items-center sm:flex-row flex-col gap-4">
              <div className="sm:w-2/5 ">
                <img
                  className="h-60 w-auto"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="sm:w-3/5 flex flex-col gap-7">
                <h1 className="text-3xl font-bold">Product Detail Page</h1>

                <h2 className="text-gray-500">{product.detail}</h2>
                <p className="font-medium">{product.Price}</p>

                <button
                  onClick={BtnAdd}
                  className="bg-black text-white p-3 rounded-sm hover:text-blue-600"
                >
                  Add
                </button>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsDetail;
