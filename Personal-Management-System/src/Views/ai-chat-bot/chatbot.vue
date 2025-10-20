<script setup>
import { ref } from 'vue'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { Icon } from '@iconify/vue'
import { useExpenseStore } from '@/stores/expenses'

const expenseStore = useExpenseStore()

// Initialize Gemini AI
// ⚠️ WARNING: Don't expose API key in production! Use backend instead
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' })

// Chat state
const messages = ref([
  {
    role: 'assistant',
    content: 'Hi! I\'m your expense assistant. I can help you analyze your spending, answer questions about your expenses, or give financial advice. What would you like to know?'
  }
])
const userInput = ref('')
const isLoading = ref(false)
const isChatOpen = ref(false)

// Send message to Gemini
async function sendMessage() {
  if (!userInput.value.trim()) return
  
  // Add user message
  const userMessage = userInput.value
  messages.value.push({
    role: 'user',
    content: userMessage
  })
  
  userInput.value = ''
  isLoading.value = true
  
  try {
    // Prepare context about user's expenses
    const expenseContext = `
      User's Expense Data:
      - Total Expenses: ₱${expenseStore.totalExpense}
      - Monthly Expenses: ₱${expenseStore.monthlyExpense}
      - Daily Expenses: ₱${expenseStore.dailyExpense}
      - Number of Expenses: ${expenseStore.expenses.length}
      
      Recent Expenses:
      ${expenseStore.expenses.slice(-5).map(e => 
        `- ${e.name}: ₱${e.amount} (${e.category}) on ${e.date}`
      ).join('\n')}
      
      Category Breakdown:
      ${getCategoryBreakdown()}
    `
    
    // Create prompt with context
    const prompt = `
      You are a professional expense analyst and manager who knows how to handle money and knows 
      alot about how money works.
      
      ${expenseContext}
      
      User Question: ${userMessage}
      
      Your Job is to Provide helpful, concise, accurate financial advice while also maintaining
      proffesionalism based on their expense data.
      Use peso (₱) currency format. Be friendly and encouraging and always guide them towards whats best for them 
      into making decisions based on their expense while at the same time keeping your responses summarized.
    `
    
    // Get AI response
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    // Add AI response
    messages.value.push({
      role: 'assistant',
      content: text
    })
  } catch (error) {
    console.error('Error:', error)
    messages.value.push({
      role: 'assistant',
      content: 'Sorry, I encountered an error. Please try again.'
    })
  } finally {
    isLoading.value = false
  }
}

// Helper function to get category breakdown
function getCategoryBreakdown() {
  const categories = {}
  expenseStore.expenses.forEach(expense => {
    categories[expense.category] = (categories[expense.category] || 0) + expense.amount
  })
  
  return Object.entries(categories)
    .map(([category, amount]) => `- ${category}: ₱${amount}`)
    .join('\n')
}

// Quick question suggestions
const quickQuestions = [
  'How much did I spend this month?',
  'What category do I spend most on?',
  'Give me tips to save money',
  'Analyze my spending habits',
]

function askQuickQuestion(question) {
  userInput.value = question
  sendMessage()
}
</script>

<template>
  <div>
    <!-- Chat Toggle Button -->
    <button
      @click="isChatOpen = !isChatOpen"
      class="fixed bottom-6 right-6 bg-cyan-600 text-white p-4 rounded-full shadow-lg hover:bg-cyan-700 transition-all z-50"
    >
      <Icon 
        :icon="isChatOpen ? 'mdi:close' : 'mdi:chat'" 
        height="30" 
      />
    </button>

    <!-- Chat Window -->
    <div
      v-if="isChatOpen"
      class="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-40"
    >
      <!-- Chat Header -->
      <div class="bg-cyan-600 text-white p-4 rounded-t-lg flex items-center gap-3">
        <Icon icon="mdi:robot" height="30" />
        <div>
          <h3 class="font-bold text-lg">Expense Assistant</h3>
          <p class="text-xs text-cyan-100">Powered by Gemini AI</p>
        </div>
      </div>

      <!-- Quick Questions (shown at start) -->
      <div v-if="messages.length === 1" class="p-4 border-b">
        <p class="text-sm text-gray-600 mb-2">Quick questions:</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="question in quickQuestions"
            :key="question"
            @click="askQuickQuestion(question)"
            class="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full transition"
          >
            {{ question }}
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="[
            'flex',
            message.role === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <div
            :class="[
              'max-w-[80%] rounded-lg p-3',
              message.role === 'user'
                ? 'bg-cyan-600 text-white'
                : 'bg-gray-100 text-gray-800'
            ]"
          >
            <p class="text-sm whitespace-pre-wrap">{{ message.content }}</p>
          </div>
        </div>

        <!-- Loading indicator -->
        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-gray-100 rounded-lg p-3">
            <div class="flex gap-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="border-t p-4">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input
            v-model="userInput"
            type="text"
            placeholder="Ask me anything..."
            class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            :disabled="isLoading"
          />
          <button
            type="submit"
            class="bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700 transition disabled:opacity-50"
            :disabled="isLoading || !userInput.trim()"
          >
            <Icon icon="mdi:send" height="24" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
</style>