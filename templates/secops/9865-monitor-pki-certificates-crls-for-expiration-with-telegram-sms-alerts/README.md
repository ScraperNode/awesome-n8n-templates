# 🔒 Monitor PKI certificates & CRLs for expiration with Telegram & SMS alerts

> ⚡ **70 views** · 🔒 [SecOps & Security Automation](../)

## Description

# PKI Certificate & CRL Monitor - Auto Expiration Alert System

## Overview
This n8n workflow provides automated monitoring of Public Key Infrastructure (PKI) components including CA certificates, Certificate Revocation Lists (CRLs), and associated web services. It extracts certificate information from the TSL (Trusted Service List) -- the Hungarian is the example list as default in the workflow -- , monitors expiration dates, and sends alerts via Telegram and SMS when critical thresholds are reached.

## Features
- Automated extraction of certificate URLs from TSL XML
- CA certificate expiration monitoring
- CRL expiration tracking
- Website availability monitoring with retry mechanism
- Multi-channel alerting (Telegram and SMS)
- Scheduled execution every 12 hours
- 17-hour warning threshold for expirations

## Setup Instructions

### Prerequisites
1. **n8n Instance**: Running n8n installation with Linux environment
2. **Telegram Bot**: Created via @BotFather
3. **Textbelt API Key**: For SMS notifications (optional)
4. **Network Access**: To reach TSL source and certificate URLs
5. **Linux Tools**: OpenSSL, curl, libxml2-utils, jq (auto-installed)

### Configuration Steps

