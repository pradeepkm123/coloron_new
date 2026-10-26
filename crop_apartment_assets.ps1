Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Admin\.gemini\antigravity-ide\brain\7ad5d767-19b1-4991-a6d6-960652f2e0f6\.user_uploaded\media_1790849976879.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Source Image Dimensions: $($bmp.Width) x $($bmp.Height)"

$outDir = "e:\prd\Coloron-Website,New\client\public\images\apartment"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

function Crop-Image($name, $x, $y, $w, $h) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $dest = Join-Path $outDir $name
    $cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Saved: $name ($w x $h)"
}

# 1. Hero banner (approx top 0 to 450 px height out of total height)
# Let's inspect height first
$W = $bmp.Width
$H = $bmp.Height
Write-Host "W=$W, H=$H"

# We can crop the hero banner
# First let's check relative proportions
$heroH = [int]($H * 0.14)
Crop-Image "apartment_hero.png" 0 0 $W $heroH

# 2. 3D isometric overview image
$isoY = [int]($H * 0.178)
$isoH = [int]($H * 0.09)
$isoX = [int]($W * 0.28)
$isoW = [int]($W * 0.44)
Crop-Image "apartment_overview_3d.png" $isoX $isoY $isoW $isoH

# 3. Challenge 1: Traffic
$c1Y = [int]($H * 0.304)
$c1H = [int]($H * 0.052)
$c1X = [int]($W * 0.285)
$c1W = [int]($W * 0.208)
Crop-Image "apartment_challenge_traffic.png" $c1X $c1Y $c1W $c1H

# 4. Challenge 2: Manual Logbook
$c2Y = [int]($H * 0.304)
$c2H = [int]($H * 0.052)
$c2X = [int]($W * 0.505)
$c2W = [int]($W * 0.208)
Crop-Image "apartment_challenge_logbook.png" $c2X $c2Y $c2W $c2H

# 5. What we offer: ANPR camera
$anprY = [int]($H * 0.407)
$anprH = [int]($H * 0.065)
$anprX = [int]($W * 0.285)
$anprW = [int]($W * 0.208)
Crop-Image "apartment_anpr_camera.png" $anprX $anprY $anprW $anprH

# 6. What we offer: Software on laptop
$lapY = [int]($H * 0.478)
$lapH = [int]($H * 0.065)
$lapX = [int]($W * 0.505)
$lapW = [int]($W * 0.208)
Crop-Image "apartment_software_laptop.png" $lapX $lapY $lapW $lapH

# 7. Success case study
$csY = [int]($H * 0.638)
$csH = [int]($H * 0.075)
$csX = [int]($W * 0.285)
$csW = [int]($W * 0.43)
Crop-Image "apartment_case_study.png" $csX $csY $csW $csH

# 8. Ready to discuss illustration
$discY = [int]($H * 0.795)
$discH = [int]($H * 0.125)
$discX = [int]($W * 0.52)
$discW = [int]($W * 0.44)
Crop-Image "apartment_discuss_illu.png" $discX $discY $discW $discH

$bmp.Dispose()
Write-Host "All assets processed."
