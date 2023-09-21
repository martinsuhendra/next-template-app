import Image from 'next/image'
import PostHeroImage from 'public/post-hero.jpeg'

function CommentCard() {
  return (
    <div className="mb-12 flex flex-col gap-4">
      <div className="flex items-center gap-5">
        <div className="relative w-14 h-14 aspect-square">
          <Image
            src={PostHeroImage}
            fill
            className="object-cover rounded-full border-2 border-slate-400"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">John Doe</span>
          <span className="text-stone-500"> 01.01.2023</span>
        </div>
      </div>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim
        lectus, hendrerit at risus id, volutpat congue ante. Nulla nec ante quis
        dui porttitor ornare in quis orci. Nam non arcu magna.
      </span>
    </div>
  )
}

export default CommentCard
