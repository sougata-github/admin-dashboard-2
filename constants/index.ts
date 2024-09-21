import {
  FiDollarSign,
  FiLink,
  FiPaperclip,
  FiPieChart,
  FiUsers,
} from "react-icons/fi";
import { Eye, Link, Phone, Plus } from "lucide-react";
import { CardProps } from "@/components/Dashboard/StatCards";
import { TableRowProps } from "@/components/Dashboard/RecentTransactions";

export const links = [
  {
    icon: FiPieChart,
    label: "Dashboard",
    link: "/",
    selected: true,
  },
  {
    icon: FiUsers,
    label: "Team",
    link: "/",
    selected: false,
  },
  {
    icon: FiPaperclip,
    label: "Invoices",
    link: "/",
    selected: false,
  },
  {
    icon: FiLink,
    label: "Integrations",
    link: "/",
    selected: false,
  },
  {
    icon: FiDollarSign,
    label: "Finances",
    link: "/",
    selected: false,
  },
];

export const groups = [
  {
    label: "Team",
    items: [
      {
        label: "Invite Member",
        icon: Plus,
      },
      {
        label: "See Org Chart",
        icon: Eye,
      },
    ],
  },

  {
    label: "Integrations",
    items: [
      {
        label: "Link Services",
        icon: Link,
      },
      {
        label: "Contact Support",
        icon: Phone,
      },
    ],
  },
];

export const cardData: CardProps[] = [
  {
    title: "Gross Revenue",
    value: "$120,054.24",
    pillText: "2.75%",
    trend: "up",
    period: "From Jan 1st - Jul 31st",
  },
  {
    title: "Avg Order",
    value: "$27.97",
    pillText: "1.01%",
    trend: "down",
    period: "From Jan 1st - Jul 31st",
  },
  {
    title: "Trailing Year",
    value: "$278,054.24",
    pillText: "60.75%",
    trend: "up",
    period: "Previous 365 days",
  },
  {
    title: "New Customers",
    value: "1,245",
    pillText: "4.52%",
    trend: "up",
    period: "From Jan 1st - Jul 31st",
  },
];

export const userGrowthData = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 3500 },
  { month: "Mar", users: 1000 },
  { month: "Apr", users: 4500 },
  { month: "May", users: 2000 },
  { month: "Jun", users: 2000 },
];

export const customerSegmentationData = [
  { subject: "Usage", A: 120, B: 110, fullMark: 150 },
  { subject: "Repeat", A: 98, B: 130, fullMark: 150 },
  { subject: "Feedback", A: 86, B: 130, fullMark: 150 },
  { subject: "Spend", A: 99, B: 100, fullMark: 150 },
  { subject: "Frequency", A: 85, B: 90, fullMark: 150 },
  { subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

export const tableRowsData: TableRowProps[] = [
  {
    id: "83i62jfm",
    sku: "ABC123",
    date: "2024-09-21",
    price: "$100",
    order: 1,
  },
  {
    id: "ob92bcgu",
    sku: "DEF456",
    date: "2024-09-20",
    price: "$200",
    order: 2,
  },
  {
    id: "7l6uusy4",
    sku: "GHI789",
    date: "2024-09-19",
    price: "$300",
    order: 3,
  },
  {
    id: "ejg8xxg3",
    sku: "JKL012",
    date: "2024-09-18",
    price: "$400",
    order: 4,
  },
  {
    id: "0759n40d",
    sku: "MNO345",
    date: "2024-09-17",
    price: "$500",
    order: 5,
  },
];
