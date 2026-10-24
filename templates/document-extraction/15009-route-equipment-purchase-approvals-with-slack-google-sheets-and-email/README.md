# 🔬 Route equipment purchase approvals with Slack, Google Sheets, and email

> ⚡ **23 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This template automates internal equipment and supply purchase requests for operations, HR, and IT teams. Requests are submitted via a built-in n8n form, automatically approved for small amounts, and routed to the manager via Slack for larger ones — with full logging to Google Sheets throughout.

**Who this is for**
Operations, HR, and IT teams at Japanese companies who want to eliminate manual back-and-forth for internal purchase requests. No external form tools required.

**What's included**
A single workflow that handles the full purchase request lifecycle:

1. **Purchase Request Form** — Applicants submit item details via n8n's built-in form. No external tools needed.
2. **Manager Lookup** — The approving manager's Slack ID is automatically retrieved from a Google Sheets mapping table. No Slack IDs in the form.
3. **Request Logging** — Every request is appended to Google Sheets with a unique request ID and status tracking.
4. **Amount Threshold Check** — Requests at or below the threshold (default: ¥10,000) are auto-approved. Requests above are routed to the manager.
5. **Auto-Approval Route** — Status is updated, the purchasing team is notified via Slack, and the applicant receives a confirmation email.
6. **Manager Approval via Slack** — The manager receives a Slack DM with a custom form: approve/reject selection and a free-text comment field.
7. **Approval Route** — Status is updated with approver name, purchasing team is notified via Slack, and the applicant receives a confirmation email.
8. **Rejection Route** — Status is updated with the rejection comment, and the applicant receives a rejection email including the manager's comment.

**Key features**
- Built-in n8n form — no Jotform, Typeform, or Google Forms required
- Manager is looked up automatically from Google Sheets — applicants never need to know or enter Slack IDs
- Configurable auto-approval threshold (default: ¥10,000)
- Rejection comments collected via Slack's custom form and logged to Google Sheets
- Full audit trail: every request, approval, and rejection is recorded with timestamps

**Prerequisites**
- Google Sheets (copy link provided in the workflow)
- Slack App with DM permissions and Interactivity enabled (setup guide included in the workflow)
- Gmail account connected to n8n

---

このテンプレートは、社内の備品・消耗品購入申請を自動化します。n8n組み込みフォームで申請を受け付け、少額は自動承認、高額は上長へのSlack承認依頼と、金額に応じた柔軟なフローを実現します。全申請はGoogle Sheetsに記録されます。

**このワークフローの対象ユーザー**
社内の購入申請に関するメールや口頭でのやり取りをなくしたい、日本企業の総務・HR・情報システム担当者向けです。外部フォームツールは不要です。

**含まれる内容**
購入申請の全ライフサイクルを1つのワークフローで処理します：

1. **Purchase Request Form** — 申請者がn8n組み込みフォームで備品情報を入力。外部ツール不要。
2. **Manager Lookup** — 承認者のSlack IDをGoogle Sheetsのマッピングテーブルから自動取得。フォームへのSlack ID入力不要。
3. **Request Logging** — 全申請を一意の申請IDとともにGoogle Sheetsに記録。ステータスをトラッキング。
4. **Amount Threshold Check** — 閾値以下（デフォルト：10,000円）は自動承認。超えた場合は上長承認ルートへ。
5. **自動承認ルート** — ステータス更新・総務チームへSlack通知・申請者に確認メールを送信。
6. **Slack経由の上長承認** — 上長のSlack DMにカスタムフォームを送信。承認/却下の選択とコメント入力欄付き。
7. **承認ルート** — 承認者名付きでステータス更新・総務チームへSlack通知・申請者に確認メールを送信。
8. **却下ルート** — 却下コメント付きでステータス更新・申請者に上長のコメントを含む却下メールを送信。

**主な特徴**
- n8n組み込みフォームを使用 — Jotform・Typeform・Googleフォーム不要
- 上長はGoogle Sheetsで自動検索 — 申請者がSlack IDを知る必要なし
- 自動承認閾値はカスタマイズ可能（デフォルト：10,000円）
- Slackのカスタムフォームで却下コメントを収集・Sheetsに記録
- 全申請・承認・却下をタイムスタンプ付きで記録する完全な監査ログ

**前提条件**
- Google Sheets（ワークフロー内にコピー用リンクあり）
- DM送信権限とInteractivityが有効なSlack App（セットアップガイドはワークフロー内に記載）
- n8nに接続済みのGmailアカウント

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
