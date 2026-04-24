import blackCard from '../../assets/Images/credit-card-black.png'
import orangeCard from '../../assets/Images/credit-card-orange.png'
import mobileAppPurchase from '../../assets/Images/mobile-app-purchase.png'
import hotelBooking from '../../assets/Images/hotel-booking.png'
import flightTicketBooking from '../../assets/Images/flight-ticket-booking.png'
import groceryPurchase from '../../assets/Images/grocery-purchase.png'
import softwareLicense from '../../assets/Images/software-license.png'


const usFlagSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/><path d="M9.56445 9.99995H19.9992C19.9992 9.09737 19.8789 8.22299 19.6547 7.39124H9.56445V9.99995Z" fill="#D80027"/><path d="M9.56445 4.78266H18.5315C17.9193 3.78375 17.1366 2.90083 16.2241 2.17395H9.56445V4.78266Z" fill="#D80027"/><path d="M10.0002 20C12.3537 20 14.5169 19.1865 16.2251 17.826H3.77539C5.48359 19.1865 7.64676 20 10.0002 20Z" fill="#D80027"/><path d="M1.46699 15.2174H18.5315C19.023 14.4154 19.4041 13.5389 19.6548 12.6086H0.34375C0.594414 13.5389 0.975547 14.4154 1.46699 15.2174Z" fill="#D80027"/><path d="M4.63219 1.56164H5.54348L4.69582 2.17746L5.01961 3.17391L4.17199 2.55809L3.32437 3.17391L3.60406 2.31309C2.85773 2.93477 2.20359 3.66313 1.66453 4.47469H1.95652L1.41695 4.86668C1.33289 5.00691 1.25227 5.14937 1.175 5.29395L1.43266 6.08695L0.951953 5.7377C0.832461 5.99086 0.723164 6.24973 0.624922 6.51398L0.908789 7.38773H1.95652L1.10887 8.00356L1.43266 9L0.585039 8.38418L0.0773047 8.75309C0.0264844 9.1616 0 9.57769 0 10H10C10 4.47719 10 3.82609 10 0C8.02453 0 6.18301 0.573047 4.63219 1.56164ZM5.01961 9L4.17199 8.38418L3.32437 9L3.64816 8.00356L2.80051 7.38773H3.84824L4.17199 6.39129L4.49574 7.38773H5.54348L4.69582 8.00356L5.01961 9ZM4.69582 5.09051L5.01961 6.08695L4.17199 5.47113L3.32437 6.08695L3.64816 5.09051L2.80051 4.47469H3.84824L4.17199 3.47824L4.49574 4.47469H5.54348L4.69582 5.09051ZM8.60656 9L7.75895 8.38418L6.91133 9L7.23512 8.00356L6.38746 7.38773H7.4352L7.75895 6.39129L8.0827 7.38773H9.13043L8.28277 8.00356L8.60656 9ZM8.28277 5.09051L8.60656 6.08695L7.75895 5.47113L6.91133 6.08695L7.23512 5.09051L6.38746 4.47469H7.4352L7.75895 3.47824L8.0827 4.47469H9.13043L8.28277 5.09051ZM8.28277 2.17746L8.60656 3.17391L7.75895 2.55809L6.91133 3.17391L7.23512 2.17746L6.38746 1.56164H7.4352L7.75895 0.565195L8.0827 1.56164H9.13043L8.28277 2.17746Z" fill="#0052B4"/></svg>`

const germanyFlagSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.621094 13.4782C2.03402 17.2862 5.69945 20 9.9991 20C14.2987 20 17.9642 17.2862 19.3771 13.4782L9.9991 12.6087L0.621094 13.4782Z" fill="#FFDA44"/><path d="M9.9991 0C5.69945 0 2.03402 2.71375 0.621094 6.52175L9.9991 7.39129L19.3771 6.52172C17.9642 2.71375 14.2987 0 9.9991 0Z" fill="black"/><path d="M0.621992 6.52173C0.220039 7.60505 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60505 19.378 6.52173H0.621992Z" fill="#D80027"/></svg>`

const ukFlagSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/><path d="M2.06645 3.91174C1.28094 4.93374 0.688633 6.11167 0.34375 7.39131H5.54602L2.06645 3.91174Z" fill="#0052B4"/><path d="M19.6553 7.3914C19.3104 6.11179 18.7181 4.93386 17.9326 3.91187L14.4531 7.3914H19.6553Z" fill="#0052B4"/><path d="M0.34375 12.6088C0.688672 13.8884 1.28098 15.0663 2.06645 16.0883L5.5459 12.6088H0.34375Z" fill="#0052B4"/><path d="M16.0889 2.06722C15.0669 1.28171 13.889 0.689404 12.6094 0.344482V5.54671L16.0889 2.06722Z" fill="#0052B4"/><path d="M3.91211 17.9328C4.9341 18.7183 6.11203 19.3106 7.39164 19.6556V14.4534L3.91211 17.9328Z" fill="#0052B4"/><path d="M7.3916 0.344482C6.11199 0.689404 4.93406 1.28171 3.91211 2.06718L7.3916 5.54667V0.344482Z" fill="#0052B4"/><path d="M12.6094 19.6556C13.889 19.3106 15.0669 18.7183 16.0889 17.9329L12.6094 14.4534V19.6556Z" fill="#0052B4"/><path d="M14.4531 12.6088L17.9326 16.0883C18.7181 15.0663 19.3104 13.8884 19.6553 12.6088H14.4531Z" fill="#0052B4"/><path d="M19.9154 8.69566H11.3044V0.0846484C10.8774 0.0290625 10.4421 0 10 0C9.55785 0 9.12262 0.0290625 8.69566 0.0846484V8.69563H0.0846484C0.0290625 9.12262 0 9.55793 0 10C0 10.4421 0.0290625 10.8774 0.0846484 11.3043H8.69563V19.9154C9.12262 19.9709 9.55785 20 10 20C10.4421 20 10.8774 19.971 11.3043 19.9154V11.3044H19.9154C19.9709 10.8774 20 10.4421 20 10C20 9.55793 19.9709 9.12262 19.9154 8.69566Z" fill="#D80027"/><path d="M12.6094 12.6088L17.0717 17.0711C17.277 16.866 17.4727 16.6515 17.6595 16.4292L13.8391 12.6088H12.6094Z" fill="#D80027"/><path d="M7.39207 12.6088H7.39199L2.92969 17.0711C3.13484 17.2763 3.34934 17.4721 3.57168 17.6589L7.39207 13.8384V12.6088Z" fill="#D80027"/><path d="M7.39195 7.39142V7.39134L2.92961 2.92896C2.72438 3.13411 2.52859 3.3486 2.3418 3.57095L6.16223 7.39138L7.39195 7.39142Z" fill="#D80027"/><path d="M12.6094 7.39138L17.0718 2.92896C16.8666 2.72373 16.6521 2.52794 16.4298 2.34119L12.6094 6.16162V7.39138Z" fill="#D80027"/></svg>`

// navbar dummy data
import profilePhoto from '../../assets/Images/profile-photo.png';
export const userProfile = {
    name: "Sajibur Rahman",
    email: "sajibur.rahman@gmil.com",
    avatar: profilePhoto,
}

// Total Balance Card dummy data
export const totalBalance = {
    currency: "USD",
    currencySymbol: "$",
    flagImg: usFlagSvg,
    totalBalance: 689372.00,
    changePercent: 5,
    arrow: "up",  // "up" | "down"
    changeLabel: "than last month",
}

// Wallets dummy data 


export const wallets = [
    {
        id: 1,
        currency: "USD",
        flagImg: usFlagSvg,
        currencySymbol: "$",
        amount: 22678.00,
        limit: "$10k a month",
        status: "Active",   // "Active" | "Inactive"
    },
    {
        id: 2,
        currency: "EUR",
        flagImg: germanyFlagSvg,
        currencySymbol: "€",
        amount: 18345.00,
        limit: "€8.6k a month",
        status: "Active",
    },
    {
        id: 3,
        currency: "GBP",
        flagImg: ukFlagSvg,
        currencySymbol: "£",
        amount: 15000.00,
        limit: "£7.5k a month",
        status: "Inactive",
    },
]

export const statCards = [
    {
        id: 1,
        title: "Total Earnings",
        amount: 950,
        currencySymbol: "$",
        changePercent: 7,
        changeDirection: "up",
        label: "This month",
        variant: "orange",
        icon: "Wallet",
    },
    {
        id: 2,
        title: "Total Spending",
        amount: 700,
        currencySymbol: "$",
        changePercent: 5,
        changeDirection: "down",
        label: "This month",
        variant: "default",
        icon: "CircleDollarSign",
    },
    {
        id: 3,
        title: "Total Income",
        amount: 1050,
        currencySymbol: "$",
        changePercent: 8,
        changeDirection: "up",
        label: "This month",
        variant: "default",
        icon: "Database",
    },
    {
        id: 4,
        title: "Total Revenue",
        amount: 850,
        currencySymbol: "$",
        changePercent: 4,
        changeDirection: "up",
        label: "This month",
        variant: "default",
        icon: "ChartNoAxesCombined",
    },
]

// Monthly Spending Limit dummy data

export const monthlySpendingLimit = {
    title: "Monthly Spending Limit",
    spentAmount: 1650,
    totalAmount: 5500,
    progressPercent: 45,
    currency: "USD",
    currencySymbol: "$",
    summaryLabel: "spent out of",
}

// My Cards dummy data
export const myCards = [
    {
        id: 1,
        image: blackCard,
        last4: "6782",
        status: "Active",   // "Active" | "Inactive"
    },
    {
        id: 2,
        image: orangeCard,
        last4: "4356",
        status: "Active",
    },
]

// Recent Activities dummy data
export const recentActivities = [
    {
        id: 1,
        orderId: "INV_000076",
        activity: "Mobile App Purchase",
        icon: mobileAppPurchase,
        price: 25500,
        currencySymbol: "$",
        status: "Completed",
        date: "17 Apr, 2026 03:45 PM",
        checked: false,
    },
    {
        id: 2,
        orderId: "INV_000075",
        activity: "Hotel Booking",
        icon: hotelBooking,
        price: 32750,
        currencySymbol: "$",
        status: "Pending",
        date: "15 Apr, 2026 11:30 AM",
        checked: false,
    },
    {
        id: 3,
        orderId: "INV_000074",
        activity: "Flight Ticket Booking",
        icon: flightTicketBooking,
        price: 40200,
        currencySymbol: "$",
        status: "Completed",
        date: "15 Apr, 2026 12:00 PM",
        checked: false,
    },
    {
        id: 4,
        orderId: "INV_000073",
        activity: "Grocery Purchase",
        icon: groceryPurchase,
        price: 50200,
        currencySymbol: "$",
        status: "In Progress",
        date: "14 Apr, 2026 09:15 PM",
        checked: true,
    },
    {
        id: 5,
        orderId: "INV_000073",
        activity: "Software License",
        icon: softwareLicense,
        price: 15900,
        currencySymbol: "$",
        status: "Completed",
        date: "10 Apr, 2026 06:00 AM",
        checked: false,
    },
    {
        id: 6,
        orderId: "INV_000072",
        activity: "Mobile App Purchase",
        icon: mobileAppPurchase,
        price: 18750,
        currencySymbol: "$",
        status: "Pending",
        date: "09 Apr, 2026 08:20 AM",
        checked: false,
    },
    {
        id: 7,
        orderId: "INV_000071",
        activity: "Hotel Booking",
        icon: hotelBooking,
        price: 28900,
        currencySymbol: "$",
        status: "Completed",
        date: "08 Apr, 2026 07:10 PM",
        checked: false,
    },
    {
        id: 8,
        orderId: "INV_000070",
        activity: "Flight Ticket Booking",
        icon: flightTicketBooking,
        price: 36450,
        currencySymbol: "$",
        status: "Pending",
        date: "07 Apr, 2026 04:55 PM",
        checked: false,
    },
    {
        id: 9,
        orderId: "INV_000069",
        activity: "Software License",
        icon: softwareLicense,
        price: 11200,
        currencySymbol: "$",
        status: "Completed",
        date: "06 Apr, 2026 11:25 AM",
        checked: false,
    },
    {
        id: 10,
        orderId: "INV_000068",
        activity: "Grocery Purchase",
        icon: groceryPurchase,
        price: 9400,
        currencySymbol: "$",
        status: "In Progress",
        date: "05 Apr, 2026 09:40 AM",
        checked: false,
    },
]


// Chart data

export const chartData = [
    { month: "Jan", profit: 25000, loss: 28000 },
    { month: "Feb", profit: 40000, loss: 20000 },
    { month: "Mar", profit: 30000, loss: 20000 },
    { month: "Apr", profit: 38000, loss: 25000 },
    { month: "May", profit: 22000, loss: 42000 },
    { month: "Jun", profit: 45000, loss: 20000 },
    { month: "Jul", profit: 18000, loss: 36000 },
    { month: "Aug", profit: 30000, loss: 13000 },
    { month: "Sep", profit: 12000, loss: 34000 },
    { month: "Oct", profit: 39000, loss: 16000 },
    { month: "Nov", profit: 15000, loss: 41000 },
    { month: "Dec", profit: 47000, loss: 19000 },
];

// export const activities = [
//     { id: "INV-000076", activity: "Mobile App Purchase", icon: "smartphone", price: 25500, status: "Completed", date: "17 Apr, 2026 03:45 PM" },
//     { id: "INV-000075", activity: "Hotel Booking", icon: "hotel", price: 32750, status: "Pending", date: "15 Apr, 2026 11:30 AM" },
//     { id: "INV-000074", activity: "Flight Ticket Booking", icon: "plane", price: 40200, status: "Completed", date: "15 Apr, 2026 12:00 PM" },
//     { id: "INV-000073", activity: "Grocery Purchase", icon: "shopping", price: 50200, status: "In Progress", date: "14 Apr, 2026 09:15 PM" },
//     { id: "INV-000073", activity: "Software License", icon: "code", price: 15900, status: "Completed", date: "10 Apr, 2026 06:00 AM" },
// ];

// export const cards = [
//     { id: 1, last4: "6782", expiry: "09/29", cvv: "611", type: "dark", active: true },
//     { id: 2, last4: "4356", expiry: "12/28", cvv: "***", type: "orange", active: true },
// ];
