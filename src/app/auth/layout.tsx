export default function ShopLayout( {children}: {
   children: React.ReactNode
}) {
   return (
      <main className="min-h-screen bg-grey-500">
         {children}
      </main>
   )
}
