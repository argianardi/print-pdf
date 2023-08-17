import React from 'react';

import DoubleIndicatorDropdown from '../components/DoubleIndicatorDropdown';
import shieldSearch from '../assets/icons/shieldSearch.svg';
import edit from '../assets/icons/edit.svg';
import trashRed from '../assets/icons/trashRed.svg';

const Table = ({
  nameSortOptions,
  creatorSortOptions,
  productSortOptions,
  locationSortOptions,
  categoryData,
}) => {
  return (
    <div className="hidden overflow-x-auto print-component md:block">
      <div className="w-full">
        <table className="w-full mt-3 border-collapse table-auto">
          <thead className="bg-neutral-gray">
            <tr>
              <th
                className="w-[28.5%] lg:w-[29.7%] xl:w-[21.23%] 5xl:w-1/5 text-start"
                id="category-name"
              >
                <DoubleIndicatorDropdown options={nameSortOptions} />
              </th>
              <th
                className="hidden w-[28.5%] lg:w-[29.7%] xl:w-full xl:block text-start"
                id="creator"
              >
                <DoubleIndicatorDropdown options={creatorSortOptions} />
              </th>
              <th
                className="w-[28.5%] lg:w-[29.7%] xl:w-[15.10%] 5xl:w-1/5 text-start"
                id="product"
              >
                <DoubleIndicatorDropdown options={productSortOptions} />
              </th>
              <th
                className="w-[28.5%] lg:w-[29.7%] xl:w-[21.23%] 5xl:w-1/5 text-start"
                id="location"
              >
                <DoubleIndicatorDropdown options={locationSortOptions} />
              </th>
              <th
                className="w-[12.66%] lg:w-[9%] xl:w-[21.23%] 5xl:w-1/5 text-start no-print"
                id="action"
              >
                <p className="p-[10px] text-sm font-medium hover:bg-gray-50 text-manatee font-quicksand">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((stock, index) => {
              let locationBgColor;
              let locationTextColor;
              if (stock.location === 'kitchen') {
                locationTextColor = 'text-purpletty';
                locationBgColor = 'bg-coral';
              } else if (stock.location === 'bar') {
                locationTextColor = 'text-greentty';
                locationBgColor = 'bg-pastel-green';
              } else {
                locationTextColor = 'text-orangetty';
                locationBgColor = 'bg-linen';
              }

              return (
                <tr key={index}>
                  <td
                    className={`text-sm font-semibold leading-5 font-quicksand text-clinder px-[10px] ${
                      index === 0 ? 'pt-8 pb-[14px]' : 'py-[14px]'
                    }`}
                    aria-labelledby="category-name"
                  >
                    {stock.categoryName}
                  </td>
                  <td
                    className={`hidden xl:block px-[10px] text-sm font-semibold leading-5 font-quicksand text-clinder ${
                      index === 0 ? 'pt-8 pb-[14px]' : 'py-[14px]'
                    }`}
                    aria-labelledby="creator"
                  >
                    <div className="flex items-center">
                      <figure className="overflow-hidden rounded-full avatar w-9 h-9">
                        <img
                          src={stock.creator.creatorProfilePicture}
                          alt="user profile"
                        />
                      </figure>
                      <div>
                        <div className="ml-3">
                          <h3 className="text-sm font-semibold font-quicksand text-black-lighter leading-[150%]">
                            {stock.creator.creatorName}
                          </h3>
                          <h5 className="text-xs font-normal font-satoshi text-manatee leading-[200%]">
                            {stock.creator.creatorRole}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    className={`px-[10px] text-sm font-semibold font-quicksand text-clinder ${
                      index === 0 ? 'pt-8 pb-[14px]' : 'py-[14px]'
                    }`}
                    aria-labelledby="product"
                  >
                    {stock.product} Menu
                  </td>
                  <td
                    className={`${
                      index === 0 ? 'pt-8 pb-[14px]' : 'py-[14px]'
                    }`}
                    aria-labelledby="location"
                  >
                    <div className={`inline px-4 py-[10px] ${locationBgColor}`}>
                      <span
                        className={`leading-5 text-sm font-semibold font-quicksand ${locationTextColor}`}
                      >
                        {stock.location}
                      </span>
                    </div>
                  </td>
                  <td
                    aria-labelledby="action"
                    className={`px-[10px] no-print ${
                      index === 0 ? 'pt-8 pb-[14px]' : 'py-[14px]'
                    }`}
                  >
                    <button
                      type="button"
                      className="block px-3 mx-auto xl:hidden"
                    >
                      <div className="w-[4px] h-[4px] bg-black rounded-full mx-auto" />
                      <div className="w-[4px] h-[4px] bg-black rounded-full my-1 mx-auto" />
                      <div className="w-[4px] h-[4px] bg-black rounded-full mx-auto" />
                    </button>
                    <div
                      className={`hidden xl:flex items-center justify-center gap-1 mt-2 ${
                        index === 0 ? 'mb-[3px] mt-4' : 'my-[3px]'
                      }`}
                    >
                      <button
                        type="button"
                        className="flex items-center justify-center flex-1 gap-2 px-3 py-1 duration-300 transform rounded bg-neutral-gray hover:bg-gray-200"
                      >
                        <img
                          src={shieldSearch}
                          alt="shield search"
                          className="w-3 h-3"
                        />
                        <span className="text-sm font-semibold font-quicksand text-clinder">
                          Detail
                        </span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center flex-1 gap-2 px-3 py-1 duration-300 transform rounded-md bg-neutral-gray hover:bg-gray-200"
                      >
                        <img src={edit} alt="edit" className="w-3 h-3" />
                        <span className="text-sm font-semibold font-quicksand text-clinder">
                          Edit
                        </span>
                      </button>
                      <button
                        type="button"
                        className="px-3 py-[7px] duration-300 transform rounded-md bg-neutral-gray hover:bg-gray-200"
                      >
                        <img
                          src={trashRed}
                          alt="trash red"
                          className="w-3 h-3"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
