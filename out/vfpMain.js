/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", './vfpDef', 'monaco'], function (require, exports, vfpDef, monaco) {
    monaco.Modes.registerMonarchDefinition('vfp', vfpDef.language);
});
//# sourceMappingURL=vfpMain.js.map