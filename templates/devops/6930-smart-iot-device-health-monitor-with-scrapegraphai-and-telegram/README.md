# ⚙️ Smart IoT device health monitor with ScrapeGraphAI and Telegram

> ⚡ **579 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Smart IoT Device Health Monitor with AI-Powered Dashboard Analysis and Real-Time Alerting

## 🎯 Target Audience
- IT operations and infrastructure teams
- IoT system administrators and engineers
- Facility and building management teams
- Manufacturing and industrial operations managers
- Smart city and public infrastructure coordinators
- Healthcare technology administrators
- Energy and utilities monitoring teams
- Fleet and asset management professionals
- Security and surveillance system operators
- Property and facility maintenance teams

## 🚀 Problem Statement
Monitoring hundreds of IoT devices across multiple dashboards is overwhelming and reactive, often leading to costly downtime, missed maintenance windows, and system failures. This template solves the challenge of proactive IoT device monitoring by automatically analyzing device health metrics, detecting issues before they become critical, and delivering intelligent alerts that help teams maintain optimal system performance.

## 🔧 How it Works

This workflow automatically monitors your IoT dashboard every 30 minutes using AI-powered data extraction, analyzes device health patterns, calculates system-wide health scores, and sends intelligent alerts only when intervention is needed, preventing alert fatigue while ensuring critical issues are never missed.

### Key Components

1. **Schedule Trigger** - Runs every 30 minutes for continuous device monitoring
2. **AI Dashboard Scraper** - Uses ScrapeGraphAI to extract device data from any IoT dashboard without APIs
3. **Health Analyzer** - Calculates system health scores and identifies problematic devices
4. **Smart Alert System** - Sends notifications only when health drops below thresholds
5. **Telegram Notifications** - Delivers formatted alerts with device details and recommendations
6. **Activity Logger** - Maintains historical records for trend analysis and reporting

## 📊 Device Health Analysis Specifications

The template monitors and analyzes the following device metrics:

| Metric Category | Monitored Parameters | Analysis Method | Alert Triggers | Example Output |
|-----------------|---------------------|-----------------|----------------|----------------|
| **Device Status** | Online/Offline/Error | Real-time status check | Any offline devices | "Device-A01 is offline" |
| **Battery Health** | Battery percentage | Low battery detection | Below 20% charge | "Sensor-B03 low battery: 15%" |
| **Temperature** | Device temperature | Overheating detection | Above 70°C | "Gateway-C02 overheating: 75°C" |
| **System Health** | Overall health score | Online device ratio | Below 80% health | "System health: 65%" |
| **Connectivity** | Network status | Connection monitoring | Loss of communication | "3 devices offline" |
| **Performance** | Response metrics | Trend analysis | Degraded performance | "Response time increasing" |

## 🛠️ Setup Instructions

**Estimated setup time: 15-20 minutes**

### Prerequisites
- n8n instance with community nodes enabled
- ScrapeGraphAI API account and credentials
- Telegram bot token and chat ID
- Access to your IoT dashboard URL
- Basic understanding of your device naming conventions

### Step-by-Step Configuration

#### 1. Install Community Nodes
```bash
# Install required community nodes
npm install n8n-nodes-scrapegraphai
```

#### 2. Configure ScrapeGraphAI Credentials
- Navigate to Credentials in your n8n instance
- Add new ScrapeGraphAI API credentials
- Enter your API key from ScrapeGraphAI dashboard
- Test the connection to ensure it's working

#### 3. Set up Schedule Trigger
- Configure the monitoring frequency (default: every 30 minutes)
- Adjust timing based on your operational needs:
  - Every 15 minutes: `*/15 * * * *`
  - Every hour: `0 * * * *`
  - Every 5 minutes: `*/5 * * * *`

#### 4. Configure Dashboard URL
- Update the "Get Data" node with your IoT dashboard URL
- Customize the AI prompt to match your dashboard structure
- Test data extraction to ensure proper JSON formatting
- Adjust device field mappings as needed

#### 5. Set up Telegram Notifications
- Create a Telegram bot using @BotFather
- Get your chat ID from @userinfobot
- Configure Telegram credentials in n8n
- Test message delivery to ensure alerts work

#### 6. Customize Health Thresholds
- Adjust health score threshold (default: 80%)
- Set battery alert level (default: 20%)
- Configure temperature warning (default: 70°C)
- Customize alert conditions based on your requirements

#### 7. Test and Validate
- Run the workflow manually with your dashboard
- Verify device data extraction accuracy
- Test alert conditions and message formatting
- Confirm logging functionality works correctly

## 🔄 Workflow Customization Options

### Modify Monitoring Frequency
- Adjust schedule for different device criticality levels
- Add business hours vs. off-hours monitoring
- Implement variable frequency based on system health
- Add manual trigger for on-demand monitoring

### Extend Device Analysis
- Add more device metrics (memory, CPU, network bandwidth)
- Implement predictive maintenance algorithms
- Include environmental sensors (humidity, air quality)
- Add device lifecycle and warranty tracking

### Customize Alert Logic
- Implement escalation rules for critical alerts
- Add alert suppression during maintenance windows
- Create different alert channels for different severity levels
- Include automated ticket creation for persistent issues

### Output Customization
- Add integration with monitoring platforms (Grafana, Datadog)
- Implement email notifications for management reports
- Create executive dashboards with health trends
- Add integration with maintenance management systems

## 📈 Use Cases

- **Industrial IoT Monitoring**: Track manufacturing equipment and sensors
- **Smart Building Management**: Monitor HVAC, lighting, and security systems
- **Fleet Management**: Track vehicle telematics and diagnostic systems
- **Healthcare Device Monitoring**: Ensure medical device uptime and performance
- **Smart City Infrastructure**: Monitor traffic lights, environmental sensors, and public systems
- **Energy Grid Monitoring**: Track smart meters and distribution equipment

## 🚨 Important Notes

- Respect your dashboard's terms of service and rate limits
- Implement appropriate delays between requests to avoid overloading systems
- Regularly review and update device thresholds based on operational experience
- Monitor ScrapeGraphAI API usage to manage costs effectively
- Keep your credentials secure and rotate them regularly
- Ensure alert recipients are available to respond to critical notifications
- Consider implementing backup monitoring systems for critical infrastructure
- Maintain device inventories and update monitoring parameters as systems evolve

## 🔧 Troubleshooting

**Common Issues:**
- ScrapeGraphAI connection errors: Verify API key and account status
- Dashboard access issues: Check URL accessibility and authentication requirements
- Data extraction failures: Review AI prompt and dashboard structure changes
- Missing device data: Verify device naming conventions and field mappings
- Alert delivery failures: Check Telegram bot configuration and chat permissions
- False alerts: Adjust health thresholds and alert logic conditions

**Support Resources:**
- ScrapeGraphAI documentation and API reference
- n8n community forums for workflow assistance
- Telegram Bot API documentation
- IoT platform-specific monitoring best practices
- Device manufacturer monitoring guidelines
- Industrial IoT monitoring standards and frameworks

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
