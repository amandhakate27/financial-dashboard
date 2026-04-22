// src/data/mockData.js
export const userProfile = {
    name: "Sajibur Rahman",
    email: "sajibur.rahman@gm...",
    avatar: ""  // ← placeholder avatar
};

export const balanceData = {
    total: 689372.00,
    currency: "USD",
    changePercent: 5,
    changeDirection: "up"
};

export const earningsData = { amount: 950, changePercent: 7, direction: "up" };
export const spendingData = { amount: 700, changePercent: 5, direction: "down" };
export const incomeData = { amount: 1050, changePercent: 8, direction: "up" };
export const revenueData = { amount: 850, changePercent: 4, direction: "up" };

export const wallets = [
    { id: 1, currency: "USD", flag: "🇺🇸", amount: 22678.00, limit: "$10k a month", status: "Active" },
    { id: 2, currency: "EUR", flag: "🇩🇪", amount: 18345.00, limit: "€8k a month", status: "Active" },
    { id: 3, currency: "GBP", flag: "🇬🇧", amount: 15000.00, limit: "£7.5k a month", status: "Inactive" },
];

export const chartData = [
    { month: "Jan", profit: 28000, loss: 12000 },
    { month: "Feb", profit: 32000, loss: 14000 },
    { month: "Mar", profit: 30000, loss: 10000 },
    { month: "Apr", profit: 38000, loss: 16000 },
    { month: "May", profit: 42000, loss: 18000 },
    { month: "Jun", profit: 45000, loss: 20000 },
    { month: "Jul", profit: 36000, loss: 15000 },
    { month: "Aug", profit: 30000, loss: 13000 },
];

export const activities = [
    { id: "INV-000076", activity: "Mobile App Purchase", icon: "smartphone", price: 25500, status: "Completed", date: "17 Apr, 2026 03:45 PM" },
    { id: "INV-000075", activity: "Hotel Booking", icon: "hotel", price: 32750, status: "Pending", date: "15 Apr, 2026 11:30 AM" },
    { id: "INV-000074", activity: "Flight Ticket Booking", icon: "plane", price: 40200, status: "Completed", date: "15 Apr, 2026 12:00 PM" },
    { id: "INV-000073", activity: "Grocery Purchase", icon: "shopping", price: 50200, status: "In Progress", date: "14 Apr, 2026 09:15 PM" },
    { id: "INV-000073", activity: "Software License", icon: "code", price: 15900, status: "Completed", date: "10 Apr, 2026 06:00 AM" },
];

export const cards = [
    { id: 1, last4: "6782", expiry: "09/29", cvv: "611", type: "dark", active: true },
    { id: 2, last4: "4356", expiry: "12/28", cvv: "***", type: "orange", active: true },
];