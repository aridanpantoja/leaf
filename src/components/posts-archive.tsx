import { WidthWrapper } from '@/components/width-wrapper'
import type { Post } from '@/payload-types'
import Link from 'next/link'

type PostProps = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'id'>

export function PostsArchive({ posts }: { posts: PostProps[] }) {
  return (
    <div className="mt-16">
      <WidthWrapper>
        <ul className="mx-auto max-w-md list-disc">
          {posts.map((result) => (
            <li key={result.id}>
              <Link href={`/blog/${result.slug}` || ''}>{result.title}</Link>
            </li>
          ))}
        </ul>
      </WidthWrapper>
    </div>
  )
}
