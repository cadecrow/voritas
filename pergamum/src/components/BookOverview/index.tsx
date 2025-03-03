import React from "react";
import Image from "next/image";
import { OverviewBook } from "@/types/Book.types";

const BookOverview = ({ ...props }: { book: OverviewBook, className?: string }) => {
	return (
		<div className={`${props.className}`}>
			{/* <BookDetails /> */}
			<div>
				<h1>{props.book.title ? props.book.title : "Book Title"}</h1>
				<h2>{props.book.author ? props.book.author : "Author"}</h2>
				<h3>{props.book.genre ? props.book.genre : "Genre"}</h3>
				<p>Book Description</p>
			</div>
			{/* <BookActions /> */}
			<div>
				<button>Add To Bag</button>
				<button>Friend Review</button>
			</div>
			{/* <BookVisuals /> */}
			<div>
        {/* img */}
        <Image
          src="/file.svg"
          alt="Book Cover"
          width={200}
          height={300}
        />
      </div>
		</div>
	);
};

export default BookOverview;
