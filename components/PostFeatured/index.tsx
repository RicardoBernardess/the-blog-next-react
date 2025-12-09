import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_8.png',
          alt: 'Alt da imagem',
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time className='text-slate-600 text-sm' dateTime='2025-04-20'>
          20/04/2025 10:00
        </time>
        <PostHeading as='h1' url={postLink}>
          Obcaecati quia officiis itaque nemo laudantium tenetur distinctio modi
          natus?
        </PostHeading>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nobis
          dolorum quam molestias modi ut in deleniti explicabo deserunt quaerat.
          Obcaecati quia officiis itaque nemo laudantium tenetur distinctio modi
          natus?
        </p>
      </div>
    </section>
  );
}
