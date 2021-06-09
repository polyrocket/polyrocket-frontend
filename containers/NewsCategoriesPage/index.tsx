import React from "react";
import Head from "next/head";
import Banner from "../../components/Shared/BannerPage";
import NewsList from "./NewsList";

const NewsCategoriesPage = () => {
  return (
    <>
      <Head>
        <title>News Categories</title>
      </Head>
      <Banner />
      <NewsList />
    </>
  );
};

export default NewsCategoriesPage;
