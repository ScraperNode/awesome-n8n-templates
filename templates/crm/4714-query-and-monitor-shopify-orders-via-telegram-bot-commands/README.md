# 🤝 Query and monitor Shopify orders via Telegram bot commands

> ⚡ **2,098 views** · 🤝 [CRM & Sales Operations](../)

## Description

This n8n workflow integrates Shopify order management with Telegram, allowing you to query open orders and order details directly through Telegram chat commands. It provides an interactive way to monitor your Shopify store orders using Telegram as an interface.

## Key Features

1. **Telegram Trigger**: Listens for messages and callback queries from your Telegram bot.
2. **Switch Node**: Routes incoming Telegram messages to different flows based on message content:
	 - **/orders** command to fetch all open orders
	- Callback queries starting with /order_ to fetch details of a specific order
1. Shopify Get Orders: Retrieves all open orders from your Shopify store using your Shopify API credentials.
2. Conditional Check (If Node): Determines if there are any open orders; branches accordingly:
	- If orders exist, prepare an interactive Telegram message with a list of orders.1
	- If no orders exist, send a “No Order” message.
5. Orders Code Node: Formats the list of open orders into a Telegram message with inline buttons. Each button corresponds to an order and sends a callback data containing the order ID.
6. Get Order Details: When a user selects an order button, the workflow extracts the order ID from the callback data, fetches detailed order information from Shopify, and formats the order items into a readable message.
7. Send Messages to Telegram: Sends formatted messages back to Telegram:
	-	The list of open orders with clickable buttons.
	-	Detailed information about a selected order.
	-	“No Order” notification if there are no open orders.

## How It Works
- A Telegram user sends /orders to the bot.
- The workflow fetches open orders from Shopify and sends a message with buttons listing each order.
- When a user clicks an order button, the workflow fetches and displays detailed information about that specific order in Telegram.
- If there are no open orders, the bot replies accordingly.

## Setup Instructions
1. Create a Telegram Bot:
	-	Use @BotFather on Telegram to create a bot and get the bot token.
3. Obtain Shopify API Credentials:
	-	Create a private app in your Shopify admin dashboard with permission to read orders.
	-	Obtain the API key and access token.
6. Configure n8n Credentials:
	-	Add your Telegram bot token as Telegram API credentials in n8n.
	-	Add your Shopify API credentials in n8n Shopify credentials.
9. Import the Workflow:
	-	Import this workflow into your n8n instance.
	-	Update the Telegram and Shopify credential nodes to use your credentials.
12. Set Webhook URLs:
	-	Ensure your Telegram bot webhook is set correctly to receive messages.
	-	n8n webhook URLs should be publicly accessible.

1. Test the Workflow:
	-	Send /orders to your Telegram bot to verify it retrieves and lists open orders.

## Customization Guidance
- Modify Commands: Update the Switch node to add more Telegram commands or change existing ones.
- Change Message Formats: Edit the Code nodes to customize how order lists and details appear.
- Expand Shopify Integration: Add nodes to handle other Shopify operations like updating orders, managing products, etc.
- Multi-User Support: Adapt the workflow to handle multiple Telegram chat IDs dynamically.

## Security and Implementation Notes
- The native **Telegram node in n8n has limitations:** it does not support sending **dynamic inline keyboard arrays** in JSON format, which is essential for displaying a variable number of buttons depending on how many orders are retrieved from Shopify.
- To overcome this, this workflow uses the **HTTP Request node** to call Telegram’s API directly, allowing full flexibility to send dynamic inline keyboards as JSON objects. (I will make an update once Telegram Node support dynamic inline keyboards).
- **Security Considerations:**
	- Always store your Telegram bot token securely in n8n credentials and never expose it in the HTTP Request node’s URL or body directly.
	- Use environment variables or n8n credentials to inject tokens safely.
	- Be mindful of Telegram API rate limits and add error handling in your workflow.
- While using HTTP Request nodes increases flexibility, it also **requires careful management of request payloads and authentication,** as opposed to the built-in Telegram node which abstracts much of this complexity.

## Benefits
- Quickly access Shopify order data without leaving Telegram.
- Interactive inline buttons improve user experience.
- Automated, real-time integration between Shopify and Telegram.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Shopify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
