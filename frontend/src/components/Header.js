/* eslint-disable no-undef */
import React, { useState } from "react";
    /* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faCartShopping,
  faTrain,
  faCar,
  faTruck,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from 'react'
import { Popover, Transition, Disclosure, Menu  } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  PlusIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewGridIcon,
  ViewListIcon,
  XIcon,
} from '@heroicons/react/outline'

import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon } from '@heroicons/react/outline'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header = () => {
 

  return (
    <Disclosure as="nav" className="bg-white shadow">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex px-2 lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://i.postimg.cc/52TnX4p9/Logo2022-Mini.png"
                  alt="Цемент Шохой ТӨХК"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://i.postimg.cc/KjvTk1yn/Logo2022.png"
                  alt="Цемент Шохой ТӨХК"
                />
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
             
                <Link to="/"
                  className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Нүүр
                </Link>
                
                
                <Link to="/login"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Нэвтрэх
                </Link>
                
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Хайх
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Хайх"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:items-center">
              <button
                type="button"
                className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-4 relative flex-shrink-0">
                <div>
                  <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://i.postimg.cc/1z0wysjj/profile.jpg"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Хувийн мэдээлэл
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Тохиргоо
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Гарах
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="lg:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
            <Disclosure.Button
              as="a"
              href="#"
              className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Нүүр
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Нэвтрэх
            </Disclosure.Button>
           
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src=" https://i.postimg.cc/1z0wysjj/profile.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Г.Цолмонбаатар</div>
                <div className="text-sm font-medium text-gray-500">tsolmonbaatar.gg@gmail.com</div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Хувийн мэдээлэл
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Тохиргоо
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Гарах
              </Disclosure.Button>
            </div>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}

export default Header