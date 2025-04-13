// Generated from src/Rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { RustListener } from "./RustListener.js";
import { RustVisitor } from "./RustVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class RustParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly KW_IF = 21;
    public static readonly KW_ELSE = 22;
    public static readonly KW_WHILE = 23;
    public static readonly KW_BREAK = 24;
    public static readonly KW_CONTINUE = 25;
    public static readonly KW_FN = 26;
    public static readonly KW_RETURN = 27;
    public static readonly KW_LET = 28;
    public static readonly KW_MUT = 29;
    public static readonly INT = 30;
    public static readonly BOOL = 31;
    public static readonly IDENT = 32;
    public static readonly TYPE = 33;
    public static readonly WS = 34;
    public static readonly LineComment = 35;
    public static readonly BlockComment = 36;
    public static readonly RULE_prog = 0;
    public static readonly RULE_stmt = 1;
    public static readonly RULE_expr = 2;
    public static readonly RULE_block = 3;
    public static readonly RULE_expr_stmt = 4;
    public static readonly RULE_empty_stmt = 5;
    public static readonly RULE_while_stmt = 6;
    public static readonly RULE_break_stmt = 7;
    public static readonly RULE_continue_stmt = 8;
    public static readonly RULE_if_stmt = 9;
    public static readonly RULE_else_stmt = 10;
    public static readonly RULE_declaration_stmt = 11;
    public static readonly RULE_assignment_stmt = 12;
    public static readonly RULE_param = 13;
    public static readonly RULE_param_list = 14;
    public static readonly RULE_return_type = 15;
    public static readonly RULE_fn_decl_stmt = 16;
    public static readonly RULE_fn_call_expr = 17;
    public static readonly RULE_argument_list = 18;
    public static readonly RULE_return_stmt = 19;
    public static readonly RULE_lit = 20;

    public static readonly literalNames = [
        null, "'('", "')'", "'!'", "'-'", "'*'", "'/'", "'+'", "'=='", "'!='", 
        "'<'", "'<='", "'>'", "'>='", "'{'", "'}'", "';'", "':'", "'='", 
        "','", "'->'", "'if'", "'else'", "'while'", "'break'", "'continue'", 
        "'fn'", "'return'", "'let'", "'mut'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "KW_IF", 
        "KW_ELSE", "KW_WHILE", "KW_BREAK", "KW_CONTINUE", "KW_FN", "KW_RETURN", 
        "KW_LET", "KW_MUT", "INT", "BOOL", "IDENT", "TYPE", "WS", "LineComment", 
        "BlockComment"
    ];
    public static readonly ruleNames = [
        "prog", "stmt", "expr", "block", "expr_stmt", "empty_stmt", "while_stmt", 
        "break_stmt", "continue_stmt", "if_stmt", "else_stmt", "declaration_stmt", 
        "assignment_stmt", "param", "param_list", "return_type", "fn_decl_stmt", 
        "fn_call_expr", "argument_list", "return_stmt", "lit",
    ];

    public get grammarFileName(): string { return "Rust.g4"; }
    public get literalNames(): (string | null)[] { return RustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustParser.symbolicNames; }
    public get ruleNames(): string[] { return RustParser.ruleNames; }
    public get serializedATN(): number[] { return RustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustParser._ATN, RustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, RustParser.RULE_prog);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 45;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 42;
                    this.stmt();
                    }
                    }
                }
                this.state = 47;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            }
            this.state = 49;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3758096397) !== 0)) {
                {
                this.state = 48;
                this.expr(0);
                }
            }

            this.state = 51;
            this.match(RustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 2, RustParser.RULE_stmt);
        try {
            this.state = 63;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.T__15:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 53;
                this.empty_stmt();
                }
                break;
            case RustParser.T__13:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 54;
                this.block();
                }
                break;
            case RustParser.KW_FN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 55;
                this.fn_decl_stmt();
                }
                break;
            case RustParser.KW_WHILE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 56;
                this.while_stmt();
                }
                break;
            case RustParser.KW_IF:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 57;
                this.if_stmt();
                }
                break;
            case RustParser.KW_LET:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 58;
                this.declaration_stmt();
                }
                break;
            case RustParser.KW_RETURN:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 59;
                this.return_stmt();
                }
                break;
            case RustParser.T__0:
            case RustParser.T__2:
            case RustParser.T__3:
            case RustParser.INT:
            case RustParser.BOOL:
            case RustParser.IDENT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 60;
                this.expr_stmt();
                }
                break;
            case RustParser.KW_BREAK:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 61;
                this.break_stmt();
                }
                break;
            case RustParser.KW_CONTINUE:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 62;
                this.continue_stmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 4;
        this.enterRecursionRule(localContext, 4, RustParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 75;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                this.state = 66;
                this.fn_call_expr();
                }
                break;
            case 2:
                {
                this.state = 67;
                this.match(RustParser.T__0);
                this.state = 68;
                this.expr(0);
                this.state = 69;
                this.match(RustParser.T__1);
                }
                break;
            case 3:
                {
                this.state = 71;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 4)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 72;
                this.expr(6);
                }
                break;
            case 4:
                {
                this.state = 73;
                this.match(RustParser.IDENT);
                }
                break;
            case 5:
                {
                this.state = 74;
                this.lit();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 88;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 86;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 77;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 78;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 79;
                        this.expr(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 80;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 81;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 4 || _la === 7)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 82;
                        this.expr(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 83;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 84;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16128) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 85;
                        this.expr(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 90;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 6, RustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 91;
            this.match(RustParser.T__13);
            this.state = 95;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 92;
                    this.stmt();
                    }
                    }
                }
                this.state = 97;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            }
            this.state = 99;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3758096397) !== 0)) {
                {
                this.state = 98;
                this.expr(0);
                }
            }

            this.state = 101;
            this.match(RustParser.T__14);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_stmt(): Expr_stmtContext {
        let localContext = new Expr_stmtContext(this.context, this.state);
        this.enterRule(localContext, 8, RustParser.RULE_expr_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 103;
            this.expr(0);
            this.state = 104;
            this.match(RustParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public empty_stmt(): Empty_stmtContext {
        let localContext = new Empty_stmtContext(this.context, this.state);
        this.enterRule(localContext, 10, RustParser.RULE_empty_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 106;
            this.match(RustParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public while_stmt(): While_stmtContext {
        let localContext = new While_stmtContext(this.context, this.state);
        this.enterRule(localContext, 12, RustParser.RULE_while_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 108;
            this.match(RustParser.KW_WHILE);
            this.state = 109;
            this.expr(0);
            this.state = 110;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public break_stmt(): Break_stmtContext {
        let localContext = new Break_stmtContext(this.context, this.state);
        this.enterRule(localContext, 14, RustParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 112;
            this.match(RustParser.KW_BREAK);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continue_stmt(): Continue_stmtContext {
        let localContext = new Continue_stmtContext(this.context, this.state);
        this.enterRule(localContext, 16, RustParser.RULE_continue_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 114;
            this.match(RustParser.KW_CONTINUE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public if_stmt(): If_stmtContext {
        let localContext = new If_stmtContext(this.context, this.state);
        this.enterRule(localContext, 18, RustParser.RULE_if_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 116;
            this.match(RustParser.KW_IF);
            this.state = 117;
            this.expr(0);
            this.state = 118;
            this.block();
            this.state = 120;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 119;
                this.else_stmt();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public else_stmt(): Else_stmtContext {
        let localContext = new Else_stmtContext(this.context, this.state);
        this.enterRule(localContext, 20, RustParser.RULE_else_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.match(RustParser.KW_ELSE);
            this.state = 123;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declaration_stmt(): Declaration_stmtContext {
        let localContext = new Declaration_stmtContext(this.context, this.state);
        this.enterRule(localContext, 22, RustParser.RULE_declaration_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 125;
            this.match(RustParser.KW_LET);
            this.state = 127;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 126;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 129;
            this.match(RustParser.IDENT);
            this.state = 130;
            this.match(RustParser.T__16);
            this.state = 131;
            this.match(RustParser.TYPE);
            this.state = 132;
            this.match(RustParser.T__17);
            this.state = 133;
            this.expr(0);
            this.state = 134;
            this.match(RustParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignment_stmt(): Assignment_stmtContext {
        let localContext = new Assignment_stmtContext(this.context, this.state);
        this.enterRule(localContext, 24, RustParser.RULE_assignment_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 136;
            this.match(RustParser.IDENT);
            this.state = 137;
            this.match(RustParser.T__17);
            this.state = 138;
            this.expr(0);
            this.state = 139;
            this.match(RustParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 26, RustParser.RULE_param);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 141;
            this.match(RustParser.IDENT);
            this.state = 142;
            this.match(RustParser.T__16);
            this.state = 143;
            this.match(RustParser.TYPE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public param_list(): Param_listContext {
        let localContext = new Param_listContext(this.context, this.state);
        this.enterRule(localContext, 28, RustParser.RULE_param_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            this.param();
            this.state = 150;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 146;
                    this.match(RustParser.T__18);
                    this.state = 147;
                    this.param();
                    }
                    }
                }
                this.state = 152;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            }
            this.state = 154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 153;
                this.match(RustParser.T__18);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public return_type(): Return_typeContext {
        let localContext = new Return_typeContext(this.context, this.state);
        this.enterRule(localContext, 30, RustParser.RULE_return_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.match(RustParser.T__19);
            this.state = 157;
            this.match(RustParser.TYPE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fn_decl_stmt(): Fn_decl_stmtContext {
        let localContext = new Fn_decl_stmtContext(this.context, this.state);
        this.enterRule(localContext, 32, RustParser.RULE_fn_decl_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 159;
            this.match(RustParser.KW_FN);
            this.state = 160;
            this.match(RustParser.IDENT);
            this.state = 161;
            this.match(RustParser.T__0);
            this.state = 163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 162;
                this.param_list();
                }
            }

            this.state = 165;
            this.match(RustParser.T__1);
            this.state = 167;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 166;
                this.return_type();
                }
            }

            this.state = 169;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fn_call_expr(): Fn_call_exprContext {
        let localContext = new Fn_call_exprContext(this.context, this.state);
        this.enterRule(localContext, 34, RustParser.RULE_fn_call_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 171;
            this.match(RustParser.IDENT);
            this.state = 172;
            this.match(RustParser.T__0);
            this.state = 173;
            this.argument_list();
            this.state = 174;
            this.match(RustParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argument_list(): Argument_listContext {
        let localContext = new Argument_listContext(this.context, this.state);
        this.enterRule(localContext, 36, RustParser.RULE_argument_list);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 176;
            this.expr(0);
            this.state = 181;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 177;
                    this.match(RustParser.T__18);
                    this.state = 178;
                    this.expr(0);
                    }
                    }
                }
                this.state = 183;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public return_stmt(): Return_stmtContext {
        let localContext = new Return_stmtContext(this.context, this.state);
        this.enterRule(localContext, 38, RustParser.RULE_return_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 184;
            this.match(RustParser.KW_RETURN);
            this.state = 186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3758096397) !== 0)) {
                {
                this.state = 185;
                this.expr(0);
                }
            }

            this.state = 188;
            this.match(RustParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lit(): LitContext {
        let localContext = new LitContext(this.context, this.state);
        this.enterRule(localContext, 40, RustParser.RULE_lit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 190;
            _la = this.tokenStream.LA(1);
            if(!(_la === 30 || _la === 31)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 2:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 5);
        case 1:
            return this.precpred(this.context, 4);
        case 2:
            return this.precpred(this.context, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,36,193,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,0,3,0,50,8,0,1,0,1,0,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,64,8,1,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,3,2,76,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,5,2,87,8,2,10,2,12,2,90,9,2,1,3,1,3,5,3,94,8,3,10,3,12,3,97,
        9,3,1,3,3,3,100,8,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,
        1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,121,8,9,1,10,1,10,1,10,1,11,
        1,11,3,11,128,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,
        1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,5,14,149,8,14,
        10,14,12,14,152,9,14,1,14,3,14,155,8,14,1,15,1,15,1,15,1,16,1,16,
        1,16,1,16,3,16,164,8,16,1,16,1,16,3,16,168,8,16,1,16,1,16,1,17,1,
        17,1,17,1,17,1,17,1,18,1,18,1,18,5,18,180,8,18,10,18,12,18,183,9,
        18,1,19,1,19,3,19,187,8,19,1,19,1,19,1,20,1,20,1,20,1,181,1,4,21,
        0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,5,1,
        0,3,4,1,0,5,6,2,0,4,4,7,7,1,0,8,13,1,0,30,31,199,0,45,1,0,0,0,2,
        63,1,0,0,0,4,75,1,0,0,0,6,91,1,0,0,0,8,103,1,0,0,0,10,106,1,0,0,
        0,12,108,1,0,0,0,14,112,1,0,0,0,16,114,1,0,0,0,18,116,1,0,0,0,20,
        122,1,0,0,0,22,125,1,0,0,0,24,136,1,0,0,0,26,141,1,0,0,0,28,145,
        1,0,0,0,30,156,1,0,0,0,32,159,1,0,0,0,34,171,1,0,0,0,36,176,1,0,
        0,0,38,184,1,0,0,0,40,190,1,0,0,0,42,44,3,2,1,0,43,42,1,0,0,0,44,
        47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,
        0,48,50,3,4,2,0,49,48,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,51,52,
        5,0,0,1,52,1,1,0,0,0,53,64,3,10,5,0,54,64,3,6,3,0,55,64,3,32,16,
        0,56,64,3,12,6,0,57,64,3,18,9,0,58,64,3,22,11,0,59,64,3,38,19,0,
        60,64,3,8,4,0,61,64,3,14,7,0,62,64,3,16,8,0,63,53,1,0,0,0,63,54,
        1,0,0,0,63,55,1,0,0,0,63,56,1,0,0,0,63,57,1,0,0,0,63,58,1,0,0,0,
        63,59,1,0,0,0,63,60,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,3,1,0,
        0,0,65,66,6,2,-1,0,66,76,3,34,17,0,67,68,5,1,0,0,68,69,3,4,2,0,69,
        70,5,2,0,0,70,76,1,0,0,0,71,72,7,0,0,0,72,76,3,4,2,6,73,76,5,32,
        0,0,74,76,3,40,20,0,75,65,1,0,0,0,75,67,1,0,0,0,75,71,1,0,0,0,75,
        73,1,0,0,0,75,74,1,0,0,0,76,88,1,0,0,0,77,78,10,5,0,0,78,79,7,1,
        0,0,79,87,3,4,2,6,80,81,10,4,0,0,81,82,7,2,0,0,82,87,3,4,2,5,83,
        84,10,3,0,0,84,85,7,3,0,0,85,87,3,4,2,4,86,77,1,0,0,0,86,80,1,0,
        0,0,86,83,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,5,
        1,0,0,0,90,88,1,0,0,0,91,95,5,14,0,0,92,94,3,2,1,0,93,92,1,0,0,0,
        94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,99,1,0,0,0,97,95,1,
        0,0,0,98,100,3,4,2,0,99,98,1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,
        0,101,102,5,15,0,0,102,7,1,0,0,0,103,104,3,4,2,0,104,105,5,16,0,
        0,105,9,1,0,0,0,106,107,5,16,0,0,107,11,1,0,0,0,108,109,5,23,0,0,
        109,110,3,4,2,0,110,111,3,6,3,0,111,13,1,0,0,0,112,113,5,24,0,0,
        113,15,1,0,0,0,114,115,5,25,0,0,115,17,1,0,0,0,116,117,5,21,0,0,
        117,118,3,4,2,0,118,120,3,6,3,0,119,121,3,20,10,0,120,119,1,0,0,
        0,120,121,1,0,0,0,121,19,1,0,0,0,122,123,5,22,0,0,123,124,3,6,3,
        0,124,21,1,0,0,0,125,127,5,28,0,0,126,128,5,29,0,0,127,126,1,0,0,
        0,127,128,1,0,0,0,128,129,1,0,0,0,129,130,5,32,0,0,130,131,5,17,
        0,0,131,132,5,33,0,0,132,133,5,18,0,0,133,134,3,4,2,0,134,135,5,
        16,0,0,135,23,1,0,0,0,136,137,5,32,0,0,137,138,5,18,0,0,138,139,
        3,4,2,0,139,140,5,16,0,0,140,25,1,0,0,0,141,142,5,32,0,0,142,143,
        5,17,0,0,143,144,5,33,0,0,144,27,1,0,0,0,145,150,3,26,13,0,146,147,
        5,19,0,0,147,149,3,26,13,0,148,146,1,0,0,0,149,152,1,0,0,0,150,148,
        1,0,0,0,150,151,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,153,155,
        5,19,0,0,154,153,1,0,0,0,154,155,1,0,0,0,155,29,1,0,0,0,156,157,
        5,20,0,0,157,158,5,33,0,0,158,31,1,0,0,0,159,160,5,26,0,0,160,161,
        5,32,0,0,161,163,5,1,0,0,162,164,3,28,14,0,163,162,1,0,0,0,163,164,
        1,0,0,0,164,165,1,0,0,0,165,167,5,2,0,0,166,168,3,30,15,0,167,166,
        1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,170,3,6,3,0,170,33,1,
        0,0,0,171,172,5,32,0,0,172,173,5,1,0,0,173,174,3,36,18,0,174,175,
        5,2,0,0,175,35,1,0,0,0,176,181,3,4,2,0,177,178,5,19,0,0,178,180,
        3,4,2,0,179,177,1,0,0,0,180,183,1,0,0,0,181,182,1,0,0,0,181,179,
        1,0,0,0,182,37,1,0,0,0,183,181,1,0,0,0,184,186,5,27,0,0,185,187,
        3,4,2,0,186,185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,189,
        5,16,0,0,189,39,1,0,0,0,190,191,7,4,0,0,191,41,1,0,0,0,16,45,49,
        63,75,86,88,95,99,120,127,150,154,163,167,181,186
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustParser.__ATN) {
            RustParser.__ATN = new antlr.ATNDeserializer().deserialize(RustParser._serializedATN);
        }

        return RustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustParser.literalNames, RustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustParser.vocabulary;
    }

    private static readonly decisionsToDFA = RustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(RustParser.EOF, 0)!;
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_prog;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public empty_stmt(): Empty_stmtContext | null {
        return this.getRuleContext(0, Empty_stmtContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public fn_decl_stmt(): Fn_decl_stmtContext | null {
        return this.getRuleContext(0, Fn_decl_stmtContext);
    }
    public while_stmt(): While_stmtContext | null {
        return this.getRuleContext(0, While_stmtContext);
    }
    public if_stmt(): If_stmtContext | null {
        return this.getRuleContext(0, If_stmtContext);
    }
    public declaration_stmt(): Declaration_stmtContext | null {
        return this.getRuleContext(0, Declaration_stmtContext);
    }
    public return_stmt(): Return_stmtContext | null {
        return this.getRuleContext(0, Return_stmtContext);
    }
    public expr_stmt(): Expr_stmtContext | null {
        return this.getRuleContext(0, Expr_stmtContext);
    }
    public break_stmt(): Break_stmtContext | null {
        return this.getRuleContext(0, Break_stmtContext);
    }
    public continue_stmt(): Continue_stmtContext | null {
        return this.getRuleContext(0, Continue_stmtContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fn_call_expr(): Fn_call_exprContext | null {
        return this.getRuleContext(0, Fn_call_exprContext);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.IDENT, 0);
    }
    public lit(): LitContext | null {
        return this.getRuleContext(0, LitContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expr;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_block;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expr_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterExpr_stmt) {
             listener.enterExpr_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitExpr_stmt) {
             listener.exitExpr_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitExpr_stmt) {
            return visitor.visitExpr_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Empty_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_empty_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterEmpty_stmt) {
             listener.enterEmpty_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitEmpty_stmt) {
             listener.exitEmpty_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitEmpty_stmt) {
            return visitor.visitEmpty_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class While_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHILE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_WHILE, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_while_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterWhile_stmt) {
             listener.enterWhile_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitWhile_stmt) {
             listener.exitWhile_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitWhile_stmt) {
            return visitor.visitWhile_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Break_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_BREAK(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_BREAK, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_break_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterBreak_stmt) {
             listener.enterBreak_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitBreak_stmt) {
             listener.exitBreak_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitBreak_stmt) {
            return visitor.visitBreak_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Continue_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CONTINUE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CONTINUE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_continue_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterContinue_stmt) {
             listener.enterContinue_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitContinue_stmt) {
             listener.exitContinue_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitContinue_stmt) {
            return visitor.visitContinue_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class If_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IF, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public else_stmt(): Else_stmtContext | null {
        return this.getRuleContext(0, Else_stmtContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_if_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterIf_stmt) {
             listener.enterIf_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitIf_stmt) {
             listener.exitIf_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitIf_stmt) {
            return visitor.visitIf_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Else_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ELSE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_ELSE, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_else_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterElse_stmt) {
             listener.enterElse_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitElse_stmt) {
             listener.exitElse_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitElse_stmt) {
            return visitor.visitElse_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Declaration_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LET, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.TYPE, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_declaration_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterDeclaration_stmt) {
             listener.enterDeclaration_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitDeclaration_stmt) {
             listener.exitDeclaration_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitDeclaration_stmt) {
            return visitor.visitDeclaration_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Assignment_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_assignment_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterAssignment_stmt) {
             listener.enterAssignment_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitAssignment_stmt) {
             listener.exitAssignment_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitAssignment_stmt) {
            return visitor.visitAssignment_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.TYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_param;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterParam) {
             listener.enterParam(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitParam) {
             listener.exitParam(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Param_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public param(): ParamContext[];
    public param(i: number): ParamContext | null;
    public param(i?: number): ParamContext[] | ParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }

        return this.getRuleContext(i, ParamContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_param_list;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterParam_list) {
             listener.enterParam_list(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitParam_list) {
             listener.exitParam_list(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitParam_list) {
            return visitor.visitParam_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Return_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.TYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_return_type;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterReturn_type) {
             listener.enterReturn_type(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitReturn_type) {
             listener.exitReturn_type(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitReturn_type) {
            return visitor.visitReturn_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fn_decl_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FN, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public param_list(): Param_listContext | null {
        return this.getRuleContext(0, Param_listContext);
    }
    public return_type(): Return_typeContext | null {
        return this.getRuleContext(0, Return_typeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_fn_decl_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterFn_decl_stmt) {
             listener.enterFn_decl_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitFn_decl_stmt) {
             listener.exitFn_decl_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitFn_decl_stmt) {
            return visitor.visitFn_decl_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fn_call_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public argument_list(): Argument_listContext {
        return this.getRuleContext(0, Argument_listContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_fn_call_expr;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterFn_call_expr) {
             listener.enterFn_call_expr(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitFn_call_expr) {
             listener.exitFn_call_expr(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitFn_call_expr) {
            return visitor.visitFn_call_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Argument_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_argument_list;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterArgument_list) {
             listener.enterArgument_list(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitArgument_list) {
             listener.exitArgument_list(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitArgument_list) {
            return visitor.visitArgument_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Return_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RETURN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_RETURN, 0)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_return_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterReturn_stmt) {
             listener.enterReturn_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitReturn_stmt) {
             listener.exitReturn_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitReturn_stmt) {
            return visitor.visitReturn_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BOOL, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lit;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterLit) {
             listener.enterLit(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitLit) {
             listener.exitLit(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitLit) {
            return visitor.visitLit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
