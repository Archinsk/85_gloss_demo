import { useEffect, useMemo, useState } from "react";
import "./App.scss";
import PreviewDetails from "./components/PreviewDetails";
import PreviewTable from "./components/PreviewTable";
import SidebarBody from "./components/SidebarBody";
import SidebarHeader from "./components/SidebarHeader";
import SaveControls from "./components/SaveControls";
import SettingsRegistry from "./components/SettingsRegistry";
import SettingsRegistryColumn from "./components/SettingsRegistryColumn";
import SettingsRegistryTabs from "./components/SettingsRegistryTabs";
import PreviewControls from "./components/PreviewControls";
import AppSettings from "./components/AppSettings";

function App() {
  const defaultRegistries = [
    {
      id: "shoppingCart",
      title: "Добавление в корзину",
      roles: ["admin", "operator", "manager", "guest"],
      actions: [
        { title: "Закладки", type: "icon", icon: "tune", visibility: false },
        {
          title: "Фильтр",
          type: "icon",
          icon: "filter_list",
          visibility: true,
        },
        {
          title: "Корзина",
          type: "icon",
          icon: "shopping_cart",
          visibility: true,
        },
        {
          title: "Обновить данные",
          type: "icon",
          icon: "update",
          visibility: true,
        },
        {
          title: "Экспортировать в XLS",
          type: "text",
          text: "XLS",
          visibility: true,
        },
        {
          title: "Экспортировать в CSV",
          type: "text",
          text: "CSV",
          visibility: false,
        },
      ],
      properties: [
        {
          id: 1,
          name: "id",
          title: "Id",
          type: "string",
          order: 0,
          orderDetails: 0,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 2,
          name: "value",
          title: "Значение",
          type: "string",
          order: 1,
          orderDetails: 1,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
      ],
      tabs: [
        {
          title: "Вкладка 1",
          targetId: "tab01",
          items: [{ propertyName: "id", order: 0 }],
        },
        {
          title: "Вкладка 2",
          targetId: "tab02",
          items: [
            { propertyName: "id", order: 0 },
            { propertyName: "value", order: 1 },
          ],
        },
      ],
    },
    {
      id: "payment",
      title: "Оплата",
      roles: ["admin", "operator", "manager", "guest"],
      actions: [
        { title: "Закладки", type: "icon", icon: "tune", visibility: false },
        {
          title: "Фильтр",
          type: "icon",
          icon: "filter_list",
          visibility: true,
        },
        {
          title: "Обновить данные",
          type: "icon",
          icon: "update",
          visibility: true,
        },
        {
          title: "Экспортировать в XLS",
          type: "text",
          text: "XLS",
          visibility: true,
        },
      ],
      properties: [
        {
          id: 1,
          name: "id",
          title: "Id",
          type: "string",
          order: 2,
          orderDetails: 0,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 2,
          name: "value",
          title: "Значение",
          type: "string",
          order: 3,
          orderDetails: 10,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
      ],
      tabs: [
        {
          title: "Вкладка 1",
          targetId: "tab01",
          items: [{ propertyName: "id", order: 0 }],
        },
        {
          title: "Вкладка 2",
          targetId: "tab02",
          items: [
            { propertyName: "id", order: 0 },
            { propertyName: "value", order: 1 },
          ],
        },
      ],
    },
    {
      id: "deliveryOperation",
      title: "Доставка",
      roles: ["admin", "operator", "manager", "guest"],
      actions: [
        { title: "Закладки", type: "icon", icon: "tune", visibility: true },
        {
          title: "Фильтр",
          type: "icon",
          icon: "filter_list",
          visibility: true,
        },
        {
          title: "Обновить данные",
          type: "icon",
          icon: "update",
          visibility: true,
        },
        {
          title: "Экспортировать в XLS",
          type: "text",
          text: "XLS",
          visibility: true,
        },
        {
          title: "Экспортировать в CSV",
          type: "text",
          text: "CSV",
          visibility: true,
        },
      ],
      properties: [
        {
          id: 1,
          name: "appNumber",
          title: "№",
          type: "number",
          order: 0,
          orderDetails: 9,
          visibilityTable: true,
          visibilityDetails: false,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 2,
          name: "deliveryDate",
          title: "Дата доставки",
          type: "date",
          order: 2,
          orderDetails: 2,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 3,
          name: "appId",
          title: "Id доставки",
          type: "string",
          order: 1,
          orderDetails: 0,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 4,
          name: "appDoc",
          title: "Документ об оплате",
          type: "string",
          order: 3,
          orderDetails: 10,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator", "manager"],
        },
        {
          id: 5,
          name: "status",
          title: "Статус доставки",
          type: "string",
          order: 4,
          orderDetails: 3,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager"],
        },
        {
          id: 6,
          name: "statusDate",
          title: "Статус установлен",
          type: "date",
          order: 5,
          orderDetails: 4,
          visibilityTable: false,
          visibilityDetails: true,
          access: ["admin", "operator"],
        },
        {
          id: 7,
          name: "operator",
          title: "Оператор",
          type: "string",
          order: 6,
          orderDetails: 11,
          visibilityTable: true,
          visibilityDetails: false,
          access: ["admin", "manager"],
        },
        {
          id: 8,
          name: "worker",
          title: "Экспедитор",
          type: "string",
          order: 7,
          orderDetails: 12,
          visibilityTable: true,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 9,
          name: "actions",
          title: "Действия",
          type: "array",
          order: 8,
          orderDetails: 13,
          visibilityTable: true,
          visibilityDetails: false,
          access: ["admin", "operator", "manager"],
        },
        {
          id: 10,
          name: "appCreationDate",
          title: "Дата создания заявки",
          type: "date",
          order: 9,
          orderDetails: 1,
          visibilityTable: false,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 11,
          name: "buyer",
          title: "Получатель",
          type: "string",
          order: 10,
          orderDetails: 5,
          visibilityTable: false,
          visibilityDetails: true,
          access: ["admin", "operator", "manager"],
        },
        {
          id: 12,
          name: "buyerPhone",
          title: "Телефон получателя",
          type: "string",
          order: 13,
          orderDetails: 6,
          visibilityTable: false,
          visibilityDetails: true,
          access: ["admin", "operator", "manager"],
        },
        {
          id: 13,
          name: "cost",
          title: "Сумма заказа",
          type: "number",
          order: 14,
          orderDetails: 7,
          visibilityTable: false,
          visibilityDetails: true,
          access: ["admin", "manager"],
        },
        {
          id: 14,
          name: "deliveryCost",
          title: "Стоимость доставки",
          type: "number",
          order: 15,
          orderDetails: 8,
          visibilityTable: false,
          visibilityDetails: true,
          access: ["admin", "operator", "manager"],
        },
        {
          id: 15,
          name: "others",
          title: "Прочее",
          type: "string",
          order: 16,
          orderDetails: 14,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 16,
          name: "region",
          title: "Субъект РФ",
          type: "string",
          order: 17,
          orderDetails: 15,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 17,
          name: "city",
          title: "Населенный пункт",
          type: "string",
          order: 18,
          orderDetails: 16,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 18,
          name: "street",
          title: "Улица",
          type: "string",
          order: 19,
          orderDetails: 17,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 19,
          name: "house",
          title: "№ дома",
          type: "string",
          order: 20,
          orderDetails: 18,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 20,
          name: "flat",
          title: "№ офиса/квартиры",
          type: "string",
          order: 21,
          orderDetails: 19,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 21,
          name: "additional",
          title: "Дополнительно",
          type: "string",
          order: 22,
          orderDetails: 20,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 22,
          name: "deliverer",
          title: "Организация",
          type: "string",
          order: 23,
          orderDetails: 21,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 23,
          name: "driverName",
          title: "ФИО водителя",
          type: "string",
          order: 24,
          orderDetails: 22,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 24,
          name: "driverPhone",
          title: "Телефон водителя",
          type: "phone",
          order: 25,
          orderDetails: 23,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 25,
          name: "workerName",
          title: "ФИО экспедитора",
          type: "string",
          order: 26,
          orderDetails: 24,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 26,
          name: "workerPhone",
          title: "Телефон экспедитора",
          type: "phone",
          order: 27,
          orderDetails: 25,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
        {
          id: 27,
          name: "lorryNumber",
          title: "Гос.номер автомобиля",
          type: "string",
          order: 28,
          orderDetails: 26,
          visibilityTable: false,
          visibilityDetails: false,
          access: ["admin", "operator"],
        },
      ],
      tabs: [
        {
          title: "Основание",
          targetId: "home",
          items: [
            { propertyName: "appId", order: 0 },
            { propertyName: "appDoc", order: 1 },
            { propertyName: "others", order: 2 },
          ],
        },
        {
          title: "Перевозчик",
          targetId: "profile",
          items: [
            { propertyName: "deliverer", order: 0 },
            { propertyName: "driverName", order: 1 },
            { propertyName: "driverPhone", order: 2 },
            { propertyName: "workerName", order: 3 },
            { propertyName: "workerPhone", order: 4 },
            { propertyName: "lorryNumber", order: 5 },
          ],
        },
        {
          title: "Адрес доставки",
          targetId: "contact",
          items: [
            { propertyName: "region", order: 0 },
            { propertyName: "city", order: 1 },
            { propertyName: "street", order: 2 },
            { propertyName: "house", order: 3 },
            { propertyName: "flat", order: 4 },
            { propertyName: "additional", order: 5 },
          ],
        },
      ],
    },
    {
      id: "departments",
      title: "Реестр разделов",
      roles: ["admin", "operator", "manager", "guest"],
      actions: [
        { title: "Закладки", type: "icon", icon: "tune", visibility: false },
        {
          title: "Фильтр",
          type: "icon",
          icon: "filter_list",
          visibility: true,
        },
        {
          title: "Корзина",
          type: "icon",
          icon: "shopping_cart",
          visibility: true,
        },
        {
          title: "Обновить данные",
          type: "icon",
          icon: "update",
          visibility: true,
        },
        {
          title: "Экспортировать в XLS",
          type: "text",
          text: "XLS",
          visibility: true,
        },
        {
          title: "Экспортировать в CSV",
          type: "text",
          text: "CSV",
          visibility: true,
        },
      ],
      properties: [
        {
          id: 1,
          name: "id",
          title: "Id",
          type: "string",
          order: 2,
          orderDetails: 0,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 2,
          name: "value",
          title: "Значение",
          type: "string",
          order: 3,
          orderDetails: 10,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
      ],
      tabs: [
        {
          title: "Вкладка 1",
          targetId: "tab01",
          items: [{ propertyName: "id", order: 0 }],
        },
        {
          title: "Вкладка 2",
          targetId: "tab02",
          items: [
            { propertyName: "id", order: 0 },
            { propertyName: "value", order: 1 },
          ],
        },
      ],
    },
    {
      id: "products",
      title: "Реестр товаров",
      roles: ["admin", "operator", "manager", "guest"],
      actions: [
        { title: "Закладки", type: "icon", icon: "tune", visibility: false },
        {
          title: "Фильтр",
          type: "icon",
          icon: "filter_list",
          visibility: true,
        },
        {
          title: "Корзина",
          type: "icon",
          icon: "shopping_cart",
          visibility: true,
        },
        {
          title: "Обновить данные",
          type: "icon",
          icon: "update",
          visibility: true,
        },
        {
          title: "Экспортировать в XLS",
          type: "text",
          text: "XLS",
          visibility: true,
        },
        {
          title: "Экспортировать в CSV",
          type: "text",
          text: "CSV",
          visibility: true,
        },
      ],
      properties: [
        {
          id: 1,
          name: "id",
          title: "Id",
          type: "string",
          order: 2,
          orderDetails: 0,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 2,
          name: "value",
          title: "Значение",
          type: "string",
          order: 3,
          orderDetails: 10,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
      ],
      tabs: [
        {
          title: "Вкладка 1",
          targetId: "tab01",
          items: [{ propertyName: "id", order: 0 }],
        },
        {
          title: "Вкладка 2",
          targetId: "tab02",
          items: [
            { propertyName: "id", order: 0 },
            { propertyName: "value", order: 1 },
          ],
        },
      ],
    },
    {
      id: "sellers",
      title: "Реестр продавцов",
      roles: ["admin", "operator", "manager", "guest"],
      actions: [
        { title: "Закладки", type: "icon", icon: "tune", visibility: false },
        {
          title: "Фильтр",
          type: "icon",
          icon: "filter_list",
          visibility: true,
        },
        {
          title: "Корзина",
          type: "icon",
          icon: "shopping_cart",
          visibility: true,
        },
        {
          title: "Обновить данные",
          type: "icon",
          icon: "update",
          visibility: true,
        },
        {
          title: "Экспортировать в XLS",
          type: "text",
          text: "XLS",
          visibility: true,
        },
        {
          title: "Экспортировать в CSV",
          type: "text",
          text: "CSV",
          visibility: true,
        },
      ],
      properties: [
        {
          id: 1,
          name: "id",
          title: "Id",
          type: "string",
          order: 2,
          orderDetails: 0,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 2,
          name: "value",
          title: "Значение",
          type: "string",
          order: 3,
          orderDetails: 10,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
      ],
      tabs: [
        {
          title: "Вкладка 1",
          targetId: "tab01",
          items: [{ propertyName: "id", order: 0 }],
        },
        {
          title: "Вкладка 2",
          targetId: "tab02",
          items: [
            { propertyName: "id", order: 0 },
            { propertyName: "value", order: 1 },
          ],
        },
      ],
    },
    {
      id: "rolesColumn",
      title: "Ролевая модель",
      roles: ["admin", "operator", "manager", "guest"],
      actions: [
        { title: "Закладки", type: "icon", icon: "tune", visibility: true },
        {
          title: "Фильтр",
          type: "icon",
          icon: "filter_list",
          visibility: true,
        },
        {
          title: "Обновить данные",
          type: "icon",
          icon: "update",
          visibility: true,
        },
        {
          title: "Экспортировать в XLS",
          type: "text",
          text: "XLS",
          visibility: true,
        },
        {
          title: "Экспортировать в CSV",
          type: "text",
          text: "CSV",
          visibility: true,
        },
      ],
      properties: [
        {
          id: 1,
          name: "prop001",
          title: "Все",
          type: "string",
          order: 0,
          orderDetails: 0,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager", "guest"],
        },
        {
          id: 2,
          name: "prop002",
          title: "Админ, оператор и продавец",
          type: "string",
          order: 1,
          orderDetails: 1,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator", "manager"],
        },
        {
          id: 3,
          name: "prop003",
          title: "Админ и оператор",
          type: "string",
          order: 2,
          orderDetails: 2,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin", "operator"],
        },
        {
          id: 4,
          name: "prop004",
          title: "Только админ",
          type: "string",
          order: 3,
          orderDetails: 3,
          visibilityTable: true,
          visibilityDetails: true,
          access: ["admin"],
        },
      ],
      tabs: [],
    },
  ];
  const defaultRegistriesData = [
    {
      registry: "shoppingCart",
      apps: [
        { id: "001", value: "qwert-65" },
        { id: "002", value: "asd-2323" },
        { id: "003", value: "zxcnvvv-13" },
      ],
    },
    {
      registry: "payment",
      apps: [
        { id: "001", value: "qwert-65" },
        { id: "002", value: "asd-2323" },
        { id: "003", value: "zxcnvvv-13" },
      ],
    },
    {
      registry: "deliveryOperation",
      apps: [
        {
          appNumber: "1",
          deliveryDate: "01.02.2025",
          appId: "Б-254-5678-25",
          appDoc: "Счет-фактура №456456",
          status: "Скомплектована",
          statusDate: "12.12.2024",
          operator: "Козлова Е.Ю.",
          worker: "Петров С.А.",
          actions: "edit visibility",
          appCreationDate: "12.12.2024",
          buyer: "Кузнецов К.П.",
          buyerPhone: "8-913-666-5544",
          cost: "15000",
          deliveryCost: "850",
          others: "Нет домофона",
          region: "Новосибирская область",
          city: "г.Новосибирск",
          street: "Гоголя",
          house: "34",
          flat: "123",
          additional: "Позвонить за 1 час до доставки",
          deliverer: "СДЭК",
          driverName: "Иванов В.И.",
          driverPhone: "8-903-555-6541",
          workerName: "Петров С.А.",
          workerPhone: "8-903-555-6533",
          lorryNumber: "A123XA154",
        },
        {
          appNumber: "2",
          deliveryDate: "15.11.2024",
          appId: "А-367-1818-24",
          appDoc: "Счет-фактура №753458",
          status: "Завершена",
          statusDate: "17.11.2024",
          operator: "Зайцева Л.Н.",
          worker: "Смирнов Б.Ю.",
          actions: "visibility",
          appCreationDate: "11.11.2024",
          buyer: "Комаров И.М.",
          buyerPhone: "8-913-958-5544",
          cost: "35500",
          deliveryCost: "1200",
          others: "-",
          region: "Новосибирская область",
          city: "г.Новосибирск",
          street: "Каменская",
          house: "12",
          flat: "45",
          additional: "-",
          deliverer: "Собственный парк",
          driverName: "Ильин В.И.",
          driverPhone: "8-923-123-4566",
          workerName: "РАбинович С.А.",
          workerPhone: "8-923-123-4567",
          lorryNumber: "B456OP154",
        },
        {
          appNumber: "3",
          deliveryDate: "10.01.2024",
          appId: "Б-435-3490-24",
          appDoc: "Счет-фактура №424583",
          status: "Завершена",
          statusDate: "12.01.2024",
          operator: "Соколов Е.Н.",
          worker: "Сидоров С.В.",
          actions: "edit visibility",
          appCreationDate: "15.12.2023",
          buyer: "Уткин В.И.",
          buyerPhone: "8-903-333-9876",
          cost: "53000",
          deliveryCost: "1400",
          others: "-",
          region: "Новосибирская область",
          city: "г.Новосибирск",
          street: "Крылова",
          house: "22",
          flat: "33",
          additional: "Позвонить перед выездом",
          deliverer: "Собственный парк",
          driverName: "Ильин В.И.",
          driverPhone: "8-923-123-4566",
          workerName: "РАбинович С.А.",
          workerPhone: "8-923-123-4567",
          lorryNumber: "B456OP154",
        },
      ],
    },
    {
      registry: "departments",
      apps: [
        { id: "001", value: "Бытовая техника" },
        { id: "002", value: "Электроинструмент" },
        { id: "003", value: "Посуда" },
      ],
    },
    {
      registry: "products",
      apps: [
        { id: "001", value: "Холодильник" },
        { id: "002", value: "Духовой шкаф" },
        { id: "003", value: "Посудомоечная машина" },
      ],
    },
    {
      registry: "sellers",
      apps: [
        { id: "001", value: "Иванов" },
        { id: "002", value: "Кузнецова" },
        { id: "003", value: "Соколов" },
      ],
    },
    {
      registry: "rolesColumn",
      apps: [
        {
          prop001: "Есть у всех ролей",
          prop002: "Нет у гостя",
          prop003: "Нет у гостя и продавца",
          prop004: "Нет ни у кого кроме админа",
        },
        {
          prop001: "Есть у всех ролей",
          prop002: "Нет у гостя",
          prop003: "Нет у гостя и продавца",
          prop004: "Нет ни у кого кроме админа",
        },
        {
          prop001: "Есть у всех ролей",
          prop002: "Нет у гостя",
          prop003: "Нет у гостя и продавца",
          prop004: "Нет ни у кого кроме админа",
        },
      ],
    },
  ];
  const operationData = {
    id: "deliveryOperation",
    title: "Доставка",
    roles: [
      {
        name: "admin",
        title: "Администратор",
        access: true,
      },
      {
        name: "operator",
        title: "Оператор 1С",
        access: true,
      },
      {
        name: "manager",
        title: "Продавец",
        access: true,
      },
      {
        name: "guest",
        title: "Гость",
        access: true,
      },
    ],
    actions: [
      { title: "Закладки", type: "icon", icon: "tune", visibility: true },
      { title: "Фильтр", type: "icon", icon: "filter_list", visibility: true },
      {
        title: "Обновить данные",
        type: "icon",
        icon: "update",
        visibility: true,
      },
      {
        title: "Экспортировать в XLS",
        type: "text",
        text: "XLS",
        visibility: true,
      },
      {
        title: "Экспортировать в CSV",
        type: "text",
        text: "CSV",
        visibility: true,
      },
    ],
    properties: [
      {
        id: 1,
        name: "appNumber",
        title: "№",
        type: "number",
        order: 0,
        orderDetails: 9,
        visibilityTable: true,
        visibilityDetails: false,
      },
      {
        id: 2,
        name: "deliveryDate",
        title: "Дата доставки",
        type: "date",
        order: 1,
        orderDetails: 2,
        visibilityTable: true,
        visibilityDetails: true,
      },
      {
        id: 3,
        name: "appId",
        title: "Id доставки",
        type: "string",
        order: 2,
        orderDetails: 0,
        visibilityTable: true,
        visibilityDetails: true,
      },
      {
        id: 4,
        name: "appDoc",
        title: "Документ об оплате",
        type: "string",
        order: 3,
        orderDetails: 10,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 5,
        name: "status",
        title: "Статус доставки",
        type: "string",
        order: 4,
        orderDetails: 3,
        visibilityTable: true,
        visibilityDetails: true,
      },
      {
        id: 6,
        name: "statusDate",
        title: "Статус установлен",
        type: "date",
        order: 5,
        orderDetails: 4,
        visibilityTable: false,
        visibilityDetails: true,
      },
      {
        id: 7,
        name: "operator",
        title: "Оператор",
        type: "string",
        order: 6,
        orderDetails: 11,
        visibilityTable: true,
        visibilityDetails: false,
      },
      {
        id: 8,
        name: "worker",
        title: "Экспедитор",
        type: "string",
        order: 7,
        orderDetails: 12,
        visibilityTable: true,
        visibilityDetails: false,
      },
      {
        id: 9,
        name: "actions",
        title: "Действия",
        type: "array",
        order: 8,
        orderDetails: 13,
        visibilityTable: true,
        visibilityDetails: false,
      },
      {
        id: 10,
        name: "appCreationDate",
        title: "Дата создания заявки",
        type: "date",
        order: 9,
        orderDetails: 1,
        visibilityTable: false,
        visibilityDetails: true,
      },
      {
        id: 11,
        name: "buyer",
        title: "Получатель",
        type: "string",
        order: 10,
        orderDetails: 5,
        visibilityTable: false,
        visibilityDetails: true,
      },
      {
        id: 12,
        name: "buyerPhone",
        title: "Телефон получателя",
        type: "string",
        order: 13,
        orderDetails: 6,
        visibilityTable: false,
        visibilityDetails: true,
      },
      {
        id: 13,
        name: "cost",
        title: "Сумма заказа",
        type: "number",
        order: 14,
        orderDetails: 7,
        visibilityTable: false,
        visibilityDetails: true,
      },
      {
        id: 14,
        name: "deliveryCost",
        title: "Стоимость доставки",
        type: "number",
        order: 15,
        orderDetails: 8,
        visibilityTable: false,
        visibilityDetails: true,
      },
      {
        id: 15,
        name: "others",
        title: "Прочее",
        type: "string",
        order: 16,
        orderDetails: 14,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 16,
        name: "region",
        title: "Субъект РФ",
        type: "string",
        order: 17,
        orderDetails: 15,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 17,
        name: "city",
        title: "Населенный пункт",
        type: "string",
        order: 18,
        orderDetails: 16,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 18,
        name: "street",
        title: "Улица",
        type: "string",
        order: 19,
        orderDetails: 17,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 19,
        name: "house",
        title: "№ дома",
        type: "string",
        order: 20,
        orderDetails: 18,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 20,
        name: "flat",
        title: "№ офиса/квартиры",
        type: "string",
        order: 21,
        orderDetails: 19,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 21,
        name: "additional",
        title: "Дополнительно",
        type: "string",
        order: 22,
        orderDetails: 20,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 22,
        name: "deliverer",
        title: "Организация",
        type: "string",
        order: 23,
        orderDetails: 21,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 23,
        name: "driverName",
        title: "ФИО водителя",
        type: "string",
        order: 24,
        orderDetails: 22,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 24,
        name: "driverPhone",
        title: "Телефон водителя",
        type: "phone",
        order: 25,
        orderDetails: 23,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 25,
        name: "workerName",
        title: "ФИО экспедитора",
        type: "string",
        order: 26,
        orderDetails: 24,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 26,
        name: "workerPhone",
        title: "Телефон экспедитора",
        type: "phone",
        order: 27,
        orderDetails: 25,
        visibilityTable: false,
        visibilityDetails: false,
      },
      {
        id: 27,
        name: "lorryNumber",
        title: "Гос.номер автомобиля",
        type: "string",
        order: 28,
        orderDetails: 26,
        visibilityTable: false,
        visibilityDetails: false,
      },
    ],
    tabs: [
      {
        title: "Основание",
        targetId: "home",
        items: [
          { propertyName: "appId", order: 0 },
          { propertyName: "appDoc", order: 1 },
          { propertyName: "others", order: 2 },
        ],
      },
      {
        title: "Перевозчик",
        targetId: "profile",
        items: [
          { propertyName: "deliverer", order: 0 },
          { propertyName: "driverName", order: 1 },
          { propertyName: "driverPhone", order: 2 },
          { propertyName: "workerName", order: 3 },
          { propertyName: "workerPhone", order: 4 },
          { propertyName: "lorryNumber", order: 5 },
        ],
      },
      {
        title: "Адрес доставки",
        targetId: "contact",
        items: [
          { propertyName: "region", order: 0 },
          { propertyName: "city", order: 1 },
          { propertyName: "street", order: 2 },
          { propertyName: "house", order: 3 },
          { propertyName: "flat", order: 4 },
          { propertyName: "additional", order: 5 },
        ],
      },
    ],
  };
  const mockData = [
    {
      appNumber: "1",
      deliveryDate: "01.02.2025",
      appId: "Б-254-5678-25",
      appDoc: "Счет-фактура №456456",
      status: "Скомплектована",
      statusDate: "12.12.2024",
      operator: "Козлова Е.Ю.",
      worker: "Петров С.А.",
      actions: "edit visibility",
      appCreationDate: "12.12.2024",
      buyer: "Кузнецов К.П.",
      buyerPhone: "8-913-666-5544",
      cost: "15000",
      deliveryCost: "850",
      others: "Нет домофона",
      region: "Новосибирская область",
      city: "г.Новосибирск",
      street: "Гоголя",
      house: "34",
      flat: "123",
      additional: "Позвонить за 1 час до доставки",
      deliverer: "СДЭК",
      driverName: "Иванов В.И.",
      driverPhone: "8-903-555-6541",
      workerName: "Петров С.А.",
      workerPhone: "8-903-555-6533",
      lorryNumber: "A123XA154",
    },
    {
      appNumber: "2",
      deliveryDate: "15.11.2024",
      appId: "А-367-1818-24",
      appDoc: "Счет-фактура №753458",
      status: "Завершена",
      statusDate: "17.11.2024",
      operator: "Зайцева Л.Н.",
      worker: "Смирнов Б.Ю.",
      actions: "visibility",
      appCreationDate: "11.11.2024",
      buyer: "Комаров И.М.",
      buyerPhone: "8-913-958-5544",
      cost: "35500",
      deliveryCost: "1200",
      others: "-",
      region: "Новосибирская область",
      city: "г.Новосибирск",
      street: "Каменская",
      house: "12",
      flat: "45",
      additional: "-",
      deliverer: "Собственный парк",
      driverName: "Ильин В.И.",
      driverPhone: "8-923-123-4566",
      workerName: "РАбинович С.А.",
      workerPhone: "8-923-123-4567",
      lorryNumber: "B456OP154",
    },
    {
      appNumber: "3",
      deliveryDate: "10.01.2024",
      appId: "Б-435-3490-24",
      appDoc: "Счет-фактура №424583",
      status: "Завершена",
      statusDate: "12.01.2024",
      operator: "Соколов Е.Н.",
      worker: "Сидоров С.В.",
      actions: "edit visibility",
      appCreationDate: "15.12.2023",
      buyer: "Уткин В.И.",
      buyerPhone: "8-903-333-9876",
      cost: "53000",
      deliveryCost: "1400",
      others: "-",
      region: "Новосибирская область",
      city: "г.Новосибирск",
      street: "Крылова",
      house: "22",
      flat: "33",
      additional: "Позвонить перед выездом",
      deliverer: "Собственный парк",
      driverName: "Ильин В.И.",
      driverPhone: "8-923-123-4566",
      workerName: "РАбинович С.А.",
      workerPhone: "8-923-123-4567",
      lorryNumber: "B456OP154",
    },
  ];
  const defaultNewRegistry = {
    id: "newRegistry",
    title: "Новый реестр ",
    roles: ["admin", "operator", "manager", "guest"],
    actions: [
      { title: "Закладки", type: "icon", icon: "tune", visibility: true },
      {
        title: "Фильтр",
        type: "icon",
        icon: "filter_list",
        visibility: true,
      },
      {
        title: "Обновить данные",
        type: "icon",
        icon: "update",
        visibility: true,
      },
      {
        title: "Экспортировать в XLS",
        type: "text",
        text: "XLS",
        visibility: true,
      },
      {
        title: "Экспортировать в CSV",
        type: "text",
        text: "CSV",
        visibility: true,
      },
    ],
    properties: [
      {
        id: 1,
        name: "id",
        title: "Id",
        type: "string",
        order: 1,
        orderDetails: 1,
        visibilityTable: true,
        visibilityDetails: true,
        access: ["admin", "operator", "manager", "guest"],
      },
      {
        id: 2,
        name: "value",
        title: "Значение",
        type: "string",
        order: 2,
        orderDetails: 2,
        visibilityTable: true,
        visibilityDetails: true,
        access: ["admin", "operator", "manager", "guest"],
      },
    ],
    tabs: [
      {
        title: "Вкладка 1",
        targetId: "tab01",
        items: [{ propertyName: "id", order: 1 }],
      },
      {
        title: "Вкладка 2",
        targetId: "tab02",
        items: [
          { propertyName: "id", order: 1 },
          { propertyName: "value", order: 2 },
        ],
      },
    ],
  };
  const defaultNewRegistryData = {
    registry: "newRegistry",
    apps: [
      { id: "001", value: "value-001" },
      { id: "002", value: "value-002" },
      { id: "003", value: "value-003" },
    ],
  };
  const defaultNewRegistryColumn = {
    id: 2,
    name: "newValue",
    title: "Новая колонка ",
    type: "string",
    order: 0,
    orderDetails: 0,
    visibilityTable: true,
    visibilityDetails: true,
    access: ["admin", "operator", "manager", "guest"],
  };
  const defaultNewTab = {
    title: "Новая вкладка ",
    targetId: "newTab00",
    items: [],
  };

  const setInitialAppSettings = () => {
    if (localStorage.appSettings) {
      document.documentElement.setAttribute(
        "data-theme",
        JSON.parse(localStorage.appSettings).theme
      );
      return JSON.parse(localStorage.appSettings);
    } else {
      document.documentElement.setAttribute("data-theme", "white");
      return { url: "https://ya.ru", theme: "white" };
    }
  };
  const setInitialRegistries = () => {
    if (localStorage.registries) {
      return JSON.parse(localStorage.registries);
    } else {
      return JSON.parse(JSON.stringify(defaultRegistries));
    }
  };
  const setInitialRegistriesData = () => {
    if (localStorage.registriesData) {
      return JSON.parse(localStorage.registriesData);
    } else {
      return JSON.parse(JSON.stringify(defaultRegistriesData));
    }
  };

  const [appSettings, setAppSettings] = useState(setInitialAppSettings);
  const [isShowAppSettings, setIsShowAppSettings] = useState(false);
  const [registries, setRegistries] = useState(setInitialRegistries);
  const [registriesData, setRegistriesData] = useState(
    setInitialRegistriesData
  );
  const [updatedRegistries, setUpdatedRegistries] =
    useState(setInitialRegistries);
  const [updatedRegistriesData, setUpdatedRegistriesData] = useState(
    setInitialRegistriesData
  );
  const [selectedRegistryId, setSelectedRegistryId] = useState(null);
  const [selectedPreviewPart, setSelectedPreviewPart] = useState(null);
  const [selectedRegistryPropertyId, setSelectedRegistryPropertyId] =
    useState(null);
  const [counter, setCounter] = useState(1);
  const [showAllRegistryProperties, setShowAllRegistryProperties] =
    useState(false);

  const [selectedSidebarItemIndex, setSelectedSidebarItemIndex] =
    useState(null);
  const [selectedPreviewMode, setSelectedPreviewMode] = useState(null);
  const [selectedPreviewTableColumn, setSelectedPreviewTableColumn] =
    useState(null);
  const [operationProperties, setOperationProperties] = useState(
    operationData.properties
  );
  const [operationValues, setOperationValues] = useState(mockData);
  const [showAllTableColumns, setShowAllTableColumns] = useState(false);
  const [showAllDetailsMainRows, setShowAllDetailsMainRows] = useState(false);
  const [selectedPreviewDetailsPart] = useState(null);
  const [selectedPreviewDetailsMainRow, setSelectedPreviewDetailsMainRow] =
    useState(null);
  const [selectedPreviewDetailsTab, setSelectedPreviewDetailsTab] =
    useState("home");
  const [selectedPreviewDetailsTabRow, setSelectedPreviewDetailsTabRow] =
    useState(null);
  const [previewRole, setPreviewRole] = useState("admin");
  const [isSearchRegistry, setIsSearchRegistry] = useState(false);
  const [searchRegistryText, setSearchRegistryText] = useState("");
  const [showAllRegistries, setShowAllRegistries] = useState(false);

  const [registriesListCurrentPage, setRegistriesListCurrentPage] = useState(1);

  const registriesListItemsPerPage = 10;

  const handleClickPreviewTableTitle = function () {
    setSelectedPreviewMode("table");
    setSelectedPreviewPart("title");
    setSelectedRegistryPropertyId(null);
  };

  const handleClickPreviewTableColumn = function (columnId) {
    console.log("handleClickPreviewTableColumn");
    console.log(columnId);
    setSelectedPreviewMode("table");
    setSelectedPreviewPart("column");
    setSelectedRegistryPropertyId(columnId);
  };

  const handleClickShowAllProperties = function () {
    setShowAllRegistryProperties(!showAllRegistryProperties);
  };

  const handleClickVisibilityPreviewMainRow = function () {
    setShowAllDetailsMainRows(!showAllDetailsMainRows);
  };

  const handleClickPreviewDetailsMainRow = function (columnId) {
    console.log("handleClickPreviewDetailsMainRow");
    console.log(columnId);
    setSelectedPreviewMode("details");
    setSelectedPreviewPart("main-row");
    setSelectedRegistryPropertyId(columnId);
  };

  const handleClickPreviewDetailsTab = function (rowNumber) {
    setSelectedPreviewMode("details");
    setSelectedPreviewPart("tabs");
  };

  const handleClickPreviewDetailsTabRow = function (tabId, propertyName) {
    setSelectedPreviewMode("details");
    setSelectedPreviewPart("tab-row");
    setSelectedPreviewDetailsTab(tabId);
    setSelectedRegistryPropertyId(propertyName);
  };

  const handleChangeAppSettings = function (propItem, value) {
    if (propItem === "theme") {
      document.documentElement.setAttribute("data-theme", value);
    }
    setAppSettings({
      ...appSettings,
      [propItem]: value,
    });
    localStorage.setItem(
      "appSettings",
      JSON.stringify({
        ...appSettings,
        [propItem]: value,
      })
    );
  };

  const createNewRegistry = () => {
    const newRegistry = JSON.parse(JSON.stringify(defaultNewRegistry));
    console.log("newRegistry");
    console.log(newRegistry);
    newRegistry.id = newRegistry.id + counter;
    newRegistry.title = newRegistry.title + counter;
    setUpdatedRegistries([newRegistry, ...updatedRegistries]);
    const newRegistryData = JSON.parse(JSON.stringify(defaultNewRegistryData));
    newRegistryData.registry = newRegistryData.registry + counter;
    setUpdatedRegistriesData([newRegistryData, ...updatedRegistriesData]);
    setSelectedRegistryId("newRegistry" + counter);
    setCounter(counter + 1);
  };

  const deleteRegistry = () => {
    console.log("deleteRegistry");
    setUpdatedRegistries(
      updatedRegistries.filter((a) => a.id !== selectedRegistryId)
    );
    setUpdatedRegistriesData(
      updatedRegistriesData.filter((a) => a.registry !== selectedRegistryId)
    );
    setSelectedRegistryId(null);
  };

  const cloneRegistry = () => {
    console.log("Клонирование");
    const registry = updatedRegistries.find(
      (item) => item.id === selectedRegistryId
    );
    const newRegistry = JSON.parse(JSON.stringify(registry));
    const registryData = updatedRegistriesData.find(
      (item) => item.registry === selectedRegistryId
    );
    console.log("newRegistry");
    console.log(newRegistry);
    newRegistry.id = newRegistry.id + counter;
    newRegistry.title = newRegistry.title + counter;
    setUpdatedRegistries([newRegistry, ...updatedRegistries]);
    const newRegistryData = JSON.parse(JSON.stringify(registryData));
    newRegistryData.registry = newRegistryData.registry + counter;
    setUpdatedRegistriesData([newRegistryData, ...updatedRegistriesData]);
    setSelectedRegistryId(newRegistry.id);
    setCounter(counter + 1);
  };

  const updateRegistry = (
    propertyName,
    newValue,
    propArrayIndex,
    arrayItemPropName
  ) => {
    console.log("Изменение");
    console.log(propertyName, newValue, propArrayIndex, arrayItemPropName);
    const registry = updatedRegistries.find(
      (item) => item.id === selectedRegistryId
    );
    const registryProperty = registry[propertyName];
    let registryPropertyArrayItem;
    if (typeof propArrayIndex === "number") {
      console.log("array");
      registryPropertyArrayItem = registryProperty[propArrayIndex];
      const newRegistryPropertyArrayItem = {
        ...registryPropertyArrayItem,
        [arrayItemPropName]: newValue,
      };
      console.log(registryProperty);
      const newArray = registryProperty.map((item, index) => {
        if (index !== propArrayIndex) {
          return item;
        } else {
          return newRegistryPropertyArrayItem;
        }
      });
      const newRegistry = { ...registry, [propertyName]: newArray };
      const newUpdatedRegistries = updatedRegistries.map((reg) => {
        if (reg.id !== registry.id) {
          return reg;
        } else {
          return newRegistry;
        }
      });
      console.log("newUpdatedRegistries");
      console.log(newUpdatedRegistries);
      setUpdatedRegistries(newUpdatedRegistries);
    } else {
      let newArrayValue;
      if (propertyName === "roles") {
        if (registryProperty.includes(newValue)) {
          newArrayValue = registryProperty.filter((item) => {
            return item !== newValue;
          });
        } else {
          newArrayValue = [...registryProperty, newValue];
        }
      }

      console.log("primitive");
      console.log(updatedRegistries);
      const newRegistry = {
        ...registry,
        [propertyName]: newArrayValue || newValue,
      };
      const newUpdatedRegistries = updatedRegistries.map((reg) => {
        if (reg.id !== registry.id) {
          return reg;
        } else {
          return newRegistry;
        }
      });
      console.log(newUpdatedRegistries);
      setUpdatedRegistries(newUpdatedRegistries);
    }
  };

  const createNewRegistryColumn = () => {
    console.log("Добавление колонки");
    const registry = updatedRegistries.find(
      (item) => item.id === selectedRegistryId
    );
    const registryData = updatedRegistriesData.find(
      (item) => item.registry === selectedRegistryId
    );
    const newRegistryColumn = JSON.parse(
      JSON.stringify(defaultNewRegistryColumn)
    );
    newRegistryColumn.name += counter;
    newRegistryColumn.title += counter;
    console.log("newRegistryColumn");
    console.log(newRegistryColumn);
    const newRegistryPropertiesOrder = registry.properties
      .map((propItem) => {
        if (propItem.order <= newRegistryColumn.order) {
          return { ...propItem, order: propItem.order + 1 };
        } else {
          return propItem;
        }
      })
      .map((propItem) => {
        if (propItem.orderDetails <= newRegistryColumn.orderDetails) {
          return { ...propItem, orderDetails: propItem.orderDetails + 1 };
        } else {
          return propItem;
        }
      });
    console.log(newRegistryPropertiesOrder);
    const newRegistry = {
      ...registry,
      properties: [newRegistryColumn, ...newRegistryPropertiesOrder],
    };
    console.log(newRegistry);
    const newUpdatedRegistries = updatedRegistries.map((regItem) => {
      if (regItem.id === selectedRegistryId) {
        return newRegistry;
      } else {
        return regItem;
      }
    });
    const newUpdatedRegistriesDataApps = registryData.apps.map((appItem) => {
      return { ...appItem, [newRegistryColumn.name]: "Значение " + counter };
    });
    console.log("newUpdatedRegistriesDataApps");
    console.log(newUpdatedRegistriesDataApps);
    const newUpdatedRegistriesData = updatedRegistriesData.map(
      (regDataItem) => {
        if (regDataItem.registry === selectedRegistryId) {
          return { ...regDataItem, apps: newUpdatedRegistriesDataApps };
        } else {
          return regDataItem;
        }
      }
    );
    console.log(newUpdatedRegistries);
    setUpdatedRegistries(newUpdatedRegistries);
    setUpdatedRegistriesData(newUpdatedRegistriesData);
    setSelectedRegistryPropertyId(newRegistryColumn.name);
    setSelectedPreviewPart("column");
    setCounter(counter + 1);
  };

  const deleteRegistryColumn = () => {
    console.log("Удаление колонки");
    const registry = updatedRegistries.find(
      (item) => item.id === selectedRegistryId
    );
    const registryData = updatedRegistriesData.find(
      (item) => item.registry === selectedRegistryId
    );
    const newRegistryProperties = registry.properties.filter((propItem) => {
      if (propItem.name !== selectedRegistryPropertyId) {
        return propItem;
      }
    });
    console.log(newRegistryProperties);
    const newTabs = registry.tabs.map((tab) => {
      const newTabItems = tab.items.filter((tabItem) => {
        return tabItem.propertyName !== selectedRegistryPropertyId;
      });
      console.log(newTabItems);
      console.log({ ...tab, items: newTabItems });
      return { ...tab, items: newTabItems };
    });
    const newRegistry = {
      ...registry,
      properties: newRegistryProperties,
      tabs: newTabs,
    };
    console.log(newRegistry);
    const newUpdatedRegistries = updatedRegistries.map((regItem) => {
      if (regItem.id === selectedRegistryId) {
        return newRegistry;
      } else {
        return regItem;
      }
    });
    const newUpdatedRegistriesDataApps = registryData.apps.map((appItem) => {
      delete appItem[selectedRegistryPropertyId];
      return appItem;
    });
    console.log("newUpdatedRegistriesDataApps");
    console.log(newUpdatedRegistriesDataApps);
    const newUpdatedRegistriesData = updatedRegistriesData.map(
      (regDataItem) => {
        console.log(regDataItem);
        if (regDataItem.registry === selectedRegistryId) {
          return { ...regDataItem, apps: newUpdatedRegistriesDataApps };
        } else {
          return regDataItem;
        }
      }
    );
    console.log(newUpdatedRegistries);
    console.log(newUpdatedRegistriesData);
    setUpdatedRegistries(newUpdatedRegistries);
    setUpdatedRegistriesData(newUpdatedRegistriesData);
    setSelectedRegistryPropertyId(null);
    setSelectedPreviewPart(null);
  };

  const cloneRegistryColumn = () => {
    console.log("Клонирование колонки");
    const registry = updatedRegistries.find(
      (item) => item.id === selectedRegistryId
    );
    const registryData = updatedRegistriesData.find(
      (item) => item.registry === selectedRegistryId
    );
    const clonedColumn = registry.properties.find((propItem) => {
      return propItem.name === selectedRegistryPropertyId;
    });
    const columnClone = {
      ...clonedColumn,
      order: 0,
      orderDetails: 0,
      name: clonedColumn.name + counter,
      title: "Копия " + clonedColumn.title,
    };
    console.log(registryData);
    const newRegistryProperties = registry.properties.map((propItem) => {
      return {
        ...propItem,
        order: propItem.order + 1,
        orderDetails: propItem.orderDetails + 1,
      };
    });
    const newRegistry = {
      ...registry,
      properties: [columnClone, ...newRegistryProperties],
    };
    const newUpdatedRegistries = updatedRegistries.map((regItem) => {
      if (regItem.id === selectedRegistryId) {
        return newRegistry;
      } else {
        return regItem;
      }
    });
    const newRegistryDataApps = registryData.apps.map((app) => {
      return { ...app, [columnClone.name]: app[clonedColumn.name] };
    });
    console.log(newRegistryDataApps);
    const newRegistryData = { ...registryData, apps: newRegistryDataApps };
    const newUpdatedRegistriesData = updatedRegistriesData.map((item) => {
      if (item.registry === selectedRegistryId) {
        return newRegistryData;
      } else {
        return item;
      }
    });
    setUpdatedRegistries(newUpdatedRegistries);
    setUpdatedRegistriesData(newUpdatedRegistriesData);
    setSelectedRegistryPropertyId(columnClone.name);
    setCounter(counter + 1);
  };

  const updateRegistryColumn = (
    propertyName,
    newValue,
    propArrayIndex,
    arrayItemPropName
  ) => {
    console.log("Изменение колонки реестра");
    console.log(propertyName, newValue, propArrayIndex, arrayItemPropName);
    const registry = updatedRegistries.find(
      (item) => item.id === selectedRegistryId
    );
    const registryProperty = registry.properties.find((propItem) => {
      return propItem.name === selectedRegistryPropertyId;
    });
    let newArrayValue;
    if (propertyName === "access") {
      if (registryProperty.access.includes(newValue)) {
        newArrayValue = registryProperty.access.filter((item) => {
          return item !== newValue;
        });
      } else {
        newArrayValue = [...registryProperty.access, newValue];
      }
    }
    const newRegistryProperty = {
      ...registryProperty,
      [propertyName]: newArrayValue || newValue,
    };
    const newRegistryProperties = registry.properties.map((propItem) => {
      if (propItem.name === selectedRegistryPropertyId) {
        return newRegistryProperty;
      } else {
        return propItem;
      }
    });
    const newRegistry = { ...registry, properties: newRegistryProperties };
    const newUpdatedRegistries = updatedRegistries.map((reg) => {
      if (reg.id !== selectedRegistryId) {
        return reg;
      } else {
        return newRegistry;
      }
    });
    setUpdatedRegistries(newUpdatedRegistries);
  };

  const resetChanges = () => {
    console.log("reset");
    const initialRegistriesIds = registries.map((registry) => {
      return registry.name;
    });
    const registry = registries.find((registry) => {
      return registry.id === selectedRegistryId;
    });
    console.log(registry);
    if (selectedRegistryId && selectedRegistryPropertyId) {
      const registryProperty = registry?.properties.find((propItem) => {
        return propItem.name === selectedRegistryPropertyId;
      });
      console.log(registryProperty);
      if (!registryProperty) {
        console.log("123123");
        setSelectedRegistryPropertyId(null);
        setSelectedPreviewPart(null);
      }
    } else if (selectedRegistryId && !selectedRegistryPropertyId) {
      if (!registry) {
        setSelectedRegistryId(null);
        setSelectedPreviewPart(null);
      }
    }
    console.log("реестр");
    console.log(registry);
    setUpdatedRegistries([...registries]);
    setUpdatedRegistriesData([...registriesData]);
  };

  const createTab = () => {
    console.log("create tab");
    const registry = updatedRegistries.find((registry) => {
      return registry.id === selectedRegistryId;
    });
    const newTab = {
      ...defaultNewTab,
      title: defaultNewTab.title + counter,
      targetId: defaultNewTab.targetId + counter,
    };
    const newTabs = [newTab, ...registry.tabs];
    const newRegistry = { ...registry, tabs: newTabs };
    const newUpdatedRegistries = updatedRegistries.map((reg) => {
      if (reg.id !== selectedRegistryId) {
        return reg;
      } else {
        return newRegistry;
      }
    });
    setUpdatedRegistries(newUpdatedRegistries);
    setCounter(counter + 1);
  };

  const deleteTab = (tabId) => {
    console.log("delete tab");
    const registry = updatedRegistries.find((registry) => {
      return registry.id === selectedRegistryId;
    });
    const newTabs = registry.tabs.filter((tab) => {
      return tab.targetId !== tabId;
    });
    const newRegistry = { ...registry, tabs: newTabs };
    const newUpdatedRegistries = updatedRegistries.map((reg) => {
      if (reg.id !== selectedRegistryId) {
        return reg;
      } else {
        return newRegistry;
      }
    });
    setUpdatedRegistries(newUpdatedRegistries);
  };

  const cloneTab = (tabId) => {
    console.log("clone tab");
    const registry = updatedRegistries.find((registry) => {
      return registry.id === selectedRegistryId;
    });
    const clonedTab = registry.tabs.find((tab) => {
      return tab.targetId === tabId;
    });
    const newTab = {
      ...clonedTab,
      title: clonedTab.title + counter,
      targetId: clonedTab.targetId + counter,
    };
    const newTabs = [newTab, ...registry.tabs];
    const newRegistry = { ...registry, tabs: newTabs };
    const newUpdatedRegistries = updatedRegistries.map((reg) => {
      if (reg.id !== selectedRegistryId) {
        return reg;
      } else {
        return newRegistry;
      }
    });
    setUpdatedRegistries(newUpdatedRegistries);
    setCounter(counter + 1);
  };

  const updateTab = (tabIndex, key, value, action) => {
    console.log("update tab");
    console.log(tabIndex, key, value, action);
    const registry = updatedRegistries.find((registry) => {
      return registry.id === selectedRegistryId;
    });
    const tabItem = registry.tabs[tabIndex];
    let newTab;
    let newTabs;
    if (!action) {
      newTab = { ...tabItem, [key]: value };
      newTabs = registry.tabs.map((item) => {
        if (item.targetId !== tabItem.targetId) {
          return item;
        } else {
          return newTab;
        }
      });
      console.log(newTabs);
    }

    if (action === "add") {
      const newItem = { propertyName: key, order: tabItem.items.length };
      const newTabRows = [...tabItem.items, newItem];
      newTab = { ...tabItem, items: newTabRows };
      newTabs = registry.tabs.map((item) => {
        if (item.targetId !== tabItem.targetId) {
          return item;
        } else {
          return newTab;
        }
      });
    }

    if (action === "remove") {
      const newTabRows = tabItem.items.filter((item) => {
        return item.propertyName !== key;
      });
      console.log(newTabRows);
      newTab = { ...tabItem, items: newTabRows };
      newTabs = registry.tabs.map((item) => {
        if (item.targetId !== tabItem.targetId) {
          return item;
        } else {
          return newTab;
        }
      });
    }

    if (action === "changeOrder") {
      console.log("changeOrder");
      const newTabRows = tabItem.items.map((item) => {
        if (item.propertyName === key) {
          return { ...item, order: value };
        } else {
          return item;
        }
      });
      console.log(newTabRows);
      newTab = { ...tabItem, items: newTabRows };
      newTabs = registry.tabs.map((item) => {
        if (item.targetId !== tabItem.targetId) {
          return item;
        } else {
          return newTab;
        }
      });
    }
    console.log("newTab");
    console.log(newTab);

    console.log("updatedTabs");
    console.log(newTabs);
    const newRegistry = { ...registry, tabs: newTabs };
    const newUpdatedRegistries = updatedRegistries.map((reg) => {
      if (reg.id !== selectedRegistryId) {
        return reg;
      } else {
        return newRegistry;
      }
    });
    setUpdatedRegistries(newUpdatedRegistries);
  };

  const saveChanges = () => {
    console.log("save");
    localStorage.setItem("registries", JSON.stringify(updatedRegistries));
    localStorage.setItem(
      "registriesData",
      JSON.stringify(updatedRegistriesData)
    );
    setRegistries([...updatedRegistries]);
    setRegistriesData([...updatedRegistriesData]);
  };

  const resetApp = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    // handler object
    const handleEvent = (ev) => {
      const registry = updatedRegistries.find(
        (item) => item.id === selectedRegistryId
      );
      const registryColumn = registry?.properties.find((propItem) => {
        return propItem.name === selectedRegistryPropertyId;
      });
      console.log(`your key is ${ev.code}!`);
      console.log(appSettings);
      if (selectedRegistryId && selectedRegistryPropertyId) {
        if (selectedPreviewPart === "column") {
          if (ev.key === "ArrowLeft") {
            updateRegistryColumn("order", +registryColumn.order - 1);
          }
          if (ev.key === "ArrowRight") {
            updateRegistryColumn("order", +registryColumn.order + 1);
          }
        }
        if (selectedPreviewPart === "main-row") {
          if (ev.key === "ArrowUp") {
            updateRegistryColumn(
              "orderDetails",
              registryColumn.orderDetails - 1
            );
          }
          if (ev.key === "ArrowDown") {
            updateRegistryColumn(
              "orderDetails",
              registryColumn.orderDetails + 1
            );
          }
        }
      }
    };

    // register handler
    // do not use lambda here because to unsubscribe later
    window.addEventListener("keyup", handleEvent);

    // unregister handler
    return () => {
      window.removeEventListener("keyup", handleEvent);
    };
  }, [
    selectedRegistryId,
    selectedRegistryPropertyId,
    updatedRegistries,
    selectedPreviewPart,
  ]);

  const filtredUpdatedRegistries = useMemo(() => {
    if (searchRegistryText.trim()) {
      return updatedRegistries.filter((item) =>
        item.title.toLowerCase().includes(searchRegistryText.toLowerCase())
      );
    } else {
      return updatedRegistries;
    }
  }, [updatedRegistries, searchRegistryText]);

  const pagedFiltredUpdatedRegistries = useMemo(() => {
    if (!showAllRegistries) {
      return filtredUpdatedRegistries.filter((item, index) => {
        return (
          index >=
            (registriesListCurrentPage - 1) * registriesListItemsPerPage &&
          index <= registriesListCurrentPage * registriesListItemsPerPage - 1
        );
      });
    } else {
      return filtredUpdatedRegistries;
    }
  }, [filtredUpdatedRegistries, registriesListCurrentPage, showAllRegistries]);

  const totalRegistriesListPages = useMemo(() => {
    return Math.ceil(updatedRegistries.length / 10);
  }, [filtredUpdatedRegistries]);

  const changeRegistryPageNumber = (increaseValue) => {
    const newRegistriesListCurrentPage =
      registriesListCurrentPage + increaseValue;
    if (
      !(
        newRegistriesListCurrentPage < 1 ||
        newRegistriesListCurrentPage > totalRegistriesListPages
      )
    ) {
      setRegistriesListCurrentPage(newRegistriesListCurrentPage);
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <SidebarHeader
          onCklickShowSettings={() => {
            setIsShowAppSettings(!isShowAppSettings);
          }}
        />
        {isShowAppSettings && (
          <AppSettings
            url={appSettings.url}
            theme={appSettings.theme}
            onChangeAppSettings={handleChangeAppSettings}
            onClickResetApp={resetApp}
          />
        )}
        <SidebarBody
          isSearchRegistry={isSearchRegistry}
          searchRegistryText={searchRegistryText}
          updatedRegistries={pagedFiltredUpdatedRegistries}
          selectedRegistryId={selectedRegistryId}
          showAllRegistries={showAllRegistries}
          registriesListCurrentPage={registriesListCurrentPage}
          totalRegistriesListPages={totalRegistriesListPages}
          onClickSidebarItem={(registryId) => {
            setSelectedRegistryId(registryId);
            if (selectedPreviewPart) {
              setSelectedPreviewPart(null);
            }
            if (selectedRegistryPropertyId) {
              setSelectedRegistryPropertyId(null);
            }
          }}
          onClickRegistryCreate={createNewRegistry}
          onChangeSearchRegistryMode={(showSearch) => {
            setIsSearchRegistry(showSearch);
            if (!showSearch) {
              setSearchRegistryText("");
            }
          }}
          onChangeSearchRegistryText={(e) => {
            e.stopPropagation();
            setSearchRegistryText(e.target.value);
          }}
          onChangeRegistriesMode={() => {
            setShowAllRegistries(!showAllRegistries);
          }}
          onChangeRegistryPageNumber={changeRegistryPageNumber}
        />
        <div className="tile mt-3">
          <SaveControls onClickReset={resetChanges} onClickSave={saveChanges} />
        </div>
      </div>
      <div className="preview">
        {selectedRegistryId && (
          <PreviewControls
            showAllRegistryProperties={showAllRegistryProperties}
            previewRole={previewRole}
            onChangePreviewRole={(e) => {
              setPreviewRole(e.target.value);
            }}
            onClickShowAllProperties={() => {
              setShowAllRegistryProperties(!showAllRegistryProperties);
            }}
            onClickCreateNewRegistryColumn={createNewRegistryColumn}
          />
        )}
        {selectedRegistryId ? (
          <>
            <PreviewTable
              updatedRegistries={updatedRegistries}
              updatedRegistriesData={updatedRegistriesData}
              selectedRegistryId={selectedRegistryId}
              selectedRegistryPropertyId={selectedRegistryPropertyId}
              showAllTableColumns={showAllTableColumns}
              operationProperties={operationProperties}
              operationValues={operationValues}
              selectedPreviewPart={selectedPreviewPart}
              selectedColumn={selectedPreviewTableColumn}
              showAllRegistryProperties={showAllRegistryProperties}
              previewRole={previewRole}
              onClickPreviewTableTitle={handleClickPreviewTableTitle}
              onClickPreviewTableColumn={handleClickPreviewTableColumn}
              onClickShowAllProperties={handleClickShowAllProperties}
              onClickRegistryColumnUpdate={updateRegistryColumn}
            />
            <PreviewDetails
              updatedRegistries={updatedRegistries}
              updatedRegistriesData={updatedRegistriesData}
              selectedRegistryId={selectedRegistryId}
              selectedRegistryPropertyId={selectedRegistryPropertyId}
              selectedPreviewPart={selectedPreviewPart}
              showAllDetailsMainRows={showAllDetailsMainRows}
              selectedRow={selectedPreviewDetailsMainRow}
              selectedPreviewDetailsTab={selectedPreviewDetailsTab}
              selectedProperty={selectedRegistryPropertyId}
              showAllRegistryProperties={showAllRegistryProperties}
              previewRole={previewRole}
              onClickPreviewDetailsMainRow={handleClickPreviewDetailsMainRow}
              onClickVisibilityDetailsMainRow={
                handleClickVisibilityPreviewMainRow
              }
              onClickPreviewDetailsTab={handleClickPreviewDetailsTab}
              onClickPreviewDetailsTabRow={handleClickPreviewDetailsTabRow}
              onClickRegistryColumnUpdate={updateRegistryColumn}
            />
          </>
        ) : (
          <div className="alert alert-warning mt-3">
            Выберите реестр для редактирования
          </div>
        )}
      </div>

      <div
        className={
          selectedRegistryId && selectedPreviewPart
            ? "settings tile m-3"
            : "d-none"
        }
      >
        {selectedRegistryId && (
          <>
            {selectedPreviewPart === "title" && (
              <SettingsRegistry
                updatedRegistries={updatedRegistries}
                updatedRegistriesData={updatedRegistriesData}
                selectedRegistryId={selectedRegistryId}
                onClickRegistryDelete={deleteRegistry}
                onClickRegistryClone={cloneRegistry}
                onClickRegistryUpdate={updateRegistry}
              />
            )}
            {["column", "main-row", "tab-row"].includes(
              selectedPreviewPart
            ) && (
              <SettingsRegistryColumn
                updatedRegistries={updatedRegistries}
                updatedRegistriesData={updatedRegistriesData}
                selectedRegistryId={selectedRegistryId}
                selectedRegistryPropertyId={selectedRegistryPropertyId}
                onClickRegistryColumnDelete={deleteRegistryColumn}
                onClickRegistryColumnClone={cloneRegistryColumn}
                onClickRegistryColumnUpdate={updateRegistryColumn}
              />
            )}
            {selectedPreviewPart === "tabs" && (
              <SettingsRegistryTabs
                updatedRegistries={updatedRegistries}
                selectedRegistryId={selectedRegistryId}
                previewRole={previewRole}
                onClickTabCreate={createTab}
                onClickTabDelete={deleteTab}
                onClickTabClone={cloneTab}
                onClickTabUpdate={updateTab}
              />
            )}
          </>
        )}
      </div>
      {selectedRegistryId && !selectedPreviewPart && (
        <div className="settings alert alert-warning mt-3 mx-3 align-self-start">
          Выберите элемент для редактирования
        </div>
      )}
      <div className="backdrop d-none">
        <div className="modal position-static d-block">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div className="modal-body">
                Вы не сохранили изменения. При переходе к редактированию другого
                элемента текущие изменения будут сброшены
              </div>
              <div className="modal-footer">
                <button className="btn btn-success">Сохранить</button>
                <button className="btn btn-danger">Перейти, не сохраняя</button>
                <button className="btn btn-secondary">
                  Вернуться к редактированию
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
