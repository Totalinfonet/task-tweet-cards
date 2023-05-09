import { useGetUsersQuery } from "./api/api";
import Card from "./components/Card";

const App = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      {data.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
