import React from 'react';

import plus from '../assets/icons/plus.svg';
import filter from '../assets/icons/filter.svg';
import printer from '../assets/icons/printer.svg';
import refresh from '../assets/icons/refresh.svg';
import search from '../assets/icons/search.svg';

const Banner = ({
  title,
  description,
  image,
  onOpenModal,
  openModalButtonLabel,
  showOpenModalButton,
  searchPlaceholder,
  showFilterButton,
  showPrintButton,
  showPrintButtonLabel,
  shortPrintButtonLabel,
  longPrintButtonLabel,
  higher,
  customePaddingTop,
  handlePrint,
}) => {
  return (
    <div
      className={`hidden print-component md:block sticky xl:static top-[105px] xl:top-28 bg-white z-20 ${customePaddingTop}`}
    >
      <div
        className={`relative z-0 w-full overflow-hidden rounded-lg ${
          higher ? 'h-[167px] xl:h-[215px]' : 'h-[167px]'
        } bg-aurora-blue`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern" />
        <img
          src={image}
          alt={title}
          className="absolute -z-10 h-full -right-[340px] lg:-right-24 xl:-right-14 2xl:-right-3 2xl:w-[800px] w-[900px] xl:w-[700px] 3xl:right-0 lg:object-cover xl:object-fill"
        />
        <div className="absolute z-40 flex flex-col justify-between w-full h-[167px] p-3">
          <div className="max-w-[345px] -mt-1">
            <h2 className="text-xl font-bold text-white font-quicksand">
              {title}
            </h2>
            <p className="mt-1 text-xs leading-6 font-inter text-forested-mind">
              {description}
            </p>
          </div>
          <div className="no-print">
            <div className="flex items-center justify-between gap-4">
              {showOpenModalButton && (
                <button
                  type="button"
                  className="flex items-center px-3 py-[13px] lg:py-3 rounded-lg blur-5 bg-white/20 hover:bg-white/40 bg-dots-pattern"
                  onClick={onOpenModal}
                >
                  <img src={plus} alt="plus icon" className="w-4 " />
                  <span className="hidden ml-3 text-sm font-semibold text-white xs:ml-1 font-quicksand lg:block">
                    {openModalButtonLabel}
                  </span>
                </button>
              )}
              <div className="flex items-center flex-1 w-full py-1 pl-2 pr-1 bg-white rounded-lg sm:pl-4 bg-gradient-to-r from-white via-white-25 to-white-25">
                <div className="flex items-center w-full py-[3px] lg:py-0 text-gray-400">
                  <img src={search} alt="search" />
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-full px-2 py-1 text-sm font-medium bg-transparent focus:outline-none font-quicksand text-clinder placeholder:text-gray-x placeholder:font-quicksand placeholder:text-sm placeholder:font-medium"
                  />
                </div>
                <button
                  type="button"
                  className="hidden p-2 text-sm font-bold text-white rounded-lg sm:px-4 bg-aurora-blue hover:bg-blue-700 font-quicksand lg:block"
                >
                  Search
                </button>
              </div>
              {showFilterButton && (
                <button
                  type="button"
                  className="flex items-center px-4 py-3 rounded-lg blur-5 hover:bg-white/40 bg-white/20"
                >
                  <img src={filter} alt="filter" />
                  <span className="ml-3 text-sm font-semibold text-white font-quicksand">
                    Filter
                  </span>
                </button>
              )}
              <button className="flex items-center px-4 py-3 rounded-lg blur-5 hover:bg-white/40 bg-white/20 bg-dots-pattern">
                <img src={refresh} alt="refresh" />
                <span className="ml-3 text-sm font-semibold text-white font-quicksand">
                  Refresh
                </span>
              </button>
              <div>
                {showPrintButton && (
                  <button
                    type="button"
                    className="flex items-center px-4 py-3 rounded-lg blur-5 hover:bg-white/40 bg-white/20 bg-dots-pattern"
                    onClick={handlePrint}
                  >
                    <img src={printer} alt="printer" />
                    {showPrintButtonLabel && (
                      <>
                        <span className="block ml-3 text-sm font-semibold text-white font-quicksand xl:hidden">
                          {shortPrintButtonLabel}
                        </span>
                        <span className="hidden ml-3 text-sm font-semibold text-white xl:block font-quicksand">
                          {longPrintButtonLabel}
                        </span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-30 flex flex-wrap w-full h-full opacity-10 bg-dots" />
      </div>
    </div>
  );
};

Banner.defaultProps = {
  openModalButtonLabel: true,
  showOpenModalButton: true,
  showFilterButton: true,
  showPrintButton: true,
  showPrintButtonLabel: true,
  higher: false,
  customePaddingTop: 'pt-4',
};

export default Banner;
