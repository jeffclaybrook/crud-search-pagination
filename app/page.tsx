import { Suspense } from "react"
import { getContactPages } from "@/lib/data"
import CreateButton from "@/components/CreateButton"
import Pagination from "@/components/Pagination"
import SearchBar from "@/components/SearchBar"
import Skeleton from "@/components/Skeleton"
import Table from "@/components/Table"

const Contacts = async ({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) => {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await getContactPages(query)

  return (
    <>
      <div className="flex items-center justify-end mb-4">
        <SearchBar />
      </div>
      <Suspense key={query + currentPage} fallback={<Skeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
      <CreateButton />
    </>
  )
}

export default Contacts