import React from 'react';
import { useThemeUI } from 'theme-ui';
import { NextSeo } from 'next-seo';

export const Head = (props) => {
  const title = [props.title, props.pageContext?.frontmatter?.title, props._frontmatter?.title]
    .filter(Boolean)
    .join(' – ');

  const { theme } = useThemeUI();

  return (
    // <Helmet htmlAttributes={{ lang: 'en-US' }}>
    //   <title>{title}</title>
    //   <meta name="description" content={pkg.description} />
    //   <link rel="icon" type="image/png" href="/icon.png" />
    //   <link rel="apple-touch-icon" type="image/png" href="/icon.png" />
    //   <meta name="twitter:card" content="summary" />
    //   <meta name="twitter:site" content="@jxnblk" />
    //   <meta name="twitter:image" content="https://theme-ui.com/card.png" />
    //   <meta name="twitter:title" content={title} />
    //   <meta name="twitter:description" content={pkg.description} />
    //   <meta name="theme-color" content={theme.colors.background} />
    // </Helmet>
    <NextSeo title={title} description={props.description} titleTemplate={`Theme UI Expansion Pack | %s`} />
  );
};
