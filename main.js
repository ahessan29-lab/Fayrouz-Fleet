// التحقق من نموذج التسجيل
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-box");
    const inputs = form.querySelectorAll("input");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // جمع البيانات
        const fullName = inputs[0].value.trim();
        const phone = inputs[1].value.trim();
        const email = inputs[2].value.trim();
        const password = inputs[3].value.trim();
        const confirmPassword = inputs[4].value.trim();

        // تحقق من الحقول الفارغة
        if (!fullName || !phone || !password || !confirmPassword) {
            alert("من فضلك أكمل جميع الحقول المطلوبة");
            return;
        }

        // تحقق من رقم الهاتف
        if (phone.length < 10) {
            alert("رقم الهاتف غير صحيح");
            return;
        }

        // تحقق من كلمة المرور
        if (password !== confirmPassword) {
            alert("كلمتا المرور غير متطابقتين");
            return;
        }

        // ✅ هنا لاحقاً هنعمل ربط بقاعدة البيانات
        alert("تم التسجيل بنجاح ✅ (هنربطها بقاعدة البيانات لاحقاً)");
    });
});

