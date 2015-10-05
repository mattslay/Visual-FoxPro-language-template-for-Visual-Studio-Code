# A language template for Visual FoxPro code files in Visual Studio Code
Adding these language template files to your installation of Visual Studio Code will bring syntax coloring and language support for Visual FoxPro PRG code files.

##Installation
Copy the files from this repo into to the path below on your machine (You will need to create the vs.language.vfp folder at the end of the path). Also, you will probably need to use Administrator Mode on Explorer to access folders in the Program Files (x86). 

C:\Program Files (x86)\Microsoft VS Code\resources\app\plugins\vs.language.vfp

![alt text](http://content.screencast.com/users/MattSlay/folders/Snagit/media/2c68d695-a94e-48a7-ab57-bfaff421470e/10.04.2015-17.03.png "screenshot")


###Background
To create this language template package, I started with a copy of the Visual Basic .net language pack, and began to alter the settings to suit the VFP language. Thanks to Rick Strahl for pointing me to VB as the most likely template that would be easy to convert to VFP.

## VS Code Settings

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
