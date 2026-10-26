Add-Type -AssemblyName System.Drawing

function Trim-Bottom($path, $cropBottomPx) {
    $bmp = [System.Drawing.Bitmap]::FromFile($path)
    $w = $bmp.Width
    $h = $bmp.Height - $cropBottomPx
    $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $clean = $bmp.Clone($rect, $bmp.PixelFormat)
    $bmp.Dispose()
    $tmp = $path + ".tmp.png"
    $clean.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
    $clean.Dispose()
    Move-Item -Path $tmp -Destination $path -Force
    Write-Host "Trimmed $path to ($w x $h)"
}

Trim-Bottom "e:\prd\Coloron-Website,New\client\public\images\classroom\classroom_challenge_chalkboard.png" 16
Trim-Bottom "e:\prd\Coloron-Website,New\client\public\images\classroom\classroom_challenge_student.png" 16
Trim-Bottom "e:\prd\Coloron-Website,New\client\public\images\classroom\classroom_interactive_display.png" 12
