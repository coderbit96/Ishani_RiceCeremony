param(
  [string]$InputPath = "src/assets/anika-hero.png",
  [string]$OutputPath = "src/assets/anika-hero.jpg",
  [long]$Quality = 88
)

Add-Type -AssemblyName System.Drawing
$input = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $InputPath))
$output = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $OutputPath))
$image = [System.Drawing.Image]::FromFile($input)
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }
$parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality,
  $Quality
)

try {
  $image.Save($output, $encoder, $parameters)
}
finally {
  $image.Dispose()
  $parameters.Dispose()
}

Write-Output $output
