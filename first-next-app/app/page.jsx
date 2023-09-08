import { getAllUsers } from "@utils/features";
import Link from "next/link";
export default async function Home() {
  const users = await getAllUsers();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     { users?.map(user => {
      return  <Link href={`/user/${user.id}`}  key={user.id}>
          {user.name}  
        </Link>;
      })  }
    </div>
  );
}
