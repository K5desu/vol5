export type ArticleType = {
  id: string;
  user_id: number;
  title: string;
  content: string;
  aftercare: string | null;
  like_count: number;
  gender_tag: string;
  age_tag: number;
  duration_tag: string;
  possibility_tag: string;
  category_tag: string;
  open: boolean;
  created_at: Date;
  updated_at: Date;
};
