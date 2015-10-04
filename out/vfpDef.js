/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: 'vfp',
        name: 'Visual FoxPro',
        defaultToken: '',
        ignoreCase: true,
        brackets: [
            { token: 'delimiter.bracket', open: '{', close: '}' },
            { token: 'delimiter.array', open: '[', close: ']' },
            { token: 'delimiter.parenthesis', open: '(', close: ')' },
            { token: 'delimiter.angle', open: '<', close: '>' },
            // Special bracket statement pairs
            // according to https://msdn.microsoft.com/en-us/library/tsw2a11z.aspx
            { token: 'keyword.tag-addhandler', open: 'addhandler', close: 'end addhandler' },
            { token: 'keyword.tag-class', open: 'class', close: 'end class' },
            { token: 'keyword.tag-enum', open: 'enum', close: 'end enum' },
            { token: 'keyword.tag-event', open: 'event', close: 'end event' },
            // { token: 'keyword.tag-function', open: 'function', close: 'end function' },
            { token: 'keyword.tag-get', open: 'get', close: 'end get' },
            // { token: 'keyword.tag-if', open: 'if', close: 'end if' },
            { token: 'keyword.tag-interface', open: 'interface', close: 'end interface' },
            { token: 'keyword.tag-module', open: 'module', close: 'end module' },
            { token: 'keyword.tag-namespace', open: 'namespace', close: 'end namespace' },
            { token: 'keyword.tag-operator', open: 'operator', close: 'end operator' },
            { token: 'keyword.tag-property', open: 'property', close: 'end property' },
            { token: 'keyword.tag-raiseevent', open: 'raiseevent', close: 'end raiseevent' },
            { token: 'keyword.tag-removehandler', open: 'removehandler', close: 'end removehandler' },
            { token: 'keyword.tag-select', open: 'select', close: 'end select' },
            { token: 'keyword.tag-set', open: 'set', close: 'end set' },
            { token: 'keyword.tag-structure', open: 'structure', close: 'end structure' },
            { token: 'keyword.tag-sub', open: 'sub', close: 'end sub' },
            { token: 'keyword.tag-synclock', open: 'synclock', close: 'end synclock' },
            { token: 'keyword.tag-try', open: 'try', close: 'end try' },
            { token: 'keyword.tag-while', open: 'while', close: 'end while' },
            { token: 'keyword.tag-with', open: 'with', close: 'end with' },
            // Other pairs
            { token: 'keyword.tag-using', open: 'using', close: 'end using' },
            { token: 'keyword.tag-do', open: 'do', close: 'loop' },
            { token: 'keyword.tag-for', open: 'for', close: 'next' },
			
			{ token: 'keyword.tag-function', open: 'Procedure', close: 'EndProc' },
			{ token: 'keyword.tag-if', open: 'If', close: 'EndIf' }


        ],
        autoClosingPairs: [['{', '}'], ['[', ']'], ['(', ')'], ['"', '"'], ['<', '>'],],
        lineComment: '*',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        keywords: [
			'acla','aclass','adbo','adbobjects','adat','adatabases','adir','adoc','adockstate','aerr','aerror','aeve','aevents','afie',
			'afields','afon','afont','agetc','agetclass','agetf','agetfileversion','ainst','ainstance','alan','alanguage','alin',
			'alines','amem','amembers','amou','amouseobj','anet','anetresources','apri','aprinters','apro','aprocinfo','asql','asqlhandles',
			'asel','aselobj','asta','astackinfo','atag','ataginfo','ause','aused','avcx','avcxclasses','abs','acop','acopy','acos','addp','addproperty',
			'addb','addbs','adel','adll','adlls','aele','aelement','ains','alen','alia','alias','allt','alltrim','asc','asca','ascan','ases','asessions','asin',
			'asor','asort','asub','asubscript','at','at_c','atan','atc','atcc','atcl','atcline','atli','atline','avg','bar','betw','between','bint','bintoc','bind',
			'bindevent','bita','bitand','bitc','bitclear','bitl','bitlshift','bitn','bitnot','bito','bitor','bitr','bitrshift','bits','bitset','bitt',
			'bittest','bitx','bitxor','bof','ctob','ctobin','cand','candidate','caps','capslock','cast','cdow','cdx','ceil','ceiling','chr','chrs','chrsaw',
			'chrt','chrtran','chrtranc','clearr','clearresultset','cmon','cmonth','cnt','cntb','cntbar','cntp','cntpad','coma','comarray','comc',
			'comclassinfo','comr','comreturnerror','comp','compobj','comprop','cos','count','cpco','cpconvert','cpcu','cpcurrent','cpdb','cpdbf',
			'createb','createbinary','create','createobject','createobjectex','createof','createoffline','ctod','ctot','curd','curdir','cursorg',
			'cursorgetprop','cursors','cursorsetprop','cursortox','cursortoxml','curv','curval','dbal','dbalias','dbge','dbgetprop','dbse','dbsetprop',
			'dbus','dbused','ddeab','ddeaborttrans','ddead','ddeadvise','ddeen','ddeenabled','ddeex','ddeexecute','ddei','ddeinitiate','ddel','ddelasterror',
			'ddep','ddepoke','dder','dderequest','ddes','ddesetoption','ddesets','ddesetservice','ddesett','ddesettopic','ddet','ddeterminate','date',
			'datet','datetime','day','dbc','dbf','defa','defaultext','dele','deleted','desc','descending','diff','difference','dire','directory','disk',
			'diskspace','disp','displaypath','dmy','dode','dodefault','dow','driv','drivetype','drop','dropoffline','dtoc','dtor','dtos','dtot','edit',
			'editsource','empt','empty','endfor','endscan','eof','erro','error','eval','evaluate','event','eventhandler','evl','exec','execscript','exp','fchs','fchsize',
			'fclo','fclose','fcou','fcount','fcre','fcreate','fdat','fdate','feof','ferr','ferror','fflu','fflush','fget','fgets','fiel','field','file','filet',
			'filetostr','filt','filter','fkla','fklabel','fkma','fkmax','floc','flock','floo','floor','font','fontmetric','fope','fopen','for','forc',
			'forceext','forcep','forcepath','foun','found','fput','fputs','frea','fread','fsee','fseek','fsiz','fsize','ftim','ftime','full','fullpath',
			'fv','fwri','fwrite','geta','getautoincvalue','getcp','getc','getcolor','getcu','getcursoradapter','getd','getdir','gete','getenv',
			'getf','getfile','getfl','getfldstate','getfo','getfont','geth','gethost','geti','getinterface','getn','getnextmodified','geto',
			'getobject','getp','getpem','getpi','getpict','getpr','getprinter','getr','getresultset','getwordc','getwordcount','getwordn',
			'getwordnum','getb','getbar','getpa','getpad','gomo','gomonth','head','header','home','hour','icas','icase','imes','imestatus','id',
			'idxc','idxcollate','iif','inli','inlist','indb','indbc','inde','indexseek','inke','inkey','inpu','inputbox','insm','insmode','int',
			'isal','isalpha','isbl','isblank','isco','iscolor','isdi','isdigit','isex','isexclusive','isfl','isflocked','isho','ishosted',
			'isle','isleadbyte','islo','islower','isme','ismemofetched','ismo','ismouse','isnu','isnull','ispe','ispen','isrl','isrlocked',
			'isre','isreadonly','istr','istransactable','isup','isupper','justd','justdrive','juste','justext','justf','justfname',
			'justp','justpath','justs','juststem','key','keym','keymatch','last','lastkey','left','leftc','len','lenc','like','likec','line',
			'lineno','load','loadpicture','locf','locfile','lock','log','log1','log10','look','lookup','lowe','lower','ltri','ltrim','lupd',
			'lupdate','make','maketransactable','max','mcol','mdow','mdown','mdx','mdy','meml','memlines','memo','memory','menu','mess',
			'message','messageb','msgb','messagebox','min','minu','minute','mlin','mline','mod','mont','month','mrkb',
			'mrkbar','mrkp','mrkpad','mrow','mton','mwin','mwindow','ndx','new','newobject','newo','newobject','norm','normalize','ntom',
			'numl','numlock','nvl','objt','objtoclient','occu','occurs','oldv','oldval','on','orde','order','os','pad','padc','padl','padr',
			'para','parameters','paym','payment','pcol','pcou','pcount','pems','pemstatus','pi','popu','popup','prim','primary','prin',
			'printstatus','prmb','prmbar','prmp','prmpad','prog','program','prom','prompt','prop','proper','prow','prti','prtinfo',
			'putf','putfile','pv','quar','quarter','rais','raiseevent','rand','rat','ratc','ratl','ratline','recc','reccount','recn',
			'recno','recs','recsize','refr','refresh','rela','relation','remo','removeproperty','repl','replicate','requ','requery',
			'rgb','rgbs','rgbscheme','righ','right','rightc','rloc','rlock','roun','round','rtod','rtri','rtrim','sqlca','sqlcancel',
			'sqlcol','sqlcolumns','sqlcom','sqlcommit','sqlcon','sqlconnect','sqld','sqldisconnect','sqle','sqlexec','sqlg','sqlgetprop',
			'sqli','sqlidledisconnect','sqlm','sqlmoreresults','sqlp','sqlprepare','sqlr','sqlrollback','sqlse','sqlsetprop','sqlst',
			'sqlstringconnect','sqlt','sqltables','save','savepicture','scan','sche','scheme','scol','scols','sec','seco','seconds','seek','sele',
			'select','set','setf','setfldstate','setr','setresultset','sign','sin','skpb','skpbar','skpp','skppad','soun','soundex','spac',
			'space','sqrt','srow','srows','str','stre','strextract','strto','strtofile','strc','strconv','strtr','strtran','stuf','stuff',
			'stuffc','subs','substr','substrc','sum','sys','sysm','sysmetric','tabler','tablerevert','tableu','tableupdate','tag','tagc',
			'tagcount','tagn','tagno','tan','targ','target','text','textmerge','time','tran','transform','trim','ttoc','ttod','txnl','txnlevel',
			'txtw','txtwidth','type','unbi','unbindevents','uppe','upper','used','val','vart','vartype','vers','version','wdoc','wdockable',
			'wbor','wborder','wchi','wchild','wcol','wcols','week','wexi','wexist','wfon','wfont','wlas','wlast','wlco','wlcol','wlro','wlrow',
			'wmax','wmaximum','wmin','wminimum','wont','wontop','wout','woutput','wpar','wparent','wrow','wrows','wtit','wtitle','wvis','wvisible',
			'xmlt','xmltocursor','xmlu','xmlupdategram','year','acti','activate','add','alte','alter','appe','append','asse','assert','aver',
			'average','begi','begin','blan','brow','browse','buil','build','calc','calculate','canc','cancel','catc','catch','cd','chdi',
			'chdir','chan','change','clea','clear','clos','close','comp','compile','cont','continue','copy','coun','count','crea','create','deac',
			'deactivate','debu','debug','debugo','debugout','decl','declare','defi','dele','dime','dimension','dir','disp','display','do','dock',
			'doev','doevents','dotip','drop','edit','ejec','eject','end','endif','endc','endcase','endde','enddo','endfo','endfu','endi','endpri',
			'endprintjob','endp','ends','endt','endtr','endw','eras','erase','erro','exit','expo','export','exte','external','fina','flus','flush',
			'func','gath','gather','gete','getexpr','go','goto','help','hidd','hide','impl','impo','import','inde','index','inse','keyb','keyboard',
			'labe','list','local','loca','locate','loop','lpar','md','mkdi','modi','modify','mous','mouse','move','node','nodefault','note','open',
			'opendatatip','othe','otherwise','pack','para','parameters','play','pop','prin','printjob','priv','private','prot','publ',
			'public','push','quit','rd','read','reca','recall','rein','reindex','rele','release','remo','remove','rena','rename','repl','replace',
			'arepltip','repo','restore','resu','resume','retr','retry','retu','rmdi','roll','rollback','run','scat','scatter','seek','sele','sort',
			'stor','store','sum','susp','suspend','thro','throw','tota','total','unlo','unlock','upda','use','usetip','vali','validate','wait','zap',
			'additive','after','alias','all','alt','alternate','american','ansi','app','array','as','asc','ascending','asserts','at','auto','autoinc',
			'autoincerror','automatic','autosave','bar','before','bell','binary','blank','blocksize','bottom','british','browseime','by',
			'candidate','carry','cdx','center','century','cga','character','check','class','classlib','click','clock','codepage','collate',
			'collection','color','column','command','compact','compatible','confirm','connection','connections','connstring','console',
			'control','coverage','cpcompile','cpdialog','csv','currency','cursor','data','database','databases','datasession','datasource',
			'date','dbf','dblclick','decimals','default','delete','deleted','deletetables','delimited','delimiters','desc','descending',
			'development','device','dif','directory','distinct','dll','dlls','dmy','dohistory','dos','double','drag','each','echo','encrypt',
			'enginebehavior','environment','error','escape','eventlist','eventtracking','exact','except','exclude','exclusive','exe',
			'extended','fdow','field','fields','file','files','fill','filter','finally','fixed','flags','float','font','footer','force','foreign',
			'form','format','foxplus','free','freeze','french','from','full','fullpath','fweek','general','group','grow','halfheight','having',
			'heading','headings','helpfilter','hidden','hours','icon','id','implements','in','indexes','inner','insert','into','italian','japan',
			'join','key','keycomp','label','last','ledit','left','library','like','line','link','lock','logerrors','long','lparameters','lpartition',
			'ltrjustify','macdesktop','mackey','macro','macros','margin','mark','master','max','mdi','mdy','memo','memory','memowidth','memvar','menu',
			'menus','message','method','middle','min','minimize','mkdir','mod','mover','mru','mtdll','multilocks','multiselect','name','near','negotiate',
			'next','nextvalue','noappend','nocaptions','noclear','noclose','noconsole','nocptrans','nodebug','nodelete','nodialog','nodup','noedit',
			'noenvironment','nofilter','nofloat','nogrow','noinit','nolgrid','nolink','nomargin','nomdi','nomenu','nominimize','nomodify','none',
			'nooptimize','nooverwrite','nopageeject','noprompt','norefresh','norequery','noreset','norgrid','norm','normal','nosave','noshow',
			'notify','nowait','nowindow','nozoom','null','nulldisplay','object','objects','odometer','of','off','oleobject','on','optimize','order','pad',
			'page','palette','panel','partition','password','path','pdox','pdsetup','percent','pictres','picture','pixels','plain','point','popup','popups',
			'position','preference','pretext','preview','primary','printer','production','project','prompt','protected','query','range',
			'readborder','readwrite','recompile','record','recover','recycle','redit','reference','references','refresh','relation','relative','remote',
			'report','reportbehavior','reprocess','resource','resources','rest','return','right','rmdir','rollover','rpd','rtljustify','safety','same','save',
			'scheme','screen','scroll','sdf','seconds','select','selection','separator','set','share','sheet','shift','short','shortcut','show','shutdown','size',
			'skip','space','sql','sqlbuffering','status','step','strictdate','structure','style','summary','sylk','sysformats','sysmenu','system','tab','table',
			'tables','tablevalidate','tag','taiwan','talk','textmerge','time','timeout','title','to','top','topic','transaction','try','endtry','trbetween','trigger','type',
			'typeahead','udfparms','union','unique','update','usa','userid','valid','value','values','varcharmapping','view','views','when','where','while',
			'endtext','define','class','enddefine','endproc','include','func','function','endfunc',
			'awidth','window','windows','wks','wrap','wrk','xls','ymd','zoom','and','or','not'
        ],
        tagwords: [
            'If', 'Sub', 'Select', 'Try', 'Class', 'Enum',
            'Function', 'Get', 'Interface', 'Module', 'Namespace', 'Operator', 'Set', 'Structure', 'Using', 'While', 'With',
            'Do', 'Loop', 'For', 'Next', 'Property', 'Continue', 'AddHandler', 'RemoveHandler', 'Event', 'RaiseEvent', 'SyncLock',
			'proc','procedure'
        ],
        // we include these common regular expressions
        symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        integersuffix: /U?[DI%L&S@]?/,
        floatsuffix: /[R#F!]?/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // whitespace
                { include: '@whitespace' },
                // special ending tag-words
                [/next(?!\w)/, { token: 'keyword.tag-for', bracket: '@close' }],
                [/loop(?!\w)/, { token: 'keyword.tag-do', bracket: '@close' }],
                // usual ending tags
                [/end\s+(?!for|do)([a-zA-Z_]\w*)/, { token: 'keyword.tag-$1', bracket: '@close' }],
                // identifiers, tagwords, and keywords
                [/[a-zA-Z_]\w*/, { cases: { '@tagwords': { token: 'keyword.tag-$0', bracket: '@open' },
                            '@keywords': { token: 'keyword.$0' },
                            '@default': 'identifier' } }],
                // Preprocessor directive
                [/^\s*#\w+/, 'keyword'],
                // numbers
                [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
                [/&0[0-7]+(@integersuffix)/, 'number.octal'],
                [/\d+(@integersuffix)/, 'number'],
                // date literal
                [/#.*#/, 'number'],
                // delimiters and operators
                //[/[{}()\[\]]/, '@brackets'],
                [/[{}()]/, '@brackets'],
                [/@symbols/, 'delimiter'],
                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, 'string', '@string'],
                [/'/, { token: 'string.sq.delim', bracket: '@open', next: '@sstring.sq' }],
                [/\[/, { token: 'string.b.delim', bracket: '@open', next: '@bstring.b' }],
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                //[/(\'|REM(?!\w)).*$/, 'comment'],
				[/\*.*$/, 'comment'],
				[/\&\&.*$/, 'comment'],
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"C?/, 'string', '@pop']
            ],
            // single quote strings (also used for symbols)
            // sstring.<kind>  where kind is 'sq' (single quote) or 's' (symbol)
            sstring: [
                [/[^\\']+/, 'string.$S2'],
                [/\\\\|\\'|\\$/, 'string.$S2.escape'],
                [/\\./, 'string.$S2.invalid'],
                [/'/, { token: 'string.$S2.delim', bracket: '@close', next: '@pop' }]
            ],
            // bracketed strings [like this]
            // bstring.<kind>  where kind is 'b' (bracketed)
            bstring: [
                [/[^\]]+/, 'string.$S2'],
                //[/\\\\|\\]|\\$/, 'string.$S3.escape'],
                //[/\\./, 'string.$S3.invalid'],
                [/\]/, { token: 'string.$S3.delim', bracket: '@close', next: '@pop' }]
            ],
        },
    };
});
//# sourceMappingURL=vfpDef.js.map