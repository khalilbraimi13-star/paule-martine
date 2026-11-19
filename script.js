// فتح وإغلاق النوافذ المنبثقة
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// نظام سلة المشتريات
let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCartUI();
    
    // إضافة حيوية (تنبيه صغير)
    alert("تمت إضافة " + productName + " إلى السلة بنجاح!");
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        let li = document.createElement('li');
        li.innerText = item.name + " - " + item.price + " درهم";
        cartItems.appendChild(li);
    });
    
    document.getElementById('total-price').innerText = total;
}

// عملية الدفع
function checkout() {
    if (cart.length === 0) {
        alert("سلتك فارغة! يرجى اختيار بعض الملابس أولاً.");
        return;
    }
    // إرسال البيانات إلى الباك إند (Python)
    alert("تم الضغط على Accept! جاري تحويلك لصفحة الأداء الآمنة... شكراً لاختيارك Paule Martine.");
    cart = [];
    total = 0;
    updateCartUI();
    closeModal('cartModal');
}

// منع إعادة تحميل الصفحة عند تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
    closeModal('loginModal');
});