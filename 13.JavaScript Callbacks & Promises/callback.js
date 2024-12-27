function getdata(data1,getnextdata){
    setTimeout(()=>{
        console.log("data",data1)
        if(getnextdata){
            getnextdata();
        }
    },2000)
}

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            console.log("end")
        })
    })
})

