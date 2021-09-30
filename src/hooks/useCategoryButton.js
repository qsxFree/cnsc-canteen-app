import { useState } from "react";

const useCategoryButton = () => {
  const selectedStyle = {
    bgColor: "primary.800",
    _text: { color: "white" },
  };
  const unselectedStyle = {
    bgColor: "transparent",
    _text: { color: "primary.800" },
  };

  const [categoryButtonStyle, setCategoryButtonStyle] = useState([
    selectedStyle,
    unselectedStyle,
    unselectedStyle,
    unselectedStyle,
  ]);

  const handleCategoryChange = (index) => {
    switch (index) {
      case 0:
        setCategoryButtonStyle([
          selectedStyle,
          unselectedStyle,
          unselectedStyle,
          unselectedStyle,
        ]);
        break;
      case 1:
        setCategoryButtonStyle([
          unselectedStyle,
          selectedStyle,
          unselectedStyle,
          unselectedStyle,
        ]);
        break;
      case 2:
        setCategoryButtonStyle([
          unselectedStyle,
          unselectedStyle,
          selectedStyle,
          unselectedStyle,
        ]);
        break;
      case 3:
        setCategoryButtonStyle([
          unselectedStyle,
          unselectedStyle,
          unselectedStyle,
          selectedStyle,
        ]);
        break;
    }
  };

  return {
    categoryStyle: categoryButtonStyle,
    changeCategoryStyle: handleCategoryChange,
  };
};

export default useCategoryButton;
