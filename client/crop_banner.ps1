Add-Type -AssemblyName System.Drawing

$srcPath = "e:\prd\Coloron-Website,New\client\public\images\line-haul\hikvision_exact_banner.jpg"
$dstPath = "e:\prd\Coloron-Website,New\client\public\images\line-haul\hero_banner_exact.jpg"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Original size: $($src.Width) x $($src.Height)"

# Crop the banner part (excluding the bottom 52px subnav bar: 640 - 52 = 588px)
$cropRect = New-Object System.Drawing.Rectangle(0, 0, $src.Width, 588)
$cropBmp = $src.Clone($cropRect, $src.PixelFormat)

# Save with high quality
$cropBmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$src.Dispose()
$cropBmp.Dispose()

Write-Output "Cropped and saved to $dstPath successfully!"
