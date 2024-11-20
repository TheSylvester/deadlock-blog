export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText?: string;
      width: number;
      height: number;
      formats?: {
        thumbnail?: {
          url: string;
          width: number;
          height: number;
        };
        small?: {
          url: string;
          width: number;
          height: number;
        };
        medium?: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  } | null;
}

export interface Author {
  id: number;
  attributes: {
    name: string;
    bio: string;
    avatar: StrapiImage;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Tag {
  id: number;
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    excerpt: string;
    published: string;
    cover: StrapiImage;
    author: {
      data: Author | null;
    };
    tags: {
      data: Tag[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
