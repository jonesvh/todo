import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

type Props = {
  isChecked: boolean;
  taskDescription: string;
  handleDelete: (key: string) => void;
  keyTask: string;
  handleToggleCheck: (key: string) => void;
};

export default function Task({
  isChecked,
  taskDescription,
  keyTask,
  handleDelete,
  handleToggleCheck,
}: Props) {
  const [checkHovered, setCheckHovered] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.check}
        onPress={() => handleToggleCheck(keyTask)}
        onPressIn={() => setCheckHovered(true)}
        onPressOut={() => setCheckHovered(false)}
        activeOpacity={1}
      >
        {isChecked ? (
          <Ionicons name="checkmark-circle" 
          style={!checkHovered ? styles.iconChecked : [styles.iconChecked, styles.iconCheckedHoverd]}
          />
        ) : (
          <Ionicons name="radio-button-off" 
          style={!checkHovered ? styles.iconUnchecked : [styles.iconUnchecked, styles.iconUncheckedHoverd]}
          />
        )}
      </TouchableOpacity>
      <Text style={isChecked ? [styles.text, styles.checkedText] : styles.text}>
        {taskDescription}
      </Text>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => handleDelete(keyTask)}
        onPressIn={() => setDeleteHovered(true)}
        onPressOut={() => setDeleteHovered(false)}
        activeOpacity={1}
      >
        <Ionicons name="trash-outline" 
          style={!deleteHovered ? styles.iconDelete : [styles.iconDelete, styles.iconDeleteHoverd]}
        />
      </TouchableOpacity>
    </View>
  );
}
