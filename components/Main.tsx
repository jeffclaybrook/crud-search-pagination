import { ReactNode } from "react"

interface MainProps {
 children: ReactNode
}

const Main = ({
 children
}: MainProps) => {
 return (
  <main className="mt-4 px-8">{children}</main>
 )
}

export default Main