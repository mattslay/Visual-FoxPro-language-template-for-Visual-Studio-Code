# A language template for Visual FoxPro code files in Visual Studio Code
This language template brings syntax coloring and language support for Visual FoxPro PRG code files to the Visual Studio Code editor.

---
Update 2016-04-04: Someone else has made a VFP syntax colorizing tool for VFP Code, and it may well be better than mine here, so please check out theirs and support them.  See it here: 
[link] (https://github.com/FrancisFaure/vfp_tmlanguage_generator)
---


##Installation - Installing Extensions
VS Code looks for extensions under your user folder in the .vscode/extensions folder. Depending on your platform it is located:

- Windows %USERPROFILE%\.vscode\extensions
- Mac $HOME/.vscode/extensions
- Linux $HOME/.vscode/extensions

So, copy the "foxpro" folder in this source code into your user folder under .vscode/extensions.  The final folder structure (on a Windows machine) will be something like:
- C:\Users\UserName\\.vscode\extensoins\foxpro

![alt text](http://content.screencast.com/users/MattSlay/folders/Snagit/media/dcc3ac0a-9cd3-4437-964d-d00eb9cb0d5f/10.04.2015-23.50.png "screenshot")


###Background
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

