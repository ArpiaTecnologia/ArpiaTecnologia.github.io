function telefone(){
    var telefone = document.querySelector(".telefone").value;
    var html = '<a href="tel:'+telefone+'"><img src="https://i.pinimg.com/564x/f7/3c/f4/f73cf43f611ba760c95b7e008dfbff1b.jpg">';           
    document.querySelector(".imagemTelefone").innerHTML = html;
 }
 function email(){
    var email = document.querySelector(".email").value;
    var html = '<a href="mailto:'+email+'"><img alt="" src="https://i.pinimg.com/564x/e2/34/76/e234761c296d5bb63f96dfc35c3637ae.jpg"></a>';           
    document.querySelector(".imagemEmail").innerHTML = html;
 }
 function instagram(){
    var instagram = document.querySelector(".instagram").value;
    var html = '<a href="'+instagram+'"><img alt="" src="https://i.pinimg.com/564x/57/20/bc/5720bcf18f1457bf467b893dc14eefd8.jpg"></a>';           
    document.querySelector(".imagemInstagram").innerHTML = html;
 }
 function site(){
    var site = document.querySelector(".site").value;
    var html = '<a href="'+site+'"><img alt="" src="https://i.pinimg.com/564x/f7/11/35/f71135be0eca4e7b215ea25dad70e30e.jpg"></a>';           
    document.querySelector(".imagemSite").innerHTML = html;
 }
 function whats(){
    var whats = document.querySelector(".whats").value;
    var html = '<a href="https://api.whatsapp.com/send?phone=+55'+whats+'"><img alt="" src="https://i.pinimg.com/564x/3b/dc/6c/3bdc6ceafc4f134dc018eceb046f2c2a.jpg"/></a>';           
    document.querySelector(".imagemWhats").innerHTML = html;
 }