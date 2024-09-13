import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { list } from '@vercel/blob';
import { VideoSkeleton } from '@/app/ui/skeletons';


export const metadata: Metadata = {
  title: 'Multimedia',
};

export default function Page() {
    return (
        <main>
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Multimedia
          </h1>
          <div className={`relative w-full overflow-hidden md:col-span-4`}>
            <div className="rounded-xl bg-gray-100 p-4">
              <div className="mt-0  items-end gap-2 rounded-md bg-white p-4">
                <Suspense fallback={<VideoSkeleton />}>
                  <VideoComponent fileName="my-video.mp4" />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
      );
}

async function VideoComponent({ fileName } : {fileName :string}) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  })
  const { url } = blobs[0]
 
  return (
    <video autoPlay muted controls preload="none" aria-label="Video player">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}