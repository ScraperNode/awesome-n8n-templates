# 🔒 Protect public webhooks with Ainoflow Guard rate limiting

> ⚡ **14 views** · 🔒 [SecOps & Security Automation](../)

## Description

# Webhook Rate Limiter (Ainoflow Guard)

Stop webhook flooding before it starts. Add production-grade rate limiting to any n8n webhook in minutes - reject abusive traffic **before** expensive workflow logic executes.

## ✨ Key Features

- **⚡ Edge-style decisions** - Allow/deny checked before any business logic runs
- **🛡️ Burst protection** - Configurable limits (requests per time window)
- **🔄 Stateless** - No queues, databases, or counters needed in n8n
- **📡 Proxy-aware** - Correct IP extraction behind Cloudflare, nginx, load balancers
- **🔑 Dual identity modes** - Rate limit by IP address or API key
- **⏱️ Retry-After headers** - Proper 429 responses with retry guidance
- **💥 Fail-open** - Guard outage doesn't block your production traffic
- **🔧 Auto-setup** - Guard policy auto-creates on first request

## 🎯 How It Works

1. **Webhook receives** POST request

2. **Identity extracted** from headers:
   - API key (`x-api-key`) → per-client limiting
   - Client IP (`X-Forwarded-For` / `x-real-ip`) → per-IP limiting

3. **Guard decides** allow or deny:
   - `POST /api/v1/guard/{route:identity}/counter`
   - Checks against configured rate limit policy

4. **Allowed** → your business logic executes → `200 OK`

5. **Denied** → immediate `429 Too Many Requests` + `Retry-After` header

```
Client → Webhook → Identity → Guard → Allowed? → Business Logic → 200 OK
                                         ↓ NO
                                    429 + Retry-After
```

## 🔧 Setup Requirements

- **Ainoflow** - [Sign up free](https://www.ainoflow.io/signup) for Guard API access. Free plan available.

That's it. One credential, one API.

## ⚡ Quick Start

### 1. Import workflow and set Ainoflow Bearer credential on `GuardCheck` node

### 2. Edit `Config` node with your limits:

| Variable | Default | Description |
|----------|---------|-------------|
| `rate_limit` | `30` | Max requests per window |
| `window_sec` | `60` | Window in seconds |
| `identity_mode` | `ip` | `ip` or `apiKey` |
| `route_name` | `webhook` | Endpoint name |

### 3. Replace `BusinessLogic` node with your workflow

Access original request:
```javascript
const body = $('Webhook').first().json.body;
const headers = $('Webhook').first().json.headers;
```

### 4. Activate and test

## 🧪 Testing

### Burst Test

**Bash (Linux/macOS):**
```bash
for i in {1..50}; do
  curl -s -o /dev/null -w "%{http_code}\n" \
    -X POST https://your-n8n.com/webhook/rate-limited-endpoint \
    -H "Content-Type: application/json" \
    -d '{"test": true}'
done
```

**PowerShell (Windows):**
```powershell
1..50 | ForEach-Object {
  (Invoke-WebRequest -Uri "https://your-n8n.com/webhook/rate-limited-endpoint" -Method POST -Body '{"test":true}' -ContentType "application/json" -UseBasicParsing).StatusCode
}
```

**Expected:** First 30 → `200`, remaining → `429`

### Proxy Test

```bash
curl -H "X-Forwarded-For: 1.2.3.4, 5.6.7.8" \
  -X POST https://your-n8n.com/webhook/rate-limited-endpoint
```

Identity key should use `1.2.3.4` (first IP from chain).

## 💬 Response Examples

### Allowed (200 OK)

```json
{
  "ok": true,
  "data": { "message": "Request processed successfully" }
}
```

### Denied (429 Too Many Requests)

Headers: `Retry-After: 17`

```json
{
  "ok": false,
  "error": "rate_limited",
  "retryAfter": 17
}
```

## 🏗️ Workflow Architecture

| Section | Nodes | Description |
|---------|-------|-------------|
| **Rate Limit Check** | Webhook → Config → BuildIdentity → GuardCheck → IfAllowed | Extract identity, check Guard |
| **Allowed Path** | BusinessLogic → RespondOk | Your logic + 200 response |
| **Denied Path** | BuildDeniedResponse → RespondRateLimited | 429 + Retry-After |

**Total: 9 nodes.** Minimal by design.

## 🔒 What This Protects Against

- ✅ Webhook flooding - bot traffic, retry storms hitting your endpoint
- ✅ Credit burn - one runaway loop = €500+ OpenAI/Twilio bill overnight
- ✅ Automation overload - uncontrolled DB writes, external API hammering
- ✅ Accidental loops - webhook chains triggering each other endlessly

## ❌ What This Does NOT Replace

- Cloudflare / WAF (network-level protection)
- Bot detection (behavioral analysis)
- Layer 3/4 DDoS mitigation
- Authentication (who is the user?)

Guard handles **application-level rate decisions**, not network security.

## 🔑 Identity Modes

### IP Mode (default)

Best for public webhooks where clients don't have API keys.

```
X-Forwarded-For: 1.2.3.4, 5.6.7.8 → identity = "1.2.3.4"
x-real-ip: 10.0.0.1               → identity = "10.0.0.1"
```

⚠️ IP addresses can be shared (NAT, mobile carriers, offices).

### API Key Mode

Best for authenticated endpoints with per-client keys.

```
x-api-key: client_abc123 → identity = "client_abc123"
```

Falls back to IP if header is missing.

## 🛠️ Customization

### Rate Limit Presets

| Use Case | rate_limit | window_sec | Result |
|----------|-----------|------------|--------|
| Burst protection | 30 | 60 | 30/min |
| API rate limiting | 100 | 3600 | 100/hour |
| LLM cost protection | 10 | 60 | 10/min |
| Daily limit | 1000 | 86400 | 1000/day |

### Multiple Endpoints

Use different `route_name` values to create separate rate limits:

```
Config A: route_name = "orders"    → key = "orders:1.2.3.4"
Config B: route_name = "payments"  → key = "payments:1.2.3.4"
```

Each route has independent counters.

### Fail-Open vs Fail-Closed

**Default: Fail-open** - Guard API uses `failOpen=true`, so Guard outage doesn't block traffic.

To switch to fail-closed: change `failOpen` query parameter to `false` in `GuardCheck` node.

### Combine with Shield (Dedup Protection)

Getting duplicate webhook deliveries? Add [Ainoflow Shield](https://www.ainoflow.io/docs/api/shield) before your business logic - one trigger, one execution, guaranteed. Guard + Shield = rate limiting + deduplication on the same endpoint.

## ⚠️ Important Notes

- **Guard policy auto-creates** on first request with rateMax/rateWindow parameters
- **`allowPolicyOverwrite=true`** is set for easy demo/testing - Config node values always apply. **Production:** set to `false` in GuardCheck query params to lock policy and prevent hidden config drift
- **Denied requests not counted** - only successful requests increment the counter
- **Window resets atomically** - no gradual decay, clean reset every N seconds
- **No state in n8n** - all rate limiting state lives in Guard API
- **5-second timeout** - GuardCheck has 5s timeout to prevent blocking

## 💼 Need Customization?

Want to add temporary bans, cost protection mode, multi-tier rate limiting, or per-client usage dashboards?

**[Ainova Systems](https://ainovasystems.com/)** - We build custom AI automation infrastructure and safety layers for production workflows.

---

**Tags:** `webhook`, `rate-limiting`, `security`, `guard`, `burst-protection`, `api-protection`, `ainoflow`, `production`, `webhook-security`, `cost-control`

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
