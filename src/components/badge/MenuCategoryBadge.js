import { Badge } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const MenuCategoryBadge = ({ category, label }) => {
  let categoryColor = "muted";
  switch (category) {
    case "rice-meal":
      categoryColor = "orange";
      break;
    case "breakfast":
      categoryColor = "purple";
      break;
    case "lunch":
      categoryColor = "lightBlue";
      break;
    case "snack":
      categoryColor = "emerald";
      break;
    case "dessert":
      categoryColor = "amber";
  }
  return (
    <Badge colorScheme={categoryColor} variant="subtle" rounded="full">
      {label}
    </Badge>
  );
};

export default MenuCategoryBadge;
