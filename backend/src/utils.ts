

export function str2array(str: string): number[]{
  return str.split('-').map(item => Number(item))
}

export function array2str(arr: number[]): string{
  return arr.join('-')
}