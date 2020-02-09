import {
  getDocumentFromAPI
} from "../api/prismic";
import Link from 'next/link';

const HomePage = ({ posts }) => {
  const { results } = posts;
  return <div> {
    results.map(post => <Link key={post.uid} href="/[post]" as={`/${post.uid}`}><h2>{post.uid}</h2></Link>
    )}
    </div>
}


export const unstable_getStaticProps = async () => {
  const res = await getDocumentFromAPI({
    document: "post",
    request: {
      headers: {},
    },
  })
  return { props: { posts: res } };
}

export default HomePage