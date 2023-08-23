let first_name = document.getElementById("FirstName")
let last_name = document.getElementById("LastName")
let pass = document.getElementById("Password")
let confirm_pass = document.getElementById("ConfirmPassword")

let problem0 = document.getElementById("n0")
let problem1 = document.getElementById("n1")
let problem2 = document.getElementById("n2")
let problem3 = document.getElementById("n3")
let problem4 = document.getElementById("n22")

let a = 0

function IsEmpty(name,idname){
    if (name.value==""){
        idname.innerHTML = "This field shouldn't be empty"
        return false
    }
    
    return true
}

function noNumber(name,idname){
    if (IsEmpty(name,idname)){
        a=[]
        a =name.value.split("")
        b=a.length
        for (let i=0; i<b; i++){
            if (a[i]==0 || a[i]==1 || a[i]==2 || a[i]==3 || a[i]==4 || a[i]==5 || a[i]==6 || a[i]==7 || a[i]==8 ||a[i]==9){
                idname.innerHTML = "This field shouldn't contain any number!"
                return false
            }
        }
        return true
    }
}

function IsPassOkay(name,idname){
    if (IsEmpty(name,idname)){
        a=[]
        a =name.value.split("")
        b=a.length
        if (b<8){
            idname.innerHTML = "The password is short!!"
            return false
        }   
        return true
    }
}
function IsPassOkay2(name,idname){
    if (IsEmpty(name, idname)){
        if( noNumber(name,idname)){
            idname.innerHTML = "The password should contain numbers as well!!"
            return false
        }
        else{
            idname.innerHTML = ""
            return true
        }
    }
    else{
        idname.innerHTML = ""
    }

}
function SyncPass(name1,name2,idname){
    if (IsEmpty(name2,idname)){
        if (name1.value!=name2.value){
            idname.innerHTML = "The passwords are not matching!!"
            return false
        }
        return true
    }
}

function IsEverythingOKay(){
    IsEmpty(first_name,problem0)
    IsEmpty(last_name,problem1)
    IsEmpty(pass,problem2)
    IsEmpty(confirm_pass,problem3)

    noNumber(first_name,problem0)
    noNumber(last_name,problem1)

    IsPassOkay(pass,problem2)
    IsPassOkay2(pass,problem4)

    SyncPass(pass,confirm_pass,problem3)
     
    if(IsEmpty(first_name,problem0) &&
    IsEmpty(last_name,problem1) &&
    IsEmpty(pass,problem2) &&
    IsEmpty(confirm_pass,problem3) &&
    noNumber(first_name,problem0) &&
    noNumber(last_name,problem1) &&
    IsPassOkay(pass,problem2) &&
    IsPassOkay2(pass,problem4) &&
    SyncPass(pass,confirm_pass,problem3)){
        console. log ("fucking gaaawwwd")
        first_name.value = ""
        last_name.value = ""
        pass.value = ""
        confirm_pass.value = ""
        document.getElementById("h").innerHTML = "you signed up successfuly"

    }
    
}