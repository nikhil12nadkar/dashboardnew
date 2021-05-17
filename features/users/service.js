var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'creativeTim',
        password: 'creativeTim',
        database: 'creativeTim'
    }
  });

async function  getAllUsers(){
    const result = await knex.select('id','name','email','status').from('users')
    return result;
}

async function getSpecificUser(userId){
    const result=await knex.select('id','name','email').from('users').where('id',userId);
    return result;
}

async function updateUserIN( name, email, id ){
    const [result]=await knex('users').update({
        name,
        email,
        updated_at: new Date(),
    }).where({id}).returning(['email', 'name']);
    console.log(result);
    return result;
}
async function changeStatus(id){
    const [temp]=await knex.select('status').from('users').where('id',id);
    // console.log(temp.status==0);
    const status=temp.status==0?1:0;
    const [result]=await knex.update({
        status:status,
        updated_at: new Date(),
    }).from('users').where('id',id).returning(['email', 'name','status']);
    // console.log(result);
    return result;
}
module.exports={
    getAllUsers,
    getSpecificUser,
    updateUserIN,
    changeStatus
}