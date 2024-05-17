export default function MainService() {
  return (
    <>
        <h1>Main Service Page</h1>
        <NotImpService />
    </>
  )
}

function NotImpService() {
  return <h3>This is not an important service</h3>;
}
