# 🔧 Smart irrigation scheduler with weather forecast and soil analysis

> ⚡ **195 views** · 🔧 [Miscellaneous](../)

## Description

# Smart Irrigation Scheduler with Weather Forecast and Soil Analysis

## Summary
Automated garden and farm irrigation system that uses weather forecasts and evapotranspiration calculations to determine optimal watering schedules, preventing water waste while maintaining healthy plants.

## Detailed Description
A comprehensive irrigation management workflow that analyzes weather conditions, forecasts, soil types, and plant requirements to make intelligent watering decisions. The system considers multiple factors including expected rainfall, temperature, humidity, wind speed, and days since last watering to determine if irrigation is needed and how much.

### Key Features
- **Multi-Zone Management**: Support for multiple irrigation zones with different plant and soil types
- **Weather-Based Decisions**: Uses OpenWeatherMap current conditions and 5-day forecast
- **Evapotranspiration Calculation**: Simplified Penman method for accurate water loss estimation
- **Rain Forecast Skip**: Automatically skips watering when significant rain is expected
- **Plant-Type Specific**: Different requirements for flowers, vegetables, grass, and shrubs
- **Soil Type Consideration**: Adjusts for clay, loam, and sandy soil characteristics
- **Urgency Classification**: High/medium/low priority based on moisture levels
- **Optimal Timing**: Adjusts watering time based on temperature and wind conditions
- **IoT Integration**: Sends commands to smart irrigation controllers
- **Historical Logging**: Tracks all decisions in Google Sheets

### Use Cases
- Home garden automation
- Commercial greenhouse management
- Agricultural operations
- Landscaping company scheduling
- Property management with large grounds
- Water conservation projects

### Required Credentials
- OpenWeatherMap API key
- Slack Bot Token
- Google Sheets OAuth
- IoT Hub API (optional)

### Node Count: 24 (19 functional + 5 sticky notes)

### Unique Aspects
- Uses **OpenWeatherMap** node (rarely used in templates)
- Uses **Split Out** node for loop-style processing of zones
- Uses **Filter** node for conditional routing
- Uses **Aggregate** node to collect results
- Implements **evapotranspiration calculation** using Code node
- Comprehensive **multi-factor decision logic**

### Workflow Architecture
```
[Daily Morning Check]    [Manual Override Trigger]
         |                        |
         +----------+-------------+
                    |
                    v
         [Define Irrigation Zones]
                    |
                    v
            [Split Zones] (Loop)
              /         \
             v           v
   [Get Current]   [Get 5-Day Forecast]
             \           /
              +----+----+
                   |
                   v
        [Merge Weather Data]
                   |
                   v
        [Analyze Irrigation Need]
              /         \
             v           v
   [Filter Needing]  [Aggregate All]
             \           /
              +----+----+
                   |
                   v
      [Generate Irrigation Schedule]
                   |
                   v
      [Has Irrigation Tasks?] (If)
           /              \
      Has Tasks         No Tasks
       /    |    \          |
  [Sheets][IoT][Slack]  [Log No Action]
       \    |    /          |
        +---+---+-----------+
                   |
                   v
        [Respond to Webhook]
```

### Configuration Guide
1. **Irrigation Zones**: Edit "Define Irrigation Zones" with your zone data (coordinates, plant/soil types)
2. **Water Thresholds**: Adjust `waterThreshold` per zone based on plant needs
3. **OpenWeatherMap**: Add API credentials in the weather nodes
4. **Slack Channel**: Set to your garden/irrigation channel
5. **IoT Integration**: Configure endpoint URL for your smart valve controller
6. **Google Sheets**: Connect to your logging spreadsheet

### Decision Logic
The system evaluates:
1. Expected rainfall in next 24 hours (skip if &gt;5mm expected)
2. Soil moisture estimate based on days since watering + evapotranspiration
3. Plant-specific minimum and ideal moisture levels
4. Temperature adjustments for hot days
5. Scheduled watering frequency by plant type
6. Wind speed for optimal watering time

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenWeatherMap, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
