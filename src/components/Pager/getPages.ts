const getNumbers = (start: number, end: number): number[] => {
  const res: number[] = []
  for (let i = start; i <= end; i++) {
    res.push(i)
  }
  return res
}

export const getPages = (
  postTotal: number,
  postPerPage: number,
  currentPage: number
): (string | number)[] => {
  const pageCount = Math.ceil(postTotal / postPerPage)

  let pages: (string | number)[] = []
  if (currentPage <= 4) {
    pages = getNumbers(1, currentPage >= pageCount - 1 ? pageCount : currentPage + 2)
    if (currentPage + 3 < pageCount) {
      pages.push('..')
    }
    if (currentPage + 2 < pageCount) {
      pages.push(pageCount)
    }

  } else if (currentPage >= 5 && currentPage <= pageCount - 4) {
    pages.push(
      1, '..', ...getNumbers(currentPage - 2, currentPage + 2), '..', pageCount
    )
  } else {
    pages.push(
      1, '..', ...getNumbers(currentPage - 2, pageCount)
    )
  }
  return pages
}