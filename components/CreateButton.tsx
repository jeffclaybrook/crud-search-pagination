import Link from "next/link"
import { Plus } from "lucide-react"

const CreateButton = () => {
 return (
  <Link href={"/create"} className="btn btn-neutral fixed bottom-8 right-8">
   <Plus />
   Create
  </Link>
 )
}

export default CreateButton