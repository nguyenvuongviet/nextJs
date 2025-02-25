"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Shoe = {
  id: number | string;
  name: string;
  alias: string;
  price: number;
  description: string;
  sizes: number[];
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string[];
  relatedProducts: number[];
  feature: boolean;
  image: string;
  imgLink: string;
};

export default function Home() {
  const [shoes, setShoes] = useState<Shoe[]>([]);

  const fetchShoes = async () => {
    try {
      const response = await fetch(
        "https://apistore.cybersoft.edu.vn/api/Product"
      );

      const data = await response.json();
      setShoes(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // call method get list shoes
    fetchShoes();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      {shoes.map((shoe) => {
        return (
          <div
            key={shoe.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <Image
                src={shoe.image}
                alt={shoe.alias}
                width={500}
                height={500}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {shoe.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {shoe.description}
              </p>
              <a
                href={`/detail/${shoe.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Detail
              </a>
            </div>
          </div>
        );
      })}
      {/* <h1>Learn Nextjs</h1>
      <Image
        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
        alt="lat-mat-48h_gp01.jpg"
        width={500}
        height={500}
      />
      <Image
        src="/images/product1.png"
        alt="product1.png"
        width={500}
        height={500}
      /> */}
    </div>
  );
}
