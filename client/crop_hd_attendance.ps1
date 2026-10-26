Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Admin\.gemini\antigravity-ide\brain\7ad5d767-19b1-4991-a6d6-960652f2e0f6\.user_uploaded\media_1791202119014.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Source Dimensions: $($src.Width) x $($src.Height)"

$dir = "e:\prd\Coloron-Website,New\client\public\images\student-attendance\"

# 1. Exact Hero Banner (from y=17 to y=250, height=233, width=697)
$rBanner = New-Object System.Drawing.Rectangle(0, 17, $src.Width, 233)
$bBanner = $src.Clone($rBanner, $src.PixelFormat)

# Upscale to high-res 1920x640 using HighQualityBicubic interpolation
$resHigh = New-Object System.Drawing.Bitmap(1920, 640)
$g = [System.Drawing.Graphics]::FromImage($resHigh)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($bBanner, 0, 0, 1920, 640)
$g.Dispose()

$resHigh.Save($dir + "hero_banner_hd.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$resHigh.Dispose()
$bBanner.Dispose()

# 2. School Bus Photo (y: ~470 to ~555, x: ~270 to ~430)
# Let's crop x: 275, y: 470, w: 145, h: 86
$rBus = New-Object System.Drawing.Rectangle(275, 470, 145, 86)
$bBus = $src.Clone($rBus, $src.PixelFormat)
$resBus = New-Object System.Drawing.Bitmap(600, 360)
$gb = [System.Drawing.Graphics]::FromImage($resBus)
$gb.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gb.DrawImage($bBus, 0, 0, 600, 360)
$gb.Dispose()
$resBus.Save($dir + "scenario_school_bus_hd.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$resBus.Dispose()
$bBus.Dispose()

# 3. System Topology Diagram from screenshot (y: ~580 to ~705, x: ~200 to ~325)
$rTopo = New-Object System.Drawing.Rectangle(200, 580, 125, 125)
$bTopo = $src.Clone($rTopo, $src.PixelFormat)
$resTopo = New-Object System.Drawing.Bitmap(500, 500)
$gt = [System.Drawing.Graphics]::FromImage($resTopo)
$gt.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gt.DrawImage($bTopo, 0, 0, 500, 500)
$gt.Dispose()
$resTopo.Save($dir + "topology_ref_hd.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$resTopo.Dispose()
$bTopo.Dispose()

$src.Dispose()
Write-Output "Successfully processed HD assets!"