#### 1. Telegram Setup
**Create Telegram Bot:**
- Open Telegram and search for @BotFather
- Send `/newbot` and follow prompts
- Save the bot token (format: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

**Create Alert Channel:**
- Create a new Telegram channel for alerts
- Add your bot as administrator
- Get channel ID:
  - Send a test message to the channel
  - Visit: `https://api.telegram.org/bot&lt;YOUR_BOT_TOKEN&gt;/getUpdates`
  - Find `"chat":{"id":-100XXXXXXXXXX}` - this is your channel ID

#### 2. SMS Setup (Optional)
**Textbelt Configuration:**
- Register at https://textbelt.com
- Purchase credits and obtain API key
- Note: Free tier allows 1 SMS/day for testing

#### 3. Configure Alert Nodes
Update these nodes with your credentials:

**CRL Alert Node:**
- Open **CRL Alert --- Telegram & SMS** node
- Replace `YOUR-TELEGRAM-BOT-TOKEN` with your bot token
- Replace `YOUR-TELEGRAM-CHANNEL-ID` with your channel ID
- Replace `+36301234567` with target phone number(s)
- Replace `YOUR-TEXTBELT-API-KEY` with your Textbelt key

**CA Alert Node:**
- Open **CA Alert --- Telegram & SMS** node
- Apply same replacements as above

**Website Down Alert Node:**
- Open **Send Website Down - Telegram & SMS** node
- Apply same replacements as above

#### 4. TSL Source Configuration
The workflow defaults to Hungarian TSL:
- URL: `http://www.nmhh.hu/tl/pub/HU_TL.xml`
- To change, edit the **Collect Checking URL list** node
- Trust list references: https://ec.europa.eu/tools/lotl/eu-lotl.xml (to find more TSL list to change the default), and  https://www.etsi.org/deliver/etsi_ts/119600_119699/119615/01.02.01_60/ts_119615v010201p.pdf (to Technical Specification of the Trust Lists) 

#### 5. Threshold Configuration
Default warning threshold: 17 hours before expiration
- To modify CRL threshold: Edit **nextUpdate - TimeFilter** node
- To modify CA threshold: Edit **nextUpdate - TimeFilter1** node
- Change value in condition: `if (diffHours &lt; 17)`

### Activation
1. Save all configuration changes
2. Test with **Execute With Manual Start** trigger
3. Verify alerts are received
4. Toggle workflow to **Active** status for scheduled operation

## How to Use

### Automatic Operation
Once activated, the workflow runs automatically:
- **Frequency**: Every 12 hours
- **Process**: 
  1. Downloads TSL XML
  2. Extracts all certificate URLs
  3. Checks each URL type (CRL, CA, or other)
  4. Validates expiration dates
  5. Sends alerts for critical items

### Manual Execution
For immediate checks:
1. Open the workflow
2. Click **Execute With Manual Start** node
3. Click "Execute Node"
4. Monitor execution progress

### Understanding Alerts

#### CRL Expiration Alert
**Message Format:**
```
ALERT! with [Issuer CN] !!!CRL EXPIRATION!!! Will be under 17 hour ([Next Update Time])! Last updated: [Last Update Time]
```

**Trigger Conditions:**
- CRL expires in less than 17 hours
- CRL download successful but expiration imminent

#### CA Certificate Alert
**Message Format:**
```
ALERT!/EXPIRED! with [Subject CN] !!!CA EXPIRATION PROBLEM!!! The expiration time: ([Not After Date]) Last updated: ([Not Before Date])
```

**Trigger Conditions:**
- Certificate expires in less than 17 hours (ALERT!)
- Certificate already expired (EXPIRED!)

#### Website Down Alert
**Message Format:**
```
ALERT! The [URL] !!!NOT AVAILABLE!!! Service outage probable! Intervention required!
```

**Trigger Conditions:**
- Initial HTTP request fails
- Retry after wait period also fails
- HTTP status code not 200

### Monitoring Dashboard

#### Execution History
- Navigate to n8n Executions tab
- Filter by workflow name
- Review successful/failed runs

#### Alert History
Check Telegram channel for:
- Alert timestamps
- Affected certificates/services
- Expiration details

### Troubleshooting

#### No Alerts Received
1. **Check Telegram Bot:**
   - Verify bot is admin in channel
   - Test with manual message via API
   - Confirm channel ID is correct

2. **Check Workflow Execution:**
   - Review execution logs in n8n
   - Look for error nodes (red indicators)
   - Verify TSL URL is accessible

#### False Positives
- Verify system time is correct
- Check timezone settings
- Review threshold values

#### Missing Certificates
- Some certificates may not have URLs
- TSL may be temporarily unavailable
- Check XML parsing in logs

#### Performance Issues
**Slow Execution:**
- Large TSL files take time to parse
- Network latency affects URL checks
- Consider increasing timeout values

**Memory Issues:**
- Workflow processes many URLs sequentially
- Monitor n8n server resources
- Consider increasing batch intervals

### Advanced Configuration

#### Modify Check Frequency
Edit **Execute With Scheduled Start** node:
- Change interval type (hours/days/weeks)
- Adjust interval value
- Consider peak/off-peak scheduling

#### Add Custom TSL Sources
In **Collect Checking URL list** node:
```bash
URL="https://your-tsl-source.com/tsl.xml"
```

#### Customize Alert Messages
Edit alert nodes to modify message templates:
- Add organization name
- Include escalation contacts
- Add remediation instructions

#### Filter Certificate Types
Modify URL detection patterns:
- **Is this CRL?** node: Adjust CRL detection
- **Is this CA?** node: Adjust CA detection
- Add new patterns as needed

#### Adjust Retry Logic
**Wait B4 Retry** node:
- Default: Immediate retry
- Can add delay (seconds/minutes)
- Useful for transient network issues

## Maintenance

### Regular Tasks
- **Weekly**: Review alert frequency
- **Monthly**: Validate phone numbers/channels
- **Quarterly**: Update TSL source URLs
- **Annually**: Review threshold values

### Log Management
- Clear old execution logs periodically
- Archive alert history from Telegram
- Document false positives for tuning

### Updates
- Keep n8n updated for security patches
- Monitor OpenSSL versions for compatibility
- Update notification service APIs as needed

## Security Considerations
- Store API keys in n8n credentials manager
- Use environment variables for sensitive data
- Restrict workflow edit access
- Monitor for unauthorized changes
- Regularly rotate API keys
- Use HTTPS for TSL sources when available

## Compliance Notes
- Ensure monitoring aligns with PKI policies
- Document alert response procedures
- Maintain audit trail of certificate issues
- Consider regulatory requirements for uptime

## Integration Options
- Connect to ticketing systems for alert tracking
- Add database logging for compliance
- Integrate with monitoring dashboards
- Create escalation workflows for critical alerts

## Best Practices
1. Test alerts monthly to ensure delivery
2. Maintain multiple notification channels
3. Document response procedures for each alert type
4. Set up redundant monitoring if critical
5. Review and tune thresholds based on operational needs
6. Keep contact lists updated
7. Consider time zones for global operations

## 🔗 Nodes Used

HTTP Request, Write Binary File, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
