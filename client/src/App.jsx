import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Categories } from "../pages/categories";

export default function App() {
  const [input, setInput] = useState("");

  const [form, setForm] = useState({
    location: "",
    destination: "",
    notes: "",
  });
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Categories />} />
        </Routes>
        <form>
          <label>
            Your Name:
            <input
              name="location"
              type="text"
              onChange={handleChange}
              id="01"
            />
          </label>
          <label>
            Today's date:
            <input
              name="destination"
              type="text"
              onChange={handleChange}
              id="02"
            />
          </label>
          <label>
            Your Post:
            <input name="notes" type="text" onChange={handleChange} id="03" />
          </label>
        </form>

        <div>
          <Link className="linkTags" to="/">
            Categories
          </Link>
          <Link className="linkTags">Posts</Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
