let API = "http://localhost:3000/data"
import { get } from "./dom.js";
import {edit_inp1, edit_inp2, edit_inp3, edit_inp4, edit_inp5, edit_inp6 } from "./dom.js";


async function getData() {
    try {
        const { data } = await axios.get(API);
        get(data)
    }
    catch (error) {
        console.log(error)
    }
}

//delete
async function deleteUser(id) {
    try {
        const { data } = await axios.delete(`${API}/${id}`);
        getData()
    }
    catch (error) {
        console.log(error)
    }
}

//add
async function addUser (user) {
    try {
        const { data } = await axios.post(`${API}`, user);
        
        getData();
    }
    catch (error) {
        console.log(error)
    }
}

//edit 
async function editUser(id) {
    try {
        const { data } = await axios.put(`${API}/${id}`, {
            img: edit_inp1.value,
            name: edit_inp2.value,
            email: edit_inp3.value,
            city: edit_inp4.value,
            status: edit_inp5.value,
            phone: edit_inp6.value,
            point3: " ",
            iscomplete: false,
        });
     
        getData();
    }
    catch (error) {
        console.log(error)
    }
}

//search
async function searchUser(id) {
    try {
      const { data } = await axios.get(`${API}?id=${id}`);
      get(data);

    } catch (error) {
      console.error(error);
    }
}


export { getData, deleteUser, addUser, editUser, searchUser }