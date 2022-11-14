import { Droppable } from "react-beautiful-dnd";

import Card from "../Card";

import "./column.css";

const Column = ({ column, tasks }) => {
  const getListStyle = isDraggingOver => ({
    backgroundColor: isDraggingOver ? "lightgrey" : "#383838",
  });

  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <div
          className="column"
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          <h2>{column.title}</h2>
          {column.taskIds.map((taskId, index) => {
            const task = tasks[index];
            return <Card key={task.id} task={task} index={index} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
