import { Image, Text, View } from "react-native";
import { styles } from "./styles";


export default function EmptyList() {
  return (
    <View style={styles.container}>
        <Image
          source={require("../../assets/list.png")}
          style={styles.image}
        ></Image>
      <Text style={styles.text1}>
        Voce ainda nao tem tarefas cadastradas
      </Text>
      <Text style={styles.text2}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
