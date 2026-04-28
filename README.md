# Лабораторная работа №36. Итоговый проект: TaskBoard

**Выполнил:** Шмаль Иван Максимович
**Группа:** ИСП - 232
**Дата:** 28.04.26

---

## Цель работы:

- Синтез навыков: объединить в одном проекте ASP.NET Core, EF Core, SQLite и Fetch API.
- Архитектурный подход: самостоятельно построить приложение от создания репозитория до реализации CRUD-логики.
- Закрепление Fullstack-цикла: реализовать методы GET, POST, PUT и DELETE на стороне сервера и их вызов с фронтенда.

---

## Краткая теория (вводная часть)

### Что мы строим

**TaskBoard** — это интерактивная доска задач. Приложение позволит пользователю:
- Просматривать актуальный список задач.
- Добавлять новые задачи (название + описание).
- **Менять статус:** отмечать задачу как выполненную (она визуально перечёркивается).
- **Редактировать:** изменять текст задачи прямо в интерфейсе.
- **Удалять** ненужные записи.

### Что изучали и что применяем сегодня

Что изучили | Где применяем
-|-
POST, DELETE, хранение данных | Контроллер TasksController
REST API, маршруты, Swagger | Все маршруты API
JSON, модели, атрибуты | Модель Task, DTO
SQLite, EF Core, миграции | AppDbContext, migrations
CRUD с базой данных | Все операции с задачами
fetch, CORS, api.js | frontend/js/api.js
PUT, редактирование, фильтрация | Редактирование задачи


---

## Примеры кода:

```cs
[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly AppDbContext _db;
    public TasksController(AppDbContext db)
    {
        _db = db;
    }
}
```

## Итоговая таблица: что изучили в лабораторной

Концепция | Описание
-|-
dotnet new webapi | Создание проекта Web API
dotnet add package | Установка NuGet-пакетов
TaskItem вместо Task | Избегаем конфликта с встроенным классом C#
[Required] / [MaxLength] | Валидация модели
AppDbContext | Класс для работы с базой данных
HasData(...) | Начальные данные в миграции
db.Database.Migrate() | Автоматические миграции при запуске
OrderBy + ThenByDescending | Сортировка по двум полям
FindAsync / ToListAsync | Асинхронные операции с БД
task.Id = 0 | EF Core сам присвоит Id
GET / POST / PUT / DELETE | Полный CRUD через HTTP-методы
api.js — отдельный модуль | Все fetch-запросы в одном файле
allTasks — локальный массив | Фильтрация без лишних запросов к серверу
activeFilter — переменная состояния | Текущий выбранный фильтр
applyFilter() | Применяет фильтр к локальному массиву
escapeHtml() | Защита от XSS при вставке в innerHTML
task-view / task-edit | Два режима карточки
data-filter атрибут | Хранение значения фильтра в HTML-кнопке
dataset.filter | Чтение data-* атрибута в JavaScript
querySelectorAll + forEach | Навешивание событий на группу кнопок


## Ссылка на репозиторий

[GitHub Repository](https://github.com/shcmal-chel/isrpo-lab36)
