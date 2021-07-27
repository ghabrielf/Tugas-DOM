function formSubmit(){
    let username = document.getElementById("unameInput").value;
    let password = document.getElementById("passwdInput").value;

    if (username == "" || password == ""){
        alert("Jangan anda form yang kosong!");
    } else {
        cek = confirm("Apakah datanya sudah benar?")
        if (cek == true ){
        alert("Anda Telah Berhasil  Login");
        window.open("index3.html", "_self");
        return false;
        } else {
            alert("Login Sudah dibatalkan");
        }
    }
   
}

const tombol = document.getElementById("btn");
tombol.addEventListener("click", formSubmit)


