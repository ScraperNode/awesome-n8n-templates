# 🔧 Send Shopify shipping tracking WhatsApp notifications with full tracking info

> ⚡ **71 views** · 🔧 [Miscellaneous](../)

## Description

# Order Fulfillment & Shipping Notification System

Automatically notify customers via WhatsApp when their orders ship, with intelligent phone validation, multi-country support, and bilingual messaging including complete tracking information.

## What does this workflow do?

When you fulfill an order in Shopify, this workflow instantly updates your database, validates the customer's phone number across 23+ countries, and sends a professional WhatsApp notification with full tracking details in their preferred language.

### Key features:
- 🌍 **23+ Country Phone Validation** - Automatically detects and formats phone numbers for GCC, MENA, and international customers
- 📦 **Complete Tracking Info** - Includes tracking number, courier name, and clickable tracking URL
- 🌐 **Smart Bilingual Messaging** - Arabic and English with luxury brand tone
- 💾 **Real-time Database Sync** - Updates order status and shipping details instantly
- 🔒 **Test Number Protection** - Blocks notifications to development phone numbers
- ✨ **Personalized Messages** - Addresses customers by first name
- ⏱️ **Delivery Expectations** - Communicates clear 7-12 business day timeline
- 🎯 **International Format** - Handles phone numbers with automatic country code detection

## Setup Requirements

### Integrations Needed:
1. **Shopify** - For order fulfillment webhooks
2. **PostgreSQL** - For order and customer data storage
3. **WhatsApp Business API** - For sending notifications via Facebook Graph API

### Credentials Required:
- Shopify Access Token (with fulfillment webhook permissions)
- PostgreSQL database credentials
- WhatsApp Business API Bearer Token (Facebook Graph API v18.0)

## How to Use

1. **Import the workflow** into your n8n instance
2. **Configure credentials**:
   - Add your Shopify store access token
   - Connect your PostgreSQL database
   - Add your WhatsApp Business API credentials
3. **Update test phone numbers** in filter nodes (If10 and If11) with your actual test numbers
4. **Customize brand name** in WhatsApp message templates if needed (currently "" / "")
5. **Activate the workflow** to start sending shipping notifications

## Workflow Structure

### 1. Trigger (Shopify Webhook)
Listens for `fulfillments/create` events when orders are marked as shipped in Shopify

### 2. Update Order Status
Updates PostgreSQL database with:
- Status changed to 'shipped'
- Shipping company name
- Tracking number

### 3. Customer Lookup
Retrieves customer record from database using phone number from fulfillment data

### 4. Phone Validator (Code Node)
Intelligent phone number formatting:
- Detects country from shipping address
- Validates and cleans phone number
- Adds appropriate country code if missing
- Supports 23 countries across GCC, MENA, and international markets
- Ensures proper international format (+CountryCode)

### 5. Get Customer Preferences
Retrieves language preference and first name for personalization

### 6. Language Detection
Routes workflow based on customer's preferred language (Arabic vs. English)

### 7. Test Number Filter
Prevents notifications to internal/development phone numbers

### 8. WhatsApp Notification
Sends comprehensive shipping notification with tracking details in customer's language

## Supported Countries & Codes

### GCC Region:
- 🇴🇲 Oman (968)
- 🇦🇪 UAE (971)
- 🇸🇦 Saudi Arabia (966)
- 🇰🇼 Kuwait (965)
- 🇶🇦 Qatar (974)
- 🇧🇭 Bahrain (973)

### MENA Region:
- 🇯🇴 Jordan (962)
- 🇪🇬 Egypt (20)
- 🇮🇶 Iraq (964)
- 🇱🇧 Lebanon (961)
- 🇸🇾 Syria (963)
- 🇵🇸 Palestine (970)
- 🇾🇪 Yemen (967)

### International:
- 🇺🇸 USA (1)
- 🇬🇧 UK (44)
- 🇩🇪 Germany (49)
- 🇫🇷 France (33)
- 🇮🇹 Italy (39)
- 🇪🇸 Spain (34)
- 🇹🇷 Turkey (90)
- 🇮🇳 India (91)
- 🇵🇰 Pakistan (92)

## Message Templates

