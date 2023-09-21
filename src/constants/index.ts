import Coding from 'public/coding.png'
import Culture from 'public/culture.png'
import Fashion from 'public/fashion.png'
import Food from 'public/food.png'
import Style from 'public/style.png'
import Travel from 'public/travel.png'

import { BlogCategory, ColorVariations } from '@/types'

export const CATEGORIES_LIST: BlogCategory[] = [
  { imgUrl: Style, label: 'style', color: ColorVariations.Info },
  {
    imgUrl: Fashion,
    label: 'fashion',
    color: ColorVariations.Secondary,
  },
  { imgUrl: Food, label: 'food', color: ColorVariations.Success },
  {
    imgUrl: Travel,
    label: 'travel',
    color: ColorVariations.Error,
  },
  {
    imgUrl: Culture,
    label: 'culture',
    color: ColorVariations.Warning,
  },
  {
    imgUrl: Coding,
    label: 'coding',
    color: ColorVariations.Primary,
  },
]
