import { notFound } from 'next/navigation';
import axiosInstance from '@/axios/axiosInstance';
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import ChevronLeft from '@/components/chevronIcon/ChevronLeft';
import ChevronRight from '@/components/chevronIcon/ChevronRight';

export async function generateMetadata(
  { params }: { params: PageParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug as string;

  const res = await axiosInstance.get(`/api/v1/products/phones/${slug}`);

  if (!res.data) {
    return {
      title: 'Post not found',
      description: 'This product does not exist',
    };
  }

  return {
    title: res.data.name,
    description: res.data.description,
    openGraph: {
      title: res.data.name,
      description: res.data.description,
     
    },
  };
}
export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

    const res = await axiosInstance.get(
      `${apiBase}/api/v1/products/phones/${params.slug}`
    );

    const product: { name: string; product_image?: string } | null = res.data;

    if (!product || !product.name) return notFound();

    return (
      <div>
        <h1>{product.name}</h1>
        <div className="relative">
          <div className="absolute left-0 top-[50%]">
            <ChevronLeft />
          </div>
          <Image
            src={
              product.product_image?.startsWith('http')
                ? product.product_image
                : `${apiBase}/images/products/${product.product_image || ''}`
            }
            alt={product.name}
            className="w-full h-auto"
            width={150}
            height={150}
            priority
          />
          <div className="absolute right-0 top-[50%]">
            <ChevronRight />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Fetch product error:', error);
    return notFound();
  }
}
