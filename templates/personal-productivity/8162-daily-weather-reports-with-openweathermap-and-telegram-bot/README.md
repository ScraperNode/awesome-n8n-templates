# ⚡ Daily weather reports with OpenWeatherMap and Telegram Bot

> ⚡ **1,345 views** · ⚡ [Personal Productivity](../)

## Description

Get automated weather updates delivered directly to your Telegram chat at scheduled intervals. This workflow fetches current weather data from OpenWeatherMap and sends formatted weather reports via a Telegram bot.

## Use Cases

- Daily morning weather briefings
- Regular weather monitoring for outdoor activities
- Automated weather alerts for specific locations
- Personal weather assistant for travel planning

## Prerequisites

Before setting up this workflow, ensure you have:

- An OpenWeatherMap API account (free tier available)
- A Telegram bot token
- Your Telegram chat ID
- n8n instance (cloud or self-hosted)

## Setup Instructions

### Step 1: Create OpenWeatherMap Account
1. Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free account
2. Navigate to the API keys section in your account
3. Copy your API key (you'll need this for the workflow configuration)

### Step 2: Create Telegram Bot
1. Open Telegram and search for `@BotFather`
2. Start a chat and use the `/newbot` command
3. Follow the prompts to create your bot and get the bot token
4. Save the bot token securely

### Step 3: Get Your Telegram Chat ID
1. Start a conversation with your newly created bot
2. Send any message to the bot
3. Visit `https://api.telegram.org/bot&lt;YourBOTToken&gt;/getUpdates` in your browser
4. Look for your chat ID in the response (it will be a number like `123456789`)

### Step 4: Configure the Workflow
1. Import this workflow into your n8n instance
2. Configure each node with your credentials:

#### Schedule Trigger Node
- Set your preferred schedule (default: daily at 8:00 AM)
- Use cron expression format (e.g., `0 8 * * *` for 8 AM daily)

#### Get Weather Node
- Add your OpenWeatherMap credentials
- Update the `cityName` parameter to your desired location
- Format: `"CityName,CountryCode"` (e.g., `"London,UK"`)

#### Send a text message Node
- Add your Telegram bot credentials (bot token)
- Replace `XXXXXXX` in the `chatId` field with your actual chat ID

## Customization Options

### Location Settings
In the "Get Weather" node, modify the `cityName` parameter to change the location. You can specify:
- City name only: `"Paris"`
- City with country: `"Paris,FR"`
- City with state and country: `"Miami,FL,US"`

### Schedule Frequency
In the "Schedule Trigger" node, adjust the cron expression:
- Every 6 hours: `0 */6 * * *`
- Twice daily (8 AM & 6 PM): `0 8,18 * * *`
- Weekly on Mondays at 9 AM: `0 9 * * 1`

### Message Format
In the "Format Weather" node, you can customize the message template by modifying the `message` variable in the function code. Current format includes:
- Current temperature with "feels like" temperature
- Min/max temperatures for the day
- Weather description and precipitation
- Wind speed and direction
- Cloud coverage percentage
- Sunrise and sunset times

### Language Support
In the "Get Weather" node, change the `language` parameter to get weather descriptions in different languages:
- English: `"en"`
- Spanish: `"es"`
- French: `"fr"`
- German: `"de"`
- Polish: `"pl"`

## Troubleshooting

### Common Issues

**Weather data not updating:**
- Verify your OpenWeatherMap API key is valid and active
- Check if you've exceeded your API rate limits
- Ensure the city name format is correct

**Messages not being sent:**
- Confirm your Telegram bot token is correct
- Verify the chat ID is accurate (should be a number, not username)
- Make sure you've started a conversation with your bot

**Workflow not triggering:**
- Check if the workflow is activated (toggle switch should be ON)
- Verify the cron expression syntax is correct
- Ensure your n8n instance is running continuously

### Testing the Workflow
1. Use the "Test workflow" button to run manually
2. Check each node's output for errors
3. Verify the final message format in Telegram

## Node Descriptions

### Schedule Trigger
Automatically starts the workflow based on a cron schedule. Runs at specified intervals to fetch fresh weather data.

### Get Weather
Connects to OpenWeatherMap API to retrieve current weather conditions for the specified location.

### Format Weather
Processes the raw weather data and creates a user-friendly message with emojis and organized information.

### Send a text message
Delivers the formatted weather report to your Telegram chat using the configured bot.

## Additional Features

You can extend this workflow by:
- Adding weather alerts for specific conditions (temperature thresholds, rain warnings)
- Including weather forecasts for multiple days
- Sending reports to multiple chat recipients
- Adding location-based emoji selection
- Integrating with other notification channels (email, Slack, Discord)

## Security Notes

- Keep your API keys and bot tokens secure
- Don't share your chat ID publicly
- Consider using n8n's credential system for storing sensitive information
- Regularly rotate your API keys for better security


Special thanks to Arkadiusz, the only person who supports me in n8n mission to make automation great again.

## 🔗 Nodes Used

Cron, Function, OpenWeatherMap, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
