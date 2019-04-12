# A language template for Visual FoxPro code files in Visual Studio Code
This language template brings syntax coloring and language support for Visual FoxPro PRG code files to the Visual Studio Code editor.

---
## Updated version as of 2019-04-12 with many new fixes!

## Easy Install from VS Code Marketplace
You can install this extension in VS Code right from the Extensions bar in the IDE. Just click on Extensions, then search for "FoxPro" and you can install with one click. (Credit to @newdatasystems for adding this extension to the Marketplace https://github.com/newdatasystems)

If you install from the Marketplace, you will also get the collection of Snippets which have several Snippets that generate code when you type a snippet Keyword. Look in the "Snippets" folder and you can learn how it works, and it's really easy to add your owns snippet templates once you see the required pattern.

You can documentation of the extension in the Marketplace at this url: https://marketplace.visualstudio.com/items?itemName=NewDataSystems.foxpro

## Manual Install

If you really want to go for a low-level, manual install, here's what you need to know: VS Code looks for extensions under your user folder in the .vscode/extensions folder. Depending on your platform it is located:

- Windows %USERPROFILE%\\.vscode\extensions
- Mac $HOME/.vscode/extensions
- Linux $HOME/.vscode/extensions

So, copy the "foxpro" folder in this source code into your user folder under .vscode/extensions.  The final folder structure (on a Windows machine) will be something like:
- C:\Users\UserName\\.vscode\extensoins\foxpro

![alt text](http://content.screencast.com/users/MattSlay/folders/Snagit/media/354acc1a-ff2b-4514-84d0-3c47b2d7e250/04.01.2019-14.14.png "screenshot")

## Code Folding / Code Collapse feature is supported!

![alt text](https://cloud.githubusercontent.com/assets/309016/20973151/31e04362-bc5d-11e6-8f58-008004b081ea.png "code-folding")

### Background
To create this language template package, I started with a copy of the Visual Basic .net language pack, and began to alter the settings to suit the VFP language. Thanks to Rick Strahl for pointing me to VB as the most likely template that would be easy to convert to VFP.

### VS Code Settings

You can add this **"files.exclude"** entry to your **settings.json** file to have VS Code ignore certain files in the left folder tree view. You can access this file in the File -> Preferences -> User Settings menu.

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

