const BookModal = () => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}>
      <div className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative" >

      </div>
    </div>
  )
}

export default BookModal;
