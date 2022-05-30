function nome(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla == 8) return true;
  patron = /[a-zñA-ZÑ ]/;
  te = String.fromCharCode(tecla);
  return patron.test(te);
}

function email(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/) return true;
  te = String.fromCharCode(tecla);
  return te.test(te);
}

const card = document.getElementById('projetoInfo')
function getApiGitHub() {
  fetch('https://api.github.com/users/jekeande/repos')
    .then(async res => {

      if (!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()
 
      data.map(item => {

        let div = document.createElement('div')
        div.classList.add('projeto')

        div.innerHTML = `
          <div class="projetoInfos">
            <h3 class="projetoh3">${item.name.toUpperCase()}</h3>
            <p class="projetoDes">Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
            </p> 
            <div class="projetoButton">
              <a href="${item.html_url}">REPOSITORIO</a>  
              <a href="#">DEMO</a>                       
            </div>
          </div>
      `
        card.appendChild(div)

      })

    }).catch(e => console.log(e))
}

getApiGitHub() 
