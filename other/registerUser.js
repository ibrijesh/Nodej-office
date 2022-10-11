async function registerUser(){

    const user = new User({
        email:'brijeshyadavjthj2@gmail.com',
        name:'Brijesh Yadav',
        mobile:1234567893,
        password:"ronaldo"
    });


    const result = await user.save();
    console.log(result);
}