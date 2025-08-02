import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, Tooltip } from 'antd'

import type { ICardItem, ListItem } from '../types/index.td'
import CardItem from './CardItem'

interface CardListProps {
  index: number,
  listItem: ListItem,
  cards: ICardItem[]
}

function CardList({ index, listItem, cards }: CardListProps) {

  console.log('cards: ', cards)
  return (
   <Draggable draggableId={String(listItem.id)} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Droppable droppableId={String(listItem.id)} type="CARD" direction='vertical'>
          {(provided) => (
            <Card 
              size="small" 
              title={listItem.title}
              extra={
                <>
                  <Tooltip title="Add Card">
                    <Button shape="circle" size='small' icon={<PlusOutlined />} style={{ marginRight: 4 }} />
                  </Tooltip>
                  <Tooltip title="Delete List">
                    <Button danger shape="circle" size='small' icon={<DeleteOutlined />} />
                  </Tooltip>
                </>
              } 
              className='card_list'
            >
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className='card_list_container'
              >
                {cards.map((card, cardIndex) => {
                  return (
                    <CardItem 
                      key={card.id}
                      index={cardIndex}
                      card={card}
                    />
                  )
                })}
                {provided.placeholder}
              </div>
            </Card>
           
          )}
        </Droppable>
      </div>
    )}
  </Draggable>
    
  )
}

export default CardList