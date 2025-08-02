import { Draggable } from 'react-beautiful-dnd';
import { DeleteOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import type { ICardItem } from '../types/index.td'

interface CardItemProps {
  index: number,
  card: ICardItem
}


function CardItem({ index, card }: CardItemProps) {
  return (
    <Draggable draggableId={String(card.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='card_item'
        >
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <DeleteOutlined key="delete" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title={card.title}
              description="This is the description"
            />
          </Card>
        </div>
      )}
    </Draggable>
    
  )
}

export default CardItem