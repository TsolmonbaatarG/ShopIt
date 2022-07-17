
/* This Test requires Tailwind CSS v2.0+ */
import React from "react";
import { CheckIcon, XIcon } from '@heroicons/react/solid'
import { faListNumeric } from "@fortawesome/free-solid-svg-icons";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const products = [
    {
      id: 1,
      name: 'Цемент 42.5',
      href: '#',
      imageSrc: 'https://i.postimg.cc/Gp5FC6NX/Cemet6.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '202,000₮',
      color: 'Ууттай',
    },
    {
    id: 2,
    name: 'Цемент 52.5',
    href: '#',
    imageSrc: 'https://i.postimg.cc/CMJ1tbqK/Cement2.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '202,000₮',
    color: ' Задгай',
    },
    {
    id: 3,
    name: 'Цемент 42.5',
    href: '#',
    imageSrc: 'https://i.postimg.cc/vBNrLCMJ/Cement1.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '202,000₮',
    color: 'Задгай',
    },
    {
    id: 4,
    name: 'Шохой',
    href: '#',
    imageSrc: 'https://i.postimg.cc/SsvP2ZPs/Cement3.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '202,000₮',
    color: 'Ууттай',
    },
    // More products...
  ]

export default function Product() {


  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-2xl font-semibold text-white">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:text-white hover:bg-blue-500"
                >
                  Сагсанд нэмэх<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
