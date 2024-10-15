<template>
  <section id="attendance-system" class="section-container">
    <div class="container">
      <div class="section-content">
        <div class="section-text">
          <h1>
            "Shirin IM" onlayn <span class="text-brandPrimary">davomat olish tizimi</span>
          </h1>
          <p>
            "Shirin IM" - bu o'quvchilarning darslarda ishtirokini onlayn tarzda nazorat qilish uchun mo'ljallangan zamonaviy tizimdir. Ushbu tizim o'qituvchilarga va o'quvchilarga davomatni kuzatish, muammolarni hal qilish va o'quv jarayonini yaxshilash imkonini beradi. Oson foydalanish imkoniyatlari va intuitiv interfeysi bilan "Shirin IM" sizga har qanday joyda va istalgan vaqtda o'quvchilarning ishtirokini tezda kuzatish imkonini taqdim etadi.
          </p>
          
          <p>
            "Shirin IM" tizimi o'qituvchilarga o'quvchilarning ishtirokini yanada samarali va tezkor nazorat qilish imkonini beradi. Ushbu tizim yordamida siz nafaqat davomatni, balki o'quvchilarning darslarda faoliyatini ham baholashingiz mumkin. Shuningdek, tizim foydalanuvchilarga murojaat yuborish va muammolarni hal qilish imkoniyatlarini taqdim etadi, bu esa o'qituvchilarga o'quv jarayonini yanada samarali boshqarishga yordam beradi.
          </p>
        </div>
        <div class="section-image">
          <img :src="require('@/assets/online_attendance_system.jpg')" alt="Davomat Tizimi">
        </div>
      </div>
    </div>
  </section>

  <section id="submit-issue" class="section-container">
    <div class="container">
      <div class="section-content">
        <div class="section-image">
          <img :src="require('@/assets/online_attendance_system_illustration.jpg')" alt="Davomat Tizimi">
        </div>
        <div class="section-text">
          <h2>Shirin IM tizimining afzalliklari:</h2>
          <ul>
            <li><strong>Tezkor nazorat:</strong> Davomatni real vaqtda kuzatish imkoniyati, bu esa o'qituvchilarga o'quvchilarning darslarda ishtirokini tezda aniqlash imkonini beradi.</li>
            <li><strong>Ma'lumotlarning aniqligi:</strong> Har bir darsda o'quvchilarning ishtirokini aniq va ishonchli ravishda qayd etish, bu esa keyingi hisobotlar va tahlillar uchun muhim ahamiyatga ega.</li>
            <li><strong>Hisobotlar:</strong> Tizim oylik va yillik hisobotlarni tezda tayyorlash imkonini beradi, bu esa o'qituvchilarga va ma'muriyatga darslar davomida o'quvchilarning ishtiroki haqida batafsil ma'lumot olish imkonini yaratadi.</li>
            <li><strong>Mobil moslik:</strong> Tizimning mobil versiyasi orqali har qanday qurilmadan foydalanish imkoniyati, bu esa o'qituvchilarga va o'quvchilarga qayerda bo'lishidan qat'i nazar, davomatni kuzatish imkonini beradi.</li>
            <li><strong>Foydalanish qulayligi:</strong> Oddiy interfeys va intuitiv dizayn orqali o'qituvchilar va o'quvchilar uchun qulaylik yaratadi, shuningdek, o'qituvchilar uchun davomatni nazorat qilish jarayonini osonlashtiradi.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'; // Vue Router'dan useRouter import qilamiz

export default {
  name: 'AttendanceSystemSection',
  setup() {
    const router = useRouter(); // Vue Router'ni olish

    const goToAddPage = () => {
      router.push('/murojatlar'); // '/murojatlar' yo'nalishga o'tish
    };

    return {
      goToAddPage
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px; /* Maksimal kenglik */
  margin: 0 auto; /* Markazlashtirish */
  padding: 0 1rem; /* Qo'shimcha bo'shliq */
}

.section-container {
  padding: 2rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.section-text {
  max-width: 600px;
  margin: 0 auto;
}

.section-image {
  max-width: 100%;
}

.section-image img {
  width: 100%;
  max-width: 500px; /* Desktopda rasmni kengligini cheklash */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-brandPrimary {
  color: #007bff; /* O'zingizga kerakli rang bilan almashtiring */
}

h1 {
  font-size: 2.5rem; /* Katta sarlavha */
}

h2 {
  font-size: 2rem; /* O'rtacha sarlavha */
}

p {
  font-size: 1.2rem; /* Paragraf matni */
}

ul {
  font-size: 1.1rem; /* Ro'yxat matni */
}

.cta-button {
  background-color: #007bff; /* O'zingizga kerakli rang bilan almashtiring */
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0056b3; /* O'zingizga kerakli rang bilan almashtiring */
}

/* Responsive dizayn */
@media (min-width: 768px) {
  .section-content {
    flex-direction: row;
  }

  .section-text, .section-image {
    flex: 1;
  }

  .section-text {
    padding-right: 1rem;
  }

  .section-image {
    padding-left: 1rem;
  }
}

@media (max-width: 767px) {
  .section-content {
    flex-direction: column;
  }
}
</style>
