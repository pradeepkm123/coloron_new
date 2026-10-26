$outDir = "e:\prd\Coloron-Website,New\client\public\images\construction_site"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force
}

$items = @(
    @{ Name = "construction_hero.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/construction-site/Construction-Site-top-banner-pc.jpg" },
    @{ Name = "construction_3d_map.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/construction-site/Construction-Site-map.jpg" },
    @{ Name = "challenge_congestion.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/construction-site/Rush-hour-congestion.jpg" },
    @{ Name = "challenge_records.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/construction-site/Difficulty-retrieving-records.jpg" },
    @{ Name = "construction_offer.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/construction-site/Vehicle-Entrance-&-Exit-what-we-offer.jpg" },
    @{ Name = "construction_topology.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/construction-site/Entrance-&-Exit-selected-products.jpg" },
    @{ Name = "construction_case_study.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/success-stories/20220607/Solar-powered-solution-background-picture.jpg" },
    @{ Name = "interest_standalone.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solution-by-function/time-attendance/Standalone-site-protection.jpg" },
    @{ Name = "interest_thermal.png"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/construction-site/Thermal-Imaging.png" },
    @{ Name = "interest_open_space.jpg"; Url = "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/solutions-by-scenario/construction-site/Open-Space-Monitoring.jpg" }
)

foreach ($item in $items) {
    $target = Join-Path $outDir $item.Name
    Write-Output "Downloading $($item.Name)..."
    & curl.exe -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" -H "Referer: https://www.hikvision.com/en/solutions/solutions-by-scenario/construction-site/" -o $target $item.Url
    Start-Sleep -Seconds 1
    $fi = Get-Item $target
    Write-Output "Saved $($item.Name) - $($fi.Length) bytes"
}
