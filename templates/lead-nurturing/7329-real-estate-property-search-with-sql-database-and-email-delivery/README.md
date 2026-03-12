# 💬 Real estate property search with SQL database and email delivery

> ⚡ **2,466 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**Transform property searches into personalized experiences! This powerful automation delivers dream home matches straight to clients' inboxes with professional CSV reports - all from a simple web form.**

## 🚀 What this workflow does

Create a complete real estate search experience that works 24/7:

✨ **Smart Web Form** - Beautiful property search form captures client preferences  
🧠 **Dynamic SQL Builder** - Intelligently creates optimized queries from user input  
⚡ **Lightning Database Search** - Scans 1000+ properties in milliseconds  
📊 **Professional CSV Export** - Excel-ready reports with complete property details  
📧 **Automated Email Delivery** - Personalized emails with property previews and attachments  

### 🎯 Perfect for:
- **Real Estate Agents** - Generate leads and impress clients with instant service
- **Property Managers** - Automate tenant matching and recommendations  
- **Brokerages** - Provide 24/7 self-service property discovery
- **Developers** - Showcase available properties with professional automation

## 💡 Why this workflow is a game-changer

&gt; "From property search to professional report delivery in under 30 seconds!"

- ⚡ **Instant Results**: Zero wait time for property matches
- 🎨 **Professional Output**: Beautiful emails that showcase your expertise  
- 📱 **Mobile Optimized**: Works flawlessly on all devices
- 🧠 **Smart Filtering**: Only searches criteria clients actually specify
- 📈 **Infinitely Scalable**: Handles unlimited searches simultaneously

## 📊 Real Estate Data Source

Built on authentic US market data from the [Github](https://github.com/dataminexcode/n8n-workflow/tree/main/Real%20Estate%20Property%20Search%20with%20SQL%20Database%20and%20Email%20Delivery/data):

- 🏘️ **1000+ Real Properties** across all US states
- 💰 **Actual Market Prices** from legitimate listings  
- 🏠 **Complete Property Details** (bedrooms, bathrooms, square footage, lot size)
- 📍 **Verified Locations** with accurate cities, states, and ZIP codes
- 🏢 **Broker Information** for authentic real estate context

## 🛠️ Quick Setup Guide

### Prerequisites Checklist ✅
- [ ] SQL Server database (MySQL/PostgreSQL also supported)
- [ ] Gmail account for automated emails
- [ ] n8n instance (cloud or self-hosted)
- [ ] 20 minutes setup time

### Step 1: Import Real Estate Data 📥
1. 🌟 Download the [data](https://github.com/dataminexcode/n8n-workflow/tree/main/Real%20Estate%20Property%20Search%20with%20SQL%20Database%20and%20Email%20Delivery/data)
2. 💾 Download CSV file (1000+ properties included)
3. 🗄️ Create SQL Server table with this exact schema:

```sql
CREATE TABLE [REALTOR].[dbo].[realtor_usa_price] (
    brokered_by BIGINT,
    status NVARCHAR(50),
    price DECIMAL(12,2),
    bed INT,
    bath DECIMAL(3,1),
    acre_lot DECIMAL(10,8),
    street BIGINT,
    city NVARCHAR(100),
    state NVARCHAR(50),
    zip_code INT,
    house_size INT,
    prev_sold_date NVARCHAR(50)
);
```

5. 📊 Import your CSV data into this table

### Step 2: Configure Database Connection 🔗
1. 🔐 Set up Microsoft SQL Server credentials in n8n
2. ✅ Test connection to ensure everything works
3. 🎯 Workflow is pre-configured for the table structure above

### Step 3: Gmail Setup (The Magic Touch) 📧
1. 🌐 Visit [Google Cloud Console](https://console.cloud.google.com)
2. 🆕 Create new project (or use existing)
3. 🔓 Enable Gmail API in API Library
4. 🔑 Create OAuth2 credentials (Web Application)
5. ⚙️ Add your n8n callback URL to authorized redirects
6. 🔗 Configure Gmail OAuth2 credentials in n8n
7. ✨ Authorize your Google account

### Step 4: Launch Your Property Search Portal 🚀
1. 📋 Import this workflow template (form is pre-configured)
2. 🌍 Copy your webhook URL from the Property Search Form node
3. 🔍 Test with a sample property search
4. 📨 Check email delivery with CSV attachment
5. 🎉 Go live and start impressing clients!

## 🎨 Customization Playground

### 🏷️ Personalize Your Brand
```javascript
// Customize email subjects in the Gmail node
"🏠 Exclusive Properties Curated Just for You - ${results.length} Perfect Matches!"
"✨ Your Dream Home Portfolio - Handpicked by Our Experts"
"🎯 Hot Market Alert - ${results.length} Premium Properties Inside!"
```

### 🔧 Advanced Enhancements
- **🎨 HTML Email Templates**: Create stunning visual emails with property images
- **📊 Analytics Dashboard**: Track popular searches and user engagement  
- **🔔 Smart Alerts**: Set up automated price drop notifications
- **📱 Mobile Integration**: Connect to React Native or Flutter apps
- **🤖 AI Descriptions**: Add ChatGPT for compelling property descriptions

### 🌍 Multi-Database Flexibility
```javascript
// Easy database switching
// MySQL: Replace Microsoft SQL node → MySQL node
// PostgreSQL: Swap for PostgreSQL node  
// MongoDB: Use MongoDB node with JSON queries
// Even CSV files: Use CSV reading nodes for smaller datasets
```

## 🚀 Advanced Features & Extensions

### 🔥 Pro Tips for Power Users
- **🔄 Bulk Processing**: Handle multiple searches simultaneously
- **💾 Smart Caching**: Store popular searches for lightning-fast results
- **📈 Lead Scoring**: Track which properties generate most interest
- **📅 Follow-up Automation**: Schedule nurturing email sequences

### 🎯 Integration Possibilities
- **🏢 CRM Connection**: Auto-add qualified leads to your CRM
- **📅 Calendar Integration**: Add property viewing scheduling
- **📊 Price Monitoring**: Track market trends and price changes
- **📱 Social Media**: Auto-share featured properties to social platforms
- **💬 Chat Integration**: Connect to WhatsApp or SMS for instant alerts


## 🔗 Expand Your Real Estate Automation

### 🌟 Related Workflow Ideas
- 🤖 **AI Property Valuation** - Add machine learning for price predictions
- 📊 **Market Analysis Reports** - Generate comprehensive market insights  
- 📱 **SMS Property Alerts** - Instant text notifications for hot properties
- 🏢 **Commercial Property Search** - Adapt for office and retail spaces
- 💹 **Investment ROI Calculator** - Add financial analysis for investors
- 🏘️ **Neighborhood Analytics** - Include school ratings and demographics

### 🛠️ Technical Extensions
- 📷 **Image Processing**: Auto-resize and optimize property photos
- 🗺️ **Map Integration**: Add interactive property location maps
- 📱 **Progressive Web App**: Create mobile app experience
- 🔔 **Push Notifications**: Real-time alerts for saved searches


### 🚀 Get Started Now
1. Import this workflow template
2. Configure your database and Gmail
3. Customize branding and messaging
4. Launch your professional property search portal
5. Watch client satisfaction soar!

## 🔗 Nodes Used

Microsoft SQL, Gmail, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
