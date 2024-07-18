import { useEffect, useState } from "react";
import "./NavBar.css";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="content">
      <Outlet />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Footer</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.title}</td>
              <td>{item.title}</td> {/* Adjust this as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
