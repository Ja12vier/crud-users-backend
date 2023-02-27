const catchError = require('../utils/catchError');
const Users = require('../models/Users');

const getAll = catchError(async(req, res) => {
   // Operaciones...
   const users= await Users.findAll()
 return res.json(users)
});

const create= catchError(async(req,res)=>{

  const {firt_name, last_name, emal, password, birthday}=req.body;
  const user= await Users.create(
 
    {firt_name, last_name, emal, password, birthday}
    

  )
  return res.status(201).json(user)
});

const getOne=catchError(async(req,res)=>{
  const {id}=req.params;
  const user=await Users.findByPk(id)
  return res.json(user)
});

const remove= catchError(async(req,res)=>{
  const {id}=req.params;
  
    await Users.destroy({where: {id}}
    )
    return res.sendStatus(204)
});

const update=  catchError(async(req,res)=>{
  const {id}=req.params;
  const {firt_name, last_name, emal, password, birthday}=req.body;
  const user=await Users.update(
    {firt_name, last_name, emal, password, birthday},
    {where : {id}, returning: true}
  )
  return res.json(user[1][0])
})

module.exports = {
getAll,
create,
getOne,
remove,
update
}