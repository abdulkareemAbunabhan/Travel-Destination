import Tour from "./tour/Tour";
const data = require("../../data/db.json");
function Tours() {
  return (
    <>
      {data.map((item) => {
        return (
          <Tour key={item.id} id={item.id}/>
        );
      })}
    </>
  );
}
export default Tours;
