import { Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IStoryInput {
  id: number;
  title: string;
  createdAt: string;
}

function StoryList() {
  const { data: stories = [], isLoading } = useQuery<IStoryInput[]>({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3001/stories");
      return res.data;
    },
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        new Date(date).toLocaleDateString("vi-VN"),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Danh sách truyện
      </h2>

      <Table
        columns={columns}
        dataSource={stories}
        rowKey="id"
        loading={isLoading}
      />
    </div>
  );
}

export default StoryList;