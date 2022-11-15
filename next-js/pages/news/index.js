import Link from "next/link";
const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <Link href="/news/nextjs-is-a-great-framework">
          NextJS is A Great Framework
        </Link>
        <Link href="/news/something-else">Something else</Link>
      </ul>
    </>
  );
};
export default NewsPage;
