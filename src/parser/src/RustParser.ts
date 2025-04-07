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
    public static readonly RULE_while_stmt = 5;
    public static readonly RULE_break_stmt = 6;
    public static readonly RULE_continue_stmt = 7;
    public static readonly RULE_if_stmt = 8;
    public static readonly RULE_else_stmt = 9;
    public static readonly RULE_declaration_stmt = 10;
    public static readonly RULE_assignment_stmt = 11;
    public static readonly RULE_param = 12;
    public static readonly RULE_param_list = 13;
    public static readonly RULE_return_type = 14;
    public static readonly RULE_fn_decl_stmt = 15;
    public static readonly RULE_fn_call_expr = 16;
    public static readonly RULE_argument_list = 17;
    public static readonly RULE_return_stmt = 18;
    public static readonly RULE_lit = 19;

    public static readonly literalNames = [
        null, "'!'", "'-'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
        "'*'", "'/'", "'+'", "'('", "')'", "'{'", "'}'", "';'", "':'", "'='", 
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
        "prog", "stmt", "expr", "block", "expr_stmt", "while_stmt", "break_stmt", 
        "continue_stmt", "if_stmt", "else_stmt", "declaration_stmt", "assignment_stmt", 
        "param", "param_list", "return_type", "fn_decl_stmt", "fn_call_expr", 
        "argument_list", "return_stmt", "lit",
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 43;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 4023396355) !== 0)) {
                {
                {
                this.state = 40;
                this.stmt();
                }
                }
                this.state = 45;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 46;
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
            this.state = 57;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.T__0:
            case RustParser.T__1:
            case RustParser.T__11:
            case RustParser.INT:
            case RustParser.BOOL:
            case RustParser.IDENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 48;
                this.expr_stmt();
                }
                break;
            case RustParser.KW_WHILE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 49;
                this.while_stmt();
                }
                break;
            case RustParser.KW_BREAK:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 50;
                this.break_stmt();
                }
                break;
            case RustParser.KW_CONTINUE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 51;
                this.continue_stmt();
                }
                break;
            case RustParser.KW_IF:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 52;
                this.if_stmt();
                }
                break;
            case RustParser.KW_FN:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 53;
                this.fn_decl_stmt();
                }
                break;
            case RustParser.KW_RETURN:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 54;
                this.return_stmt();
                }
                break;
            case RustParser.KW_LET:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 55;
                this.declaration_stmt();
                }
                break;
            case RustParser.T__13:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 56;
                this.block();
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
            this.state = 69;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 60;
                this.lit();
                }
                break;
            case 2:
                {
                this.state = 61;
                this.match(RustParser.IDENT);
                }
                break;
            case 3:
                {
                this.state = 62;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 1 || _la === 2)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 63;
                this.expr(6);
                }
                break;
            case 4:
                {
                this.state = 64;
                this.fn_call_expr();
                }
                break;
            case 5:
                {
                this.state = 65;
                this.match(RustParser.T__11);
                this.state = 66;
                this.expr(0);
                this.state = 67;
                this.match(RustParser.T__12);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 82;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 80;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 71;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 72;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 504) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 73;
                        this.expr(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 74;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 75;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 9 || _la === 10)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 76;
                        this.expr(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 77;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 78;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 2 || _la === 11)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 79;
                        this.expr(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 84;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
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
            this.state = 85;
            this.match(RustParser.T__13);
            this.state = 89;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 86;
                    this.stmt();
                    }
                    }
                }
                this.state = 91;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            this.state = 93;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3758098435) !== 0)) {
                {
                this.state = 92;
                this.expr(0);
                }
            }

            this.state = 95;
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
            this.state = 97;
            this.expr(0);
            this.state = 98;
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
        this.enterRule(localContext, 10, RustParser.RULE_while_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 100;
            this.match(RustParser.KW_WHILE);
            this.state = 101;
            this.expr(0);
            this.state = 102;
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
        this.enterRule(localContext, 12, RustParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 104;
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
        this.enterRule(localContext, 14, RustParser.RULE_continue_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 106;
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
        this.enterRule(localContext, 16, RustParser.RULE_if_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 108;
            this.match(RustParser.KW_IF);
            this.state = 109;
            this.expr(0);
            this.state = 110;
            this.block();
            this.state = 112;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 111;
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
        this.enterRule(localContext, 18, RustParser.RULE_else_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 114;
            this.match(RustParser.KW_ELSE);
            this.state = 117;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.T__13:
                {
                this.state = 115;
                this.block();
                }
                break;
            case RustParser.KW_IF:
                {
                this.state = 116;
                this.if_stmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public declaration_stmt(): Declaration_stmtContext {
        let localContext = new Declaration_stmtContext(this.context, this.state);
        this.enterRule(localContext, 20, RustParser.RULE_declaration_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 119;
            this.match(RustParser.KW_LET);
            this.state = 121;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 120;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 123;
            this.match(RustParser.IDENT);
            this.state = 124;
            this.match(RustParser.T__16);
            this.state = 125;
            this.match(RustParser.TYPE);
            this.state = 126;
            this.match(RustParser.T__17);
            this.state = 127;
            this.expr(0);
            this.state = 128;
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
        this.enterRule(localContext, 22, RustParser.RULE_assignment_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 130;
            this.match(RustParser.IDENT);
            this.state = 131;
            this.match(RustParser.T__17);
            this.state = 132;
            this.expr(0);
            this.state = 133;
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
        this.enterRule(localContext, 24, RustParser.RULE_param);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            this.match(RustParser.IDENT);
            this.state = 136;
            this.match(RustParser.T__16);
            this.state = 137;
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
        this.enterRule(localContext, 26, RustParser.RULE_param_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 139;
            this.param();
            this.state = 144;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 140;
                    this.match(RustParser.T__18);
                    this.state = 141;
                    this.param();
                    }
                    }
                }
                this.state = 146;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            }
            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 147;
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
        this.enterRule(localContext, 28, RustParser.RULE_return_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 150;
            this.match(RustParser.T__19);
            this.state = 151;
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
        this.enterRule(localContext, 30, RustParser.RULE_fn_decl_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 153;
            this.match(RustParser.KW_FN);
            this.state = 154;
            this.match(RustParser.IDENT);
            this.state = 155;
            this.match(RustParser.T__11);
            this.state = 157;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 156;
                this.param_list();
                }
            }

            this.state = 159;
            this.match(RustParser.T__12);
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 160;
                this.return_type();
                }
            }

            this.state = 163;
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
        this.enterRule(localContext, 32, RustParser.RULE_fn_call_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 165;
            this.match(RustParser.IDENT);
            this.state = 166;
            this.match(RustParser.T__11);
            this.state = 167;
            this.argument_list();
            this.state = 168;
            this.match(RustParser.T__12);
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
        this.enterRule(localContext, 34, RustParser.RULE_argument_list);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.expr(0);
            this.state = 175;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 171;
                    this.match(RustParser.T__18);
                    this.state = 172;
                    this.expr(0);
                    }
                    }
                }
                this.state = 177;
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
        this.enterRule(localContext, 36, RustParser.RULE_return_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 178;
            this.match(RustParser.KW_RETURN);
            this.state = 180;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3758098435) !== 0)) {
                {
                this.state = 179;
                this.expr(0);
                }
            }

            this.state = 182;
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
        this.enterRule(localContext, 38, RustParser.RULE_lit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 184;
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
        4,1,36,187,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,
        5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,3,1,58,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,70,
        8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,81,8,2,10,2,12,2,84,
        9,2,1,3,1,3,5,3,88,8,3,10,3,12,3,91,9,3,1,3,3,3,94,8,3,1,3,1,3,1,
        4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,3,8,113,
        8,8,1,9,1,9,1,9,3,9,118,8,9,1,10,1,10,3,10,122,8,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,
        12,1,13,1,13,1,13,5,13,143,8,13,10,13,12,13,146,9,13,1,13,3,13,149,
        8,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,158,8,15,1,15,1,15,
        3,15,162,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
        5,17,174,8,17,10,17,12,17,177,9,17,1,18,1,18,3,18,181,8,18,1,18,
        1,18,1,19,1,19,1,19,1,175,1,4,20,0,2,4,6,8,10,12,14,16,18,20,22,
        24,26,28,30,32,34,36,38,0,5,1,0,1,2,1,0,3,8,1,0,9,10,2,0,2,2,11,
        11,1,0,30,31,193,0,43,1,0,0,0,2,57,1,0,0,0,4,69,1,0,0,0,6,85,1,0,
        0,0,8,97,1,0,0,0,10,100,1,0,0,0,12,104,1,0,0,0,14,106,1,0,0,0,16,
        108,1,0,0,0,18,114,1,0,0,0,20,119,1,0,0,0,22,130,1,0,0,0,24,135,
        1,0,0,0,26,139,1,0,0,0,28,150,1,0,0,0,30,153,1,0,0,0,32,165,1,0,
        0,0,34,170,1,0,0,0,36,178,1,0,0,0,38,184,1,0,0,0,40,42,3,2,1,0,41,
        40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,
        0,45,43,1,0,0,0,46,47,5,0,0,1,47,1,1,0,0,0,48,58,3,8,4,0,49,58,3,
        10,5,0,50,58,3,12,6,0,51,58,3,14,7,0,52,58,3,16,8,0,53,58,3,30,15,
        0,54,58,3,36,18,0,55,58,3,20,10,0,56,58,3,6,3,0,57,48,1,0,0,0,57,
        49,1,0,0,0,57,50,1,0,0,0,57,51,1,0,0,0,57,52,1,0,0,0,57,53,1,0,0,
        0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,3,1,0,0,0,59,60,6,
        2,-1,0,60,70,3,38,19,0,61,70,5,32,0,0,62,63,7,0,0,0,63,70,3,4,2,
        6,64,70,3,32,16,0,65,66,5,12,0,0,66,67,3,4,2,0,67,68,5,13,0,0,68,
        70,1,0,0,0,69,59,1,0,0,0,69,61,1,0,0,0,69,62,1,0,0,0,69,64,1,0,0,
        0,69,65,1,0,0,0,70,82,1,0,0,0,71,72,10,5,0,0,72,73,7,1,0,0,73,81,
        3,4,2,6,74,75,10,4,0,0,75,76,7,2,0,0,76,81,3,4,2,5,77,78,10,3,0,
        0,78,79,7,3,0,0,79,81,3,4,2,4,80,71,1,0,0,0,80,74,1,0,0,0,80,77,
        1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,5,1,0,0,0,84,
        82,1,0,0,0,85,89,5,14,0,0,86,88,3,2,1,0,87,86,1,0,0,0,88,91,1,0,
        0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,92,94,
        3,4,2,0,93,92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,5,15,0,0,
        96,7,1,0,0,0,97,98,3,4,2,0,98,99,5,16,0,0,99,9,1,0,0,0,100,101,5,
        23,0,0,101,102,3,4,2,0,102,103,3,6,3,0,103,11,1,0,0,0,104,105,5,
        24,0,0,105,13,1,0,0,0,106,107,5,25,0,0,107,15,1,0,0,0,108,109,5,
        21,0,0,109,110,3,4,2,0,110,112,3,6,3,0,111,113,3,18,9,0,112,111,
        1,0,0,0,112,113,1,0,0,0,113,17,1,0,0,0,114,117,5,22,0,0,115,118,
        3,6,3,0,116,118,3,16,8,0,117,115,1,0,0,0,117,116,1,0,0,0,118,19,
        1,0,0,0,119,121,5,28,0,0,120,122,5,29,0,0,121,120,1,0,0,0,121,122,
        1,0,0,0,122,123,1,0,0,0,123,124,5,32,0,0,124,125,5,17,0,0,125,126,
        5,33,0,0,126,127,5,18,0,0,127,128,3,4,2,0,128,129,5,16,0,0,129,21,
        1,0,0,0,130,131,5,32,0,0,131,132,5,18,0,0,132,133,3,4,2,0,133,134,
        5,16,0,0,134,23,1,0,0,0,135,136,5,32,0,0,136,137,5,17,0,0,137,138,
        5,33,0,0,138,25,1,0,0,0,139,144,3,24,12,0,140,141,5,19,0,0,141,143,
        3,24,12,0,142,140,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,
        1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,147,149,5,19,0,0,148,147,
        1,0,0,0,148,149,1,0,0,0,149,27,1,0,0,0,150,151,5,20,0,0,151,152,
        5,33,0,0,152,29,1,0,0,0,153,154,5,26,0,0,154,155,5,32,0,0,155,157,
        5,12,0,0,156,158,3,26,13,0,157,156,1,0,0,0,157,158,1,0,0,0,158,159,
        1,0,0,0,159,161,5,13,0,0,160,162,3,28,14,0,161,160,1,0,0,0,161,162,
        1,0,0,0,162,163,1,0,0,0,163,164,3,6,3,0,164,31,1,0,0,0,165,166,5,
        32,0,0,166,167,5,12,0,0,167,168,3,34,17,0,168,169,5,13,0,0,169,33,
        1,0,0,0,170,175,3,4,2,0,171,172,5,19,0,0,172,174,3,4,2,0,173,171,
        1,0,0,0,174,177,1,0,0,0,175,176,1,0,0,0,175,173,1,0,0,0,176,35,1,
        0,0,0,177,175,1,0,0,0,178,180,5,27,0,0,179,181,3,4,2,0,180,179,1,
        0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,183,5,16,0,0,183,37,1,
        0,0,0,184,185,7,4,0,0,185,39,1,0,0,0,16,43,57,69,80,82,89,93,112,
        117,121,144,148,157,161,175,180
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
    public expr_stmt(): Expr_stmtContext | null {
        return this.getRuleContext(0, Expr_stmtContext);
    }
    public while_stmt(): While_stmtContext | null {
        return this.getRuleContext(0, While_stmtContext);
    }
    public break_stmt(): Break_stmtContext | null {
        return this.getRuleContext(0, Break_stmtContext);
    }
    public continue_stmt(): Continue_stmtContext | null {
        return this.getRuleContext(0, Continue_stmtContext);
    }
    public if_stmt(): If_stmtContext | null {
        return this.getRuleContext(0, If_stmtContext);
    }
    public fn_decl_stmt(): Fn_decl_stmtContext | null {
        return this.getRuleContext(0, Fn_decl_stmtContext);
    }
    public return_stmt(): Return_stmtContext | null {
        return this.getRuleContext(0, Return_stmtContext);
    }
    public declaration_stmt(): Declaration_stmtContext | null {
        return this.getRuleContext(0, Declaration_stmtContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
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
    public lit(): LitContext | null {
        return this.getRuleContext(0, LitContext);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.IDENT, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public fn_call_expr(): Fn_call_exprContext | null {
        return this.getRuleContext(0, Fn_call_exprContext);
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
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public if_stmt(): If_stmtContext | null {
        return this.getRuleContext(0, If_stmtContext);
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
