import { useUsers } from "./graphql/queries/user";

const App = () => {
  const { status, data, error, isFetching }: any = useUsers();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>Hello world</div>
            <div>
              {data.map((user: any) => (
                <div key={user.id}>
                  <h1>{user.name}</h1>
                  <h1>{user.phone}</h1>
                </div>
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
