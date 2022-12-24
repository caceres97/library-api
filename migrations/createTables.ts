import { User } from "../src/models/user.model";
import { Author } from "../src/models/author.model";
import { Genre } from "../src/models/genre.model";
import { Copy } from "../src/models/copy.model";
import { Book } from "../src/models/book.model";
import { Rental } from "../src/models/rent.model";
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