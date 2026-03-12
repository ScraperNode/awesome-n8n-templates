# 📱 Automated Indonesian weather alerts with BMKG data & Telegram notifications

> ⚡ **66 views** · 📱 [Social Media & Email Marketing](../)

## Description

### 🌤️ Automated Indonesian Weather Monitoring with Smart Notifications

Stay ahead of weather changes with this comprehensive monitoring system that fetches real-time data from Indonesia's official meteorological agency (BMKG) and delivers beautiful, actionable weather reports directly to your Telegram.

## ⚡ What This Workflow Does

This intelligent weather monitoring system automatically:
- **Fetches Official Data**: Connects to BMKG's public weather API for accurate Indonesian forecasts
- **Smart Processing**: Analyzes temperature, humidity, precipitation, and wind conditions
- **Risk Assessment**: Generates contextual warnings for extreme weather conditions
- **Automated Alerts**: Sends formatted weather reports to Telegram every 6 hours
- **Error Handling**: Includes robust error detection and notification system

## 🎯 Perfect For

- **Local Communities**: Keep neighborhoods informed about weather changes
- **Business Operations**: Plan outdoor activities and logistics based on weather
- **Emergency Preparedness**: Receive early warnings for extreme weather conditions
- **Personal Planning**: Never get caught unprepared by sudden weather changes
- **Agricultural Monitoring**: Track conditions affecting farming and outdoor work

## 🛠️ Key Features

- **🔄 Automated Scheduling**: Runs every 6 hours with manual trigger option
- **📊 Comprehensive Reports**: Current conditions + 6-hour detailed forecasts
- **⚠️ Smart Warnings**: Contextual alerts for temperature extremes and rain probability
- **🎨 Beautiful Formatting**: Rich Telegram messages with emojis and structured data
- **🔧 Error Recovery**: Automatic error handling with notification system
- **📍 Location-Aware**: Supports any Indonesian location via BMKG regional codes

## 📋 What You'll Get

Each weather report includes:
- Current temperature, humidity, and weather conditions
- 6-hour detailed forecast with timestamps
- Wind speed and direction information
- Rain probability and visibility data
- Personalized warnings and recommendations
- Average daily statistics and trends

## 🚀 Setup Requirements

- **Telegram Bot Token**: Create a bot via @BotFather
- **Chat ID**: Your personal or group chat identifier
- **BMKG Location Code**: Regional administrative code for your area

## 💡 Pro Tips

- Customize the location by changing the `adm4` parameter in the HTTP request
- Adjust scheduling interval based on your monitoring needs
- Modify warning thresholds in the processing code
- Add multiple chat IDs for broader distribution
- Integrate with other n8n workflows for advanced automation

## 🌟 Why Choose This Template

- **Production Ready**: Includes comprehensive error handling and logging
- **Highly Customizable**: Easy to modify for different locations and preferences  
- **Official Data Source**: Uses Indonesia's trusted meteorological service
- **User-Friendly Output**: Clean, readable reports perfect for daily use
- **Scalable Design**: Easily extend for multiple locations or notification channels

Transform your weather awareness with this professional-grade monitoring system that brings Indonesia's official weather data right to your fingertips!

***

**Keywords**: weather monitoring, BMKG API, Telegram notifications, Indonesian weather, automated alerts, meteorological data, weather forecasting, n8n automation, weather API integration

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
