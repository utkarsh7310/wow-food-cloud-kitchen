// 1. GSAP Hero Animations
window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    // Text animations
    tl.to("#hero-title", { opacity: 1, x: 0, duration: 1, ease: "power4.out", delay: 0.5 })
      .to("#hero-desc", { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .to("#hero-btns", { opacity: 1, scale: 1, duration: 0.5 }, "-=0.3");

    // Food Image Entry
    gsap.to("#food-img", { 
        opacity: 1, 
        rotate: 360, 
        duration: 1.5, 
        ease: "back.out(1.7)",
        scale: 1.1 
    });

    // Initial Menu Load
    displayMenu(menuItems);
});

// 2. Data - 30+ Dishes
const menuItems = [
    { id: 1, name: "Masala Chai", price: 20, cat: "Drinks", icon: "☕" },
    { id: 2, name: "Sweet Lassi", price: 50, cat: "Drinks", icon: "🥛" },
    { id: 3, name: "Mango Shake", price: 70, cat: "Drinks", icon: "🥭" },
    { id: 4, name: "Nimbu Pani", price: 30, cat: "Drinks", icon: "🍋" },
    { id: 5, name: "Cold Coffee", price: 80, cat: "Drinks", icon: "🧋" },
    { id: 6, name: "Badam Milk", price: 60, cat: "Drinks", icon: "🍶" },
    { id: 7, name: "Paneer Tikka", price: 180, cat: "Starters", icon: "🍢" },
    { id: 8, name: "Veg Samosa (2pc)", price: 30, cat: "Starters", icon: "🥟" },
    { id: 9, name: "Chicken Tikka", price: 220, cat: "Starters", icon: "🍗" },
    { id: 10, name: "Hara Bhara Kabab", price: 150, cat: "Starters", icon: "🟢" },
    { id: 11, name: "Aloo Tikki", price: 60, cat: "Starters", icon: "🥔" },
    { id: 12, name: "Crispy Corn", price: 120, cat: "Starters", icon: "🌽" },
    { id: 13, name: "Veg Pakora", price: 90, cat: "Starters", icon: "🍤" },
    { id: 14, name: "Paneer Butter Masala", price: 250, cat: "Main Course", icon: "🥘" },
    { id: 15, name: "Dal Makhani", price: 210, cat: "Main Course", icon: "🥣" },
    { id: 16, name: "Butter Chicken", price: 350, cat: "Main Course", icon: "🍗" },
    { id: 17, name: "Mix Veg", price: 180, cat: "Main Course", icon: "🥗" },
    { id: 18, name: "Chana Masala", price: 160, cat: "Main Course", icon: "🍲" },
    { id: 19, name: "Mutton Rogan Josh", price: 450, cat: "Main Course", icon: "🍖" },
    { id: 20, name: "Malai Kofta", price: 230, cat: "Main Course", icon: "🟠" },
    { id: 21, name: "Kadai Paneer", price: 240, cat: "Main Course", icon: "🥘" },
    { id: 22, name: "Egg Curry", price: 150, cat: "Main Course", icon: "🥚" },
    { id: 23, name: "Chicken Biryani", price: 280, cat: "Main Course", icon: "🍚" },
    { id: 24, name: "Tandoori Roti", price: 15, cat: "Bread", icon: "🫓" },
    { id: 25, name: "Butter Naan", price: 40, cat: "Bread", icon: "🍞" },
    { id: 26, name: "Garlic Naan", price: 55, cat: "Bread", icon: "🧄" },
    { id: 27, name: "Laccha Paratha", price: 45, cat: "Bread", icon: "🥐" },
    { id: 28, name: "Missi Roti", price: 30, cat: "Bread", icon: "🌾" },
    { id: 29, name: "Rumali Roti", price: 25, cat: "Bread", icon: "🧤" },
    { id: 30, name: "Gulab Jamun", price: 50, cat: "Dessert", icon: "🔴" },
    { id: 31, name: "Rasmalai", price: 80, cat: "Dessert", icon: "⚪" },
    { id: 32, name: "Gajar Halwa", price: 100, cat: "Dessert", icon: "🥕" },
    { id: 33, name: "Kheer", price: 60, cat: "Dessert", icon: "🍚" },
    { id: 34, name: "Ice Cream", price: 40, cat: "Dessert", icon: "🍦" }
];

// 3. Function to Display Items
function displayMenu(items) {
    const container = document.getElementById('menu-container');
    if(!container) return; // Error handling

    container.innerHTML = items.map(item => `
        <div class="menu-card opacity-0 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 group border border-transparent hover:border-orange-200">
            <div class="text-4xl mb-4 group-hover:scale-125 transition duration-300 text-center">${item.icon}</div>
            <h4 class="text-xl font-bold text-gray-800">${item.name}</h4>
            <p class="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">${item.cat}</p>
            <div class="flex justify-between items-center mt-auto">
                <span class="text-orange-600 font-bold text-lg">₹${item.price}</span>
                <button class="bg-white border border-orange-600 text-orange-600 px-4 py-1 rounded-lg hover:bg-orange-600 hover:text-white transition-all active:scale-95">Add +</button>
            </div>
        </div>
    `).join('');

    // Menu Cards Animation
    gsap.to(".menu-card", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
    });
}

// 4. Filter Logic
window.filterMenu = function(category) {
    // Update button styles
    const buttons = document.querySelectorAll('#category-filters button');
    buttons.forEach(btn => {
        if(btn.innerText === category || (category === 'Bread' && btn.innerText === 'Breads')) {
            btn.classList.add('bg-orange-600', 'text-white');
            btn.classList.remove('text-orange-600');
        } else {
            btn.classList.remove('bg-orange-600', 'text-white');
            btn.classList.add('text-orange-600');
        }
    });

    // Filtering items
    if (category === 'All') {
        displayMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.cat === category);
        displayMenu(filtered);
    }
}
