Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Admin\.gemini\antigravity-ide\brain\522e6d8e-bf43-4480-9d67-ad980a870bc2\.user_uploaded\media_1791007305067.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)
Write-Host "Source Dimensions: $($bmp.Width) x $($bmp.Height)"

$outDir = "e:\prd\Coloron-Website,New\client\public\images\car_dealerships"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$W = $bmp.Width
$H = $bmp.Height

# Topology diagram is roughly in Section 3 ("What we offer")
# In the 460x1024 screenshot, it is around y = 0.52 to 0.60
$topoY = [int]($H * 0.523)
$topoH = [int]($H * 0.088)
$topoW = [int]($W * 0.22)
$topoX = [int]($W * 0.26)

$rect = New-Object System.Drawing.Rectangle($topoX, $topoY, $topoW, $topoH)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$cropped.Save((Join-Path $outDir "car_dealership_topology.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()

# Also let's crop the consultant illustration at the bottom!
# y = 0.79 to 0.91, x = 0.52 to 0.95
$illuY = [int]($H * 0.795)
$illuH = [int]($H * 0.115)
$illuX = [int]($W * 0.52)
$illuW = [int]($W * 0.44)

$rectIllu = New-Object System.Drawing.Rectangle($illuX, $illuY, $illuW, $illuH)
$cropIllu = $bmp.Clone($rectIllu, $bmp.PixelFormat)
$cropIllu.Save((Join-Path $outDir "discuss_illustration.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$cropIllu.Dispose()

$bmp.Dispose()
Write-Host "Cropping done."
