import { useState } from "react";

const AddBookForm = () => {
  const [bookForm, setBookForm] = useState({
    title: '',
    author: '',
    sypnosis: '',
  });

  // This 2 values are for file submits (pdf files and images)
  const pdf_file = '';
  const book_cover = '';


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setBookForm({
      ...bookForm,
      [name]: value
    });
  }

  return (
    <form action="">
      <input type="text" name="title" onChange={handleChange} value={bookForm.title} />
      <input type="text" name="author" onChange={handleChange} value={bookForm.author} />
      <input type="text" name="sypnosis" onChange={handleChange} value={bookForm.sypnosis} />
      <input type="file" name="pdf_file" />
      <input type="file" name="book_cover" />
    </form>
  );
};

export default AddBookForm;