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
    public static readonly T__20 = 21;
    public static readonly KW_IF = 22;
    public static readonly KW_ELSE = 23;
    public static readonly KW_WHILE = 24;
    public static readonly KW_BREAK = 25;
    public static readonly KW_CONTINUE = 26;
    public static readonly KW_FN = 27;
    public static readonly KW_RETURN = 28;
    public static readonly KW_LET = 29;
    public static readonly KW_MUT = 30;
    public static readonly KW_BORROW = 31;
    public static readonly INT = 32;
    public static readonly BOOL = 33;
    public static readonly TYPE = 34;
    public static readonly IDENT = 35;
    public static readonly WS = 36;
    public static readonly LineComment = 37;
    public static readonly BlockComment = 38;
    public static readonly RULE_lit = 0;
    public static readonly RULE_mut_type = 1;
    public static readonly RULE_nam = 2;
    public static readonly RULE_prog = 3;
    public static readonly RULE_stmt = 4;
    public static readonly RULE_expr = 5;
    public static readonly RULE_block = 6;
    public static readonly RULE_expr_stmt = 7;
    public static readonly RULE_empty_stmt = 8;
    public static readonly RULE_while_stmt = 9;
    public static readonly RULE_break_stmt = 10;
    public static readonly RULE_continue_stmt = 11;
    public static readonly RULE_if_expr = 12;
    public static readonly RULE_else_expr = 13;
    public static readonly RULE_declaration_stmt = 14;
    public static readonly RULE_assignment_stmt = 15;
    public static readonly RULE_param = 16;
    public static readonly RULE_param_list = 17;
    public static readonly RULE_return_type = 18;
    public static readonly RULE_fn_decl_stmt = 19;
    public static readonly RULE_fn_call_expr = 20;
    public static readonly RULE_argument_list = 21;
    public static readonly RULE_return_stmt = 22;

    public static readonly literalNames = [
        null, "'('", "')'", "'!'", "'-unary'", "'*'", "'/'", "'+'", "'-'", 
        "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'{'", "'}'", "';'", 
        "':'", "'='", "','", "'->'", "'if'", "'else'", "'while'", "'break'", 
        "'continue'", "'fn'", "'return'", "'let'", "'mut'", "'&'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        "KW_IF", "KW_ELSE", "KW_WHILE", "KW_BREAK", "KW_CONTINUE", "KW_FN", 
        "KW_RETURN", "KW_LET", "KW_MUT", "KW_BORROW", "INT", "BOOL", "TYPE", 
        "IDENT", "WS", "LineComment", "BlockComment"
    ];
    public static readonly ruleNames = [
        "lit", "mut_type", "nam", "prog", "stmt", "expr", "block", "expr_stmt", 
        "empty_stmt", "while_stmt", "break_stmt", "continue_stmt", "if_expr", 
        "else_expr", "declaration_stmt", "assignment_stmt", "param", "param_list", 
        "return_type", "fn_decl_stmt", "fn_call_expr", "argument_list", 
        "return_stmt",
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
    public lit(): LitContext {
        let localContext = new LitContext(this.context, this.state);
        this.enterRule(localContext, 0, RustParser.RULE_lit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 46;
            _la = this.tokenStream.LA(1);
            if(!(_la === 32 || _la === 33)) {
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
    public mut_type(): Mut_typeContext {
        let localContext = new Mut_typeContext(this.context, this.state);
        this.enterRule(localContext, 2, RustParser.RULE_mut_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 49;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 48;
                this.match(RustParser.KW_BORROW);
                }
            }

            this.state = 52;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 51;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 54;
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
    public nam(): NamContext {
        let localContext = new NamContext(this.context, this.state);
        this.enterRule(localContext, 4, RustParser.RULE_nam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 57;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 56;
                this.match(RustParser.KW_BORROW);
                }
            }

            this.state = 60;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 59;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 62;
            this.match(RustParser.IDENT);
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
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 6, RustParser.RULE_prog);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 67;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 64;
                    this.stmt();
                    }
                    }
                }
                this.state = 69;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            this.state = 71;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3225419802) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 11) !== 0)) {
                {
                this.state = 70;
                this.expr(0);
                }
            }

            this.state = 73;
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
        this.enterRule(localContext, 8, RustParser.RULE_stmt);
        try {
            this.state = 85;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 75;
                this.fn_decl_stmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 76;
                this.while_stmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 77;
                this.block();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 78;
                this.assignment_stmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 79;
                this.declaration_stmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 80;
                this.return_stmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 81;
                this.expr_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 82;
                this.break_stmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 83;
                this.continue_stmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 84;
                this.empty_stmt();
                }
                break;
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
        let _startState = 10;
        this.enterRecursionRule(localContext, 10, RustParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 98;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 88;
                this.if_expr();
                }
                break;
            case 2:
                {
                this.state = 89;
                this.fn_call_expr();
                }
                break;
            case 3:
                {
                this.state = 90;
                this.match(RustParser.T__0);
                this.state = 91;
                this.expr(0);
                this.state = 92;
                this.match(RustParser.T__1);
                }
                break;
            case 4:
                {
                this.state = 94;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 4)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 95;
                this.expr(6);
                }
                break;
            case 5:
                {
                this.state = 96;
                this.nam();
                }
                break;
            case 6:
                {
                this.state = 97;
                this.lit();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 111;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 109;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 100;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 101;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 102;
                        this.expr(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 103;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 104;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 7 || _la === 8)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 105;
                        this.expr(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 106;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 107;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 32256) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 108;
                        this.expr(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 113;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
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
        this.enterRule(localContext, 12, RustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 114;
            this.match(RustParser.T__14);
            this.state = 118;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 115;
                    this.stmt();
                    }
                    }
                }
                this.state = 120;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            }
            this.state = 122;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3225419802) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 11) !== 0)) {
                {
                this.state = 121;
                this.expr(0);
                }
            }

            this.state = 124;
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
    public expr_stmt(): Expr_stmtContext {
        let localContext = new Expr_stmtContext(this.context, this.state);
        this.enterRule(localContext, 14, RustParser.RULE_expr_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 126;
            this.expr(0);
            this.state = 127;
            this.match(RustParser.T__16);
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
        this.enterRule(localContext, 16, RustParser.RULE_empty_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 129;
            this.match(RustParser.T__16);
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
        this.enterRule(localContext, 18, RustParser.RULE_while_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 131;
            this.match(RustParser.KW_WHILE);
            this.state = 132;
            this.expr(0);
            this.state = 133;
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
        this.enterRule(localContext, 20, RustParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
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
        this.enterRule(localContext, 22, RustParser.RULE_continue_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 137;
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
    public if_expr(): If_exprContext {
        let localContext = new If_exprContext(this.context, this.state);
        this.enterRule(localContext, 24, RustParser.RULE_if_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 139;
            this.match(RustParser.KW_IF);
            this.state = 140;
            this.expr(0);
            this.state = 141;
            this.block();
            this.state = 143;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
            case 1:
                {
                this.state = 142;
                this.else_expr();
                }
                break;
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
    public else_expr(): Else_exprContext {
        let localContext = new Else_exprContext(this.context, this.state);
        this.enterRule(localContext, 26, RustParser.RULE_else_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            this.match(RustParser.KW_ELSE);
            this.state = 146;
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
        this.enterRule(localContext, 28, RustParser.RULE_declaration_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 148;
            this.match(RustParser.KW_LET);
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 149;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 152;
            this.match(RustParser.IDENT);
            this.state = 153;
            this.match(RustParser.T__17);
            this.state = 154;
            this.match(RustParser.TYPE);
            this.state = 155;
            this.match(RustParser.T__18);
            this.state = 156;
            this.expr(0);
            this.state = 157;
            this.match(RustParser.T__16);
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
        this.enterRule(localContext, 30, RustParser.RULE_assignment_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 159;
            this.match(RustParser.IDENT);
            this.state = 160;
            this.match(RustParser.T__18);
            this.state = 161;
            this.expr(0);
            this.state = 162;
            this.match(RustParser.T__16);
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
        this.enterRule(localContext, 32, RustParser.RULE_param);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.match(RustParser.IDENT);
            this.state = 165;
            this.match(RustParser.T__17);
            this.state = 166;
            this.mut_type();
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
        this.enterRule(localContext, 34, RustParser.RULE_param_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 168;
            this.param();
            this.state = 173;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 169;
                    this.match(RustParser.T__19);
                    this.state = 170;
                    this.param();
                    }
                    }
                }
                this.state = 175;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            }
            this.state = 177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 176;
                this.match(RustParser.T__19);
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
        this.enterRule(localContext, 36, RustParser.RULE_return_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 179;
            this.match(RustParser.T__20);
            this.state = 180;
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
        this.enterRule(localContext, 38, RustParser.RULE_fn_decl_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 182;
            this.match(RustParser.KW_FN);
            this.state = 183;
            this.match(RustParser.IDENT);
            this.state = 184;
            this.match(RustParser.T__0);
            this.state = 186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 185;
                this.param_list();
                }
            }

            this.state = 188;
            this.match(RustParser.T__1);
            this.state = 190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 189;
                this.return_type();
                }
            }

            this.state = 192;
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
        this.enterRule(localContext, 40, RustParser.RULE_fn_call_expr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 194;
            this.match(RustParser.IDENT);
            this.state = 195;
            this.match(RustParser.T__0);
            this.state = 197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3225419802) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 11) !== 0)) {
                {
                this.state = 196;
                this.argument_list();
                }
            }

            this.state = 199;
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
        this.enterRule(localContext, 42, RustParser.RULE_argument_list);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 201;
            this.expr(0);
            this.state = 206;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 202;
                    this.match(RustParser.T__19);
                    this.state = 203;
                    this.expr(0);
                    }
                    }
                }
                this.state = 208;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
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
        this.enterRule(localContext, 44, RustParser.RULE_return_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 209;
            this.match(RustParser.KW_RETURN);
            this.state = 211;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3225419802) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 11) !== 0)) {
                {
                this.state = 210;
                this.expr(0);
                }
            }

            this.state = 213;
            this.match(RustParser.T__16);
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
        case 5:
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
        4,1,38,216,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,1,0,1,0,1,1,3,1,50,8,1,1,1,3,1,53,8,1,1,
        1,1,1,1,2,3,2,58,8,2,1,2,3,2,61,8,2,1,2,1,2,1,3,5,3,66,8,3,10,3,
        12,3,69,9,3,1,3,3,3,72,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,3,4,86,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
        3,5,99,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,110,8,5,10,5,
        12,5,113,9,5,1,6,1,6,5,6,117,8,6,10,6,12,6,120,9,6,1,6,3,6,123,8,
        6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,
        1,12,1,12,1,12,1,12,3,12,144,8,12,1,13,1,13,1,13,1,14,1,14,3,14,
        151,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,
        1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,5,17,172,8,17,10,17,12,17,
        175,9,17,1,17,3,17,178,8,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,3,
        19,187,8,19,1,19,1,19,3,19,191,8,19,1,19,1,19,1,20,1,20,1,20,3,20,
        198,8,20,1,20,1,20,1,21,1,21,1,21,5,21,205,8,21,10,21,12,21,208,
        9,21,1,22,1,22,3,22,212,8,22,1,22,1,22,1,22,1,206,1,10,23,0,2,4,
        6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,5,1,
        0,32,33,1,0,3,4,1,0,5,6,1,0,7,8,1,0,9,14,226,0,46,1,0,0,0,2,49,1,
        0,0,0,4,57,1,0,0,0,6,67,1,0,0,0,8,85,1,0,0,0,10,98,1,0,0,0,12,114,
        1,0,0,0,14,126,1,0,0,0,16,129,1,0,0,0,18,131,1,0,0,0,20,135,1,0,
        0,0,22,137,1,0,0,0,24,139,1,0,0,0,26,145,1,0,0,0,28,148,1,0,0,0,
        30,159,1,0,0,0,32,164,1,0,0,0,34,168,1,0,0,0,36,179,1,0,0,0,38,182,
        1,0,0,0,40,194,1,0,0,0,42,201,1,0,0,0,44,209,1,0,0,0,46,47,7,0,0,
        0,47,1,1,0,0,0,48,50,5,31,0,0,49,48,1,0,0,0,49,50,1,0,0,0,50,52,
        1,0,0,0,51,53,5,30,0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,54,1,0,0,0,
        54,55,5,34,0,0,55,3,1,0,0,0,56,58,5,31,0,0,57,56,1,0,0,0,57,58,1,
        0,0,0,58,60,1,0,0,0,59,61,5,30,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,
        62,1,0,0,0,62,63,5,35,0,0,63,5,1,0,0,0,64,66,3,8,4,0,65,64,1,0,0,
        0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,71,1,0,0,0,69,67,
        1,0,0,0,70,72,3,10,5,0,71,70,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,
        73,74,5,0,0,1,74,7,1,0,0,0,75,86,3,38,19,0,76,86,3,18,9,0,77,86,
        3,12,6,0,78,86,3,30,15,0,79,86,3,28,14,0,80,86,3,44,22,0,81,86,3,
        14,7,0,82,86,3,20,10,0,83,86,3,22,11,0,84,86,3,16,8,0,85,75,1,0,
        0,0,85,76,1,0,0,0,85,77,1,0,0,0,85,78,1,0,0,0,85,79,1,0,0,0,85,80,
        1,0,0,0,85,81,1,0,0,0,85,82,1,0,0,0,85,83,1,0,0,0,85,84,1,0,0,0,
        86,9,1,0,0,0,87,88,6,5,-1,0,88,99,3,24,12,0,89,99,3,40,20,0,90,91,
        5,1,0,0,91,92,3,10,5,0,92,93,5,2,0,0,93,99,1,0,0,0,94,95,7,1,0,0,
        95,99,3,10,5,6,96,99,3,4,2,0,97,99,3,0,0,0,98,87,1,0,0,0,98,89,1,
        0,0,0,98,90,1,0,0,0,98,94,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,
        111,1,0,0,0,100,101,10,5,0,0,101,102,7,2,0,0,102,110,3,10,5,6,103,
        104,10,4,0,0,104,105,7,3,0,0,105,110,3,10,5,5,106,107,10,3,0,0,107,
        108,7,4,0,0,108,110,3,10,5,4,109,100,1,0,0,0,109,103,1,0,0,0,109,
        106,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,
        11,1,0,0,0,113,111,1,0,0,0,114,118,5,15,0,0,115,117,3,8,4,0,116,
        115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,
        122,1,0,0,0,120,118,1,0,0,0,121,123,3,10,5,0,122,121,1,0,0,0,122,
        123,1,0,0,0,123,124,1,0,0,0,124,125,5,16,0,0,125,13,1,0,0,0,126,
        127,3,10,5,0,127,128,5,17,0,0,128,15,1,0,0,0,129,130,5,17,0,0,130,
        17,1,0,0,0,131,132,5,24,0,0,132,133,3,10,5,0,133,134,3,12,6,0,134,
        19,1,0,0,0,135,136,5,25,0,0,136,21,1,0,0,0,137,138,5,26,0,0,138,
        23,1,0,0,0,139,140,5,22,0,0,140,141,3,10,5,0,141,143,3,12,6,0,142,
        144,3,26,13,0,143,142,1,0,0,0,143,144,1,0,0,0,144,25,1,0,0,0,145,
        146,5,23,0,0,146,147,3,12,6,0,147,27,1,0,0,0,148,150,5,29,0,0,149,
        151,5,30,0,0,150,149,1,0,0,0,150,151,1,0,0,0,151,152,1,0,0,0,152,
        153,5,35,0,0,153,154,5,18,0,0,154,155,5,34,0,0,155,156,5,19,0,0,
        156,157,3,10,5,0,157,158,5,17,0,0,158,29,1,0,0,0,159,160,5,35,0,
        0,160,161,5,19,0,0,161,162,3,10,5,0,162,163,5,17,0,0,163,31,1,0,
        0,0,164,165,5,35,0,0,165,166,5,18,0,0,166,167,3,2,1,0,167,33,1,0,
        0,0,168,173,3,32,16,0,169,170,5,20,0,0,170,172,3,32,16,0,171,169,
        1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,177,
        1,0,0,0,175,173,1,0,0,0,176,178,5,20,0,0,177,176,1,0,0,0,177,178,
        1,0,0,0,178,35,1,0,0,0,179,180,5,21,0,0,180,181,5,34,0,0,181,37,
        1,0,0,0,182,183,5,27,0,0,183,184,5,35,0,0,184,186,5,1,0,0,185,187,
        3,34,17,0,186,185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,190,
        5,2,0,0,189,191,3,36,18,0,190,189,1,0,0,0,190,191,1,0,0,0,191,192,
        1,0,0,0,192,193,3,12,6,0,193,39,1,0,0,0,194,195,5,35,0,0,195,197,
        5,1,0,0,196,198,3,42,21,0,197,196,1,0,0,0,197,198,1,0,0,0,198,199,
        1,0,0,0,199,200,5,2,0,0,200,41,1,0,0,0,201,206,3,10,5,0,202,203,
        5,20,0,0,203,205,3,10,5,0,204,202,1,0,0,0,205,208,1,0,0,0,206,207,
        1,0,0,0,206,204,1,0,0,0,207,43,1,0,0,0,208,206,1,0,0,0,209,211,5,
        28,0,0,210,212,3,10,5,0,211,210,1,0,0,0,211,212,1,0,0,0,212,213,
        1,0,0,0,213,214,5,17,0,0,214,45,1,0,0,0,21,49,52,57,60,67,71,85,
        98,109,111,118,122,143,150,173,177,186,190,197,206,211
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


