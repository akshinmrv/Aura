import { Activity, BarChart3, Box, Users, LucideIcon } from "lucide-react";

export interface User {
    id: string;
    name: string;
    role: string;
    avatar: string;
}

export interface Stat {
    id: string;
    label: string;
    value: string;
    trend: string;
    trendDirection: "up" | "down" | "neutral";
    icon: LucideIcon; // Lucide Icon Type
    color: "indigo" | "emerald" | "amber" | "rose";
}

export interface ActivityItem {
    id: string;
    action: string;
    target: string;
    timestamp: string;
    user: string;
}

export const MOCK_USER: User = {
    id: "u1",
    name: "Akshin",
    role: "Commander",
    avatar: "/avatars/commander.png", // We'll handle image optimization later
};

export const STATS_DATA: Stat[] = [
    {
        id: "s1",
        label: "Total Revenue",
        value: "$124,592",
        trend: "+12.5%",
        trendDirection: "up",
        icon: Box,
        color: "indigo",
    },
    {
        id: "s2",
        label: "Active Drones",
        value: "42",
        trend: "+4",
        trendDirection: "up",
        icon: Activity,
        color: "emerald",
    },
    {
        id: "s3",
        label: "Mission Hours",
        value: "8,943",
        trend: "+5.2%",
        trendDirection: "up",
        icon: BarChart3,
        color: "amber",
    },
    {
        id: "s4",
        label: "Fleet Usage",
        value: "85%",
        trend: "-2.1%",
        trendDirection: "down",
        icon: Users,
        color: "rose",
    },
];

export const ACTIVITY_DATA: ActivityItem[] = [
    {
        id: "a1",
        action: "Deployed",
        target: "Drone Unit X-99",
        timestamp: "2 mins ago",
        user: "System",
    },
    {
        id: "a2",
        action: "Updated",
        target: "Flight Path B-12",
        timestamp: "15 mins ago",
        user: "Akshin",
    },
    {
        id: "a3",
        action: "Alert",
        target: "Weather Warning",
        timestamp: "1 hour ago",
        user: "Sensors",
    },
    {
        id: "a4",
        action: "Maintenance",
        target: "Unit Alpha",
        timestamp: "3 hours ago",
        user: "Engineering",
    },
];

export interface DroneLocation {
    id: string;
    lat: number;
    lng: number;
    status: "active" | "returning" | "maintenance";
}

export const DRONE_LOCATIONS: DroneLocation[] = [
    { id: "d1", lat: 40.7128, lng: -74.0060, status: "active" }, // New York
    { id: "d2", lat: 51.5074, lng: -0.1278, status: "active" },  // London
    { id: "d3", lat: 35.6762, lng: 139.6503, status: "returning" }, // Tokyo
    { id: "d4", lat: -33.8688, lng: 151.2093, status: "active" }, // Sydney
    { id: "d5", lat: 55.7558, lng: 37.6173, status: "maintenance" }, // Moscow
    { id: "d6", lat: 25.2048, lng: 55.2708, status: "active" }, // Dubai
    { id: "d7", lat: 1.3521, lng: 103.8198, status: "active" }, // Singapore
    { id: "d8", lat: -23.5505, lng: -46.6333, status: "returning" }, // Sao Paulo
    { id: "d9", lat: 48.8566, lng: 2.3522, status: "active" }, // Paris
    { id: "d10", lat: 37.7749, lng: -122.4194, status: "active" }, // San Francisco
];
