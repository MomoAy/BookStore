import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import axios from "axios";

import BackButton from "../Components/back_button";
import Spinner from "../Components/spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book deleted", { variant: 'success' });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        enqueueSnackbar("Book not deleted", { variant: 'error' });
        //alert("An error happened. Please try againPlease check the console");
      });
  }
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You sure You want te delete this Book ?</h3>
        <button className="bg-red-600 p-4 text-white m-8 w-full" onClick={handleDeleteBook}>Yes! Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook;