### Arabic Message (عربي):
```
مرحبًا [الاسم]،

يسرّنا إعلامكم بأنه تم شحن طلبكم بنجاح.
رقم الطلب: [order_id]
رقم التتبع: [tracking_number]
شركة الشحن: [courier_name]
رابط التتبع: [tracking_url]
المدة المتوقعة للتوصيل: من 7 إلى 12 يوم عمل.

يمكنكم متابعة حالة الشحنة عبر رقم التتبع، وسنحرص على إبقائكم على اطلاع حتى استلام الطلب.

مع أطيب التحيات،
```

### English Message:
```
Hello [Name],

We are pleased to inform you that your order has been shipped successfully.

Order No: [order_id]
Tracking No: [tracking_number]
Courier Company: [courier_name]
Tracking URL: [tracking_url]
Estimated delivery time: 7–12 business days.

You may track your shipment using the tracking number provided. We will continue to keep you informed until your order is delivered.

Kind regards,
```

## Database Schema Requirements

### Orders Table:
```sql
CREATE TABLE orders (
  order_id VARCHAR PRIMARY KEY,  -- Shopify order number
  status VARCHAR,                  -- Order status ('open', 'shipped', 'delivered', 'canceled')
  shipping_company VARCHAR,        -- Courier service name
  tracking_number VARCHAR,         -- Package tracking ID
  customer_id INTEGER              -- Foreign key to customers table
);
```

### Customers Table:
```sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  website_id INTEGER,              -- Shopify customer ID
  phone VARCHAR,                   -- Customer phone number
  language VARCHAR(2),             -- Preferred language ('ar' or 'en')
  first_name VARCHAR,              -- Customer first name
  last_name VARCHAR                -- Customer last name
);
```

## Phone Validator Logic

The Phone Validator node intelligently handles phone numbers:

1. **Extracts phone** from fulfillment data (checks destination.phone, shipping_address.phone, or root phone)
2. **Detects country** from destination.country_code (defaults to 'OM' if not provided)
3. **Cleans number** by removing whitespace and non-numeric characters (except +)
4. **Validates length** (minimum 5 digits required)
5. **Checks for country code** in the number
6. **Adds country code** automatically if missing based on shipping country
7. **Ensures + prefix** for international format
8. **Returns**:
   - `phone`: Formatted number with country code (+XXX)
   - `original_phone`: Raw input for reference
   - `country_code`: ISO country code
   - `validation_status`: 'success' or 'empty_or_invalid'

## Customization Tips

- **Add more countries**: Extend the `countryCodes` object in Phone Validator node
- **Change brand name**: Update "" / "" in WhatsApp message nodes
- **Adjust delivery time**: Modify "7–12 business days" to match your actual shipping times
- **Add more languages**: Create additional language detection branches (e.g., French, Spanish)
- **Include product details**: Extend database query to fetch order items and include in message
- **Add delivery date estimates**: Calculate and include specific delivery date ranges
- **Email notifications**: Add email nodes for customers who prefer email
- **SMS fallback**: Add SMS nodes for customers without WhatsApp

## Use Cases

- E-commerce stores shipping to multiple countries
- Luxury brands requiring premium communication
- Businesses with Arabic and English speaking customers
- International retailers with GCC and MENA presence
- Multi-channel sellers needing unified shipping notifications
- Stores using various courier services (DHL, FedEx, Aramex, etc.)

## Error Handling

- **Empty phone numbers**: Workflow marks as 'empty_or_invalid' and skips notification
- **Invalid formats**: Phone validator attempts to fix common issues
- **Missing data**: Uses fallback values (e.g., 'OM' for country, 'en' for language)
- **SQL injection protection**: Single quotes escaped in database queries
- **Test number blocking**: Prevents accidental notifications during testing

## Performance Notes

- **Execution time**: ~2-3 seconds per order
- **Database queries**: 3 total (1 UPDATE, 2 SELECT)
- **API calls**: 1 WhatsApp message per order
- **Scalability**: Handles concurrent fulfillments independently
- **Rate limits**: WhatsApp Business API applies standard rate limits

## Technical Notes

- WhatsApp API Version: v18.0
- Phone API format: Country code without '+' (e.g., 962798087441)
- Database: PostgreSQL with prepared statements
- Default country: Oman (+968)
- Default language: English if not specified
- Workflow processes one fulfillment at a time (runOnceForEachItem)

---

**Tags:** #shopify #whatsapp #fulfillment #shipping #tracking #bilingual #arabic #english #phone-validation #ecommerce #notifications #international

## 🔗 Nodes Used

HTTP Request, Postgres, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
