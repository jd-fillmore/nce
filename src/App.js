import Header from "./components/Header";
import "../src/scss/main.scss";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div className="App">
      <Header
        title="New Cat Equipment"
        subTitle="Search for our new Cat equipment stock"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
