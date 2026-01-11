import { Client, columns } from "./components/columns";
import { ClientTable } from "./components/client-table";

async function getData(): Promise<Client[]> {
  // Fetch data from your API here.
  let data = await fetch("http://localhost:3000/api/clients");
  let response = await data.json();
  return response;
}

export default async function ClientPage() {
  const data = await getData();
  return (
    <div className="container mx-1 py-5">
      <ClientTable columns={columns} data={data} />
    </div>
  );
}
