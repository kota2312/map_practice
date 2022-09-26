import "./styles.css";

export default function App() {
  /* map */
  var items = [1, 2, 3, 4, 5];
  var dataList = [
    {
      name: "akasatana",
      age: 32
    },
    {
      name: "hamayarawa",
      age: 32
    }
  ];

  var proparty = dataList.map(function (e) {
    return (
      <div>
        {e.name}
        <span>{e.age}</span>
      </div>
    );
  });
  var mapItems = items.map(function (e) {
    return <div>{e * 2}</div>;
  });

  return (
    <div>
      {mapItems}
      {proparty}
    </div>
  );
}
