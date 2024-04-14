export default function modal(){
    const d = document;

    d.addEventListener("click", e=>{
        if(e.target.matches(".carrousel__button")){
            let id = e.target.parentNode.parentNode.id;
            let img = e.target.parentNode.parentNode.querySelector("img").src.replace("http://127.0.0.1:5500", ".");
            let header = d.querySelector(`#${id}`).querySelector("h4").textContent;
            let text = d.querySelector(`#${id}`).querySelector("p").textContent;
            let modal = d.querySelector(".modal-service");

            let modalImg = modal.querySelector("img"),
                modalHeader = modal.querySelector("h5"),
                modalText = modal.querySelector("p"),
                TextDefault = "Including infertility, erectile dysfunction, adrenal fatigue, insomnia, low libido, weight gain, PCOS, PMS, menopauase, hot flashes & night sweats. we help bring balance to men’s women;’s hormonal systems, including the thyroid & adrenal health, using advanved testint and biodentical replacement";
            
            modalImg.src = img;
            modalHeader.innerHTML= header;
            if(id == "carrousel_1" || id == "carrousel_4"){
                modalText.innerHTML = TextDefault
            } else {
                modalText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a finibus magna, ac scelerisque nibh. Donec ornare convallis ante ut pulvinar. Integer et aliquet ante, nec elementum nisl. Donec varius egestas augue, aliquet maximus diam finibus nec. Sed bibendum nec metus eget condimentum. Nulla cursus metus augue, in scelerisque massa tincidunt et. Praesent vel massa justo.";
            }

            modal.classList.remove("hidden");
        }
        
    });

    d.addEventListener("click", e=>{
        if(e.target.matches(".bi")){
            let modal = d.querySelector(".modal-service");
            modal.classList.add("hidden")
        }
        // 
        // let closeButton = d.querySelector("bi");
        // 
    })
}