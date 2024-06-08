import { v4 as uuidv4 } from 'uuid';

let users=[]

export const getusers = (req, res) => {
    res.send(users);
    
}

export const createuser = (req, res) =>{
    const user = req.body;

     users.push({ ...user, id: uuidv4() });

    res.send(`user with the name ${user.firstname} added to the database!`);

}

export const getuser = (req, res) => {
    const {id} = req.params;
    
    const founduser = users.find((user) => user.id == id);

    res.send(founduser);

}

export const deleteuser = (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);
    
    res.send(`user with the id ${id} deleted from the database.`);
}

export const updateuser = (req, res) => {
    const {id} = req.params;
    const {firstname, lastname, age,} = req.body;
    
    const user = users.find((user) => user.id == id);
    
    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send(`user with the id ${id} has been updated`);
}