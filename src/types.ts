export interface AuthTypes {
  name: string;
  email: string;
  image: string;
}

export interface UsersType {
  image: "";
  imageUrl: "";
  user: AuthTypes;
  expires: string;
}

export interface CardCompPropsTypes {
  id: string;
  title: string;
  author: string;
  video_link: string;
  views: number | null;
  category: string;
  pitch_author: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
  author_image: string;
  social_handle: string;
  thumbnail: string;
}


export interface SimilarPostTypes {
  title: string;
  description: string;
  category: string;
  author: string;
  thumbnail: string;
  id: string;
  video_link: string;
  pitch_author: string;
  author_image: string;
  social_handle: string;
  views: number | null;
  updatedAt: Date;
  createdAt: Date;
}
