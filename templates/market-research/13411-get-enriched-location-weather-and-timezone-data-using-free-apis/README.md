# 📊 Get enriched location, weather, and timezone data using free APIs

> ⚡ **89 views** · 📊 [Market Research & Insights](../)

## Description

# Get location insights using free APIs

Transform GPS coordinates into rich location data using 100% free APIs. This webhook aggregates address, timezone, weather, and sun data into a single response. Perfect for location tracking apps, travel platforms, and IoT projects.

## What You'll Get

A single API endpoint returning 28 enriched data fields:
- Detailed address with components (suburb, city, state, country, postcode)
- Timezone data (name, abbreviation, current local time and date)
- Live weather (temperature, humidity, pressure, conditions with icon)
- Sun times (sunrise, sunset, day length)
- Visual assets (weather icons and country flag URLs)

## How It Works

1. Webhook receives coordinates via GET request (lat and lon parameters)
2. Parallel API calls to 4 free services (OpenStreetMap, TimezoneDB, Sunrise-Sunset, OpenWeatherMap)
3. Data merging combines all responses
4. Format and structure transforms data into 28 clean fields
5. JSON response returns enriched location data

Response time: 1 to 3 seconds

## Set Up Steps

### 1. Get Free API Keys
- OpenWeatherMap: Sign up at openweathermap.org (free tier: 60 calls/min)
- TimezoneDB: Register at timezonedb.com (free tier available)
- Note: OpenStreetMap and Sunrise-Sunset require no keys

### 2. Configure Credentials
- Add OpenWeatherMap credentials to the OpenWeatherMap node
- Replace TimezoneDB API key in HTTP Request node with your key

### 3. Activate and Test
- Activate workflow to generate webhook URL
- Test with sample: ?lat=27.1751495&lon=78.0395673

## Example Usage

**Request:**
```bash
curl "https://your-n8n.com/webhook/geo-details?lat=27.1751495&lon=78.0395673"
```

**Response:** JSON array with 28 fields including address, timezone, weather, and sun data.

## Use Cases

- Location tracking applications
- Travel and tourism platforms
- Weather dashboards
- Fleet management systems
- Geographic analytics tools
- Smart home automation
- Educational projects

## Why This Template?

- Zero cost (all APIs are free)
- Production ready with error handling
- Fast response via parallel processing
- Well documented with sticky notes
- Easy to customize and extend
- No vendor lock-in

Perfect for startups, indie developers, students, and budget-conscious projects.

## Rate Limits (Free Tiers)

- OpenStreetMap: 1 req/sec
- TimezoneDB: 1 req/sec
- OpenWeatherMap: 60 calls/min, 1M calls/month
- Sunrise-Sunset: No documented limits

Tip: Implement caching to stay within limits.

**Tags:** location, geocoding, weather, timezone, free-api, webhook, rest-api, gps

## 🔗 Nodes Used

HTTP Request, OpenWeatherMap, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
