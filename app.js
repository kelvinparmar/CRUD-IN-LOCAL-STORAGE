function validateForm(){
    var Name =document.getElementById('name').value
    var Age =document.getElementById('age').value
    var Email =document.getElementById('email').value
    var Contact =document.getElementById('contact').value

    if(Name ==""){
        alert("Please Enter Your Name")
        return false
    }if(Age == "" || Age<0){
        alert("Please Enter Vald Age")
        return false
    }if(Email == "" || !Email.includes('@')){
        alert("Please Enter Valid Email")
        return false
    }
    if(Contact == "" || Contact.length>10 || Contact.length<10){
        alert("Please Enter valid Contact Number")
        return false
    }
    return true

}




document.onload = showData()

function AddData(){
    if(validateForm() == true){
        var Name =document.getElementById('name').value
        var Age =document.getElementById('age').value
        var Email =document.getElementById('email').value
        var Contact =document.getElementById('contact').value
    
        var people
        if(localStorage.getItem("people") == null){
            people=[]
        }else{
            people = JSON.parse(localStorage.getItem('people'))
        }

        people.push({
            name: Name,
            age : Age,
            email:Email,
            contact:Contact
        })
    
        localStorage.setItem('people', JSON.stringify(people))
        showData()
        // document.getElementById('Name').value = ""
        // document.getElementById('Age').value = ""
        // document.getElementById('Emial').value =""
        // document.getElementById('contact').value = ""
        location.reload();
    } 
}

function showData(){
    var people
    if(localStorage.getItem("people") == null){
        people = []
    }else{
        people = JSON.parse(localStorage.getItem("people"))
    }

    var data = ""
    people.forEach(function(element ,index){
        data+= "<tr>"
        data+= "<td>"+element.name+"</td>"
        data+= "<td>"+element.age+"</td>"
        data+= "<td>"+element.email+"</td>"
        data+= "<td>"+element.contact+"</td>"
        data+= '<td><button  class="btn btn-info" onclick="editData('+index+')" >Edit</button><button class="btn btn-warning" onclick="deleteData('+index+')">Delete</button></td>'
        data+='</tr>'
    });
    document.querySelector("#datatable tbody").innerHTML = data
}

function editData(index){
    
    

   
    var people
    if(localStorage.getItem("people") == null){
        people = []
    }else{
        people = JSON.parse(localStorage.getItem("people"))
    }

    document.getElementById('name').value = people[index].name
    document.getElementById('age').value = people[index].age
    document.getElementById('email').value = people[index].email
    document.getElementById('contact').value = people[index].contact

    document.getElementById('edit').onclick = function(){
        if(validateForm() == true){
            people[index].name = document.getElementById('name').value
            people[index].age = document.getElementById('age').value
            people[index].email = document.getElementById('email').value
            people[index].contact = document.getElementById('contact').value

            localStorage.setItem('people', JSON.stringify(people))

            showData()

            location.reload();

            document.getElementById('submit').style.display = "block"
            document.getElementById('edit').style.display = 'none'

        }
    }

}

function deleteData(index){
    var people
    if(localStorage.getItem("people") == null){
        people = []
    }else{
        people = JSON.parse(localStorage.getItem("people"))
    }


    people.splice(index,1)
    localStorage.setItem('people', JSON.stringify(people))
    showData()
}
