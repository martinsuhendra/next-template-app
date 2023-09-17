export enum ColorVariations {
  Primary = 'primary',
  Secondary = 'secondary',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export type BlogCategory = {
  imgUrl: string
  label: string
  color: ColorVariations
}
