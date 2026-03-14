import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Button, Input, Form, Table, Modal } from "antd";
import { Layout } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import LoginForm from "./Lap 3/LoginForm";
import RegisterForm from "./Lap 3/RegisterForm";
import PostForm from "./Lap 3/PostForm";


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>

    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/post" element={<PostForm />} />
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
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Liên hệ
            </Link> 
            <Link to="/post" className="hover:text-gray-200">
              Thêm bài viết
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
            <UserList />
            <AddUserModal />
            <DemoTable />
              <StudentList />
              <ProductList />
              <UserManagement />
          </Content>
          <Header className="bg-blue-600 text-white">Header</Header>
          <Footer className="text-center">© 2026 WEB2091 - Ant Design Demo</Footer>
        </Layout>

      </div>

      <Toaster />
    </>
  );
}

function UserList() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Minh Tri',
      email: 'dohuuminhtri1322@gmail.com',
      role: 'Admin',
    },
    {
      key: '2',
      name: 'Bao Toan',
      email: 'baotoan@gmail.com',
      role: 'User',
    },
    {
      key: '3',
      name: 'Gia Bao',
      email: 'giabao@gmail.com',
      role: 'User',
    },
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Danh sách User</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

function AddUserModal() {
  const [open, setOpen] = useState(false);

  return(
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Thêm User
      </Button>
      <Modal title = "Thêm User"
        open = {open}
        onCancel = {() => setOpen(false)}
        footer = {null}>
        
        <Form layout="vertical">
          <Form.Item label="Tên">
            <Input placeholder="Nhập tên" />
          </Form.Item>
          <Form.Item label="Email">
            <Input type="email" placeholder="Nhập email" />
          </Form.Item>
          <Form.Item label="Mật khẩu">
            <Input type="password" placeholder="Nhập mật khẩu" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm User
          </Button>
        </Form>
      </Modal>
    </>
  ) 
}


  function DemoTable () {
    const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Action",
    render: () => (
      <>
        <button>Edit</button> 
        <button>Delete</button>
      </>
    ),
  },
];

const data = [
  {
    key: 1,
    id: 1,
    name: "John",
    age: 25,
  },
  {
    key: 2,
    id: 2,
    name: "Anna",
    age: 30,
  },
  {
    key: 3,
    id: 3,
    name: "David",
    age: 28,
  },
];

  return <Table columns={columns} dataSource={data}  />;
  }

  function StudentList() {
  const students = [
    { id: 1, name: "Nam", age: 20, major: "IT" },
    { id: 2, name: "Linh", age: 21, major: "Business" },
    { id: 3, name: "Hà", age: 19, major: "Design" },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Danh sách sinh viên
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                Age
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                Major
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{student.id}</td>
                <td className="px-4 py-3">{student.name}</td>
                <td className="px-4 py-3">{student.age}</td>
                <td className="px-4 py-3">{student.major}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1500, category: "Electronics" },
    { id: 2, name: "Phone", price: 800, category: "Electronics" },
    { id: 3, name: "Shoes", price: 120, category: "Fashion" },
    { id: 4, name: "Watch", price: 200, category: "Accessories" },
    { id: 5, name: "Backpack", price: 90, category: "Fashion" },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Danh sách sản phẩm
      </h2>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Product Name</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Category</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-3">{product.id}</td>
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">${product.price}</td>
                <td className="px-4 py-3">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-6 gap-3">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}


function UserManagement() {
  const users = [
    { id: 1, name: "Nam", email: "nam@gmail.com", status: "active" },
    { id: 2, name: "Linh", email: "linh@gmail.com", status: "inactive" },
    { id: 3, name: "Hà", email: "ha@gmail.com", status: "active" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        User Management
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-4 py-3 text-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;


