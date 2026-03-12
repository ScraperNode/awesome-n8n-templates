# 💬 Create a Calendly availability API endpoint for real-time scheduling data

> ⚡ **698 views** · 💬 [Support Chatbots](../)

## Description

## This n8n template implements a Calendly Availability Checker that provides real-time availability information for your Calendly event types via a simple API endpoint

## Who's it for

This template is designed for **developers, businesses, and service providers** who need to programmatically check Calendly availability. It's perfect for:

- **Web developers** building custom booking interfaces that need real-time availability data
- **Chatbot developers** who want to suggest available times to users
- **Website builders** who want to display available slots on their site
- **Integration developers** who need to check availability before creating bookings
- **Businesses** that want to build custom scheduling experiences on top of Calendly
- **Service providers** who need availability data for their own applications or dashboards

## How it works / What it does

This workflow creates a **RESTful API endpoint** that returns real-time availability information from your Calendly account. The system:

1. **Accepts webhook requests** via POST with optional parameters:
   - `event_type_uri` (optional) - Specific event type to check
   - `days_ahead` (optional, default: 7) - Number of days to check ahead

2. **Authenticates with Calendly API** using OAuth2 credentials to access your account

3. **Retrieves user information** to get your Calendly user URI and account details

4. **Lists all active event types** from your Calendly account

5. **Selects the target event type**:
   - Uses the `event_type_uri` from the request if provided
   - Otherwise defaults to the first active event type

6. **Fetches available time slots** from Calendly's availability API for the specified date range

7. **Formats the availability data** into a structured response including:
   - Total number of available slots
   - Next available slot (formatted and ISO timestamp)
   - Array of all available slots with formatted times and booking URLs
   - Slots grouped by day for easy consumption
   - Complete list of all event types

8. **Returns a comprehensive JSON response** with all availability information ready for integration

## How to set up

