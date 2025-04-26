import { notFound } from 'next/navigation'
import axiosInstance from '@/axios/axiosInstance'

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ slug: string }>
}
 
export async function generateMetadata(
  { params,  }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
 
  // fetch post information
  const res = await axiosInstance.get(`/api/v1/products/phones/${slug}`)
 if (!res.data) {
    return {
      title: 'Post not found',
      description: 'This product does not exist',
    }
  }
  return {
    title: res.data.name,
    description: res.data.description,
  }
}
 

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}