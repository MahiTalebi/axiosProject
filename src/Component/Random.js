import Axios from "axios";
import { useQuery } from "react-query";

function Random() {
  const { refetch, data } = useQuery(["ninja"], () => {
    return Axios.get(
      `https://api.api-ninjas.com/v1/quotes?category=${"happiness"}`,
      {
        headers: {
          "X-Api-Key": "MjVqSNaBUTKpjFfewg+Yiw==SHIN7XS3URrs1Cog",
        },
      }
    ).then((res) => res.data);
  });

  return (
    <div className="App">
      <h1>{data?.[0]?.quote}</h1>
      <button
        onClick={() => {
          refetch();
        }}
      >
        Change random quote
      </button>
    </div>
  );
}

export default Random;
