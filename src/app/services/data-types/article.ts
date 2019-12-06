export interface Article{
  _id: string;
  title: string;
  language: string;
  public: boolean;
  auth:boolean;
}
export interface ArticleDetail{
  _id: string;
  title: string;
  language: string;
  public: boolean;
  content: string;
  createDate: string;
  articleAuth:string;
}
export interface Sentence{
  state: 'typing' | 'untyped' | 'typed'
}
export interface Word{
  value: string;
  state: 'typing' | 'untyped' | 'typed-right' | 'typed-error'| 'unknown';
}
export interface TypingResult{
  countTime: number;
  speed: number;
  rightPercent: number;
}
