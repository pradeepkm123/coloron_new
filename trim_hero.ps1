Add-Type -AssemblyName System.Drawing
$file = "e:\prd\Coloron-Website,New\client\public\images\classroom\classroom_hero.png"
$tmp = "e:\prd\Coloron-Website,New\client\public\images\classroom\classroom_hero_tmp.png"
$bmp = [System.Drawing.Bitmap]::FromFile($file)
$rect = New-Object System.Drawing.Rectangle(0, 22, $bmp.Width, ($bmp.Height - 22))
$clean = $bmp.Clone($rect, $bmp.PixelFormat)
$bmp.Dispose()
$clean.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
$clean.Dispose()
Move-Item -Path $tmp -Destination $file -Force
Write-Host "Cleaned classroom_hero.png successfully"
