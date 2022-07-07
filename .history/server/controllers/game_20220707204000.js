export async function game1(req,res){
    console.log("game");
    const {score,email} = req.body;
    console.log(score,email);

}