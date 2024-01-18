import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return (
    <h2>
      <Link href="/">Back to Home</Link>
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </h2>
  );
}

// const PageName = styled.h1``;
