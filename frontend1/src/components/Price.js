
/* This Test requires Tailwind CSS v2.0+ */
import React from "react";
import { CheckIcon, XIcon } from '@heroicons/react/solid'
import { faListNumeric } from "@fortawesome/free-solid-svg-icons";

const cements = [
  {
    title: 'Цемент 32.5',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: '192,500',
    priceYearly: 'байхгүй',
    mainFeatures: [
      { id: 1, value: 'Задгай /бөөний үнэ/ - 192,500₮' },
      { id: 2, value: 'Ууттай /бөөний үнэ/ - 216,700₮' },

    ],
  },
  {
    title: 'Цемент 42.5',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: '202,000',
    priceYearly: '220,000₮',
    mainFeatures: [
      { id: 1, value: 'Задгай /бөөний үнэ/ - 202,000₮' },
      { id: 2, value: 'Задгай /жижиглэн үнэ/ - 220,000₮' },
      { id: 3, value: 'Ууттай /бөөний үнэ/ - 227,000₮' },
      { id: 4, value: 'Ууттай /жижиглэн үнэ/ - 238,350₮' },
    ],
  },
  {
    title: 'Цемент 52.5',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: '256,740',
    priceYearly: '269,500₮',
    mainFeatures: [
      { id: 1, value: 'Задгай /бөөний үнэ/ - 256,740₮' },
      { id: 2, value: 'Задгай /жижиглэн үнэ/ - 269,500₮' },
      { id: 3, value: 'Ууттай /бөөний үнэ/ - 284,680₮' },
      { id: 4, value: 'Ууттай /жижиглэн үнэ/ - 298,850₮' },
    ],
  },
]

const limes = [
  {
    title: 'Шохой /68-70.1%/ ',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: '298,182',
    priceYearly: 'байхгүй',
    mainFeatures: [
     
    ],
  },
  {
    title: 'Шохой /70.2-75%/',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: '328,000',
    priceYearly: '220,000₮',
    mainFeatures: [
     
    ],
  },
  {
    title: 'Шохой /75.1%/',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: '360,000',
    priceYearly: '269,500₮',
    mainFeatures: [
     
    ],
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Price() {
  const [openTab, setOpenTab] = React.useState(1);


  return (
    <div className="bg-gray-50">
      <div className="relative bg-blue-500">
        {/* Overlapping background */}
        <div aria-hidden="true" className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block" />

        <div className="relative max-w-2xl mx-auto pt-6 px-4 text-center sm:pt-4 sm:px-6 lg:max-w-7xl lg:px-6">
          <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="block lg:inline">Чанартай бүтээгдэхүүнийг хамгийн хямдаар</span>
          </h1>
         
        </div>

        <h2 className="sr-only">cements</h2>

        {/* Toggle */}
        <div className="relative mt-6 flex justify-center sm:mt-10">
          <div className="bg-blue-600 p-0.5 rounded-lg flex">


            <button
              type="button"
              onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              className="relative bg-white py-2 px-6 border-blue-700 rounded-md shadow-sm text-sm font-medium text-blue-700 whitespace-nowrap hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:z-10"
            >
              Цемент
            </button>


        



            <button
              type="button"
              onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-blue-200 whitespace-nowrap hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:z-10"
            >
              Шохой
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-blue-600 rounded-tl-lg rounded-tr-lg lg:block"
          />

          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
          
          {cements.map((cement) => (
              <div
                key={cement.title}
                className={classNames(
                  cement.featured ? 'bg-white ring-2 ring-blue-700 shadow-md' : 'bg-blue-600 lg:bg-transparent',
                  'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                )}
              >
                <div>
                  <h3
                    className={classNames(
                      cement.featured ? 'text-blue-600' : 'text-white',
                      'text-lg font-semibold uppercase tracking-wide'
                    )}
                  >
                    {cement.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                      <p
                        className={classNames(
                          cement.featured ? 'text-blue-600' : 'text-white',
                          'text-4xl font-extrabold tracking-tight'
                        )}
                      >
                        {cement.priceMonthly}₮
                      </p>
                      <div className="ml-4">
                          <div className="mt-2">
                             <p className={classNames(cement.featured ? 'text-gray-500' : 'text-white', 'text-sm')}>
                   
                      НӨАТ-тай
                
                        </p>
                          </div>
                       
                        <p className={classNames(cement.featured ? 'text-gray-500' : 'text-white', 'text-sm')}>
                          Жижиглэн ({cement.priceYearly})
                        </p>
                      </div>
                    </div>
                    <a
                      href="/order"
                      className={classNames(
                        cement.featured
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-white text-blue-600 hover:bg-blue-50',
                        'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                      )}
                    >
                      {cement.title} захиалах
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul
                  role="list"
                  className={classNames(
                    cement.featured
                      ? 'border-gray-200 divide-gray-200'
                      : 'border-blue-500 divide-blue-500 divide-opacity-75',
                    'mt-7 border-t divide-y lg:border-t-0'
                  )}
                >
                  {cement.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="py-3 flex items-center">
                      <CheckIcon
                        className={classNames(
                          cement.featured ? 'text-blue-500' : 'text-blue-200',
                          'w-5 h-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          cement.featured ? 'text-gray-600' : 'text-white',
                          'ml-3 text-sm font-medium'
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
            
          </div>


          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
          
          {limes.map((lime) => (
              <div
                key={lime.title}
                className={classNames(
                  lime.featured ? 'bg-white ring-2 ring-blue-700 shadow-md' : 'bg-blue-600 lg:bg-transparent',
                  'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                )}
              >
                <div>
                <h3
                    className={classNames(
                      lime.featured ? 'text-blue-600' : 'text-white',
                      'text-lg font-semibold uppercase tracking-wide'
                    )}
                  >
                    {lime.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                  
                      <p
                        className={classNames(
                          lime.featured ? 'text-blue-600' : 'text-white',
                          'text-4xl font-extrabold tracking-tight'
                        )}
                      >
                        {lime.priceMonthly}₮
                      </p>
                      <div className="ml-4">
                      <div className="mt-2">
                         <p className={classNames(lime.featured ? 'text-gray-500' : 'text-white', 'text-sm')}>
               
                  НӨАТ-тай
            
                    </p>
                      </div>
                  </div>
                    </div>
                    <a
                      href="/order"
                      className={classNames(
                        lime.featured
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-white text-blue-600 hover:bg-blue-50',
                        'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                      )}
                    >
                      {lime.title} захиалах
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul
                  role="list"
                  className={classNames(
                    lime.featured
                      ? 'border-gray-200 divide-gray-200'
                      : 'border-blue-500 divide-blue-500 divide-opacity-75',
                    'mt-7 border-t divide-y lg:border-t-0'
                  )}
                >
                  {lime.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="py-3 flex items-center">
                      <CheckIcon
                        className={classNames(
                          lime.featured ? 'text-blue-500' : 'text-blue-200',
                          'w-5 h-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          lime.featured ? 'text-gray-600' : 'text-white',
                          'ml-3 text-sm font-medium'
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
            
          </div>



        </div>
      </div>

      {/* Feature comparison (up to lg) */}
      <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
        <h2 id="mobile-comparison-heading" className="sr-only">
          Feature comparison
        </h2>

       
      </section>

      {/* Feature comparison (lg+) */}
      <section aria-labelledby="comparison-heading" className="hidden lg:block">
        <h2 id="comparison-heading" className="sr-only">
          Feature comparison
        </h2>

      
      </section>
    </div>
  )
}
