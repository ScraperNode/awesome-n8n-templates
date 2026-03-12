# ⚡ Location-based triggered reminder via Telegram Bot (iOS)

> ⚡ **650 views** · ⚡ [Personal Productivity](../)

## Description

This workflow integrates iOS Shortcuts with n8n to create a simple, automatic location-based reminder system. When the user arrives at a specified location, an automation in the Shortcuts app sends a webhook trigger to n8n. If the trigger matches predefined date and time conditions, n8n sends a Telegram message reminder to the user.

This is perfect for repetitive weekly tasks like taking out the bins, customized with conditions for day and time.

## Key Features
- Location-Based Trigger: Uses iOS Shortcuts automation to start the workflow upon arrival at a specific location.
- Time and Day Validation: Logic in n8n checks current weekday and time to ensure reminders are sent only when appropriate.
- Telegram Integration: Sends reminders directly to your Telegram account using your bot.
- Minimal Setup: Uses native iOS and simple webhook setup in n8n.

## How It Works
1. iOS Shortcut Trigger: When the user arrives at a designated location, the iOS shortcut sends a GET request to the n8n webhook.
2. n8n Webhook Node: Receives the request and triggers the workflow.
3. Conditional Check: An IF node checks if the current time is after 4:00 PM and it's a Wednesday (or any other configured condition).
4. Telegram Node: If the condition passes, n8n sends a message like "Don't forget to take the bins out." to your Telegram bot.

## Setup Instructions
1. Create a Telegram Bot:
	- Use **@BotFather** to create a bot and obtain your bot token.
	- Add Telegram API credentials in n8n with your bot token.
2. Setup iOS Shortcut:
	- Open the Shortcuts app on your iPhone.
	- Go to the **Automation** tab → Tap **+** → Create Personal Automation.
	- Choose Arrive → Select a location.
	- Add action: **Get Contents of URL**.
Method: **GET**, URL: your n8n Webhook URL (e.g. https://n8n.yourdomain.com/webhook/your-path).
	-	Save the automation. (You can also test the automation by pressing the Play button)

3. Import Workflow into n8n:
	-	Load the provided workflow JSON.
	-	Set your webhook path and Telegram credentials.
	-	Adjust the logic in the IF node to your usecase. In my case, I check if today is Wednesday and after 4 PM until Midnight.

4. Expose n8n Publicly: Ensure your n8n instance is publicly accessible via HTTPS so the shortcut can reach it.

## Customization Guidance
- Change Reminder Message: Modify the text inside the Telegram node to suit different reminders.
- Add More Conditions: Extend the logic to support more days, hours, or different trigger messages.
- Add Multi-Channel Output: Send reminders via email, SMS, or Slack in addition to Telegram.
- Use More Triggers: Expand to other types of shortcut triggers (e.g. NFC tag, leaving location, time of day).

## Security and Implementation
- Webhook Protection: Avoid using easily guessable webhook URLs.
- Secure Telegram Token: Store your bot token securely in n8n credentials, not in plain workflow text.
- Limit Shortcut Scope: Only trigger the shortcut at trusted locations or with secure iCloud sync.
- Automation Permissions: Ensure your iPhone allows shortcut automations to run without confirmation.

## Benefits
- Automates repetitive location-based reminders without user interaction.
- Provides a lightweight, native solution using iOS and n8n with no extra apps.
- Keeps you on track for routine tasks like garbage days, medicine reminders, or arrival-based tasks.
- Easily extendable for multiple locations or trigger conditions.

## 🔗 Nodes Used

Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
