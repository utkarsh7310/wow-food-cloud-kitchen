# 🍔 Wow Food - Cloud Kitchen Delivery Engine

![Wow Food Banner](https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740&q=80)

**Wow Food** is a Full-Stack Cloud Kitchen Web Application built for high-speed food delivery operations in Bareilly. It features a modern, interactive customer UI and a real-time, secure Admin KOT (Kitchen Order Ticket) dashboard.

**Managed & Developed By:** Utkarsh Katiyar & Sneha Yadav 💻

---

## 🚀 Key Features

### 🛒 Customer Interface (Frontend)
- **Dynamic AI Mood Recommender:** Suggests food based on the user's current mood.
- **Smart Cart System:** Real-time bill splitting, promo codes (DOSTI10, WOW25), and tax calculations.
- **Razorpay Payment Gateway:** Secure checkout process with UPI, Card, and COD options.
- **Live Order Tracking:** Animated timeline showing order status (Cooking -> Out for Delivery).
- **Downloadable PDF Bills:** Auto-generates a formatted digital receipt using `html2pdf.js`.
- **GSAP Animations & UI:** Smooth scrolling, glass-morphism navbar, and dynamic day/night theming.

### 🔐 Admin Dashboard (Command Center)
- **Super Admin Auth:** Secured login gateway (`sessionStorage` protected).
- **Real-Time Order Sync:** Auto-refreshes every 5 seconds to fetch live orders from the database.
- **Order Management:** Change order statuses (Received -> Cooking -> Delivered) with single-click API triggers.
- **Revenue Analytics:** Live dashboard tracking total orders, revenue, and pending kitchen tasks.

### ⚙️ Backend & Database (Spring Boot + MySQL)
- **RESTful APIs:** Clean architecture for Menus, Users, Orders, and Payments.
- **User Authentication:** Secure Sign-up and Login validation APIs.
- **Hibernate / JPA:** Automated table creation and mapped entity relationships.

---

## 🛠️ Tech Stack Used

- **Frontend:** HTML5, Tailwind CSS, JavaScript (ES6+), GSAP, Lottie Animations.
- **Backend:** Java, Spring Boot, Spring Web, Spring Data JPA.
- **Database:** MySQL.
- **Integrations:** Razorpay Payment API.

---

## 💡 How to Run Locally

1. **Database Setup:** Open MySQL, create a database named `wow_food`.
2. **Backend Setup:** - Open the Spring Boot project in IntelliJ IDEA.
   - Update `application.properties` with your MySQL username and password.
   - Run the `BackendApplication.java` file (Tomcat will start on Port 8080).
3. **Frontend Setup:**
   - Open `index.html` via VS Code Live Server.
   - For Admin Panel, open `admin.html` and use the Master Credentials to log in.

> **Note:** The Razorpay integration is currently in `TEST` mode. No real money is deducted during transactions.
