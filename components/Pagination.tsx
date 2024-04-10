"use client"

import Link from "next/link"
import clsx from "clsx"
import { usePathname, useSearchParams } from "next/navigation"
import { pagination } from "@/lib/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationNumberProps {
 page: number | string
 href: string
 position?: "first" | "last" | "middle" | "single"
 isActive: boolean
}

interface PaginationArrowProps {
 href: string
 direction: "left" | "right"
 isDisabled?: boolean
}

interface PaginationProps {
 totalPages: number
}

const PaginationNumber = ({
 page,
 href,
 position,
 isActive
}: PaginationNumberProps) => {
 const className = clsx(
  "btn btn-square",
  {
   "mr-2": position === "first" || position === "single",
   "ml-2": position === "last" || position === "single",
   "btn-neutral": isActive,
   "hover:bg-gray-100": !isActive && position !== "middle",
   "text-gray-300 pointer-events-none": position === "middle"
  }
 )

 return isActive && position === "middle" ? (
  <div className={className}>{page}</div>
 ) : (
  <Link href={href} className={className}>{page}</Link>
 )
}

const PaginationArrow = ({
 href,
 direction,
 isDisabled
}: PaginationArrowProps) => {
 const className = clsx(
  "btn btn-square",
  {
   "pointer-events-none text-gray-300": isDisabled,
   "hover:bg-gray-100": !isDisabled,
   "mr-2": direction === "left",
   "ml-2": direction === "right"
  }
 )

 const icon = direction === "left" ? (
  <ChevronLeft />
 ) : (
  <ChevronRight />
 )

 return isDisabled ? (
  <div className={className}>{icon}</div>
 ) : (
  <Link href={href} className={className}>{icon}</Link>
 )
}

const Pagination = ({
 totalPages
}: PaginationProps) => {
 const pathname = usePathname()
 const searchParams = useSearchParams()
 const currentPage = Number(searchParams.get("page")) || 1

 const createPageURL = (pageNumber: string | number) => {
  const params = new URLSearchParams(searchParams)
  params.set("page", pageNumber.toString())
  return `${pathname}?${params.toString()}`
 }

 const allPages = pagination(currentPage, totalPages)

 return (
  <div className="inline-flex">
   <PaginationArrow
    direction="left"
    href={createPageURL(currentPage - 1)}
    isDisabled={currentPage <= 1}
   />
   <div className="flex -space-x-px">
    {allPages.map((item, i) => {
     let position: "first" | "last" | "single" | "middle" | undefined

     if (i === 0) position = "first"
     if (i === allPages.length - 1) position = "last"
     if (allPages.length === 1) position = "single"
     if (item === "...") position = "middle"

     return (
      <PaginationNumber
       key={i}
       href={createPageURL(item)}
       page={item}
       position={position}
       isActive={currentPage === item}
      />
     )
    })}
   </div>
   <PaginationArrow
    direction="right"
    href={createPageURL(currentPage + 1)}
    isDisabled={currentPage >= totalPages}
   />
  </div>
 )
}

export default Pagination