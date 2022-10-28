
const {faker} =  require('@faker-js/faker')

const generateProfile = ()=>{
    const profile = {
        name:faker.name.fullName(),
        job:faker.name.jobTitle(),
        img:faker.image.avatar()
        //slug:slugigy(faker.lorem.words(6).toLowerCase()),
    }
    //test
    //console.log(post)

    return profile
}

module.exports={
    generateProfile
}
