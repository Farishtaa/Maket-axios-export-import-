import { deleteUser, addUser, editUser, searchUser } from "./api.js";

// JS code 
let box = document.querySelector(".box")
let search = document.querySelector(".search")
let inp3 = document.querySelector(".inp3")
let btnLight = document.querySelector(".btnLight")
let btnDark = document.querySelector(".btnDark")
// ADD
let addDialog = document.querySelector(".addDialog")
let btnNew = document.querySelector(".btnNew")
let btnSave = document.querySelector(".btnSave")
let btnCancel = document.querySelector(".btnCancel")
let imgX = document.querySelector(".imgX")
let inputImg = document.querySelector(".input_img")
let inputName = document.querySelector(".input_name")
let inputEmail = document.querySelector(".input_email")
let inputCity = document.querySelector(".input_city")
let inputPhone = document.querySelector(".input_phone")
let inputStatus = document.querySelector(".input_status")
//INFO
let infoDialog = document.querySelector(".infoDialog")
let btnInfo = document.querySelector(".info")
let btnEdit = document.querySelector(".edit")
let btnDelete = document.querySelector(".delete")
//PROFILE 
let dialogInfo = document.querySelector(".dialogInfo")
let pr_img = document.querySelector(".img")
let pr_name = document.querySelector(".name")
let pr_email = document.querySelector(".email")
let pr_city = document.querySelector(".city")
let pr_status = document.querySelector(".active")       
let pr_phone = document.querySelector(".phone")
let closeModal = document.querySelector(".Closemodal")  

let pr_gorod = document.querySelector(".pCity")
let pr_active = document.querySelector(".pSta")
let pr_tel = document.querySelector(".pPhon")
let pr_td1 = document.querySelector(".tdA")
let pr_td2 = document.querySelector(".tdB")
let pr_td3 = document.querySelector(".tdC")
//EDIT 
let editDialog = document.querySelector(".editDialog")
let edit_inp1 = document.querySelector(".edit_inp1");
let edit_inp2 = document.querySelector(".edit_inp2");
let edit_inp3 = document.querySelector(".edit_inp3");
let edit_inp4 = document.querySelector(".edit_inp4"); 
let edit_inp5 = document.querySelector(".edit_inp5"); 
let edit_inp6 = document.querySelector(".edit_inp6");
let edit = document.querySelector(".edit_btn")

//ADD code 
btnNew.onclick = () => {
    addDialog.showModal();
}
btnSave.onclick = () => {

    let newObj = {

        id: new Date().getTime(),
        img: inputImg.value,
        name: inputName.value,
        city: inputCity.value,
        email: inputEmail.value,
        status: inputStatus.value,
        phone: inputPhone.value,
        point3: " ",
        iscomplete: false,
    };

    addUser(newObj);
    addDialog.close()
}

btnCancel.onclick = () => {
    addDialog.close()
}

imgX.onclick = () => {
    addDialog.close()
}


//LIGHT DARK code 
btnLight.onclick = () => {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    btnLight.classListz.toggle()
}
btnDark.onclick = () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    btnDark.classListz.toggle()
}





//GET code  
function get (data) 
{
    box.innerHTML = "" 

    data.forEach((item) => {

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.classList.add("td1")
        td1.innerHTML = "<img src='" + item.img + "'>" + item.name + "<br>" + item.email;

        let td2 = document.createElement("td")
        td2.innerHTML = item.city
        td2.classList.add("td2")
        
        let td3 = document.createElement("td")
        td3.classList.add("td2")


        let td4 = document.createElement("td")
        td4.innerHTML = item.phone
        td4.classList.add("td2")

        let td5 = document.createElement("td")
        td5.innerHTML = item.point3
        td5.classList.add("td2")

        let btnPoint = document.createElement("img");
        btnPoint.src = "icons/points.png";

        let btnFortd3 = document.createElement("button")
        btnFortd3.innerHTML = item.status
        btnFortd3.style.background = "grey"
        btnFortd3.style.width = "81px"
        btnFortd3.style.height = "25px"
        btnFortd3.style.color = "#FBFBFB"
        btnFortd3.style.fontSize = "12px"
        btnFortd3.style.fontWeight = "600"
        btnFortd3.style.textTransform = "uppercase"
        btnFortd3.style.border = "none"


        //STATUS ACTIVE/INACTIVE code  
        btnFortd3.onclick = () => {

            if (btnFortd3.innerHTML === "Active") 
            {
                btnFortd3.style.backgroundColor = "#748998";
                btnFortd3.innerHTML = "Inactive";
            } 
            else 
            {
                btnFortd3.style.backgroundColor = "green";
                btnFortd3.innerHTML = "Active";
            }
        };

        //POINT code 
        btnPoint.onclick = () => {
            infoDialog.showModal()

            //INfo code 
            btnInfo.onclick = () => {
                dialogInfo.showModal()

                pr_img.src =  item.img
                pr_name.innerHTML = item.name
                pr_email.innerHTML = item.email
                pr_city.innerHTML = item.city
                pr_status.innerHTML = item.status
                pr_phone.innerHTML = item.phone

                pr_gorod.innerHTML = pr_td1.innerHTML
                pr_active.innerHTML = pr_td2.innerHTML
                pr_tel.innerHTML = pr_td3.innerHTML

                closeModal.onclick = () => {
                    dialogInfo.close()
                }
                infoDialog.close()
            }
            
            btnDelete.onclick = () => {
                deleteUser(item.id)
            } 

            //Edit code 
            btnEdit.onclick = () => {
                editDialog.showModal() 

                edit_inp1.value = item.img 
                edit_inp2.value = item.name
                edit_inp3.value = item.email
                edit_inp4.value = item.city
                edit_inp5.value = item.status
                edit_inp6.value = item.phone

                edit.onclick = () => {
                    editUser(item.id)
                    editDialog.close()
                }
                infoDialog.close()
            }
        }
    
        td3.append(btnFortd3)
        td5.append(btnPoint)
        tr.append(td1,td2,td3,td4,td5)
        box.append(tr)
    });
}


//SEARCH code 
search.onclick = () => {
    searchUser(inp3.value)
};

export { get }
export { edit_inp1, edit_inp2, edit_inp3, edit_inp4, edit_inp5, edit_inp6 } 