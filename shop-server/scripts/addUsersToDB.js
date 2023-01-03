import {createUser} from "../modules/users/userService";
import {USER_STATUS_PREMIUM, USER_STATUS_REGULAR} from "../modules/users/constants";
import connectToDb, {closeDBConnection} from "../config/mongoose";

async function addUsersToDB() {
    await connectToDb();

    await createUser({
        userData: {
            name: "Ionut",
            userType: USER_STATUS_REGULAR
        }
    })

    await createUser({
        userData:{
            name: "George",
            userType: USER_STATUS_PREMIUM
        }
    })

    await closeDBConnection();
}

addUsersToDB()
    .then(() => {
        console.log('migration script executed')
    })
    .catch((err) => {
        console.log('migration script error:', err)
    })

