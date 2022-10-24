
const {faker} =  require('@faker-js/faker')

const generateProfile = ()=>{
    const profile = {
        name:faker.lorem.words(6),
        description:faker.lorem.sentence(12),
        img:faker.image.avatar()
        //slug:slugigy(faker.lorem.words(6).toLowerCase()),
    }
    //test
    //console.log(post)
    console.log('------------------------------');
    return profile
}

module.exports={
    generateProfile
}
