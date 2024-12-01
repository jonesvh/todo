import { FlatList, Image, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import EmptyList from "../../components/EmptyList";
import { useState } from "react";
import Button from "../../components/Button";
import Task from "../../components/Task";

export default function Home() {
  type Task = {
    id: string;
    checked: boolean;
    taskDescription: string;
  };

  const [focused, setFocused] = useState(false);
  const [task, setTask] = useState<Task>();
  const [taskList, setTaskList] = useState<Task[]>([]);

  function handleAddTask() {
    if (!task?.taskDescription) return;
    setTaskList((prevState) => {
      orderTasks(prevState)
      return [task, ...orderTasks(prevState)];
    });
    handleCleanInput();
  }

  function orderTasks(tasks: Task[]) {
    let sortLList = tasks.sort((a: Task, b: Task) => {
    if (a.checked === b.checked) return 0;
    return a.checked ? 1 : -1;
    });
    return sortLList
  }

  function handleToggleCheck(key: string) {
    const newList = taskList.map((task) => {
      if (task.id === key) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    orderTasks(newList)
    setTaskList(orderTasks(newList));
  }

  function handleDeleteTask(key: string) {
    const newList = taskList.filter((task) => task.id !== key);
    setTaskList(newList);
  }

  function handleCleanInput() {
    setTask({
      id: "",
      checked: false,
      taskDescription: "",
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.new}>
        <TextInput
          style={!focused ? styles.input : [styles.input, styles.inputFocused]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={task?.taskDescription}
          onChangeText={(text) => {
            let id = taskList.length > 0 ? String(taskList.length + 1) : "1";
            let task = {
              id: id,
              checked: false,
              taskDescription: text,
            };

            setTask(task);
          }}
        />
        <Button handleAdd={handleAddTask} />
      </View>
      <View style={styles.count}>
        <View style={styles.countItem}>
          <Text style={styles.textCreated}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.textCounter}>{taskList?.length}</Text>
          </View>
        </View>
        <View style={styles.countItem}>
          <Text style={styles.textDone}>Concluidas</Text>
          <View style={styles.counter}>
            <Text style={styles.textCounter}>
              {taskList.filter((item) => item.checked === true).length}
            </Text>
          </View>
        </View>
      </View>
      {taskList?.length <= 0 ? <View style={styles.line}></View> : null}
      <View style={styles.taskList}>
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={(taskList) => {
            if (taskList.item.taskDescription.length > 0) {
              return (
                <Task
                  isChecked={taskList.item.checked}
                  taskDescription={taskList.item.taskDescription}
                  handleDelete={handleDeleteTask}
                  keyTask={taskList.item.id}
                  handleToggleCheck={handleToggleCheck}
                />
              );
            } else {
              return null;
            }
          }}
          ListEmptyComponent={() => <EmptyList />}
          style={{ width: "100%", marginTop: 15 }}
        />
      </View>
    </View>
  );
}
