$c = Get-Content 'e:\prd\Coloron-Website,New\client\hik_conf_raw.html' -Raw
$pos = $c.IndexOf("What we offer")
if ($pos -ge 0) {
    Write-Output $c.Substring($pos, [Math]::Min(3500, $c.Length - $pos))
} else {
    Write-Output "Not found"
}
