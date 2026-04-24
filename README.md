# ShipSathi - Courier Rate Aggregator & Shipping Intelligence Platform

**Design Link:** [Figma Design](https://www.figma.com/design/V4dFQRdvATMqSQMHiPK6qd/Untitled?node-id=305-8&t=PQorFTSV0mRWlbkF-1)

## 🚀 Problem Statement

E-commerce sellers, D2C brands, and small-to-medium logistics teams face significant inefficiencies in selecting the most cost-effective and reliable courier service for each shipment.

Currently, businesses rely on multiple courier partners (typically 5–10 providers such as Delhivery, Blue Dart, DTDC, etc.), each offering different pricing structures, delivery timelines, and service quality. However, there is no unified platform that provides real-time, standardized comparison across these courier services.

### Key Challenges:
1. **Time-Consuming Manual Process:** Sellers spend significant time comparing courier rates for each shipment.
2. **Complex Pricing Structures:** Multiple variables (zone, weight, volumetric weight, surcharges) make accurate calculation difficult.
3. **Lack of Real-Time Aggregation:** No centralized system to fetch and compare live courier rates.
4. **Suboptimal Decision-Making:** Sellers often choose non-optimal couriers, leading to higher shipping costs or delays.
5. **High Operational Costs:** Inefficient courier selection results in increased logistics expenses.
6. **Poor Scalability:** Manual workflows do not scale with increasing order volumes.
7. **Limited Data Insights:** Sellers lack visibility into courier performance, cost trends, and optimization opportunities.

### Impact:
- 30–60 minutes wasted daily per seller.
- 15–25% higher shipping costs due to poor decisions.
- Increased delivery delays and customer dissatisfaction.
- Higher Return-to-Origin (RTO) rates.
- Reduced operational efficiency and scalability.

---

## ✨ Solution

**ShipSathi** is a "Courier Rate Aggregator & Shipping Intelligence Platform" that automates courier selection and provides real-time rate comparison.

### Core Features:
- **Real-Time Rate Comparison:** Input pickup location, delivery location, weight, and dimensions to fetch live rates from multiple APIs.
- **Automated Courier Recommendation (AI-Based):** Suggests the best courier based on lowest cost, fastest delivery, or highest success rate.
- **Volumetric Weight & Pricing Engine:** Automatically calculates actual vs. volumetric weight and applies correct pricing logic.
- **Bulk Shipment Processing:** Upload CSVs for large-scale operations and auto-assign optimal couriers.
- **Cost Analytics Dashboard:** Track monthly spend, cost trends, and savings achieved.
- **Courier Performance Tracking:** Monitor delivery success rates, average delivery time, and RTO percentages.
- **Smart Rule Engine:** Define custom rules (e.g., "Use cheapest courier under ₹200").
- **API Integration Layer:** Normalized pricing formats across multiple courier partners.
- **Centralized Shipment Management:** Create, track, and manage shipments in one dashboard.
- **Cost Optimization Engine:** Suggest better strategies based on historical data.

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** Vanilla CSS / Tailwind CSS (Optional based on user choice)
- **State Management:** Context API / Redux Toolkit
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Data Fetching:** Axios / TanStack Query (React Query)
- **Charts:** Recharts / Chart.js

### Backend (Proposed)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB / PostgreSQL
- **Authentication:** JSON Web Tokens (JWT)

---

## 🎨 Design Aesthetics

The platform follows a modern, clean, and professional design language optimized for efficiency and readability.

- **Color Palette:**
  - **Primary:** Vibrant Orange (`#F97316`) for primary actions and active states.
  - **Background:** Soft Off-White/Light Gray (`#F9FAFB`) for a clean look.
  - **Surfaces:** Pure White (`#FFFFFF`) cards with subtle elevation shadows.
  - **Typography:** Dark Charcoal (`#1F2937`) for high contrast and readability.
- **Typography:** Modern Sans-serif (Inter/Poppins family) with a clear hierarchy.
- **UI Style:**
  - **Card-Based Interface:** Information is segmented into rounded, elevated cards.
  - **Dashboard Layout:** Sidebar-based navigation for seamless multi-tasking.
  - **Checklist-Ready:** Clean input fields and prominent Call-to-Action (CTA) buttons.

---

## 📂 Frontend Folder Structure

```text
ship-sathi-frontend/
├── public/
│   ├── assets/           # Static images, logos, vectors
│   └── favicon.ico
├── src/
│   ├── api/              # Axios configurations and API service calls
│   │   ├── courierApi.js
│   │   └── analyticsApi.js
│   ├── components/       # Reusable UI components
│   │   ├── common/       # Buttons, Modals, Inputs, Cards
│   │   ├── layout/       # Navbar, Sidebar, Footer, PageWrapper
│   │   └── features/     # Component logic for specific features (RateTable, WeightCalc)
│   ├── config/           # App configuration and constants (Environment vars, endpoints)
│   ├── context/          # React Context providers for global state
│   ├── hooks/            # Custom hooks for reusable logic (useRates, useAuth)
│   ├── pages/            # Page-view components
│   │   ├── Auth/         # Login & Registration
│   │   ├── Dashboard/    # Main Analytics & Overview
│   │   ├── RateCompare/  # Live Rate Comparison Tool
│   │   ├── Shipments/    # Order Management & Tracking
│   │   └── Settings/     # Rule Engine & Profile
│   ├── styles/           # Global styles, variables, and design system
│   ├── utils/            # Helper functions (weight converter, date formatter)
│   ├── App.jsx           # Main application router and shell
│   └── main.jsx          # Application entry point
├── .env                  # Environment configuration
├── .gitignore
├── package.json
└── vite.config.js        # Vite build configuration
```

---

## 🎯 Target Users
- E-commerce sellers
- D2C brands
- Logistics managers
- Warehouse operators