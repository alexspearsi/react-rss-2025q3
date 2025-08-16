import { notFound } from 'next/navigation'
import '../../index.css'
import { ClientOnly } from './client'
 
type Props = {
  params?: {
    slug?: string[] 
  }
}
const validPages = ['about', '']

export function generateStaticParams() {
  return [{ slug: [''] }]
}

export default async function Page({ params }: Props) {
  const slug = params?.slug?.[0];

  if (!validPages.includes(slug ?? '')) {
    return notFound();
  }

  return <ClientOnly />
}