const firstPageHeaderOne = document.querySelector(".about-first-person");

const firstPageHeaderTwo = document.querySelector(".about-second-person");
const contacts = document.querySelector(".contact-form");
const buttons = document.querySelectorAll(".service-button");

if (contacts) {
    const ob = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            const element = entry.target;
            
            intersecting ? element.classList.add("anim1") : element.classList.remove("anim1");
            
        });
    }, {rootMargin: "-50px"});
    
        
        
            ob.observe(contacts);

    
} else if (firstPageHeaderOne && firstPageHeaderTwo)

 {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            const element = entry.target;
            
            intersecting ? element.classList.add("anim") : element.classList.remove("anim");
            
        });
    }, {rootMargin: "-50px"});
    observer.observe(firstPageHeaderTwo);
    observer.observe(firstPageHeaderOne);
    
} else{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            const element = entry.target;
            
            intersecting ? element.classList.add("anim") : element.classList.remove("anim");
            
        });
    }, {rootMargin: "-5px"});
    buttons.forEach(buttons => {
        observer.observe(buttons);
       
    })
    
    
}






    


