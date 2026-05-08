$dest = "public\images\integrations"
$base = "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons"

$logos = @{
  # Accounting
  "quickbooks.svg"       = "$base/quickbooks.svg"
  "sage.svg"             = "$base/sage.svg"
  "xero.svg"             = "$base/xero.svg"
  "netsuite.svg"         = "$base/oracle.svg"    # NetSuite is Oracle-owned, use Oracle icon

  # ERP
  "sap.svg"              = "$base/sap.svg"
  "oracle.svg"           = "$base/oracle.svg"
  "dynamics365.svg"      = "$base/dynamics365.svg"
  "salesforce.svg"       = "$base/salesforce.svg"

  # Cloud Storage
  "awss3.svg"            = "$base/amazons3.svg"
  "azureblobstorage.svg" = "$base/microsoftazure.svg"
  "box.svg"              = "$base/box.svg"
  "dropbox.svg"          = "$base/dropbox.svg"
  "egnyte.svg"           = "$base/egnyte.svg"
  "ftpsftp.svg"          = "$base/filezilla.svg"

  # Ticketing
  "openinvoice.svg"      = "$base/accenture.svg"    # fallback generic
  "openticket.svg"       = "$base/jira.svg"
  "geoop.svg"            = "$base/googlemaps.svg"

  # Communication
  "microsoftteams.svg"   = "$base/microsoftteams.svg"
  "slack.svg"            = "$base/slack.svg"
  "twilio.svg"           = "$base/twilio.svg"

  # Workforce
  "easyclocking.svg"     = "$base/clockify.svg"
  "paycom.svg"           = "$base/adp.svg"

  # Analytics & BI
  "powerbi.svg"          = "$base/powerbi.svg"
  "googlebigquery.svg"   = "$base/googlebigquery.svg"
  "sqlserver.svg"        = "$base/microsoftsqlserver.svg"

  # Productivity
  "googleworkspace.svg"  = "$base/googleworkspace.svg"
  "microsoft365.svg"     = "$base/microsoftoffice.svg"
  "mondaycom.svg"        = "$base/monday.svg"

  # IoT & Sensors
  "scada.svg"            = "$base/siemens.svg"
  "samsara.svg"          = "$base/samsara.svg"

  # Developer
  "restapis.svg"         = "$base/swagger.svg"
  "custom.svg"           = "$base/zapier.svg"
}

foreach ($entry in $logos.GetEnumerator()) {
  $outPath = Join-Path $dest $entry.Key
  # Skip already-downloaded files
  if (Test-Path $outPath) {
    Write-Host "  SKIP (exists): $($entry.Key)" -ForegroundColor Cyan
    continue
  }
  Write-Host "Downloading $($entry.Key)..."
  try {
    $content = Invoke-RestMethod -Uri $entry.Value -UseBasicParsing -TimeoutSec 15
    Set-Content -Path $outPath -Value $content -Encoding utf8 -NoNewline
    Write-Host "  OK" -ForegroundColor Green
  } catch {
    Write-Host "  FAILED: $($_.Exception.Message)" -ForegroundColor Red
  }
}

Write-Host "`nDone."
