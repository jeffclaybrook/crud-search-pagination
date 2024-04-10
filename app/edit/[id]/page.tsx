import { notFound } from "next/navigation"
import { getContactById } from "@/lib/data"
import EditForm from "@/components/EditForm"

const Edit = async ({
 params
}: {
 params: {
  id: string
 }
}) => {
 const id = params.id
 const contact = await getContactById(id)

 if (!contact) {
  notFound()
 }

 return (
  <div>
   <h1 className="text-2xl text-center mb-2">Edit Contact</h1>
   <EditForm contact={contact} />
  </div>
 )
}

export default Edit