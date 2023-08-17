import React, { useState, useRef } from 'react';

import stockCategoryBanner from '../assets/icons/stockBanner.png';
import Table from '../components/Table';
import Banner from '../components/Banner';
import { useReactToPrint } from 'react-to-print';

const TabularData = () => {
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);

  const refPrint = useRef();

  // Fake Data
  const nameSortOptions = [
    { label: 'Category Name', value: 'customer name', disabled: true },
    { label: 'Sort By Name A-Z', value: 'ascending' },
    { label: 'Sort By Name Z-A', value: 'descending' },
  ];

  const creatorSortOptions = [
    { label: 'Creator', value: 'customer name', disabled: true },
    { label: 'Sort By Name A-Z', value: 'ascending' },
    { label: 'Sort By Name Z-A', value: 'descending' },
  ];

  const productSortOptions = [
    { label: 'product', value: 'product', disabled: true },
    { label: 'Less than 10', value: '<10' },
    { label: '10 - 20', value: '10-20' },
    { label: '21 - 30', value: '21-30' },
    { label: '41 - 50', value: '41-50' },
    { label: 'More than 50', value: '>50' },
  ];

  const locationSortOptions = [
    { label: 'Location', value: 'location', disabled: true },
    { label: 'Sort By Name A-Z', value: 'ascending' },
    { label: 'Sort By Name Z-A', value: 'descending' },
  ];

  const categoryData = [
    {
      categoryName: 'Asian Food',
      creator: {
        creatorName: 'savannah nguyen',
        creatorRole: 'Food Quality Manager',
        creatorProfilePicture:
          'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODU5NDcwODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
      },
      product: 26,
      location: 'kitchen',
    },
    {
      categoryName: 'Asian Drinks',
      creator: {
        creatorName: 'kris roher',
        creatorRole: 'Food Quality Manager',
        creatorProfilePicture:
          'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODYwODEyMzg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
      },
      product: 26,
      location: 'bar',
    },
    {
      categoryName: 'Asian Drinks',
      creator: {
        creatorName: 'Serenity Fisher',
        creatorRole: 'Food Quality Manager',
        creatorProfilePicture:
          'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODYwODEyNjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
      },
      product: 26,
      location: 'bar',
    },
    {
      categoryName: 'Asian Drinks',
      creator: {
        creatorName: 'Brooklyn Warren',
        creatorRole: 'Food Quality Manager',
        creatorProfilePicture:
          'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODYwODEzMDc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
      },
      product: 26,
      location: 'bar',
    },
    {
      categoryName: 'Asian Coffee',
      creator: {
        creatorName: 'Franco Delort',
        creatorRole: 'Food Quality Manager',
        creatorProfilePicture:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODYwODEzMzQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
      },
      product: 26,
      location: 'coffe shop',
    },
    {
      categoryName: 'Asian Drinks',
      creator: {
        creatorName: 'Serenity Fisher',
        creatorRole: 'Food Quality Manager',
        creatorProfilePicture:
          'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODYwODE0MzQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
      },
      product: 26,
      location: 'bar',
    },
    {
      categoryName: 'Asian Drinks',
      creator: {
        creatorName: 'Brooklyn Warren',
        creatorRole: 'Food Quality Manager',
        creatorProfilePicture:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODYwODEzNjc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
      },
      product: 26,
      location: 'bar',
    },
    {
      categoryName: 'Asian Breads',
      creator: {
        creatorName: 'Franco Delort',
        creatorRole: 'Food Quality Manager',
        creatorProfilePicture:
          'https://images.unsplash.com/photo-1594751439417-df8aab2a0c11?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODYwODEzNzg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
      },
      product: 26,
      location: 'Coffe Shop',
    },
  ];

  console.log(refPrint);

  const handlePrint = useReactToPrint({
    content: () => refPrint.current,
    documentTitle: 'category-data',
  });

  return (
    <div className="flex flex-col min-h-screen border-2 border-blue-500 md:flex-row">
      <main
        className="flex flex-col justify-between flex-1 px-6"
        ref={refPrint}
      >
        <div>
          <Banner
            title="Category"
            description="On this menu you will be able to create, edit, and also delete the category of the food. Also you can manage it easily."
            onOpenModal={() => setIsNewCategoryModalOpen(true)}
            openModalButtonLabel="Create New Category"
            searchPlaceholder={'Find your categories here'}
            image={stockCategoryBanner}
            showFilterButton={false}
            shortPrintButtonLabel={'Print List'}
            longPrintButtonLabel={'Print List of Category'}
            refPrint={refPrint}
            handlePrint={handlePrint}
          />

          {/* Stock Category Table for Tablet & Desktop */}
          <Table
            nameSortOptions={nameSortOptions}
            creatorSortOptions={creatorSortOptions}
            productSortOptions={productSortOptions}
            locationSortOptions={locationSortOptions}
            categoryData={categoryData}
          />
        </div>
      </main>
    </div>
  );
};

export default TabularData;
