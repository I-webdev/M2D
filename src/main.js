const firstPageHeaderOne = document.querySelector(".about-first-person");

const firstPageHeaderTwo = document.querySelector(".about-second-person");
const okayy = document.querySelector(".contact-form");
const butto = document.querySelectorAll(".service-button");

if (okayy) {
    const ob = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            const element = entry.target;
            
            intersecting ? element.classList.add("anim1") : element.classList.remove("anim1");
            
        });
    }, {threshold:1});
    
        
        
            ob.observe(okayy);

    
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
    }, {rootMargin: "-50px"});
    butto.forEach(butto => {
        observer.observe(butto);
       
    })
    
    
}






    


