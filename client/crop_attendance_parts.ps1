Add-Type -AssemblyName System.Drawing

$srcPath = "e:\prd\Coloron-Website,New\client\public\images\student-attendance\full_page_reference.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

$dir = "e:\prd\Coloron-Website,New\client\public\images\student-attendance\"

# 1. Hero banner (y: 0 to 248)
$r1 = New-Object System.Drawing.Rectangle(0, 0, 708, 248)
$b1 = $src.Clone($r1, $src.PixelFormat)
$b1.Save($dir + "hero_banner.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$b1.Dispose()

# 2. School bus scenario image (y: ~460 to ~555, x: ~280 to ~430)
# Let's crop x: 280, y: 460, w: 145, h: 90
$r2 = New-Object System.Drawing.Rectangle(280, 460, 145, 90)
$b2 = $src.Clone($r2, $src.PixelFormat)
$b2.Save($dir + "scenario_school_bus.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$b2.Dispose()

# 3. Topology / Bus diagram (y: ~570 to ~630, x: ~200 to ~500)
$r3 = New-Object System.Drawing.Rectangle(200, 570, 310, 60)
$b3 = $src.Clone($r3, $src.PixelFormat)
$b3.Save($dir + "topology_bus.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$b3.Dispose()

$src.Dispose()
Write-Output "Cropped images successfully!"
