import { Layout } from 'antd';
import { Route, Routes, useNavigate } from 'react-router';
import Dashboard from './pages/dashboard/Dashboard';
import Report from './pages/report/Report';
import { AreaChartOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function App() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate('/')
  }

   function gotoReport() {
    navigate('/report')
  }

  return (
    <>
      <Layout>
        <Header>
          <div className='header_chart' onClick={gotoReport}>
            <AreaChartOutlined />
          </div>
          <div className="header__logo" onClick={gotoHome} />
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>

    </>
  )
}

export default App
