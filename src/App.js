import { Card } from "antd";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=15&idStarts=1001")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <div className="search-crypto">
          <input
            placeholder="Search Employee..."
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
              setData(
                data.filter((item) =>
                  item.firstName.toLowerCase().match(search)
                )
              );
            }}
          />
        </div>
        <p>organizational Chart</p>
        {data?.map((value, index) => (
          <>
            <Card>
              <li>{value.firstName}</li>
            </Card>
          </>
        ))}
      </div>
    </Provider>
  );
}

export default App;