### 1. Configure Calendly OAuth2 Credentials
- Go to [calendly.com/integrations](https://calendly.com/integrations)
- Click "API & Webhooks"
- Create an OAuth2 application or use Personal Access Token
- In n8n, create a new credential:
  - Type: "Calendly OAuth2 API"
  - Follow the OAuth flow to connect your Calendly account
- The credential will be used by all HTTP Request nodes in the workflow

### 2. Activate the Workflow
- Open the workflow in n8n
- Ensure the Calendly OAuth2 credential is properly configured
- Activate the workflow to make the webhook endpoint available

### 3. Test the Workflow
- Use the "Test workflow" button in n8n to manually trigger it
- Or send a POST request to the webhook URL:
  ```json
  {
    "event_type_uri": "optional-event-uri",
    "days_ahead": 7
  }
  ```
- Verify the response contains availability data
- Check that the "Get Current User" node successfully retrieves your account info

### 4. Customize (Optional)
- Adjust the default `days_ahead` value in the "Set Configuration" node (currently 7 days)
- Modify the date range calculation in "Get Available Times" node
- Customize the response format in "Respond with Availability" node
- Add filtering logic to select specific event types
- Add caching to reduce API calls

## Requirements

- **Calendly account** with at least one active event type
- **n8n instance** (self-hosted or cloud)
- **Calendly OAuth2 API credentials** configured in n8n
- **Webhook access** (if using n8n cloud, webhooks are automatically available)

## How to customize the workflow

### Modify Date Range
- Edit the "Set Configuration" node to change the default `days_ahead` value
- Update the `start_time` and `end_time` calculations in "Get Available Times" node
- Currently checks from tomorrow (1 day ahead) to 7 days ahead by default
- Adjust the date calculation expressions as needed

### Filter Specific Event Types
- Modify the "Select Event Type" node to add filtering logic
- Add an IF node to check event type names or slugs
- Filter by duration, active status, or custom criteria
- Return multiple event types if needed

### Customize Response Format
- Edit the "Respond with Availability" node to change the JSON structure
- Add or remove fields from the response
- Format dates/times differently
- Include additional metadata from event types
- Add pagination for large slot lists

### Add Caching
- Insert a Code node before "Get Available Times" to check cache
- Store availability data temporarily to reduce API calls
- Set appropriate cache expiration times
- Consider using n8n's built-in cache or external storage

### Add Error Handling
- Enhance error handling in HTTP Request nodes
- Add validation for request parameters
- Return meaningful error messages in the response
- Handle cases where no event types exist
- Handle cases where no availability exists

### Integrate with Other Services
- Add nodes to log availability checks to a database
- Send availability data to analytics platforms
- Trigger notifications when availability changes
- Sync availability with external calendars
- Build availability dashboards

## Key Features

- **RESTful API endpoint** - Simple POST endpoint for checking availability
- **Real-time availability** - Fetches current availability directly from Calendly API
- **Flexible event type selection** - Supports specific event type or auto-selects first available
- **Configurable date range** - Customizable number of days to check ahead
- **Comprehensive response format** - Returns formatted and raw availability data
- **Multiple data views** - Provides slots as array, grouped by day, and summary statistics
- **Event type information** - Includes details about all available event types
- **Human-readable formatting** - Formats dates and times for easy display
- **Booking URLs included** - Each slot includes direct booking URL
- **Error resilience** - Nodes configured with `continueRegularOutput` to handle API errors gracefully

## Use Cases

- **Custom booking widgets** - Display available slots on your website without embedding Calendly
- **Chatbot integration** - Let AI assistants suggest available times to users
- **Mobile app integration** - Check availability before showing booking options in mobile apps
- **Multi-calendar systems** - Aggregate availability from multiple Calendly accounts
- **Availability dashboards** - Build internal dashboards showing team availability
- **Smart scheduling** - Check availability before sending meeting invitations
- **Booking confirmation flows** - Verify availability before processing bookings
- **Calendar sync verification** - Ensure Calendly availability matches other calendar systems
- **Analytics and reporting** - Track availability patterns and booking trends
- **Custom scheduling UIs** - Build completely custom scheduling interfaces using availability data

## Data Fields Returned

### User Information
- User name, email, scheduling URL
- User URI and organization URI

### Event Type Information
- Event type name, duration (minutes), URI
- Complete list of all active event types with details

### Availability Summary
- `has_slots` - Boolean indicating if any slots are available
- `total_slots` - Total number of available slots
- `next_available` - Human-readable formatted string of next available slot
- `next_available_iso` - ISO 8601 timestamp of next available slot

### Available Slots Array
Each slot includes:
- `start_time` - ISO 8601 timestamp
- `formatted` - Human-readable date/time string
- `booking_url` - Direct URL to book this specific slot

### Slots by Day
- Grouped object with days as keys
- Each day contains array of time slots with formatted times and booking URLs
- Format: `{ "Monday, Dec 2": [{ time: "10:00 AM", url: "..." }] }`

### Metadata
- `checked_at` - ISO timestamp of when availability was checked
- `success` - Boolean indicating successful execution

## Workflow Architecture

The workflow uses a **linear processing pattern** with data transformation at each step:

1. **Webhook Trigger** → Receives POST requests with optional parameters
2. **Set Configuration** → Extracts and sets default values for `event_type_uri` and `days_ahead`
3. **Get Current User** → Authenticates and retrieves Calendly user information
4. **Extract User Info** → Parses user data to extract URIs and account details
5. **Get Event Types** → Fetches all active event types for the user
6. **Select Event Type** → Chooses target event type (from request or first available)
7. **Get Available Times** → Queries Calendly API for available time slots
8. **Format Availability** → Transforms raw API data into structured, formatted response
9. **Respond with Availability** → Returns comprehensive JSON response to caller

## Example Scenarios

### Scenario 1: Check Default Availability
1. Developer sends POST request to webhook endpoint with empty body
2. Workflow uses default 7-day lookahead period
3. Workflow selects first active event type automatically
4. Returns availability for next 7 days with all slots formatted
5. Developer displays slots in custom booking interface

### Scenario 2: Check Specific Event Type
1. Developer sends POST request with specific `event_type_uri`
2. Workflow uses provided event type instead of default
3. Checks availability for that specific event type only
4. Returns slots grouped by day for easy calendar display
5. Developer shows availability in day-by-day calendar view

### Scenario 3: Extended Date Range
1. Developer sends POST request with `days_ahead: 30`
2. Workflow checks availability for next 30 days
3. Returns comprehensive list of all available slots
4. Developer uses data to show monthly availability view
5. User can see all available times for the next month

### Scenario 4: Chatbot Integration
1. User asks chatbot "When are you available?"
2. Chatbot calls webhook endpoint to get availability
3. Workflow returns next available slot and total count
4. Chatbot responds: "I have 15 slots available. Next available: Monday, Dec 2 at 10:00 AM"
5. Chatbot offers to book the next available slot

This template provides a powerful API endpoint for checking Calendly availability, enabling developers to build custom scheduling experiences while leveraging Calendly's robust scheduling infrastructure.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
