$base = "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons"
$tests = @("slack", "oracle", "salesforce", "microsoftazure", "twilio", "amazons3", "microsoft", "powerbi", "microsoftteams", "monday", "dynamics365", "samsara", "microsoftsqlserver", "microsoftoffice", "netsuite", "azure")
foreach ($t in $tests) {
  try {
    $r = Invoke-WebRequest -Uri "$base/$t.svg" -UseBasicParsing -TimeoutSec 5 -Method HEAD
    Write-Host "FOUND: $t (status $($r.StatusCode))" -ForegroundColor Green
  } catch {
    Write-Host "MISSING: $t" -ForegroundColor Red
  }
}
