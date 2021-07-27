function myFunction(type){
    var txt;
    var nama1 = document.getElementById("name").value
    
      if(confirm("Apakah anda setuju pembelian nya?")){
        txt = "Terima kasih " +nama1+ " telah membeli tiket konser " + type ;
      }else{
          txt = "Anda telah membatalkan pembelian"
      }
      alert(txt);
   
  }