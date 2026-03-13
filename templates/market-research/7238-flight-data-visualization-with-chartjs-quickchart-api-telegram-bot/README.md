# 📊 Flight data visualization with Chart.js, QuickChart API & Telegram Bot

> ⚡ **1,004 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

# 📊 Real-Time Flight Data Analytics Bot with Dynamic Chart Generation via Telegram

## 🚀 Template Overview

This advanced n8n workflow creates an intelligent Telegram bot that transforms raw CSV flight data into stunning, interactive visualizations. Users can generate professional charts on-demand through a conversational interface, making data analytics accessible to anyone via messaging.

**Key Innovation**: Combines real-time data processing, Chart.js visualization engine, and Telegram's messaging platform to deliver instant business intelligence insights.

## 🎯 What This Template Does

Transform your flight booking data into actionable insights with four powerful visualization types:

- **📈 Bar Charts**: Top 10 busiest airlines by flight volume
- **🥧 Pie Charts**: Flight duration distribution (Short/Medium/Long-haul)
- **🍩 Doughnut Charts**: Price range segmentation with average pricing
- **📊 Line Charts**: Price trend analysis across flight durations

Each chart includes auto-generated insights, percentages, and key business metrics delivered instantly to users' phones.

## 🏗️ Technical Architecture

### Core Components

1. **Telegram Webhook Trigger**: Captures user interactions and button clicks
2. **Smart Routing Engine**: Conditional logic for command detection and chart selection
3. **CSV Data Pipeline**: File reading → parsing → JSON transformation
4. **Chart Generation Engine**: JavaScript-powered data processing with Chart.js
5. **Image Rendering Service**: QuickChart API for high-quality PNG generation
6. **Response Delivery**: Binary image transmission back to Telegram

### Data Flow Architecture

```
User Input → Command Detection → CSV Processing → Data Aggregation → 
Chart Configuration → Image Generation → Telegram Delivery
```

## 🛠️ Setup Requirements

### Prerequisites
- **n8n instance** (self-hosted or cloud)
- **Telegram Bot Token** from @BotFather
- **CSV dataset** with flight information
- **Internet connectivity** for QuickChart API

