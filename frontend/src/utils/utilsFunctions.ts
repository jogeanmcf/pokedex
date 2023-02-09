
export function getIdFromUrl(url: string): number{
  let splitedArr = url.split('/')
  return Number(splitedArr[splitedArr.length-2])
}

export function getUrlFromId(id: number): string{
  return `https://pokeapi.co/api/v2/move/${id}/`;
}