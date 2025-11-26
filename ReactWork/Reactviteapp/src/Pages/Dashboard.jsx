import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const serverresponse = await fetch("https://fakestoreapi.com/products");
      const jsonresponse = await serverresponse.json();
      console.log(jsonresponse);
      setdata(jsonresponse);
    }
    fetchdata();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <h2>Data couldn't fetch </h2>
      ) : (
        <div>
          {data.map((ele) => {
            return (
              <div key={ele.id} style={{  height:"300px" , width:"300px" }}>
                <img src={ele.image} height={100} width={100} alt={ele.title} />
                <h3>{ele.title}</h3>
                <button>Add to Cart</button>
              </div>
            );
          })}
        </div>
      )}

      {/* {
        JSON.stringify(data)
      } */}
    </div>
  );
}

export default Dashboard;
