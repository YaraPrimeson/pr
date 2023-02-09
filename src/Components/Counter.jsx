const Counter = ({ name, count, age, surname }) => {
  // const Counter = (props) => {
  //const object = { a: 1, b: 2, t: 3 };
  //   console.log(props);
  //const { a, b, t } = object;
  //   console.log(props);
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      {surname}
      {/* <button>{count}</button> */}
      {/* <button>{props.count}</button> */}
      {/* <p>{props.name}</p> */}
      {/* <p>{props.age}</p> */}
      {/* <p>{props.surname}</p> */}
    </div>
  );
};

export default Counter;
