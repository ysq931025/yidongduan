var express=require("express");
var router=express.Router();

router.use("/ajax",function(req,res){
    var data=[
        {name:"张三",phone:"13312345678",en:"z"},
        {name:"张三",phone:"13312345678",en:"z"},
        {name:"张三",phone:"13312345678",en:"z"},
        {name:"张三",phone:"13312345678",en:"z"},
        {name:"张三",phone:"13312345678",en:"z"},
        {name:"李四",phone:"13312345678",en:"l"},
        {name:"李四",phone:"13312345678",en:"l"},
        {name:"李四",phone:"13312345678",en:"l"},
        {name:"李四",phone:"13312345678",en:"l"},
        {name:"王五",phone:"13312345678",en:"w"},
        {name:"赵六",phone:"13312345678",en:"z"},
        {name:"赵六",phone:"13312345678",en:"z"},
        {name:"赵六",phone:"13312345678",en:"z"},
        {name:"赵六",phone:"13312345678",en:"z"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"岳八",phone:"13312345678",en:"y"},
        {name:"岳八",phone:"13312345678",en:"y"},
        {name:"岳八",phone:"13312345678",en:"y"},
        {name:"岳八",phone:"13312345678",en:"y"}

    ]
    res.send(JSON.stringify(data));
})

module.exports=router;