export class Mut_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.TYPE, 0)!;
    }
    public KW_BORROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_BORROW, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_mut_type;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterMut_type) {
             listener.enterMut_type(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitMut_type) {
             listener.exitMut_type(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitMut_type) {
            return visitor.visitMut_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public KW_BORROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_BORROW, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_nam;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterNam) {
             listener.enterNam(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitNam) {
             listener.exitNam(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitNam) {
            return visitor.visitNam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
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
    public fn_decl_stmt(): Fn_decl_stmtContext | null {
        return this.getRuleContext(0, Fn_decl_stmtContext);
    }
    public while_stmt(): While_stmtContext | null {
        return this.getRuleContext(0, While_stmtContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public assignment_stmt(): Assignment_stmtContext | null {
        return this.getRuleContext(0, Assignment_stmtContext);
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
    public empty_stmt(): Empty_stmtContext | null {
        return this.getRuleContext(0, Empty_stmtContext);
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
    public if_expr(): If_exprContext | null {
        return this.getRuleContext(0, If_exprContext);
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
    public nam(): NamContext | null {
        return this.getRuleContext(0, NamContext);
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


export class If_exprContext extends antlr.ParserRuleContext {
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
    public else_expr(): Else_exprContext | null {
        return this.getRuleContext(0, Else_exprContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_if_expr;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterIf_expr) {
             listener.enterIf_expr(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitIf_expr) {
             listener.exitIf_expr(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitIf_expr) {
            return visitor.visitIf_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Else_exprContext extends antlr.ParserRuleContext {
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
        return RustParser.RULE_else_expr;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterElse_expr) {
             listener.enterElse_expr(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitElse_expr) {
             listener.exitElse_expr(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitElse_expr) {
            return visitor.visitElse_expr(this);
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
    public mut_type(): Mut_typeContext {
        return this.getRuleContext(0, Mut_typeContext)!;
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
    public argument_list(): Argument_listContext | null {
        return this.getRuleContext(0, Argument_listContext);
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
