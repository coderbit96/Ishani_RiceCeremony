param(
  [string]$OutputPath = "public/music/ishani-melody.wav"
)

$sampleRate = 22050
$duration = 24
$sampleCount = $sampleRate * $duration
$samples = New-Object 'double[]' $sampleCount
$chords = @(
  @(261.63, 329.63, 392.00),
  @(220.00, 261.63, 329.63),
  @(174.61, 220.00, 261.63),
  @(196.00, 246.94, 293.66)
)
$melody = @(523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 493.88)

for ($i = 0; $i -lt $sampleCount; $i++) {
  $time = $i / $sampleRate
  $chordIndex = [Math]::Floor($time / 6) % $chords.Count
  $value = 0.0

  foreach ($frequency in $chords[$chordIndex]) {
    $value += [Math]::Sin(2 * [Math]::PI * $frequency * $time) * 0.018
  }

  $noteIndex = [Math]::Floor($time / 3) % $melody.Count
  $noteTime = $time % 3
  $bellEnvelope = [Math]::Exp(-1.45 * $noteTime)
  $value += [Math]::Sin(2 * [Math]::PI * $melody[$noteIndex] * $time) * 0.055 * $bellEnvelope
  $value += [Math]::Sin(2 * [Math]::PI * $melody[$noteIndex] * 2 * $time) * 0.012 * $bellEnvelope

  $fadeIn = [Math]::Min(1, $time / 1.5)
  $fadeOut = [Math]::Min(1, ($duration - $time) / 2)
  $samples[$i] = $value * $fadeIn * $fadeOut
}

$delay = [int]($sampleRate * 0.28)
for ($i = $delay; $i -lt $sampleCount; $i++) {
  $samples[$i] += $samples[$i - $delay] * 0.2
}

$resolvedOutput = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $OutputPath))
$directory = [System.IO.Path]::GetDirectoryName($resolvedOutput)
[System.IO.Directory]::CreateDirectory($directory) | Out-Null
$stream = [System.IO.File]::Open($resolvedOutput, [System.IO.FileMode]::Create)
$writer = New-Object System.IO.BinaryWriter($stream)

try {
  $dataSize = $sampleCount * 2
  $writer.Write([System.Text.Encoding]::ASCII.GetBytes('RIFF'))
  $writer.Write([int](36 + $dataSize))
  $writer.Write([System.Text.Encoding]::ASCII.GetBytes('WAVE'))
  $writer.Write([System.Text.Encoding]::ASCII.GetBytes('fmt '))
  $writer.Write([int]16)
  $writer.Write([int16]1)
  $writer.Write([int16]1)
  $writer.Write([int]$sampleRate)
  $writer.Write([int]($sampleRate * 2))
  $writer.Write([int16]2)
  $writer.Write([int16]16)
  $writer.Write([System.Text.Encoding]::ASCII.GetBytes('data'))
  $writer.Write([int]$dataSize)

  foreach ($sample in $samples) {
    $clamped = [Math]::Max(-1, [Math]::Min(1, $sample))
    $writer.Write([int16]($clamped * 32767))
  }
}
finally {
  $writer.Dispose()
  $stream.Dispose()
}

Write-Output $resolvedOutput
