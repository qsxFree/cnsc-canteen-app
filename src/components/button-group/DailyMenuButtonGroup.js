import { HStack, Button } from "native-base";
import React from "react";
import useCategoryButton from "../../hooks/useCategoryButton";

const categoryButtonDefaultProps = {
  rounded: "50",
  py: "1",
  w: "16",
  borderColor: "primary.800",
  _text: { color: "primary.800" },
};

const DailyMenuButtonGroup = () => {
  const { categoryStyle, changeCategoryStyle } = useCategoryButton();
  return (
    <HStack space={3} mx="4" mt="4" mb="2">
      <Button.Group variant="outline" size="xs">
        <Button
          {...categoryButtonDefaultProps}
          bgColor={categoryStyle[0].bgColor}
          _text={categoryStyle[0]._text}
          onPress={() => changeCategoryStyle(0)}
        >
          All
        </Button>
        <Button
          {...categoryButtonDefaultProps}
          bgColor={categoryStyle[1].bgColor}
          _text={categoryStyle[1]._text}
          onPress={() => changeCategoryStyle(1)}
        >
          Breakfast
        </Button>
        <Button
          {...categoryButtonDefaultProps}
          bgColor={categoryStyle[2].bgColor}
          _text={categoryStyle[2]._text}
          onPress={() => changeCategoryStyle(2)}
        >
          Lunch
        </Button>
        <Button
          {...categoryButtonDefaultProps}
          bgColor={categoryStyle[3].bgColor}
          _text={categoryStyle[3]._text}
          onPress={() => changeCategoryStyle(3)}
        >
          Snacks
        </Button>
      </Button.Group>
    </HStack>
  );
};

export default DailyMenuButtonGroup;
