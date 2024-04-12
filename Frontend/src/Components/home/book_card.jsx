import PropTypes from "prop-types";

import BookSingleCard from "./book_single_card";

const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        books.map((item) => (
          <BookSingleCard book={item} key={item._id} />
        ))
      }
    </div>
  )
}

BookCard.propTypes = {
  books: PropTypes.func
}

export default BookCard;
