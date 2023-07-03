import { useEffect, useState } from "react";

const UniqueItem = (dataItems) => {
  const [dataColor, setDataColor] = useState([]);
  const [data, setdata] = useState(null);

  useEffect(() => {
    const colors = dataItems.map((item) => item.color);
    setDataColor((prevDataColor) => [...prevDataColor, ...colors]);
  }, [dataItems]);

  useEffect(() => {
    if (dataColor.length) {
      const flatArray = dataColor.flat();
      const uniqueColor = Array.from(new Set(flatArray));
      setdata(uniqueColor);
    }
  }, [dataColor]);

  return { data };
};

export default UniqueItem;
