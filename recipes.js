let currentCategory = null;

const data = {
    breakfast: [
        {
            title: "Омлет с сыром",
            photo: "https://images.unsplash.com/photo-1601050690462-6f105289b9c4",
            ingredients: ["2 яйца", "50 г сыра", "щепотка соли", "масло для жарки"],
            steps: [
                { step: "Взбейте яйца с щепоткой соли.", time: "2 мин" },
                { step: "Разогрейте сковороду с маслом.", time: "1 мин" },
                { step: "Вылейте яйца и готовьте на среднем огне.", time: "5 мин" },
                { step: "Добавьте сыр, накройте крышкой на 2 минуты.", time: "2 мин" }
            ],
            time: "10 минут",
            calories: 250
        },
        {
            title: "Йогурт с фруктами",
            photo: "https://images.unsplash.com/photo-1617196038645-c352b4e5e5a3",
            ingredients: ["150 г йогурта", "50 г мюсли", "фрукты по вкусу"],
            steps: [
                { step: "Выложите йогурт в миску.", time: "1 мин" },
                { step: "Добавьте мюсли.", time: "1 мин" },
                { step: "Украсьте фруктами.", time: "2 мин" }
            ],
            time: "5 минут",
            calories: 180
        },
        {
            title: "Блинчики с медом",
            photo: "https://images.unsplash.com/photo-1587731453868-9a88d7b2c391",
            ingredients: ["100 г муки", "1 яйцо", "100 мл молока", "мед"],
            steps: [
                { step: "Смешайте муку, яйцо и молоко до однородности.", time: "3 мин" },
                { step: "Выпекайте блины на сковороде.", time: "5 мин" },
                { step: "Полейте медом перед подачей.", time: "1 мин" }
            ],
            time: "10 минут",
            calories: 220
        }
    ],
    lunch: [
        {
            title: "Паста с томатным соусом",
            photo: "https://images.unsplash.com/photo-1603074171968-8f0a2a8b7221",
            ingredients: ["100 г пасты", "100 мл томатного соуса", "сыр", "базилик"],
            steps: [
                { step: "Отварите пасту согласно инструкции.", time: "10 мин" },
                { step: "Разогрейте соус и смешайте с пастой.", time: "5 мин" },
                { step: "Посыпьте сыром и базиликом.", time: "2 мин" }
            ],
            time: "17 минут",
            calories: 400
        },
        {
            title: "Салат Цезарь",
            photo: "https://images.unsplash.com/photo-1603133872879-1fcaec8c19fa",
            ingredients: ["Листья салата", "Курица", "Сыр Пармезан", "Сухарики", "Соус Цезарь"],
            steps: [
                { step: "Нарежьте курицу и обжарьте.", time: "10 мин" },
                { step: "Смешайте салат, курицу, сыр и сухарики.", time: "3 мин" },
                { step: "Добавьте соус Цезарь.", time: "1 мин" }
            ],
            time: "14 минут",
            calories: 350
        },
        {
            title: "Рис с овощами",
            photo: "https://images.unsplash.com/photo-1617196038604-9b5e0f0e7c3d",
            ingredients: ["100 г риса", "100 г овощей", "масло", "соевый соус"],
            steps: [
                { step: "Отварите рис.", time: "10 мин" },
                { step: "Обжарьте овощи на масле.", time: "5 мин" },
                { step: "Смешайте рис с овощами и соевым соусом.", time: "2 мин" }
            ],
            time: "17 минут",
            calories: 300
        }
    ],
    dinner: [
        {
            title: "Запечённый лосось",
            photo: "https://images.unsplash.com/photo-1604908177520-9ff9c4aeb1d0",
            ingredients: ["200 г лосося", "специи", "лимон"],
            steps: [
                { step: "Разогрейте духовку до 180°C.", time: "5 мин" },
                { step: "Приправьте лосось специями и лимоном.", time: "2 мин" },
                { step: "Запеките лосось 15 минут.", time: "15 мин" }
            ],
            time: "22 минуты",
            calories: 350
        },
        {
            title: "Курица с овощами",
            photo: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            ingredients: ["200 г курицы", "овощи", "масло", "специи"],
            steps: [
                { step: "Обжарьте курицу до золотистой корочки.", time: "10 мин" },
                { step: "Добавьте овощи и специи.", time: "5 мин" },
                { step: "Тушите до готовности.", time: "7 мин" }
            ],
            time: "22 минуты",
            calories: 320
        },
        {
            title: "Спагетти с овощами",
            photo: "https://images.unsplash.com/photo-1594007652897-f7c0ad4d9c02",
            ingredients: ["100 г спагетти", "овощи", "соус", "сыр"],
            steps: [
                { step: "Отварите спагетти.", time: "10 мин" },
                { step: "Обжарьте овощи с соусом.", time: "5 мин" },
                { step: "Смешайте спагетти с овощами и посыпьте сыром.", time: "2 мин" }
            ],
            time: "17 минут",
            calories: 330
        }
    ],
    dessert: [
        {
            title: "Шоколадный мусс",
            photo: "https://images.unsplash.com/photo-1615475277807-b89ecb00e3a4",
            ingredients: ["100 г шоколада", "2 яйца", "50 мл сливок", "сахар по вкусу"],
            steps: [
                { step: "Растопите шоколад на водяной бане.", time: "5 мин" },
                { step: "Взбейте яйца со сливками и сахаром.", time: "3 мин" },
                { step: "Смешайте шоколад с взбитой массой.", time: "2 мин" },
                { step: "Охладите в холодильнике минимум 5 минут.", time: "5 мин" }
            ],
            time: "15 минут",
            calories: 300
        },
        {
            title: "Фруктовый салат",
            photo: "https://images.unsplash.com/photo-1600891964763-2b2deaa27184",
            ingredients: ["Фрукты по вкусу", "мед", "йогурт"],
            steps: [
                { step: "Нарежьте фрукты.", time: "3 мин" },
                { step: "Смешайте с йогуртом и медом.", time: "2 мин" }
            ],
            time: "5 минут",
            calories: 150
        },
        {
            title: "Печенье овсяное",
            photo: "https://images.unsplash.com/photo-1601050690462-3f105289b9c4",
            ingredients: ["100 г овсяных хлопьев", "50 г сахара", "1 яйцо", "масло"],
            steps: [
                { step: "Смешайте все ингредиенты.", time: "5 мин" },
                { step: "Выложите тесто на противень и выпекайте 10 минут.", time: "10 мин" }
            ],
            time: "15 минут",
            calories: 200
        }
    ]
};

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function selectCategory(category) {
    currentCategory = category;
    document.getElementById("category").innerText = category.toUpperCase();
    closeModal();
    document.getElementById("refresh").style.display = "inline-block";
    generateRecipe();
}

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRecipe() {
    if (!currentCategory) return;
    const recipe = random(data[currentCategory]);

    document.getElementById("title").innerText = recipe.title;

    const photoEl = document.getElementById("photo");
    photoEl.src = recipe.photo;
    photoEl.style.display = "block";

    document.getElementById("ingredients").innerHTML = `<span>Ингредиенты:</span> ${recipe.ingredients.join(", ")}`;

    const stepsEl = document.getElementById("steps");
    stepsEl.innerHTML = "";
    recipe.steps.forEach(s => {
        const li = document.createElement("li");
        li.innerText = `${s.step} (${s.time})`;
        stepsEl.appendChild(li);
    });

    document.getElementById("time").innerHTML = `<span>Общее время:</span> ${recipe.time}`;
    document.getElementById("calories").innerHTML = `<span>Калории:</span> ${recipe.calories} ккал`;
}
