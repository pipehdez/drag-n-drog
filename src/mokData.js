const initialData = {
    columns: {
      "column-1": {
        id: "column-1",
        title: "To Do",
        taskIds: ["1", "2", "3", "4"],
      },
      "column-2": {
        id: "column-2",
        title: "In Progress",
        taskIds: ["5", "6", "7", "8"],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        taskIds: ["9", "10", "11", "12"],
      },
    },
    tasks: {
      "1": { id: "1", content: "Take out the garbage" },
      "2": { id: "2", content: "Watch my favorite show" },
      "3": { id: "3", content: "Charge my phone" },
      "4": { id: "4", content: "Cook dinner" },
      "5": { id: "5", content: "Take out the garbage" },
      "6": { id: "6", content: "Watch my favorite show" },
      "7": { id: "7", content: "Charge my phone" },
      "8": { id: "8", content: "Cook dinner" },
      "9": { id: "9", content: "Take out the garbage" },
      "10": { id: "10", content: "Watch my favorite show" },
      "11": { id: "11", content: "Charge my phone" },
      "12": { id: "12", content: "Cook dinner" },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  };

export default initialData;