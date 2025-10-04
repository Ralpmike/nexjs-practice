export default async function page() {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      resolve("REsolved");
      
    }, 4000)
  })
  const result = await data
  console.log(result)

  return <p>Invoices Page</p>;
}
