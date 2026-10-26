Add-Type -AssemblyName System.Drawing

$srcPath = "e:\prd\Coloron-Website,New\client\public\images\home\velvu_stqc_banner.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Source Dimensions: $($src.Width) x $($src.Height)"

# Create a 1920 x 600 canvas with solid black background
$w = 1920
$h = 600
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::Black)

$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Target height is 600, so scale factor is 600 / 320 = 1.875
# Width becomes 1024 * 1.875 = 1920!
# Exactly 1920 x 600!
$g.DrawImage($src, 0, 0, 1920, 600)

$g.Dispose()
$src.Dispose()

$dstPath = "e:\prd\Coloron-Website,New\client\public\images\home\velvu_stqc_banner_1920.png"
$bmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "Saved 1920x600 banner to $dstPath successfully!"
