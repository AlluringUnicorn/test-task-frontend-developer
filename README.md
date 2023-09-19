--Інструкція як запустити проект локально--

1. Зайти в папку backend та створити файл .env скопіювавши все з файлу .env.example , зберегти.

2. Відкрити термінал звичайний або вбудований в редакторі коду.
   Якщо звичайний, то спочатку запускаємо термінал в папці backend та пишемо команду npm install.
   Якщо вбудований в редакторі, тоді спочатку заходимо в папку backend командою cd backend, після цього пишемо команду npm install.

3. Після встановлення пакетів пишемо команду npm run dev.

4. Коли сервер запустився, перейти за посиланням http://localhost:1337/admin , зареєструватись на Strapi.

5. Зайти у вкладку Content Manager, обрати тип колекції Film, та створити нову сутність (+ create new entity). (Дані можна взяти внизу в P.S.☺️) Для цього написати ім'я фільму (name), рік релізу (year), жанр (genre), додати посилання на сторінку фільму на Вікіпедії (link), додати постер (poster), додати посилання на постер (posterUrl) скопіювавши посилання з завантаженого постеру і настиснути Save а потім Publish.

6. Зайти у вкладку Settings, обрати Roles в розділі Users & Permissions Plugin, обрати Public, натиснути на сутність Film та поставити галочку на Select All і після цього Save.

7. Відкрити ще один термінал.
   Якщо звичайний, то в папці frontend запускаємо термінал та пишемо команду npm install.
   Якщо вбудований в редакторі, то спочатку заходимо в папку frontend командою cd frontend, після цього пишемо команду npm install.

8. Після встановлення пакетів пишемо команду npm run dev.

9. Після запуску frontend, перейти за посиланням http://localhost:4321/ , там можна побачити новостворену сутність ✨

P.S.
Дані для сутностей фільму:
Barbie
2023
Comedy
https://en.wikipedia.org/wiki/Barbie_(film)
https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=1280

Avatar
2009
Fantasy
https://en.wikipedia.org/wiki/Avatar_(2009_film)
https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/avatar-limited-ed-one-sheet-sun-i7182.jpg
