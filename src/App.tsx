import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Button, Input, Form } from "antd";
import { Layout } from "antd";
import "antd/dist/reset.css";
import LoginForm from "./Lab 3/LoginForm";
import RegisterForm from "./Lab 3/RegisterForm";
import PostForm from "./Lab 3/PostForm";
import CategoryAdd from "./Lab 4/CategoryAdd";
import List from "./pages/List";
import { StoryList } from "./Lab 5/Lab 5";


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>

    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/post" element={<PostForm />} />
      <Route path="/category" element={<CategoryAdd />} />
      <Route path="/list" element={<List />} />
      <Route path="/stories" element={<StoryList />} />
    </Routes>

      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/category" className="hover:text-gray-200">
              Thêm danh mục
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Liên hệ
            </Link> 
            <Link to="/post" className="hover:text-gray-200">
              Thêm bài viết
            </Link>
            <Link to="/stories" className="hover:text-gray-200">
              Danh sách truyện
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Layout>
          <p className="text-2xl font-bold mb-4">Form đăng nhập</p>
          <Content>
            <Form>
              <Form.Item label="Tên">
                <Input placeholder="Nhập tên" />
              </Form.Item>
              <Form.Item label="Email">
                <Input type="email" placeholder="Nhập email" />
              </Form.Item>
              <Form.Item label="Mật khẩu">
                <Input type="password" placeholder="Nhập mật khẩu" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form><br /><br />
          </Content>
          <Header className="bg-blue-600 text-white">Header</Header>
          <Footer className="text-center">© 2026 WEB2091 - Ant Design Demo</Footer>
        </Layout>

      </div>

      <Toaster />
    </>
  );
}



export default App;


