import Image from 'next/image'

import CommentCard from '@/components/CommentCard'
import Comments from '@/components/Comments'
import Menu from '@/components/Menu'

function SinglePage() {
  return (
    <div className="my-12">
      <div className="flex flex-col sm:flex-row justify-between gap-12">
        <div className="flex flex-col gap-5 justify-between sm:w-3/6">
          <div>
            <h4 className="font-bold text-2xl sm:text-4xl lg:text-6xl">
              Lorem Ipsum is simply dummy text of the printing.
            </h4>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative w-14 h-14 aspect-square">
              <Image
                src="/post-hero.jpeg"
                fill
                className="object-cover rounded-full border-2 border-slate-400"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium">John Doe</span>
              <span className="text-stone-500"> 25 April 2023</span>
            </div>
          </div>
        </div>
        <div className="aspect-video relative sm:w-3/6">
          <Image
            src="/post-hero.jpeg"
            alt="image post"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-7 justify-between gap-12">
        <div className="col-span-7 md:col-span-5 mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim
          lectus, hendrerit at risus id, volutpat congue ante. Nulla nec ante
          quis dui porttitor ornare in quis orci. Nam non arcu magna. Vestibulum
          rhoncus porta vulputate. Nulla tincidunt mattis vestibulum. Etiam nec
          purus lorem. Praesent pellentesque nulla elit, in tristique metus
          feugiat facilisis. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Ut ornare justo a fringilla
          blandit. Duis ac leo sit amet nibh interdum sollicitudin. Curabitur a
          malesuada nibh. Vivamus eget magna nisl. Suspendisse mollis auctor
          turpis in interdum. Phasellus sit amet urna id nisi feugiat dapibus.
          Nunc porta felis eu nisl sodales, non consectetur orci tristique. Sed
          non leo metus. Maecenas imperdiet mauris ut consectetur scelerisque.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Suspendisse potenti. Quisque at tortor quis
          risus fringilla tincidunt. Ut eleifend orci in massa commodo tempor.
          Vestibulum quis lacus eget urna vehicula vestibulum vitae id nulla.
          Etiam vestibulum dictum orci nec fermentum. Nullam aliquet ipsum vel
          massa molestie pharetra. Donec non mollis nulla. Sed ut suscipit est,
          vel sodales nulla. Proin feugiat, sapien placerat tempus iaculis,
          nulla lectus maximus sapien, nec rutrum lectus ante et est. Nunc odio
          est, imperdiet in luctus ac, placerat non lacus. Quisque tincidunt
          velit interdum ex efficitur vulputate a nec nisi. Curabitur vitae
          augue eu neque suscipit ultrices et vitae diam. Aenean vitae laoreet
          lacus, eu rhoncus nibh. Ut in leo in mi ultrices ornare eget vitae
          tellus. Morbi ac ex vitae orci maximus pretium eu sed diam. Nunc
          malesuada orci diam. Morbi sed felis facilisis, cursus ante eu, mollis
          augue. In ornare convallis libero id dignissim. Mauris nunc urna,
          suscipit eu mi quis, elementum accumsan neque.
          <Comments />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
