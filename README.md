# A language template for Visual FoxPro code files in Visual Studio Code
Adding these language template files to your installation of Visual Studio Code will bring syntax coloring and language support for Visual FoxPro PRG code files.

##To install, copy the files from this repo into to this path on your machine:

C:\Program Files (x86)\Microsoft VS Code\resources\app\plugins\vs.language.vfp

![alt text](http://content.screencast.com/users/MattSlay/folders/Snagit/media/2c68d695-a94e-48a7-ab57-bfaff421470e/10.04.2015-17.03.png "screenshot")


(Note: To create this language template package, I started with a copy of the Visual Basic .net language pack, and began to alter the setting to suit the VFP language. Thanks to Rick Strahl for pointing me to VB as the most likely template that would be easy to convert to VFP.)

###ToDo: 
> The **tagwords** node of vfpDef.js still contains all the VB words. These will eventually be removed and will be replaced with the appropriate VFP words. I'm still trying to learn how VS Code treats the "keywords" differently than the "tagwords", and then I will clean this up.

### ToDo: 
> The **tokenizer** node of vfpDef.js is still mostly from the VB template, so I am sure we will need some modifications here to truly maximize the VS Code experience/features when working with VFP code files.

## VS Code Settings

You can adde this **"files.exclude"** entry to your **settings.json** file to have VS Code ignore certain files in the left folder tree view. You can access this file in the File -> Preferences -> User Settings menu.

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
