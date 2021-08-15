const header = Vue.createApp({
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleClass () {
            this.isActive = !this.isActive;
        },
    },
})

header.mount("#header")

const features = Vue.createApp({
    data() {
        return {
            simpleBookmarking: true,
            speedySearching: false,
            easySharing: false,
        }
    },
    methods: {
        toggleTabA() {
            this.simpleBookmarking = true;
            this.speedySearching = false;
            this.easySharing = false
        },
        toggleTabB() {
            this.simpleBookmarking = false;
            this.speedySearching = true;
            this.easySharing = false
        },
        toggleTabC() {
            this.simpleBookmarking = false;
            this.speedySearching = false;
            this.easySharing = true
        }
    },
})

features.mount("#features")

const li = document.querySelectorAll(".info");

li.forEach(l => {
    l.onclick = function () {
        if(l.classList.contains("info")) {
            l.classList.remove("info")    
            l.children[0].style.display = "block"
            l.children[0].style.height = "100%"
        } else {
            l.classList.add("info")    
            l.children[0].style.display = "none"
            l.children[0].style.height = "0"
        }
        
    }
})



