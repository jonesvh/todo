import { TextInput } from "react-native";
import { styles } from "./styles";

type Props = {
  setFocused: (isFocused:boolean) => void;
  isFocused: boolean;
  task: string;
  setTask: () => void;
};

export default function Input({ setFocused, isFocused, task, setTask }: Props) {
  return (
    <TextInput
      style={!isFocused ? styles.input : [styles.input, styles.inputFocused]}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={task}
      onChangeText={(text) => setTask(text)}
    />
  );
}
