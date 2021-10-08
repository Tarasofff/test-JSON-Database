class UserDto {
    constructor(user) {
        this.id = user.id
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.email = user.email
        this.username = user.username
        this.avatar = user.avatar
    }
}

module.exports = UserDto;