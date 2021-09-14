import logo from "./logo.svg";
import "./App.css";
// https://www.youtube.com/watch?v=5llXA0RTYIU&t=591s
const blogs = [
  {
    id: 1,
    title: "John Doe",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagejpegbase649j4AAQSkZJRgABAQAAAQABAAD2wBDAA-2b49722eb7658f7abb75f33e3a7b80ee.jpg"
  },
  {
    id: 2,
    title: "Victor Wayne",
    image:
      "https://vivreabruxelles.be/wp-content/uploads/2018/09/salle-de-cinema-e1538399417447.jpg"
  },
  {
    id: 3,
    title: "Jane Doe",
    image: "https://web.umons.ac.be/app/uploads/2021/02/sport-1.jpg"
  }
];

export default function App() {
  return (
    <div className="App">
      {blogs.map(blog => (
        <div className="AppItem">
          <h1>{blog.title}</h1>
          <h1>{blog.id}</h1>
          <span> or </span>
          {`${blog.title} ${blog.id}`}
          <img src={blog.image} alt="" />
        </div>
      ))}
    </div>
  );
}
