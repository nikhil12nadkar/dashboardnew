const{changeStatus}=require('../service');

async function updateStatus(req,res){
    const result=await changeStatus(req.params.id)
    res.redirect('/users')
}

module.exports=updateStatus