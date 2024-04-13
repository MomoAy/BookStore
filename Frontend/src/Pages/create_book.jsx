import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";
import { useState } from "react";
import axios from 'axios';

import BackButton from "../Components/back_button";
import Spinner from "../Components/spinner";

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book saved', { variant: 'success' });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        //alert("An error happened. Please try againPlease check the console");
        enqueueSnackbar('Book didn\'t save', { variant: 'error' });
        console.log(err);
      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 py-2 w-full' />
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 py-2 w-full' />
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>publish Year</label>
          <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-gray-500 py-2 w-full' />
        </div>
        <button className="p-2 bg-sky-800 m-8" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook
