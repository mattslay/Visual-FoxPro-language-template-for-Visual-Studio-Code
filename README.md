# A language template for Visual FoxPro code files in Visual Studio Code
Adding these language template files to your installation of Visual Studio Code will bring syntax coloring and language support for Visual FoxPro PRG code files.

##To install, copy the files from this repo into to this path on your machine:

C:\Program Files (x86)\Microsoft VS Code\resources\app\plugins\vs.language.vfp

![alt text](http://screencast.com/t/wdeVUlzuufTE "screenshot")

## VS Code Settings

You can adde this **"files.exclude"** entry to your **settings.json** file to have VS Code ignore certain files in the left folder tre view. You can access this file in the File -> Preferences -> User Settings menu.

```javascript
// Place your settings in this file to overwrite the default settings
{
		"files.exclude": {
		"**/.git": true,
		"**/.DS_Store": true,
		"**/*.fxp": true,
		"**/*.FXP": true,
		"**/*.bak": true,
		"**/*.BAK": true,
		"**/*.pjt": true,
		"**/*.PJT": true,
		"**/*.sct": true,
		"**/*.SCT": true,
		"**/*.vct": true,
		"**/*.VCT": true
	}
}
```
