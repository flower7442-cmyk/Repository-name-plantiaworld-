import './index.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-green-50">
    
    <!-- 헤더 -->
    <header class="bg-green-600 text-white p-4 text-center text-2xl font-bold">
      🌿 Plantia
    </header>

    <!-- 검색바 -->
    <div class="p-4">
      <input 
        type="text" 
        placeholder="식물을 검색해보세요..." 
        class="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <!-- 상품 카드 영역 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      
      <!-- 카드 1 -->
      <div class="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
        <img src="https://source.unsplash.com/300x200/?plant" class="rounded-xl mb-3" />
        <h2 class="text-lg font-bold">로즈마리</h2>
        <p class="text-gray-500">직접 키운 유기농 허브</p>
        <p class="text-green-600 font-bold mt-2">희망가: 5,000원</p>
      </div>

      <!-- 카드 2 -->
      <div class="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
        <img src="https://source.unsplash.com/300x200/?succulent" class="rounded-xl mb-3" />
        <h2 class="text-lg font-bold">다육이</h2>
        <p class="text-gray-500">집에서 키운 건강한 다육</p>
        <p class="text-green-600 font-bold mt-2">희망가: 3,000원</p>
      </div>

    </div>

  </div>
`
