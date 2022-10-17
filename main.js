const affichage= document.querySelector(".base")


function calcul(a,b,c){

    switch (a){
        case a==="7":
            return a=7
        case a==="8":
            return a=8
        case a==="9":
            return a=9
        case a==="6":
            return a=6
        case a==="5":
            return a=5
        case a==="4":
            return a=4
        case a==="3":
            return a=3
        case a==="2":
            return a=2
        case a==="1":
            return a=1
    }

    switch (b){
        case b==="7":
            return b=7
        case b==="8":
            return b=8
        case b==="9":
            return b=9
        case b==="6":
            return b=6
        case b==="5":
            return b=5
        case b==="4":
            return b=4
        case b==="3":
            return b=3
        case b==="2":
            return b=2
        case b==="1":
            return b=1

    }

    if(c==="x"){
        c=a*b}
    if (c==="/"){
        c=a/b
    }
    if (c==="+"){
        c=a+b
    }
    if (c==="-"){
        c=a-b
    }

    console.log(a)
    console.log(b)
    console.log(c)

affichage.innerHTML=c

}


calcul(document.getElementById("7").textContent,document.getElementById("4").textContent,document.getElementById("-").textContent)