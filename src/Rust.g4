grammar Rust;

// keywords

KW_IF : 'if';
KW_ELSE : 'else';
KW_WHILE : 'while';
KW_BREAK : 'break';
KW_CONTINUE : 'continue';
KW_FN : 'fn';
KW_RETURN : 'return';
KW_LET : 'let';
KW_MUT : 'mut';


prog: stmt* expr? EOF;

stmt
    : block
    | fn_decl_stmt
    | while_stmt
    | if_stmt
    | declaration_stmt
    | return_stmt
    | expr_stmt
    | break_stmt
    | continue_stmt
    ;

expr
    : fn_call_expr
    | '(' expr ')'
    | op=('!'|'-') expr
    | expr op=('*'|'/') expr
    | expr op=('+'|'-') expr
    | expr op=('==' | '!=' | '<' | '<=' | '>' | '>=') expr
    | IDENT
    | lit
    ;

block:
    '{' stmt* expr? '}';

expr_stmt: expr';';


// control structures

while_stmt: KW_WHILE expr block;

break_stmt: KW_BREAK;

continue_stmt: KW_CONTINUE;

if_stmt: KW_IF expr block else_stmt?;

else_stmt: KW_ELSE block;


// variables

declaration_stmt: KW_LET KW_MUT? IDENT ':' TYPE '=' expr';';

assignment_stmt: IDENT '=' expr ';';


// functions

param:
    IDENT ':' TYPE;

param_list:
    param (',' param)* ','?;

return_type:
    '->' TYPE;

fn_decl_stmt:
    KW_FN IDENT '(' param_list? ')' return_type? block;

fn_call_expr: IDENT '(' argument_list ')';

argument_list: expr (',' expr)*?;

return_stmt: KW_RETURN expr? ';';


// lits

lit: INT | BOOL;

INT: [0-9]+;
BOOL: 'true' | 'false';
IDENT: [a-zA-Z_][a-zA-Z0-9_]* ;
TYPE: 'bool' | 'int';


// ignored
WS: [ \t\r\n]+ -> skip;

LineComment:
    '//' ~[\r\n]* -> skip;

BlockComment:
    '/*' (~[*/] | '/'* BlockComment | '/'+ (~[*/]) | '*'+ ~[*/])* '*'+ '/' -> skip;


