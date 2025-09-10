const Users = () => {
  const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Jake" },
    { id: 3, name: "Chris" },
  ];
  return <div>
    <h1>List of users</h1>
      <ul>
          {users.map((user) => {
              return <li
              key={user.id}>{user.name}</li>
          })}
    </ul>
  </div>
};
export default Users;
