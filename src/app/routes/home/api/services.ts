interface IGetPostServiceProps {
  requestUrl: string
  listSize: number
}

export default async function GetPostsServices({
  requestUrl,
  listSize,
}: IGetPostServiceProps) {
  const response = await fetch(`${requestUrl}?limit=${listSize}`).then((res) =>
    res.json()
  )

  return response
}
