class Datay {
    constructor(eingaben, btn, ausgaben) {
        this.eingaben = document.querySelector(eingaben);
        this.btn = document.querySelector(btn);
        this.ausgaben = document.querySelector(ausgaben);
        this.btn.addEventListener("click", this.user.bind(this));
    }


    async user(username) {
        let mek = this.eingaben.value;
        let response = await fetch(`https://api.github.com/users/${mek}/repos`);
        let data = await response.json();
        console.log(data)
        for (var i = 0; i < data.length; i++) {
         var or = data[i].created_at;
         var day = new Date(or);
         var tag = day.getDate();
         var mon = day.getMonth();
         var year = day.getFullYear();
         if(data[i].description == null){
            data[i].description = ""
         }
         var odin;
         
         if(i % 2 == 0 ){
            odin = "text-left";

         }else if(i % 2 == 1){
            odin = "text-right";
         }

          var verch  = `
            <a href="${data[i].html_url}" class="text-reset">
                <div class="col bg-light ${odin} mt-5 pt-3">
                  <p class="text-dark">${data[i].name}</p>
                  <p class="text-dark">${data[i].description}</p>
                  <p class="text-dark">${tag + ":" + mon + ":" + year}</p>
            
                </div>
                </a>
               
               `
               this.ausgaben.insertAdjacentHTML("beforeend", verch);

        }







    }
    
    
   

}
new Datay("#input","#button", ".row1");