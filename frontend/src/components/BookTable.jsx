import BookCard from "./BookCard";

const BookTable = ({
  selectedBooks,
  filteredBooks,
  isDarkMode,
  handleSelectAll,
  handleSelectBook,
}) => {

  return (
    <>
      <div className="p-4">
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            checked={
              selectedBooks?.length === filteredBooks?.length &&
              filteredBooks?.length > 0
            }
            onChange={handleSelectAll}
            className="w-4 h-4"
          />
          <span className="text-sm">Select All</span>
        </div>

        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500">No books found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBooks?.map((book) => (
              <BookCard
                key={book?.id}
                book={book}
                isDarkMode={isDarkMode}
                isSelected={selectedBooks?.includes(book?.id)}
                onSelect={handleSelectBook}
              />
            ))}
          </div>
        )}
      </div>


    </>

  );
};

export default BookTable;