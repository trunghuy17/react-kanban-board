import { Button } from 'antd'
import CardList from '../../components/CardList'
import { PlusOutlined } from '@ant-design/icons'

function Dashboard() {
  return (
    <div className='trello'>
      <CardList />

      <CardList />
      <CardList />
      <CardList />

      <Button type="text">
        <PlusOutlined /> Add another list
      </Button>
    </div>
  )
}

export default Dashboard