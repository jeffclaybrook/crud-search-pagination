import Link from "next/link"
import { Pencil } from "lucide-react"

interface EditButtonProps {
 id: string
}

const EditButton = ({
 id
}: EditButtonProps) => {
 return (
  <Link href={`/edit/${id}`} className="btn btn-circle btn-ghost">
   <Pencil />
  </Link>
 )
}

export default EditButton