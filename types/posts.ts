export interface Post {
  id: String;
  title: String;
  body: String;
  author: String;
  date: string;
  comments: PostComment[];
}

export interface PostComment {
  id: String;
  text: String;
  username: String;
}
