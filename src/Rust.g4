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
KW_BORROW: '&';

// lits

lit: INT | BOOL;
mut_type: KW_BORROW? KW_MUT? TYPE;
nam: KW_BORROW? KW_MUT? IDENT;

INT: [0-9]+;
BOOL: 'true' | 'false';
TYPE: 'bool' | 'number';
IDENT: [a-zA-Z_][a-zA-Z0-9_]* ;


prog: stmt* expr? EOF;

stmt
    : fn_decl_stmt
    | while_stmt
    | block
    | assignment_stmt
    | declaration_stmt
    | return_stmt
    | expr_stmt
    | break_stmt
    | continue_stmt
    | empty_stmt
    ;

expr
    : if_expr
    | fn_call_expr
    | '(' expr ')'
    | op=('!'|'-unary') expr
    | expr op=('*'|'/') expr
    | expr op=('+'|'-') expr
    | expr op=('==' | '!=' | '<' | '<=' | '>' | '>=') expr
    | nam
    | lit
    ;

block:
    '{' stmt* expr? '}';

expr_stmt: expr';';
empty_stmt: ';';

// control structures

while_stmt: KW_WHILE expr block;

break_stmt: KW_BREAK;

continue_stmt: KW_CONTINUE;

if_expr: KW_IF expr block else_expr?;

else_expr: KW_ELSE block;


// variables

declaration_stmt: KW_LET KW_MUT? IDENT ':' TYPE '=' expr';';

assignment_stmt: IDENT '=' expr ';';


// functions

param:
    IDENT ':' mut_type;

param_list:
    param (',' param)* ','?;

return_type:
    '->' TYPE;

fn_decl_stmt:
    KW_FN IDENT '(' param_list? ')' return_type? block;

fn_call_expr: IDENT '(' argument_list? ')';

argument_list: expr (',' expr)*?;

return_stmt: KW_RETURN expr? ';';


// ignored
WS: [ \t\r\n]+ -> skip;

LineComment:
    '//' ~[\r\n]* -> skip;

BlockComment:
    '/*' (~[*/] | '/'* BlockComment | '/'+ (~[*/]) | '*'+ ~[*/])* '*'+ '/' -> skip;


