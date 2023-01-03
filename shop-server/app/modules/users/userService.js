import User from './userModel'


export function createUser({userData}) {
    return User.create(userData)
}

export function findUserById({userId}){
    return User.findById(userId).exec();
}
