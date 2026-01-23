function loadNavbar() {
    const navbarHTML = `
    <nav class="sticky top-0 z-50 bg-stone-100/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo / Brand -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="index.html" class="brand-font text-2xl text-stone-800 hover:text-amber-600 transition-colors">
                        Iffy's Life
                    </a>
                </div>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-6 items-center">
                    
                    <!-- 1. 旅行 My Travel Dropdown -->
                    <div class="relative group h-16 flex items-center">
                        <button class="text-stone-600 group-hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                            旅行 My Travel
                            <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <!-- Dropdown Content -->
                        <div class="absolute left-0 top-14 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block border border-stone-100">
                            <a href="2024.html" class="block px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700">
                                2024北海道
                            </a>
                        </div>
                    </div>

                    <!-- 2. 閱讀 My Reading Dropdown -->
                    <div class="relative group h-16 flex items-center">
                        <button class="text-stone-600 group-hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                            閱讀 My Reading
                            <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <!-- Dropdown Content -->
                        <div class="absolute left-0 top-14 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block border border-stone-100">
                            <a href="2025Reading.html" class="block px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700">
                                2025閱讀足跡
                            </a>
                            <a href="2024Reading.html" class="block px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700">
                                2024閱讀足跡
                            </a>
                            <a href="2023Reading.html" class="block px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700">
                                2023閱讀足跡
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="flex md:hidden">
                    <button type="button" class="text-stone-500 hover:text-stone-800 p-2" id="mobile-menu-btn">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Panel -->
        <div class="md:hidden hidden bg-white border-t border-stone-200" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div class="px-3 py-2 text-xs font-bold text-stone-400 uppercase tracking-wider">旅行 My Travel</div>
                <a href="2024.html" class="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50 pl-6">2024北海道</a>
                
                <div class="px-3 py-2 text-xs font-bold text-stone-400 uppercase tracking-wider mt-2">閱讀 My Reading</div>
                <a href="2025Reading.html" class="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-amber-600 pl-6">2025閱讀足跡</a>
                <a href="2024Reading.html" class="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-amber-600 pl-6">2024閱讀足跡</a>
                <a href="2023Reading.html" class="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-amber-600 pl-6">2023閱讀足跡</a>
            </div>
        </div>
    </nav>
    `;

    // 1. 插入 HTML
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;

    // 2. 綁定手機版選單事件 (因為 HTML 是動態插入的，必須在插入後綁定)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 3. 自動高亮當前頁面連結 (選用)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('text-amber-600', 'font-bold');
            link.classList.remove('text-stone-600', 'text-stone-700');
            // 如果是在下拉選單內，加上背景色
            if(link.classList.contains('block') && link.parentElement.classList.contains('absolute')) {
                link.classList.add('bg-stone-50');
            }
        }
    });
}

// 執行載入
document.addEventListener('DOMContentLoaded', loadNavbar);