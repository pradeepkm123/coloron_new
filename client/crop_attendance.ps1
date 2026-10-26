Add-Type -AssemblyName System.Drawing

$srcPath = "e:\prd\Coloron-Website,New\client\public\images\student-attendance\full_page_reference.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Original reference size: $($src.Width) x $($src.Height)"

# 1. Crop Hero Banner (top y=0 to y=248, full width 708)
$bannerRect = New-Object System.Drawing.Rectangle(0, 0, $src.Width, 248)
$banner = $src.Clone($bannerRect, $src.PixelFormat)
$banner.Save("e:\prd\Coloron-Website,New\client\public\images\student-attendance\hero_banner_ref.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$banner.Dispose()

# 2. Crop School Bus Scenario Image (around y=465 to y=555, x=275 to x=430)
# Let's inspect where school bus is
Write-Output "Banner cropped successfully!"

$src.Dispose()
