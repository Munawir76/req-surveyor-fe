import React from 'react';
import itemsFooter from '../constant/wording-footer.jsx';
import iconFooter from '../assets/icon/icon-footer.jsx';

function Footer() {
  const items = itemsFooter();
  const icons = iconFooter();

  return (
    <div class="bg-white dark:bg-gray-900 mx-auto position-bottom">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-2 lg:flex md:flex md:justify-evenly lg:justify-evenly">
        {items.map(item => {
          return (
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {item.title}
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                {item.child.map(item => {
                  return (
                    <li class="mb-4">
                      <a href="#" class=" hover:underline hover:text-gray-900 dark:hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-evenly sm:flex sm:justify-evenly lg:flex lg:justify-evenly">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
          Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          {icons.map(item => {
            return (
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox={item?.viewBox}
                >
                  <path
                    fill-rule="evenodd"
                    d={item?.path}
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