### Dataset Source
This template uses the **Airlines Flights Data** dataset from GitHub:
🔗 **Dataset**: [Airlines Flights Data by Rohit Grewal](https://github.com/dataminexcode/n8n-workflow/blob/main/Real-Time%20Flight%20Data%20Analytics%20Bot%20with%20Dynamic%20Chart%20Generation%20via%20Telegram/data)

### Required Data Schema
Your CSV file should contain these columns:
```csv
airline,flight,source_city,departure_time,arrival_time,duration,price,class,destination_city,stops
```

### File Structure
```
/data/
  └── flights.csv (download from GitHub dataset above)
```

## ⚙️ Configuration Steps

### 1. Telegram Bot Setup
1. Create a new bot via @BotFather on Telegram
2. Copy your bot token
3. Configure the Telegram Trigger node with your token
4. Set webhook URL in your n8n instance

### 2. Data Preparation
1. Download the dataset from [Airlines Flights Data](https://github.com/dataminexcode/n8n-workflow/blob/main/Real-Time%20Flight%20Data%20Analytics%20Bot%20with%20Dynamic%20Chart%20Generation%20via%20Telegram/data)
2. Upload the CSV file to `/data/flights.csv` in your n8n instance
3. Ensure UTF-8 encoding
4. Verify column headers match the dataset schema
5. Test file accessibility from n8n

### 3. Workflow Activation
1. Import the workflow JSON
2. Configure all Telegram nodes with your bot token
3. Test the `/start` command
4. Activate the workflow

## 🔧 Technical Implementation Details

### Chart Generation Process

**Bar Chart Logic**:
```javascript
// Aggregate airline counts
const airlineCounts = {};
flights.forEach(flight =&gt; {
  const airline = flight.airline || 'Unknown';
  airlineCounts[airline] = (airlineCounts[airline] || 0) + 1;
});

// Generate Chart.js configuration
const chartConfig = {
  type: 'bar',
  data: { labels, datasets },
  options: { responsive: true, plugins: {...} }
};
```

**Dynamic Color Schemes**:
- Bar Charts: Professional blue gradient palette
- Pie Charts: Duration-based color coding (light→dark blue)
- Doughnut Charts: Price-tier specific colors (green→purple)
- Line Charts: Trend-focused red gradient with smooth curves

### Performance Optimizations

1. **Efficient Data Processing**: Single-pass aggregations with O(n) complexity
2. **Smart Caching**: QuickChart handles image caching automatically
3. **Minimal Memory Usage**: Stream processing for large datasets
4. **Error Handling**: Graceful fallbacks for missing data fields

### Advanced Features

**Auto-Generated Insights**:
- Statistical calculations (percentages, averages, totals)
- Trend analysis and pattern detection
- Business intelligence summaries
- Contextual recommendations

**User Experience Enhancements**:
- Reply keyboards for easy navigation
- Visual progress indicators
- Error recovery mechanisms
- Mobile-optimized chart dimensions (800x600px)

## 📈 Use Cases & Business Applications

### Airlines & Travel Companies
- **Fleet Analysis**: Monitor airline performance and market share
- **Pricing Strategy**: Analyze competitor pricing across routes
- **Operational Insights**: Track duration patterns and efficiency

### Data Analytics Teams
- **Self-Service BI**: Enable non-technical users to generate reports
- **Mobile Dashboards**: Access insights anywhere via Telegram
- **Rapid Prototyping**: Quick data exploration without complex tools

### Business Intelligence
- **Executive Reporting**: Instant charts for presentations
- **Market Research**: Compare industry trends and benchmarks
- **Performance Monitoring**: Track KPIs in real-time

## 🎨 Customization Options

### Adding New Chart Types
1. Create new Switch condition
2. Add corresponding data processing node
3. Configure Chart.js options
4. Update user interface menu

### Data Source Extensions
- Replace CSV with database connections
- Add real-time API integrations
- Implement data refresh mechanisms
- Support multiple file formats

### Visual Customizations
```javascript
// Custom color palette
backgroundColor: ['#your-colors'],
// Advanced styling
borderRadius: 8,
borderSkipped: false,
// Animation effects
animation: { duration: 2000, easing: 'easeInOutQuart' }
```

## 🔒 Security & Best Practices

### Data Protection
- Validate CSV input format
- Sanitize user inputs
- Implement rate limiting
- Secure file access permissions

### Error Handling
- Graceful degradation for API failures
- User-friendly error messages
- Automatic retry mechanisms
- Comprehensive logging

## 📊 Expected Outputs

### Sample Generated Insights
- "✈️ Vistara leads with 350+ flights, capturing 23.4% market share"
- "📈 Long-haul flights dominate at 61.1% of total bookings"
- "💰 Budget category (₹0-10K) represents 47.5% of all bookings"
- "📊 Average prices peak at ₹14K for 6-8 hour duration flights"

### Performance Metrics
- **Response Time**: &lt;3 seconds for chart generation
- **Image Quality**: 800x600px high-resolution PNG
- **Data Capacity**: Handles 10K+ records efficiently
- **Concurrent Users**: Scales with n8n instance capacity

## 🚀 Getting Started

1. **Download** the workflow JSON
2. **Import** into your n8n instance
3. **Configure** Telegram bot credentials
4. **Upload** your flight data CSV
5. **Test** with `/start` command
6. **Deploy** and share with your team

## 💡 Pro Tips

- **Data Quality**: Clean data produces better insights
- **Mobile First**: Charts are optimized for mobile viewing
- **Batch Processing**: Handles large datasets efficiently
- **Extensible Design**: Easy to add new visualization types

---

**Ready to transform your data into actionable insights? Import this template and start generating professional charts in minutes!** 🚀

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Read/Write Files from Disk, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
