console.log("Harsh")

let a = prompt("Enter First Number")

let b = prompt("Enter Second Number")

if(isNaN(a) || isNaN(b)){
    throw syntaxerror=("Sorry this is not allowed")
}

let c =parseInt(a) + parseInt(b)  //parseInt convert string into integer ..//

let x=2; 
function main(){   
    try {
        console.log("This sum is ", c*x)
        return true
        
        
    } catch (error) {
        console.log("sorry error aagaya bhai")
        return false;
    }
    finally{
        console.log("files are benig close and also connection are closed ")
    }
}

let k =main()