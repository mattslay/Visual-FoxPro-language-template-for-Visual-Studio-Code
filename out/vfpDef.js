// https://github.com/mattslay/Visual-FoxPro-language-template-for-Visual-Studio-Code
// By Matt Slay 2015-10-04.

// Version: 1.0.1

'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: 'vfp',
        name: 'Visual FoxPro',
        defaultToken: '',
        ignoreCase: true,
        brackets: [
            // Original ones from VB template
			{ token: 'delimiter.bracket', open: '{', close: '}' },
            { token: 'delimiter.array', open: '[', close: ']' },
            { token: 'delimiter.parenthesis', open: '(', close: ')' },
            { token: 'delimiter.angle', open: '<', close: '>' },
			
			// These are added for VFP
			{ token: 'keyword.tag-class', open: 'define', close: 'enddefine' },
			{ token: 'keyword.tag-scan', open: 'scan', close: 'endscan' },
			{ token: 'keyword.tag-procedure', open: 'procedure', close: 'endproc' },
			{ token: 'keyword.tag-if', open: 'if', close: 'endif' },
			{ token: 'keyword.tag-do', open: 'do', close: 'endcase' },
			{ token: 'keyword.tag-do', open: 'do', close: 'enddo' },
			{ token: 'keyword.tag-for', open: 'for', close: 'endfor' },
			{ token: 'keyword.tag-scan', open: 'scan', close: 'endscan' },
			{ token: 'keyword.tag-scan', open: 'scan', close: 'endscan' },
			{ token: 'keyword.tag-text', open: 'text', close: 'endtext' },
			{ token: 'keyword.tag-try', open: 'try', close: 'endtry' },
			{ token: 'keyword.tag-with', open: 'with', close: 'endwith' },


        ],
        autoClosingPairs: [['{', '}'], ['[', ']'], ['(', ')'], ['"', '"'], ['<', '>'],],
        lineComment: '*',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        keywords: [
				'_tally','abs','acla','aclass','acop','acopy','acos','acti','activate','adat','adatabases','adbo','adbobjects','add','addb','addbs','additive','addp','addproperty','adel','adir','adll','adlls','adoc','adockstate','aele','aelement','aerr','aerror',
				'aeve','aevents','afie','afields','afon','afont','after','agetc','agetclass','agetf','agetfileversion','ains','ainst','ainstance','alan','alanguage','alen','alia','alias','alias','alin','alines','all','allt','alltrim','alt','alte','alter',
				'alternate','amem','amembers','american','amou','amouseobj','and','anet','anetresources','ansi','app','appe','append','apri','aprinters','apro','aprocinfo','arepltip','array','as','asc','asc','asca','ascan','ascending','asel','aselobj',
				'ases','asessions','asin','asor','asort','asql','asqlhandles','asse','assert','asserts','asta','astackinfo','asub','asubscript','at','at','at_c','atag','ataginfo','atan','atc','atcc','atcl','atcline','atli','atline','ause','aused','auto',
				'autoinc','autoincerror','automatic','autosave','avcx','avcxclasses','aver','average','avg','awidth','bar','bar','before','begi','begin','bell','betw','between','binary','bind','bindevent','bint','bintoc','bita','bitand','bitc','bitclear',
				'bitl','bitlshift','bitn','bitnot','bito','bitor','bitr','bitrshift','bits','bitset','bitt','bittest','bitx','bitxor','blan','blank','blocksize','bof','bottom','british','brow','browse','browseime','buil','build','by','calc','calculate',
				'canc','cancel','cand','candidate','candidate','caps','capslock','carry','case','cast','catc','catch','cd','cdow','cdx','cdx','ceil','ceiling','center','century','cga','chan','change','character','chdi','chdir','check','chr','chrs','chrsaw','chrt',
				'chrtran','chrtranc','class','class','classlib','clea','clear','clearr','clearresultset','click','clock','clos','close','cmon','cmonth','cnt','cntb','cntbar','cntp','cntpad','codepage','collate','collection','color','column','coma','comarray',
				'comc','comclassinfo','command','comp','comp','compact','compatible','compile','compobj','comprop','comr','comreturnerror','confirm','connection','connections','connstring','console','cont','continue','control','copy','cos','coun','count',
				'count','coverage','cpco','cpcompile','cpconvert','cpcu','cpcurrent','cpdb','cpdbf','cpdialog','crea','create','create','createb','createbinary','createobject','createobjectex','createof','createoffline','csv','ctob','ctobin','ctod','ctot',
				'curd','curdir','currency','cursor','cursorg','cursorgetprop','cursors','cursorsetprop','cursortox','cursortoxml','curv','curval','data','database','databases','datasession','datasource','date','date','datet','datetime','day','dbal','dbalias',
				'dbc','dbf','dbf','dbge','dbgetprop','dblclick','dbse','dbsetprop','dbus','dbused','ddeab','ddeaborttrans','ddead','ddeadvise','ddeen','ddeenabled','ddeex','ddeexecute','ddei','ddeinitiate','ddel','ddelasterror','ddep','ddepoke','dder',
				'dderequest','ddes','ddesetoption','ddesets','ddesetservice','ddesett','ddesettopic','ddet','ddeterminate','deac','deactivate','debu','debug','debugo','debugout','decimals','decl','declare','defa','default','defaultext','defi','define',
				'dele','dele','delete','deleted','deleted','deletetables','delimited','delimiters','desc','desc','descending','descending','development','device','dif','diff','difference','dime','dimension','dir','dire','directory','directory','disk',
				'diskspace','disp','disp','display','displaypath','distinct','dll','dlls','dmy','dmy','do','dock','dode','dodefault','doev','doevents','dohistory','dos','dotip','double','dow','drag','driv','drivetype','drop','drop','dropoffline','dtoc',
				'dtor','dtos','dtot','each','echo','edit','edit','editsource','ejec','eject','else','empt','empty','encrypt','end','endc','endcase','endde','enddefine','enddo','endfo','endfor','endfu','endfunc','endi','endif','endp','endpri','endprintjob','endproc',
				'ends','endscan','endt','endtext','endtr','endtry','endw','endwith','enginebehavior','environment','eof','eras','erase','erro','erro','error','error','escape','eval','evaluate','event','eventhandler','eventlist','eventtracking','evl','exact',
				'except','exclude','exclusive','exe','exec','execscript','exit','exp','expo','export','exte','extended','external','fchs','fchsize','fclo','fclose','fcou','fcount','fcre','fcreate','fdat','fdate','fdow','feof','ferr','ferror','fflu',
				'fflush','fget','fgets','fiel','field','field','fields','file','file','files','filet','filetostr','fill','filt','filter','filter','fina','finally','fixed','fkla','fklabel','fkma','fkmax','flags','float','floc','flock','floo','floor',
				'flus','flush','font','font','fontmetric','footer','fope','fopen','for','forc','force','forceext','forcep','forcepath','foreign','form','format','foun','found','foxplus','fput','fputs','frea','fread','free','freeze','french','from',
				'fsee','fseek','fsiz','fsize','ftim','ftime','full','full','fullpath','fullpath','func','func','function','fv','fweek','fwri','fwrite','gath','gather','general','geta','getautoincvalue','getb','getbar','getc','getcolor','getcp',
				'getcu','getcursoradapter','getd','getdir','gete','gete','getenv','getexpr','getf','getfile','getfl','getfldstate','getfo','getfont','geth','gethost','geti','getinterface','getn','getnextmodified','geto','getobject','getp','getpa',
				'getpad','getpem','getpi','getpict','getpr','getprinter','getr','getresultset','getwordc','getwordcount','getwordn','getwordnum','go','gomo','gomonth','goto','group','grow','halfheight','having','head','header','heading','headings',
				'help','helpfilter','hidd','hidden','hide','home','hour','hours','icas','icase','icon','id','idxc','idxcollate','if','iif','imes','imestatus','impl','implements','impo','import','in','include','indb','indbc','inde','inde','index',
				'indexes','indexseek','inke','inkey','inli','inlist','inner','inpu','inputbox','inse','insert','insm','insmode','int','into','isal','isalpha','isbl','isblank','isco','iscolor','isdi','isdigit','isex','isexclusive','isfl','isflocked',
				'isho','ishosted','isle','isleadbyte','islo','islower','isme','ismemofetched','ismo','ismouse','isnu','isnull','ispe','ispen','isre','isreadonly','isrl','isrlocked','istr','istransactable','isup','isupper','italian','japan','join',
				'justd','justdrive','juste','justext','justf','justfname','justp','justpath','justs','juststem','key','key','keyb','keyboard','keycomp','keym','keymatch','labe','label','last','last','lastkey','ledit','left','left','leftc','len',
				'lenc','library','like','like','likec','line','line','lineno','link','list','load','loadpicture','loca','local','locate','locf','locfile','lock','lock','log','log1','log10','logerrors','long','look','lookup','loop','lowe','lower',
				'lpar','lparameters','lpartition','ltri','ltrim','ltrjustify','lupd','lupdate','macdesktop','mackey','macro','macros','make','maketransactable','margin','mark','master','max','max','mcol','md','mdi','mdow','mdown','mdx','mdy',
				'mdy','meml','memlines','memo','memo','memory','memory','memowidth','memvar','menu','menu','menus','mess','message','message','messageb','messagebox','messagebox','method','middle','min','min','minimize','minu','minute','mkdi',
				'mkdir','mlin','mline','mod','mod','modi','modify','mont','month','mous','mouse','move','mover','mrkb','mrkbar','mrkp','mrkpad','mrow','mru','msgb','mtdll','mton','multilocks','multiselect','mwin','mwindow','name','ndx','near',
				'negotiate','new','newo','newobject','newobject','next','nextvalue','noappend','nocaptions','noclear','noclose','noconsole','nocptrans','node','nodebug','nodefault','nodelete','nodialog','nodup','noedit','noenvironment',
				'nofilter','nofloat','nogrow','noinit','nolgrid','nolink','nomargin','nomdi','nomenu','nominimize','nomodify','none','nooptimize','nooverwrite','nopageeject','noprompt','norefresh','norequery','noreset','norgrid','norm',
				'norm','normal','normalize','nosave','noshow','not','note','notify','nowait','nowindow','nozoom','ntom','null','nulldisplay','numl','numlock','nvl','object','objects','objt','objtoclient','occu','occurs','odometer','of',
				'off','oldv','oldval','oleobject','on','on','open','opendatatip','optimize','or','orde','order','order','os','othe','otherwise','outer','pack','pad','pad','padc','padl','padr','page','palette','panel','para','para','parameters',
				'parameters','partition','password','path','paym','payment','pcol','pcou','pcount','pdox','pdsetup','pems','pemstatus','percent','pi','pictres','picture','pixels','plain','play','point','pop','popu','popup','popup','popups',
				'position','preference','pretext','preview','prim','primary','primary','prin','prin','printer','printjob','printstatus','priv','private','prmb','prmbar','prmp','prmpad','proc','procedure','production','prog','program','project','prom','prompt',
				'prompt','prop','proper','prot','protected','prow','prti','prtinfo','publ','public','push','putf','putfile','pv','quar','quarter','query','quit','rais','raiseevent','rand','range','rat','ratc','ratl','ratline','rd','read',
				'readborder','readwrite','reca','recall','recc','reccount','recn','recno','recompile','record','recover','recs','recsize','recycle','redit','reference','references','refr','refresh','refresh','rein','reindex','rela',
				'relation','relation','relative','rele','release','remo','remo','remote','remove','removeproperty','rena','rename','repl','repl','replace','replicate','repo','report','reportbehavior','reprocess','requ','requery',
				'resource','resources','rest','restore','resu','resume','retr','retry','retu','return','rgb','rgbs','rgbscheme','righ','right','right','rightc','rloc','rlock','rmdi','rmdir','roll','rollback','rollover','roun','round',
				'rpd','rtljustify','rtod','rtri','rtrim','run','safety','same','save','save','savepicture','scan','scat','scatter','sche','scheme','scheme','scol','scols','screen','scroll','sdf','sec','seco','seconds','seconds','seek',
				'sele','sele','select','select','selection','separator','set','set','setf','setfldstate','setr','setresultset','share','sheet','shift','short','shortcut','show','shutdown','sign','sin','size','skip','skpb','skpbar','skpp',
				'skppad','sort','soun','soundex','spac','space','space','sql','sqlbuffering','sqlca','sqlcancel','sqlcol','sqlcolumns','sqlcom','sqlcommit','sqlcon','sqlconnect','sqld','sqldisconnect','sqle','sqlexec','sqlg','sqlgetprop',
				'sqli','sqlidledisconnect','sqlm','sqlmoreresults','sqlp','sqlprepare','sqlr','sqlrollback','sqlse','sqlsetprop','sqlst','sqlstringconnect','sqlt','sqltables','sqrt','srow','srows','status','step','stor','store','str',
				'strc','strconv','stre','strextract','strictdate','strto','strtofile','strtr','strtran','structure','stuf','stuff','stuffc','style','subs','substr','substrc','sum','sum','summary','susp','suspend','sylk','sys','sysformats',
				'sysm','sysmenu','sysmetric','system','tab','table','tabler','tablerevert','tables','tableu','tableupdate','tablevalidate','tag','tag','tagc','tagcount','tagn','tagno','taiwan','talk','tan','targ','target','text','textmerge',
				'textmerge','this','thisform','thro','throw','time','time','timeout','title','to','top','topic','tota','total','tran','transaction','transform','trbetween','trigger','trim','try','ttoc','ttod','txnl','txnlevel','txtw','txtwidth','type','type',
				'typeahead','udfparms','unbi','unbindevents','union','unique','unlo','unlock','upda','update','uppe','upper','usa','use','used','userid','usetip','val','vali','valid','validate','value','values','varcharmapping','vart',
				'vartype','vers','version','view','views','wait','wbor','wborder','wchi','wchild','wcol','wcols','wdoc','wdockable','week','wexi','wexist','wfon','wfont','when','where','while','window','windows','wks','wlas','wlast','wlco',
				'wlcol','wlro','wlrow','wmax','wmaximum','wmin','wminimum','wont','wontop','wout','woutput','wpar','wparent','wrap','wrk','wrow','wrows','wtit','wtitle','wvis','wvisible','xls','xmlt','xmltocursor','xmlu','xmlupdategram',
				'year','ymd','zap','zoom'
			],
        tagwords: [
            //'If', 'Sub', 'Select', 'Try', 'Class', 'Enum',
            //'Function', 'Get', 'Interface', 'Module', 'Namespace', 'Operator', 'Set', 'Structure', 'Using', 'While', 'With',
            //'Loop', 'For', 'Next', 'Property', 'Continue', 'AddHandler', 'RemoveHandler', 'Event', 'RaiseEvent', 'SyncLock',
			'define', 'do', 'if', 'for', 'proc', 'procedure', 'text', 'try', 'scan', 'with'
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
                [/endcase/, { token: 'keyword.tag-do', bracket: '@close' }],
                [/enddefine/, { token: 'keyword.tag-define', bracket: '@close' }],
                [/enddo/, { token: 'keyword.tag-do', bracket: '@close' }],
                [/endif/, { token: 'keyword.tag-if', bracket: '@close' }],
                [/endfor/, { token: 'keyword.tag-for', bracket: '@close' }],
                [/endproc/, { token: 'keyword.tag-procedure', bracket: '@close' }],
                [/endtry/, { token: 'keyword.tag-try', bracket: '@close' }],
                [/endwith/, { token: 'keyword.tag-with', bracket: '@close' }],
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
                [/"/, 'string', '@string'],													// double quote
                [/'/, { token: 'string.sq.delim', bracket: '@open', next: '@sstring.sq' }], // single quote
                [/\[/, { token: 'string.b.delim', bracket: '@open', next: '@bstring.b' }],  // bracket
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                //[/(\'|REM(?!\w)).*$/, 'comment'],
				[/\*.*$/, 'comment'],
				[/\&\&.*$/, 'comment'],  // Inline comments that begin with && on a code line
            ],
            // double quote strings "like this"
			string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"C?/, 'string', '@pop']
            ],
            // single quote strings 'like this'
            // sstring.<kind>  where kind is 'sq' (single quote)
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