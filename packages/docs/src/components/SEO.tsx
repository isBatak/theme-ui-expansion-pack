import React from 'react';
import { NextSeo } from 'next-seo';

export const SEO = ({ description, title }) => {
  return <NextSeo title={title} description={description} titleTemplate={`Theme UI Expansion Pack | %s`} />;
};
