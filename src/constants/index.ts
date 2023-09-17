import { BlogCategory, ColorVariations } from '@/types'

export const CATEGORIES_LIST: BlogCategory[] = [
  { imgUrl: '/style.png', label: 'style', color: ColorVariations.Info },
  {
    imgUrl: '/fashion.png',
    label: 'fashion',
    color: ColorVariations.Secondary,
  },
  { imgUrl: '/food.png', label: 'food', color: ColorVariations.Success },
  { imgUrl: '/travel.png', label: 'travel', color: ColorVariations.Error },
  { imgUrl: '/culture.png', label: 'culture', color: ColorVariations.Warning },
  { imgUrl: '/coding.png', label: 'coding', color: ColorVariations.Primary },
]
