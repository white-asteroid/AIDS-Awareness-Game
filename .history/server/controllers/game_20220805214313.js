import {User} from "../models/users";

export async function game1Score(req,res){
    console.log("game");
    const {score,email} = req.body;
    console.log(score,req.body);

    const result = await User.findOne({ email: email });
    // console.log(result, result.game1);
    // result.replaceOne({email},{game1:score});
    // result.overwrite({game1:score});
    const sc = Number(score);
    User.findByIdAndUpdate(result._id,{game1:sc},function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated User : ", docs);
        }
    });
    // console.log("iu hello world ",upsc); 
    // await upsc.save();
    // upsc.save();

};

export async function game2Score(req,res){
    console.log("game");
    const {score,email} = req.body;
    console.log(score,email);
    
    const result = await User.findOne({ email: email });
    // console.log(result, result.game2);
    // result.replaceOne({email},{game2:score});
    // result.overwrite({game2:score});
    const sc = Number(score);
    User.findByIdAndUpdate(result._id,{game2:sc},function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated User g2 : ", docs);
        }
    });
    // console.log("iu hello world ",upsc); 
    // await upsc.save();
    // upsc.save();

};
