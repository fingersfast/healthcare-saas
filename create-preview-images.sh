#!/bin/bash

# Create preview directory if it doesn't exist
mkdir -p public/images/preview

# Generate placeholder colored images for previews
# Function to create a simple colored SVG
create_svg() {
  local filename=$1
  local bgcolor=$2
  local title=$3
  
  cat > "public/images/preview/$filename" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="$bgcolor"/>
  <text x="400" y="300" font-family="Arial" font-size="32" text-anchor="middle" fill="white">$title</text>
  <text x="400" y="350" font-family="Arial" font-size="20" text-anchor="middle" fill="white">Placeholder Image</text>
</svg>
EOF
}

# Create placeholder images for each type
create_svg "dashboard-preview.jpg" "#4299e1" "Hospital Dashboard Preview"
create_svg "department-preview.jpg" "#48bb78" "Hospital Departments Preview"
create_svg "staff-preview.jpg" "#667eea" "Staff Scheduling Preview"
create_svg "analytics-preview.jpg" "#9f7aea" "Hospital Analytics Preview"
create_svg "patient-preview.jpg" "#4299e1" "Patient Management Preview"
create_svg "security-preview.jpg" "#2d3748" "Security & Compliance Preview"
create_svg "financial-preview.jpg" "#38a169" "Financial Dashboard Preview"

echo "Preview placeholder images have been created in public/images/preview/"
echo "Please note these are SVG files with .jpg extensions to match the expected filenames."
echo "For production, replace these with actual screenshots or designed mockups." 