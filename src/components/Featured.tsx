import Image from 'next/image'

function Featured() {
  return (
    <div className="mt-8">
      <h1 className="max-w-6xl text-6xl lg:text-8xl font-bold">
        <strong>Hey, blog dev here!</strong> Discover my stories and creative
        ideas.
      </h1>
      <div className="mt-14 flex items-center gap-12">
        <div className="flex-1 h-[500px] w-96 relative">
          <Image
            src="/post-hero.jpeg"
            alt="image featured"
            fill
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h4 className="font-bold text-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h4>
          <p className="text-base">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Featured
