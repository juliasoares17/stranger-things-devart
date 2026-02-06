gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

//SCROLL SUAVE

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

function animarPagina() {
    //HERO

    gsap.from(".hero", {
        opacity: 0,
        duration: 1
    })

    gsap.from("picture:nth-child(2)", {
        y: 50,
        duration: 1.85
    })

    gsap.from("picture:nth-child(1)", {
        y: -50,
        duration: 1.85
    })

    //CARDS

    gsap.from(".card", {
        opacity: 0,
        filter: "blur(5px)",
        y: 30,
        stagger: .3,
        scrollTrigger: {
            trigger: ".cards_cidades",
            scrub: 2,
            start: "0% 87%",
            end: "100% 70%"
        }
    })

    gsap.from(".secao_obrigado ul li", {
        opacity: 0,
        filter: "blur(5px)",
        x: 40,
        stagger: .09,
        scrollTrigger: {
            trigger: ".secao_obrigado ul",
            start: "0% 87%",
            end: "100% 50%",
            scrub: 2
        }
    })

    //FOOTER

    ScrollTrigger.refresh()

    gsap.from("footer", {
        y: "-30%",
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            scrub: true,
            invalidateOnRefresh: true,
            end: "100% 100%",
        }
    })

    //LETRAS SURGINDO

    const grupo_textos = document.querySelectorAll(".texto_animado")

    grupo_textos.forEach(texto => {
        const textoAnimado = SplitText.create(texto, {
            type: "lines, words, chars", 
            mask: "lines"
        })

        gsap.from(textoAnimado.chars, {
            y: 40,
            opacity: 0,
            duration: .3,
            stagger: .035,
            scrollTrigger: {
                trigger: texto
            }
        })
    })

}

//PRELOADER

const tl = gsap.timeline({
    onComplete(){
        animarPagina()
        gsap.to("#pre_loader", {
            opacity: 0,
            display: "none"
        })
    }
});

tl.to("#pre_loader path", {
    strokeDashoffset: 0,
    duration: 1.5
})

tl.to("#pre_loader path", {
    fill: "rgb(168, 19, 19)",
    duration: .6
})

