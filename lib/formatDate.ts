export const formatDate = (str: string) => {
 const date = new Date(str)
 const formatted = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
 })
 return formatted.format(date)
}