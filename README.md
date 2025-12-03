# Personal Expense Management System

A modern, responsive web application built with Vue 3 to help users track their personal expenses, visualize spending habits, and get insights using an AI-powered chatbot.

## 🚀 Features

- **Dashboard Overview**: Get a quick summary of your financial status.
- **Expense Tracking**: Easily add, view, and manage your daily expenses.
- **Data Visualization**: Interactive Bar and Pie charts to analyze spending patterns (powered by Chart.js).
- **AI Financial Assistant**: Integrated AI Chatbot (using Google Gemini) to answer queries about your finances or give advice.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **State Management**: Efficient data handling using Pinia.

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Charts**: [Chart.js](https://www.chartjs.org/) & [vue-chartjs](https://vue-chartjs.org/)
- **Icons**: [Iconify](https://iconify.design/)
- **AI Integration**: [Google Generative AI SDK](https://ai.google.dev/)

## 📦 Project Setup

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd Personal-Management-System
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Environment Setup:
   - If the AI Chatbot feature requires an API key, create a `.env` file in the root directory and add your Google Gemini API key:
     ```
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

### Run Locally

Compile and Hot-Reload for Development:
```sh
npm run dev
```

### Build for Production

Compile and Minify for Production:
```sh
npm run build
```

## 📂 Project Structure

```
src/
├── assets/          # Static assets (CSS, images)
├── Components/      # Reusable UI components (Charts, Cards, Tables)
├── router/          # Vue Router configuration
├── stores/          # Pinia stores for state management
├── Views/           # Page views
│   ├── ai-chat-bot/ # Chatbot interface
│   ├── Home/        # Dashboard and Expense pages
│   ├── Navigations/ # Sidebar and Navbar
│   └── Error/       # 404 Page
├── App.vue          # Root component
└── main.js          # Application entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
