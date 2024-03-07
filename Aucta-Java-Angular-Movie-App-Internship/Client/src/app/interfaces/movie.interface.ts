export interface Review {
  id: string;
  body: string;
}

export interface Movie {
  id?: string;
  title: string;
  description: string;
  year: number;
  rating: number;
  ratings: number[];
  reviewIds: Review[];
  reviewBody: string;
  genres: string[];
}
