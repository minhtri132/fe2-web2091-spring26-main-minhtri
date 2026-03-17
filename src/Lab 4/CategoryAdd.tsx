import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { IStoryInput } from "../interfaces/story";
import { useMutation } from "@tanstack/react-query";




const {TextArea} = Input;

function CategoryAdd() {
    const [form] = Form.useForm();


    const mutation = useMutation({
    mutationFn: async (data: IStoryInput) => {
        return axios.post("http://localhost:3000/products", data);
    },
});
   

    const onFinish = async (values: IStoryInput) => {
        mutation.mutate(values);
        console.log(values);
        try {
            const res = await axios.post("http://localhost:3000/products", values);
            if(res.status === 201){
                toast.success("Thêm danh mục thành công");
                form.resetFields();
            }
        } catch (error) {
            console.log(error);
            toast.error("Thêm thất bại");
        }
    };

    return(
        <div className="max-w-xl mx-auto mt-10">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="bg-white p-6 rounded shadow"
      >
        <h2 className="text-xl font-bold mb-4">Thêm danh mục truyện</h2>

        {/* Title */}
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Không được để trống!" }]}
        >
          <Input placeholder="Nhập tiêu đề..." />
        </Form.Item>

        {/* Description */}
        <Form.Item label="Description" name="description">
          <TextArea rows={4} placeholder="Mô tả..." />
        </Form.Item>

        {/* Active */}
        <Form.Item name="active" valuePropName="checked">
          <Checkbox>Active</Checkbox>
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button type="primary"
          disabled={mutation.isPending} 
          htmlType="submit" block
          loading={mutation.isPending}>
            
            Thêm danh mục
            
          </Button>
        </Form.Item>
      </Form>
    </div>
    );
}

export default CategoryAdd;