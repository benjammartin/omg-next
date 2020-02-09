import { getDocumentByUID } from "../api/prismic";
  
  const Post = ({ post }) => {
    return <div>{post.first_publication_date}</div>
  }
  
  
  export const unstable_getStaticProps = async ({ params }) => {
    const { post } = params;
    const res = await getDocumentByUID({ type:'post', uid:post})
    return { props: { post: res } };
  }
  
  
  export default Post