import { useState, useEffect } from "react";
function api(parameter){
  const [info, setInfo] = useState("");

  const consultarApi = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/${parameter}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    setInfo(`${data.quote} - ${data.author}`);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    info
  );
}

export default api