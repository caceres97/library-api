import { User } from "./../models/user.model";
import { Author } from "./../models/author.model";
import { Genre } from "./../models/genre.model";
import { Copy } from "./../models/copy.model";
import { Book } from "./../models/book.model";
import { Rental } from "./../models/rent.model";
//If I need another table we can import and put it in the up()

class MigrateTables {
    up = async () => {
        try {

            await User.sync();
            await Genre.sync();
            await Author.sync();
            await Book.sync();
            await Copy.sync();
            await Rental.sync();
            //We can add more models to import here.

            console.log("Tables migrated")
        } catch (error) {
            console.log({ error });
        }
    }
}

const migrateTables = new MigrateTables();
migrateTables.up();