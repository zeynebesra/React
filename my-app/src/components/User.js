function User({ name, surname, isLoggedIn, friends }) {
  return (
    <>
      <h1>{isLoggedIn ? `{name} {surname}` : ` Giriş yapmadınız.`}</h1>

      {friends.map((friend, index) => (
        <div key={index}>
          {index} - {friend}
        </div>
      ))}
    </>
  );
}

export default User;
