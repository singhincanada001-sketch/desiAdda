const recipes = {
    chicken: {
        title: " Chicken Kadai",
        recipe: `
        ✔ Marinate chicken with yogurt, ginger-garlic paste, turmeric, and salt for 30 mins<br>
        ✔ Heat oil in a pan, sauté onions until golden brown<br>
        ✔ Add tomatoes, chili powder, coriander powder, and garam masala; cook until oil separates<br>
        ✔ Add marinated chicken, cook on medium heat until chicken is tender<br>
        ✔ Add water or cream for desired gravy consistency, simmer 10–15 mins<br>
        ✔ Garnish with fresh coriander leaves and serve hot with roti or rice

        `,
        blinkit: "https://blinkit.com/s/?q=chicken",
        video: "https://www.youtube.com/embed/01hBjAROSs0?autoplay=1&mute=1"

    },

    paneer: {
        title: "Paneer Butter Masala",
        recipe: `
       ✔ Cut paneer into cubes and lightly fry until golden<br>
        ✔ Heat butter in a pan, sauté finely chopped onions until translucent<br>
        ✔ Add ginger-garlic paste and cook for 1-2 mins<br>
        ✔ Add pureed tomatoes, chili powder, turmeric, coriander powder, and garam masala; cook until oil separates<br>
        ✔ Add fried paneer cubes, mix gently, and simmer for 5–7 mins<br>
        ✔ Stir in cream and kasuri methi (dried fenugreek leaves) for rich flavor<br>
        ✔ Garnish with fresh coriander leaves and serve hot with naan or rice

        `,
        blinkit: "https://blinkit.com/s/?q=paneer",
        video: "https://www.youtube.com/embed/J1FDtTNJUDk?autoplay=1&mute=1"
    },

    biryani: {
        title: "Vegetable Biryani",
        recipe: `
        ✔ Wash and soak basmati rice for 30 mins<br>
        ✔ Boil rice with salt until 70% cooked; drain and set aside<br>
        ✔ Sauté chopped onions, ginger, garlic, and green chilies in oil<br>
        ✔ Add mixed vegetables (carrots, beans, peas, potatoes) and cook with biryani masala<br>
        ✔ Layer partially cooked rice over the vegetables<br>
        ✔ Sprinkle saffron milk and fried onions on top<br>
        ✔ Cover tightly and cook on low heat (dum) for 15–20 mins<br>
        ✔ Garnish with fresh coriander and mint leaves, serve hot with raita

        `,
        blinkit: "https://blinkit.com/s/?q=basmati+rice",
         video: "https://www.youtube.com/embed/-eopm4xaNIw?autoplay=1&mute=1"
    },

    rajma: {
        title: "Rajma Chawal",
        recipe: `
        ✔ Soak rajma (kidney beans) overnight<br>
        ✔ Boil rajma with salt until soft; drain and keep the water<br>
        ✔ Sauté chopped onions, ginger, garlic, and green chilies in oil<br>
        ✔ Add tomato puree, turmeric, red chili powder, and salt; cook until oil separates<br>
        ✔ Add boiled rajma along with some of its cooking water; simmer for 15–20 mins<br>
        ✔ Stir in garam masala and cook for another 2–3 mins<br>
        ✔ Garnish with fresh coriander and serve hot with steamed rice
        `,
        blinkit: "https://blinkit.com/s/?q=rajma",
         video: "https://www.youtube.com/embed/PWOPnyMenPY?autoplay=1&mute=1"
    },


    dal: {
        title: "Dal Makhani",
        recipe: `
       ✔ Soak whole urad dal and rajma overnight<br>
        ✔ Boil the soaked dal and rajma with water, salt, and a pinch of turmeric until soft<br>
        ✔ Sauté chopped onions, ginger, garlic, and green chilies in butter or oil<br>
        ✔ Add tomato puree, red chili powder, and cumin; cook until oil separates<br>
        ✔ Add the boiled dal and rajma along with some cooking water; simmer on low heat for 20–25 mins<br>
        ✔ Stir in cream and more butter; cook for another 5 mins<br>
        ✔ Garnish with fresh coriander and a dollop of butter; serve hot with naan or rice
        `,
        blinkit: "https://blinkit.com/s/?q=sabut+urad+dal",
         video: "https://www.youtube.com/embed/_HaAhqHMk20?autoplay=1&mute=1"
    },

    poha: {
        title: "Poha",
        recipe: `
       ✔ Rinse poha (flattened rice) in water and drain; let it soften<br>
        ✔ Heat oil in a pan, add mustard seeds, curry leaves, and green chilies<br>
        ✔ Sauté finely chopped onions until translucent<br>
        ✔ Add turmeric and salt, then mix in the softened poha<br>
        ✔ Toss gently to combine and heat through<br>
        ✔ Garnish with fresh coriander, grated coconut (optional), and a squeeze of lemon<br>
        ✔ Serve hot with sev or peanuts for extra crunch
        `,
        blinkit: "https://blinkit.com/s/?q=poha",
         video: "https://www.youtube.com/embed/jgQYKFvffQ8?autoplay=1&mute=1"
    },

    
    idli: {
        title: "Idli Sambhar",
        recipe: `
       Idli:<br>
        ✔ Soak rice & urad dal for 4–6 hrs, grind into smooth batter, mix, and ferment overnight.<br>
        ✔ Pour batter into greased molds and steam 10–12 mins until fluffy.<br><br>

        Sambar:<br>
        ✔ Cook toor dal until soft.<br>
        ✔ Sauté onions, tomatoes, and spices; add tamarind pulp and cooked dal.<br>
        ✔ Simmer 10 mins, garnish with fresh coriander
        ✔ Serve hot with idlis.
        `,
        blinkit: "https://blinkit.com/s/?q=toor+dal",
         video: "https://www.youtube.com/embed/5BaRaVx4yns?autoplay=1&mute=1"
    },

    pavbhaji: {
        title: "Pav Bhaji",
        recipe: `
     ✔ Boil and mash mixed vegetables (potatoes, carrots, peas, beans, capsicum).<br>
    ✔ Sauté onions, tomatoes, ginger, garlic, and green chilies in butter.<br>
    ✔ Add pav bhaji masala, mashed vegetables, and simmer 10–15 mins.<br>
    ✔ Mash everything together, adjust salt and butter.<br>
    ✔ Serve hot with buttered pav and a sprinkle of coriander.<br>
        `,
        blinkit: "https://blinkit.com/s/?q=pav",
         video: "https://www.youtube.com/embed/ZtuuIcybzt4?autoplay=1&mute=1"
    },

    aloo: {
        title: "Aloo Paratha",
        recipe: `
        ✔ Boil and mash potatoes.<br>
        ✔ Mix mashed potatoes with salt, chili, and coriander.<br>
        ✔ Roll dough into small circles and stuff with potato mixture.<br>
        ✔ Roll gently and flatten into parathas.<br>
        ✔ Cook on a hot tawa with ghee until golden and crisp.<br>
        ✔ Serve hot with butter, yogurt, or pickle.
                `,
        blinkit: "https://blinkit.com/s/?q=potato",
         video: "https://www.youtube.com/embed/0641JXAxv9o?autoplay=1&mute=1"
    },

    gulab: {
        title: "Gulab Jamun",
        recipe: `
        ✔ Crumble 4–5 slices of bread into fine crumbs.<br>
        ✔ Mix bread crumbs with 2–3 tbsp milk and a pinch of cardamom to form a dough.<br>
        ✔ Roll small balls from the dough.<br>
        ✔ Heat ghee or oil and deep fry the balls until golden brown.<br>
        ✔ Prepare sugar syrup by boiling 1 cup sugar with 1 cup water and a few drops of rose water.<br>
        ✔ Soak fried balls in warm sugar syrup for 15–20 mins.<br>
        ✔ Serve warm.
        `,
        blinkit: "https://blinkit.com/s/?q=bread",
         video: "https://www.youtube.com/embed/x11Mp_8SFyE?autoplay=1&mute=1"
    }
    ,

    rabdi: {
        title: "Rabdi",
        recipe: `
        ✔ Boil 1 liter full-fat milk in a heavy pan.<br>
        ✔ Stir continuously and reduce to 1/3 the quantity.<br>
        ✔ Add 4–5 tbsp sugar and 1 tsp cardamom(Elaichi) powder.<br>
        ✔ Mix well and continue to simmer until thick and creamy.<br>
        ✔ Garnish with chopped nuts like almonds and pistachios.<br>
        ✔ Serve chilled or warm.
        `,
        blinkit: "https://blinkit.com/s/?q=gulab%20jamun",
         video: "https://www.youtube.com/embed/A88eV-IQ3vM?autoplay=1&mute=1"
    },

    custard: {
        title: "Custard",
        recipe: `
       ✔ Mix custard powder with a little cold milk to make a smooth paste.<br>
        ✔ Boil the remaining milk with sugar.<br>
        ✔ Add the custard paste to the boiling milk slowly, stirring continuously.<br>
        ✔ Cook on low heat until it thickens.<br>
        ✔ Add vanilla essence and mix well.<br>
        ✔ Serve warm or chilled, optionally with chopped fruits.
        `,
        blinkit: "https://blinkit.com/s/?q=custard",
         video: "https://www.youtube.com/embed/dAY2tFtNDqE?autoplay=1&mute=1"
    }
};

function showRecipe(food) {
    document.getElementById("recipe-title").innerHTML = recipes[food].title;
    document.getElementById("recipe-text").innerHTML = recipes[food].recipe;
    document.getElementById("blinkit-link").href = recipes[food].blinkit;

    // Load video
    document.getElementById("recipe-video").src = recipes[food].video;
     document.body.style.overflow = 'hidden'; 
    document.getElementById("recipe-popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("recipe-popup").classList.add("hidden");

     document.body.style.overflow = 'auto'; 

    // Stop video when popup is closed
    document.getElementById("recipe-video").src = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("page-title");
    let count = 0;
    const maxBounces = 2; // Number of times to bounce

    const bounceInterval = setInterval(() => {
        title.classList.add("bounce");
        setTimeout(() => {
            title.classList.remove("bounce");
        }, 600); // Match animation duration

        count++;
        if (count >= maxBounces) clearInterval(bounceInterval);
    }, 700); // Slightly more than animation duration
});



document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});

