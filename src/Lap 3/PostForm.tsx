import { useState } from "react";

function PostForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    slug: "",
    content: "",
    image: "",
  });

  const [post, setPost] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPost(form);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow rounded-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Thêm bài viết</h2>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        />

        {/* Category */}
        <select
          name="category"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        >
          <option value="">Chọn Category</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="UI/UX">UI/UX</option>
        </select>

        {/* Slug */}
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Content"
          className="w-full border px-3 py-2 rounded"
          rows={4}
          onChange={handleChange}
        />

        {/* Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border px-3 py-2 rounded"
          onChange={handleChange}
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Hiển thị dữ liệu */}
      {post && (
        <div className="mt-8 p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-sm text-gray-500 mb-2">
            Category: {post.category}
          </p>
          <p className="mb-2">Slug: {post.slug}</p>
          <p className="mb-2">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt="post"
              className="mt-3 rounded"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default PostForm;