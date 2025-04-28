@echo off
echo Creating preview image placeholders...

REM Create directories if they don't exist
if not exist "public\images\preview" mkdir "public\images\preview"

REM Function to create a simple HTML that renders as an image
echo Creating dashboard-preview.jpg placeholder...
echo ^<html^>^<body style="margin:0;padding:0;width:800px;height:600px;background:#4299e1;"^>^<div style="display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column;color:white;font-family:Arial;"^>^<h1^>Hospital Dashboard Preview^</h1^>^<p^>Placeholder Image^</p^>^</div^>^</body^>^</html^> > "public\images\preview\dashboard-preview.html"

echo Creating department-preview.jpg placeholder...
echo ^<html^>^<body style="margin:0;padding:0;width:800px;height:600px;background:#48bb78;"^>^<div style="display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column;color:white;font-family:Arial;"^>^<h1^>Hospital Departments Preview^</h1^>^<p^>Placeholder Image^</p^>^</div^>^</body^>^</html^> > "public\images\preview\department-preview.html"

echo Creating staff-preview.jpg placeholder...
echo ^<html^>^<body style="margin:0;padding:0;width:800px;height:600px;background:#667eea;"^>^<div style="display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column;color:white;font-family:Arial;"^>^<h1^>Staff Scheduling Preview^</h1^>^<p^>Placeholder Image^</p^>^</div^>^</body^>^</html^> > "public\images\preview\staff-preview.html"

echo Creating analytics-preview.jpg placeholder...
echo ^<html^>^<body style="margin:0;padding:0;width:800px;height:600px;background:#9f7aea;"^>^<div style="display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column;color:white;font-family:Arial;"^>^<h1^>Hospital Analytics Preview^</h1^>^<p^>Placeholder Image^</p^>^</div^>^</body^>^</html^> > "public\images\preview\analytics-preview.html"

echo Creating patient-preview.jpg placeholder...
echo ^<html^>^<body style="margin:0;padding:0;width:800px;height:600px;background:#4299e1;"^>^<div style="display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column;color:white;font-family:Arial;"^>^<h1^>Patient Management Preview^</h1^>^<p^>Placeholder Image^</p^>^</div^>^</body^>^</html^> > "public\images\preview\patient-preview.html"

echo Creating security-preview.jpg placeholder...
echo ^<html^>^<body style="margin:0;padding:0;width:800px;height:600px;background:#2d3748;"^>^<div style="display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column;color:white;font-family:Arial;"^>^<h1^>Security & Compliance Preview^</h1^>^<p^>Placeholder Image^</p^>^</div^>^</body^>^</html^> > "public\images\preview\security-preview.html"

echo Creating financial-preview.jpg placeholder...
echo ^<html^>^<body style="margin:0;padding:0;width:800px;height:600px;background:#38a169;"^>^<div style="display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column;color:white;font-family:Arial;"^>^<h1^>Financial Dashboard Preview^</h1^>^<p^>Placeholder Image^</p^>^</div^>^</body^>^</html^> > "public\images\preview\financial-preview.html"

echo.
echo HTML placeholders created in public\images\preview\
echo.
echo INSTRUCTIONS:
echo 1. Open each HTML file in a browser
echo 2. Take a screenshot and save it with the same name but .jpg extension
echo 3. For example, open dashboard-preview.html in browser, screenshot, save as dashboard-preview.jpg
echo.
echo For production, replace these with actual screenshots or designed mockups.
echo. 