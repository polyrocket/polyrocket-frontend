import React from "react";
import Head from "next/head";
import Banner from "../../components/Shared/BannerPage";
import NewsDetails from "./NewsDetails";

const NewsDetailsPage = () => {
  return (
    <>
      <Head>
        <title>News Details</title>
      </Head>
      <Banner />
      <NewsDetails />
    </>
  );
};

export default NewsDetailsPage;
