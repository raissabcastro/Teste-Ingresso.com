document.addEventListener('DOMContentLoaded', carrega_script);

function carrega_script(){

    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')
    const title = document.getElementById('titulo')
    const originalTitle = document.getElementById('tituloOriginal')
    const synopsis = document.getElementById('synopsis')
    const contentRating = document.getElementById('contentRating')
    const ratingDescriptors = document.getElementById('ratingDescriptors')
    const director = document.getElementById('director')
    const cast = document.getElementById('cast')
    const PosterPortrait = document.getElementById('PosterPortrait')
    const filme0 = document.getElementById('filme0')
    const filme1 = document.getElementById('filme1')
    const filme2 = document.getElementById('filme2')
    const filme3 = document.getElementById('filme3')
    


    openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
    })

    overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
    })

    closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
    })

    function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    }

    function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    }

    let counter = 0

    fetch ("a.json")
        .then(function(response) {
            response.json()
            
            .then(function(data) {
                
                data[0]["events"].forEach(function (d,i){
                    if (data[0]["events"][i]["id"] == "24217"){
                        title.innerHTML = '<h1 id="titulo">'+data[0]["events"][i]["title"]+'</h1>'
                        originalTitle.innerHTML = '<p class="text-body-translate" id="tituloOriginal">'+data[0]["events"][i]["originalTitle"]+'</p>'
                        synopsis.innerHTML = '<div class="sinopse" id="synopsis">'+data[0]["events"][i]["synopsis"]+'</div>'
                        contentRating.innerHTML = '<p id="contentRating">'+data[0]["events"][i]["contentRating"]+'</p>'
                        ratingDescriptors.innerHTML = '<p id="ratingDescriptors">'+data[0]["events"][i]["ratingDescriptors"]+'</p>'
                        director.innerHTML = '<p id="director"><strong>Diretor: </strong>'+data[0]["events"][i]["director"]+'</p>'
                        cast.innerHTML = '<p id="cast"><strong>Elenco:</strong>'+data[0]["events"][i]["cast"]+'</p>'
                        data[0]["events"][i]["images"].forEach(function(dd,ii){
                            if(data[0]["events"][i]["images"][ii]["type"]=="PosterPortrait"){
                                PosterPortrait.innerHTML = '<img id="PosterPortrait" src="'+data[0]["events"][i]["images"][ii]["url"]+'" alt="">'  
                            }                                
                        })
    
                        /*console.log(data[0]["events"][i]["title"]);*/
                  
                    }

                    else {
                        switch (counter) {
                            case 0:
                                filme0.innerHTML = '<div class="filme" id="filme0"><a class="watch" href="https://ingresso-a.akamaihd.net/img/cinema/cartaz/23800-cartaz.jpg"><img src="" alt=""></a><p>'+data[0]["events"][i]["title"]+'</p></div>'
                                counter = counter + 1
                                break

                            case 1:
                                filme1.innerHTML = '<div class="filme" id="filme1"><a class="watch" href="https://ingresso-a.akamaihd.net/img/cinema/cartaz/24140-cartaz.jpg"><img src="" alt=""></a><p>'+data[0]["events"][i]["title"]+'</p></div>'
                                counter = counter + 1
                                break

                            case 2:
                                filme2.innerHTML = '<div class="filme" id="filme2"><a class="watch" href="https://ingresso-a.akamaihd.net/img/cinema/cartaz/24099-cartaz.jpg"><img src="" alt=""></a><p>'+data[0]["events"][i]["title"]+'</p></div>'
                                counter = counter + 1
                                break

                             case 3:
                                filme3.innerHTML = '<div class="filme" id="filme3"><a class="watch" href="https://ingresso-a.akamaihd.net/img/cinema/cartaz/21495-cartaz.jpg"><img src="" alt=""></a><p>'+data[0]["events"][i]["title"]+'</p></div>'
                                counter = counter + 1
                                break

                        }

                    }

                })
                
            });
        })
        .catch(function(err) {
            console.error('Failed retrieving information', err);
        });



}