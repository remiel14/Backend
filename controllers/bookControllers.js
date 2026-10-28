import * as bookService from '../services/bookService.js';

export const fetchAllBooks = async (req, res) =>{
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
}

export const editBook = async (req, res) =>{
    const {name, author} = req.body;
    const { id } = req.params;
    const book = {id: perseInt(id), name, author};

    try {
        const updatedBook = await bookService.updatedBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
              
        });


    }
}