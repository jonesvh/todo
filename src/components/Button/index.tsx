import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

type Props = {
  handleAdd: () => void;
};

export default function Button({ handleAdd }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <TouchableOpacity
      style={!hovered ? styles.button : [styles.button, styles.buttonHoverd]}
      onPressIn={() => setHovered(true)}
      onPressOut={() => setHovered(false)}
      onPress={() => handleAdd()}
      activeOpacity={1}
    >
      <Ionicons name="add-circle-outline" size={20} color={"#F2F2F2"} />
    </TouchableOpacity>
  );
}
