$path = "C:\Users\Admin\.gemini\antigravity-ide\brain\522e6d8e-bf43-4480-9d67-ad980a870bc2\.system_generated\steps\527\content.md"
$content = Get-Content $path -Raw
$matches = [regex]::Matches($content, '(/content/dam/hikvision/[^\s"''<>]+\.(?:jpg|png|jpeg|webp))')
$images = $matches | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
Write-Output "Found $($images.Count) images:"
$images
