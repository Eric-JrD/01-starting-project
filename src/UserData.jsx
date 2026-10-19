function UserData(){
  const user ={
    fname: "John",
    lname: "Doe",
    age: 20,
  };

  return (
    <div>
      <ul>
        User Data
        <li>First: {user.fname}</li>
        <li>Last: {user.lname}</li>
        <li>Age: {user.age}</li>
      </ul>
    </div>
  );
}

export default UserData;