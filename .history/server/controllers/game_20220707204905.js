export async function game1Score(req,res){
    console.log("game");
    const {score,email} = req.body;
    console.log(score,email);

    const result = await User.findOne({ email: email });

}