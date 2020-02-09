import { getDocumentByUID } from "../../api/prismic";
  
  const Category = ({ category }) => {
    return <div>{category.first_publication_date}</div>
  }
  
  
  export const unstable_getStaticProps = async ({ params }) => {
    console.log(params)
    const { uid } = params;
    const res = await getDocumentByUID({ type:'category', uid:uid})
    return { props: { category: res } };
  }
  
  
  export default Category