const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take the garage out" },
    "task-2": { id: "task-2", content: "Watch your Favourite show" },
    "task-3": { id: "task-3", content: "Make the food" },
    "task-4": { id: "task-4", content: "Practice Well" }
  },
  columns: {
    "column-1": {
      id: "columm-1",
      title: "ToDo",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    }
  },
  columnOrder: ["column-1"]
};

export default initialData;
