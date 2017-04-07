export const SELECT_BLOG = 'SELECT_BLOG';

export function selectBlog(blog) {
  console.log('blog: ', blog.title);
  return {
    type: SELECT_BLOG,
    payload: blog
  }
}
