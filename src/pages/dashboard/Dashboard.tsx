import { DragDropContext, Droppable, type DropResult } from 'react-beautiful-dnd';

import { useCallback } from 'react';
import CardList from '../../components/CardList'
import { dataTodos } from '../../mocks/todos';
import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function Dashboard() {
  const [trello, setTrello] = React.useState(dataTodos);

  const onDragEnd = useCallback((result: DropResult) => {
    // the only one that is required
    console.log('onDragEnd: ', result);
    const { source, destination, draggableId, type } = result;

    if (!destination) return;

    if (type === 'LIST') {
      // code logic list
      return
    };

    const { droppableId: sourceDroppableId, index: sourceIndex } = source;
    const { droppableId: destinationDroppableId, index: destinationIndex } = destination;

    if (sourceDroppableId === destinationDroppableId) {
      // drop & drag card same list
      const listItem = trello.list[sourceDroppableId];
      const newCards = listItem.cards;
      newCards.splice(sourceIndex, 1);
      newCards.splice(destinationIndex, 0, draggableId)
      const newTrello = {
        ...trello,
        list: {
          ...trello.list,
          [sourceDroppableId]: {
            ...listItem,
            cards: newCards
          }
        }
      }
      setTrello(newTrello)
      return;
    }

    // // drop & drag card different list

  }, [trello]);

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
              <Button type="text">
                <PlusOutlined /> Add another list
              </Button>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  
  )
}

export default Dashboard