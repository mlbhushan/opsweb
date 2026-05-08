$dest = "public\images\integrations"

# All SVGs are proper minimal SVGs with correct brand colors
$svgs = @{

"quickbooks.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#2CA01C"/>
  <text x="50" y="68" font-family="Arial" font-size="62" font-weight="bold" fill="white" text-anchor="middle">Q</text>
</svg>
'@

"sage.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#00DC06"/>
  <text x="50" y="68" font-family="Arial" font-size="62" font-weight="bold" fill="white" text-anchor="middle">S</text>
</svg>
'@

"xero.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#1AB4D7"/>
  <text x="50" y="68" font-family="Arial" font-size="60" font-weight="bold" fill="white" text-anchor="middle">X</text>
</svg>
'@

"netsuite.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#E8000D"/>
  <text x="50" y="62" font-family="Arial" font-size="32" font-weight="bold" fill="white" text-anchor="middle">NetSuite</text>
</svg>
'@

"sap.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#0070C0"/>
  <text x="50" y="66" font-family="Arial" font-size="44" font-weight="bold" fill="white" text-anchor="middle">SAP</text>
</svg>
'@

"oracle.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#F80000"/>
  <text x="50" y="62" font-family="Arial" font-size="30" font-weight="bold" fill="white" text-anchor="middle">ORACLE</text>
</svg>
'@

"dynamics365.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#002050"/>
  <text x="50" y="55" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Dynamics</text>
  <text x="50" y="78" font-family="Arial" font-size="24" font-weight="bold" fill="#00BCF2" text-anchor="middle">365</text>
</svg>
'@

"salesforce.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#00A1E0"/>
  <text x="50" y="62" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Salesforce</text>
</svg>
'@

"awss3.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#FF9900"/>
  <text x="50" y="52" font-family="Arial" font-size="28" font-weight="bold" fill="#232F3E" text-anchor="middle">AWS</text>
  <text x="50" y="76" font-family="Arial" font-size="22" fill="#232F3E" text-anchor="middle">S3</text>
</svg>
'@

"azureblobstorage.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#0078D4"/>
  <text x="50" y="52" font-family="Arial" font-size="26" font-weight="bold" fill="white" text-anchor="middle">Azure</text>
  <text x="50" y="76" font-family="Arial" font-size="16" fill="#E0F0FF" text-anchor="middle">Blob Storage</text>
</svg>
'@

"box.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#0061D5"/>
  <text x="50" y="66" font-family="Arial" font-size="48" font-weight="bold" fill="white" text-anchor="middle">Box</text>
</svg>
'@

"dropbox.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#0061FF"/>
  <text x="50" y="58" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Drop</text>
  <text x="50" y="80" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">box</text>
</svg>
'@

"egnyte.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#00A847"/>
  <text x="50" y="63" font-family="Arial" font-size="32" font-weight="bold" fill="white" text-anchor="middle">Egnyte</text>
</svg>
'@

"ftpsftp.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#BF0000"/>
  <text x="50" y="53" font-family="Arial" font-size="28" font-weight="bold" fill="white" text-anchor="middle">FTP</text>
  <text x="50" y="76" font-family="Arial" font-size="22" fill="white" text-anchor="middle">SFTP</text>
</svg>
'@

"openinvoice.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#FF6900"/>
  <text x="50" y="50" font-family="Arial" font-size="22" font-weight="bold" fill="white" text-anchor="middle">Open</text>
  <text x="50" y="74" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Invoice</text>
</svg>
'@

"openticket.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#005F9E"/>
  <text x="50" y="50" font-family="Arial" font-size="22" font-weight="bold" fill="white" text-anchor="middle">Open</text>
  <text x="50" y="74" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Ticket</text>
</svg>
'@

"geoop.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#F26522"/>
  <text x="50" y="64" font-family="Arial" font-size="36" font-weight="bold" fill="white" text-anchor="middle">GeoOp</text>
</svg>
'@

"microsoftteams.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#464EB8"/>
  <text x="50" y="52" font-family="Arial" font-size="26" font-weight="bold" fill="white" text-anchor="middle">Teams</text>
</svg>
'@

"slack.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#4A154B"/>
  <text x="50" y="65" font-family="Arial" font-size="38" font-weight="bold" fill="white" text-anchor="middle">Slack</text>
</svg>
'@

"twilio.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#F22F46"/>
  <text x="50" y="63" font-family="Arial" font-size="28" font-weight="bold" fill="white" text-anchor="middle">Twilio</text>
</svg>
'@

"easyclocking.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#00539B"/>
  <text x="50" y="46" font-family="Arial" font-size="20" font-weight="bold" fill="white" text-anchor="middle">Easy</text>
  <text x="50" y="68" font-family="Arial" font-size="18" fill="white" text-anchor="middle">Clocking</text>
</svg>
'@

"paycom.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#006740"/>
  <text x="50" y="63" font-family="Arial" font-size="28" font-weight="bold" fill="white" text-anchor="middle">Paycom</text>
</svg>
'@

"powerbi.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#F2C811"/>
  <text x="50" y="50" font-family="Arial" font-size="26" font-weight="bold" fill="#000" text-anchor="middle">Power</text>
  <text x="50" y="74" font-family="Arial" font-size="26" font-weight="bold" fill="#000" text-anchor="middle">BI</text>
</svg>
'@

"googlebigquery.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#4285F4"/>
  <text x="50" y="50" font-family="Arial" font-size="20" font-weight="bold" fill="white" text-anchor="middle">BigQuery</text>
  <text x="50" y="72" font-family="Arial" font-size="16" fill="#E8F0FE" text-anchor="middle">Google</text>
</svg>
'@

"sqlserver.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#CC2927"/>
  <text x="50" y="50" font-family="Arial" font-size="20" font-weight="bold" fill="white" text-anchor="middle">SQL</text>
  <text x="50" y="72" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Server</text>
</svg>
'@

"googleworkspace.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#4285F4" stroke-width="6"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#EA4335" stroke-width="6" stroke-dasharray="44 88" stroke-dashoffset="0"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#FBBC04" stroke-width="6" stroke-dasharray="44 88" stroke-dashoffset="-44"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#34A853" stroke-width="6" stroke-dasharray="44 88" stroke-dashoffset="-88"/>
</svg>
'@

"microsoft365.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#D83B01"/>
  <text x="50" y="46" font-family="Arial" font-size="20" font-weight="bold" fill="white" text-anchor="middle">Microsoft</text>
  <text x="50" y="70" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">365</text>
</svg>
'@

"mondaycom.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#FF3D57"/>
  <text x="50" y="52" font-family="Arial" font-size="26" font-weight="bold" fill="white" text-anchor="middle">monday</text>
  <text x="50" y="74" font-family="Arial" font-size="20" fill="white" text-anchor="middle">.com</text>
</svg>
'@

"scada.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#003F7F"/>
  <text x="50" y="54" font-family="Arial" font-size="30" font-weight="bold" fill="white" text-anchor="middle">SCADA</text>
</svg>
'@

"samsara.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#000000"/>
  <text x="50" y="60" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Samsara</text>
</svg>
'@

"restapis.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#85EA2D"/>
  <text x="50" y="52" font-family="Arial" font-size="26" font-weight="bold" fill="#173647" text-anchor="middle">REST</text>
  <text x="50" y="74" font-family="Arial" font-size="24" fill="#173647" text-anchor="middle">APIs</text>
</svg>
'@

"custom.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#FF4F00"/>
  <text x="50" y="60" font-family="Arial" font-size="26" font-weight="bold" fill="white" text-anchor="middle">Custom</text>
</svg>
'@

}

foreach ($entry in $svgs.GetEnumerator()) {
  $outPath = Join-Path $dest $entry.Key
  Write-Host "Writing $($entry.Key)..."
  Set-Content -Path $outPath -Value $entry.Value.Trim() -Encoding utf8
  Write-Host "  OK" -ForegroundColor Green
}

Write-Host "`nAll logos written."
