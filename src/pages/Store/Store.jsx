import { useState } from "react";
import NavigationBar from "src/components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

export default function Store() {
  const [currentFilterOption, setFilterOption] = useState([null, null]);
  const [cartContent, setCartContent] = useState([]);

  const handleCategory = () => {
    setFilterOption([null, null]);
  };

  return (
    <>
      <NavigationBar cartContent={cartContent} />
      <Outlet
        context={[
          currentFilterOption,
          setFilterOption,
          handleCategory,
          cartContent,
          setCartContent,
        ]}
      />
    </>
  );
}
