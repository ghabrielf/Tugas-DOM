function formSubmit(){                                                     
    let nama=document.getElementById("namaInput").value;
    let email=document.getElementById("emailInput").value;
    let pesan=document.getElementById("text").value;

    if (nama == "" || email == "" || pesan == ""){
        alert("Tidak boleh ada form yang Kosong!");
    } else {
        alert("Pesan berhasil terkirim,Terimakasih!");
        window.open("index.html", "_self");
        return false;
    }
}
let buttonSubmit = document.getElementById("btn");
buttonSubmit.addEventListener("click", formSubmit)