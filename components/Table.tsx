import { getContacts } from "@/lib/data"
import { formatDate } from "@/lib/formatDate"
import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"

interface TableProps {
 query: string
 currentPage: number
}

const headers = ["#", "Name", "Email Address", "Phone Number", "Created At", "Actions"]

const Table = async ({
 query,
 currentPage
}: TableProps) => {
 const contacts = await getContacts(query, currentPage)

 return (
  <div className="overflow-x-auto">
   <table className="table">
    <thead>
     <tr>
      {headers.map((item, i) => (
       <th key={i}>{item}</th>
      ))}
     </tr>
    </thead>
    <tbody>
     {contacts.map((item, i) => (
      <tr key={item.id}>
       <td>{i + 1}</td>
       <td>{item.name}</td>
       <td>{item.email}</td>
       <td>{item.phone}</td>
       <td>{formatDate(item.createdAt.toString())}</td>
       <td className="flex gap-1">
        <EditButton id={item.id} />
        <DeleteButton id={item.id} />
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 )
}

export default Table