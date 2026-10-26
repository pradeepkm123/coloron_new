Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Admin\.gemini\antigravity-ide\brain\7ad5d767-19b1-4991-a6d6-960652f2e0f6\.user_uploaded\media_1790855307121.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Source Dimensions: $($bmp.Width) x $($bmp.Height)"

$outDir = "e:\prd\Coloron-Website,New\client\public\images\classroom"
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

$W = $bmp.Width
$H = $bmp.Height

# 1. Hero banner
$heroH = [int]($H * 0.198)
Crop-Image "classroom_hero.png" 0 0 $W $heroH

# 2. 3D isometric cutaway
$isoY = [int]($H * 0.258)
$isoH = [int]($H * 0.115)
$isoX = [int]($W * 0.28)
$isoW = [int]($W * 0.44)
Crop-Image "classroom_3d_overview.png" $isoX $isoY $isoW $isoH

# 3. Challenge 1: Stressed teacher blackboard
$c1Y = [int]($H * 0.428)
$c1H = [int]($H * 0.068)
$c1X = [int]($W * 0.285)
$c1W = [int]($W * 0.208)
Crop-Image "classroom_challenge_chalkboard.png" $c1X $c1Y $c1W $c1H

# 4. Challenge 2: Bored student
$c2Y = [int]($H * 0.428)
$c2H = [int]($H * 0.068)
$c2X = [int]($W * 0.505)
$c2W = [int]($W * 0.208)
Crop-Image "classroom_challenge_student.png" $c2X $c2Y $c2W $c2H

# 5. Interactive display board teaching
$ifpY = [int]($H * 0.564)
$ifpH = [int]($H * 0.075)
$ifpX = [int]($W * 0.285)
$ifpW = [int]($W * 0.208)
Crop-Image "classroom_interactive_display.png" $ifpX $ifpY $ifpW $ifpH

$bmp.Dispose()
Write-Host "All classroom assets cropped."
