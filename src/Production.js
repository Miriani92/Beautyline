import React from "react";
import { data } from "./Data";
import { Link } from "react-router-dom";

const Production = () => {
  const [info, setInfo] = React.useState(data);
  const [filter, setFilter] = React.useState("ყველა");
  const [filteredItems, setFilterdItems] = React.useState([]);
  let allCategories = ["ყველა", ...new Set(info.map((item) => item.category))];

  React.useEffect(() => {
    const filtration = () => {
      const filterdItem = data.filter((item) => item.category === filter);
      if (filter === "ყველა") {
        return setFilterdItems(info);
      } else {
        setFilterdItems([...filterdItem]);
      }
    };
    filtration();
  }, [filter]);

  return (
    <div className="production">
      <dv className="filterButtonswrapper">
        {allCategories.map((category) => {
          return (
            <button className="filterbtn" onClick={() => setFilter(category)}>
              {category}
            </button>
          );
        })}
      </dv>
      <div className="filterditemswrapper">
        {filteredItems.map((item, index) => {
          const { id, name, image1 } = item;
          return (
            <React.Fragment key={index}>
              <Link to={`/Prodacts/${id}`}>
                <div className="productcard">
                  <h2 className="productheader">{name}</h2>
                  <div className="imagecontainer">
                    <img
                      className="productimage"
                      src={require(`${image1}`).default}
                    />
                  </div>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Production;
