import { Draggable } from "react-beautiful-dnd";

import "./card.css";

const getItemStyle = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  backgroundColor: isDragging ? "lightgreen" : "#f1f1f1",
  // styles we need to apply on draggables
  ...draggableStyle
});

const Card = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
