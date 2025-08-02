import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, Tooltip } from 'antd'
import CardItem from './CardItem'

function CardList() {
  return (
    <Card 
      size="small" 
      title="Todo" 
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
      <div className='card_list_container'>
        <CardItem />
        <CardItem />
      </div>
    </Card>
  )
}

export default CardList