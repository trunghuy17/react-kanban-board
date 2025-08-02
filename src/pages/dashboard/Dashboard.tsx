import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { useCallback } from 'react';
import CardList from '../../components/CardList'
import { dataTodos } from '../../mocks/todos';
import React from 'react';

function Dashboard() {
  const [trello, setTrello] = React.useState(dataTodos);

  const onDragEnd = useCallback((e) => {
    // the only one that is required
     console.log('onDragEnd: ', e)
  }, []);

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <div className='trello'>
        <Droppable droppableId="all-list" type="LIST" direction='horizontal'>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className='listContainer'
            >
              {trello.columns.map((listId: string, listIndex: number) => {
                const listItem = trello.list[listId];
                const cards = listItem.cards.map((cardId: string) => trello.card[cardId])
                return (
                  <CardList 
                    key={listItem.id}
                    index={listIndex}
                    listItem={listItem}
                    cards={cards}
                  />
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  
  )
}

export default Dashboard