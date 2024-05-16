import parser from 'html-react-parser'

const showFormattedDate = (date, locale = 'en-GB') => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  }
  return new Date(date).toLocaleDateString(locale, options)
}

const parsingtoHTML = (html) => {
  return parser(html)
}

const truncateBody = (body, length = 100) => {
  return body.length > length ? body.slice(0, length) + '...' : body
}

export { showFormattedDate, parsingtoHTML, truncateBody }
