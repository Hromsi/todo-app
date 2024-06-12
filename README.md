# 📝 Приложение для планировки задач 📝

Это простое приложение для управления задачами, посмотреть демо версии можно по [ССЫЛКЕ](https://todo-app-hromsi.vercel.app/). Приложение позволяет пользователям добавлять новые задачи, отмечать их как выполненные и удалять существующие задачи.

## 🎯 Основные функции 🎯

- `Добавление задач`: Создание новых задач через форму на главной странице с помощью иконки плюс ➕. Если поле ввода будет пустым и пользователь попытается создать задачу, то появляется сообщение об ошибке: "Поле не может быть пустым. Пожалуйста, введите название задачи.".
- `Завершение задач`: Отметка задач как выполненных с помощью иконки галочки ✅.
- `Отмена завершения задач`: Восстановление статуса задач до неисполненного с помощью иконки крест ❌.
- `Удаление задач`: Удаление задач с помощью иконки урны 🗑️.

# 🛠 Технологии 🛠

- **React**
- **Next.js**
- **TypeScript**
- **Redux Toolkit**
- **ESLint**
- **Sass**

## 🏢 Структура проекта 🏢

Проект разделен на несколько основных директорий:

- `src/app`: Основные компоненты приложения, включая макет и страницы.
- `src/components`: Вспомогательные компоненты, используемые во всем приложении.
- `src/lib/store`: Конфигурация Redux хранилища и слайсы для управления состоянием задач.
- `src/styles`: Глобальные стили и стили компонентов, написанные на Sass.

## 🚀 Установка и запуск 🚀

Для локальной разработки вам потребуется Node.js и npm или yarn. Следуйте инструкциям ниже для установки и запуска приложения:

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Hromsi/todo-app
cd todo-app
```

2. Установите зависимости:

```bash
npm install
# или
yarn install
# или
pnpm dev
# или
bun dev
```
3. Запустите сервер разработки:

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev
```

После выполнения этих шагов приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

## 🌐 Деплой 🌐

Для деплоя приложения рекомендуется использовать платформу [Vercel](https://vercel.com/), которая предоставляет отличную интеграцию с Next.js.