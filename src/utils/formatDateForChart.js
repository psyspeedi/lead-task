export default function(notFormatDate) {
  const toDate = dateStr => {
    const [year, month, day] = dateStr.split('-')
    return new Date(year, month - 1, day)
  }

  return new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    day: 'numeric'
  }).format(toDate(notFormatDate))
}
