import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  // fetch post information
  const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
    res.json()
  );

  return {
    title: post.title,
    description: post.description,
  };
}

export default function Page({ params }: Props) {
  console.log(params);

  return <h1>hello</h1>;
}
