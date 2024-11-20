import qs from 'qs';
import { StrapiResponse, Article } from './types';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:3001';

/**
 * Helper to make GET requests to Strapi API endpoints
 */
async function fetchAPI<T>(path: string, urlParamsObject = {}, options = {}) {
  try {
    // Merge default and user options
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    };

    const mergedOptions = {
      next: { revalidate: 60 },
      ...defaultOptions,
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true,
    });
    
    const apiPath = path.startsWith('/') ? path : `/${path}`;
    const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api${apiPath}${
      queryString ? `?${queryString}` : ''
    }`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your Strapi server is running`);
  }
}

/**
 * Get all articles with proper population
 */
export async function getArticles(start = 0, limit = 8) {
  const data = await fetchAPI<StrapiResponse<Article>>('/articles', {
    populate: {
      cover: {
        fields: ['url', 'alternativeText', 'width', 'height', 'formats'],
      },
      author: {
        populate: {
          avatar: {
            fields: ['url', 'alternativeText', 'width', 'height', 'formats'],
          },
        },
      },
      tags: {
        fields: ['name', 'slug'],
      },
    },
    sort: ['published:desc'],
    pagination: {
      start,
      limit,
    },
  });

  return data;
}

/**
 * Get featured articles (latest published)
 */
export async function getFeaturedArticle() {
  const data = await getArticles(0, 1);
  return data.data[0];
}

/**
 * Get side articles (next 4 articles)
 */
export async function getSideArticles() {
  const data = await getArticles(1, 4);
  return data.data;
}

/**
 * Get latest articles (next 3 articles)
 */
export async function getLatestArticles() {
  const data = await getArticles(5, 3);
  return data.data;
}

/**
 * Get article by slug
 */
export async function getArticle(slug: string) {
  const data = await fetchAPI<StrapiResponse<Article>>('/articles', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      cover: {
        fields: ['url', 'alternativeText', 'width', 'height', 'formats'],
      },
      author: {
        populate: {
          avatar: {
            fields: ['url', 'alternativeText', 'width', 'height', 'formats'],
          },
        },
      },
      tags: {
        fields: ['name', 'slug'],
      },
    },
  });

  return data.data[0];
}
