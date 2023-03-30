const mongoose = require("mongoose");
const User = require("./User");
mongoose.set("strictQuery", true); // to suppress the warning //So, if you want to have strict schemas and store in the database only what is specified in you model, starting with Mongoose v7, you will have to set strict option to true manually.
mongoose
    .connect("mongodb://0.0.0.0/testdb")
    .then(() => console.log("Connected"))
    .catch((e) => console.log("Mohd Error" + e));

run();
async function run() {
    // console.log(await User.count());

    try {
        // const user = await User.findOne({ name: "Kyle", email: "test@test.com" });
        // // console.log(user);
        // await user.save()
        // console.log(user);
        // console.log(user.namedEmail); 
        // user.sayHi()
        // .where("age")
        //     .gt(12)
        //     .populate("bestFriend")
        //     .limit(1);
        //     .where("name")
        //     .equals("Kyle")
        //     .populate("bestFriend")
        //     .limit(1);
        //

        // user[0].bestFriend = "63fa17518d4f8c446d2c188e";
        // await user[0].save();
        //mongoose implemented something good as .find() in MongoDB is kinda confusing like i can find make my own query based nuch of  really nice helper methods

        const user = await User.create({
            name: "Mohamed", 
            age: 26,
            createdAt: 23 - 02 - 02,
            email: "TEST@gmail.com",
            hobbies: ["Weight Lifting", "Bowling"],
            address: {
                street: "Main St",
            },
        });

        // user.createdAt = 5; 
        // await user.save();
        
        console.log(user);
    } catch (error) {
        console.error(error.message);
    }

    // console.log(user)
    // user.name = "Sally"
    // await user.save()
    //   const user = new User({ name: "Kyle", age: 26 });
    //   await user.save();
}
