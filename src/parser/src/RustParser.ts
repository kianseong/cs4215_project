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
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly KW_IF = 24;
    public static readonly KW_ELSE = 25;
    public static readonly KW_WHILE = 26;
    public static readonly KW_BREAK = 27;
    public static readonly KW_CONTINUE = 28;
    public static readonly KW_FN = 29;
    public static readonly KW_RETURN = 30;
    public static readonly KW_LET = 31;
    public static readonly KW_MUT = 32;
    public static readonly INT = 33;
    public static readonly BOOL = 34;
    public static readonly TYPE = 35;
    public static readonly IDENT = 36;
    public static readonly WS = 37;
    public static readonly LineComment = 38;
    public static readonly BlockComment = 39;
    public static readonly RULE_lit = 0;
    public static readonly RULE_prog = 1;
    public static readonly RULE_stmt = 2;
    public static readonly RULE_expr = 3;
    public static readonly RULE_block = 4;
    public static readonly RULE_expr_stmt = 5;
    public static readonly RULE_empty_stmt = 6;
    public static readonly RULE_while_stmt = 7;
    public static readonly RULE_break_stmt = 8;
    public static readonly RULE_continue_stmt = 9;
    public static readonly RULE_if_expr = 10;
    public static readonly RULE_else_expr = 11;
    public static readonly RULE_array_literal = 12;
    public static readonly RULE_array_index_expr = 13;
    public static readonly RULE_array_declaration_stmt = 14;
    public static readonly RULE_declaration_stmt = 15;
    public static readonly RULE_assignment_stmt = 16;
    public static readonly RULE_param = 17;
    public static readonly RULE_param_list = 18;
    public static readonly RULE_return_type = 19;
    public static readonly RULE_fn_decl_stmt = 20;
    public static readonly RULE_fn_call_expr = 21;
    public static readonly RULE_argument_list = 22;
    public static readonly RULE_return_stmt = 23;

    public static readonly literalNames = [
        null, "'('", "')'", "'!'", "'-unary'", "'*'", "'/'", "'+'", "'-'", 
        "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'{'", "'}'", "';'", 
        "'['", "','", "']'", "'='", "':'", "'->'", "'if'", "'else'", "'while'", 
        "'break'", "'continue'", "'fn'", "'return'", "'let'", "'mut'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "KW_IF", "KW_ELSE", "KW_WHILE", "KW_BREAK", "KW_CONTINUE", 
        "KW_FN", "KW_RETURN", "KW_LET", "KW_MUT", "INT", "BOOL", "TYPE", 
        "IDENT", "WS", "LineComment", "BlockComment"
    ];
    public static readonly ruleNames = [
        "lit", "prog", "stmt", "expr", "block", "expr_stmt", "empty_stmt", 
        "while_stmt", "break_stmt", "continue_stmt", "if_expr", "else_expr", 
        "array_literal", "array_index_expr", "array_declaration_stmt", "declaration_stmt", 
        "assignment_stmt", "param", "param_list", "return_type", "fn_decl_stmt", 
        "fn_call_expr", "argument_list", "return_stmt",
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
            this.state = 48;
            _la = this.tokenStream.LA(1);
            if(!(_la === 33 || _la === 34)) {
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
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 2, RustParser.RULE_prog);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 53;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 50;
                    this.stmt();
                    }
                    }
                }
                this.state = 55;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            }
            this.state = 57;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16777242) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
                {
                this.state = 56;
                this.expr(0);
                }
            }

            this.state = 59;
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
        this.enterRule(localContext, 4, RustParser.RULE_stmt);
        try {
            this.state = 72;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 61;
                this.fn_decl_stmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 62;
                this.while_stmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 63;
                this.block();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 64;
                this.assignment_stmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 65;
                this.declaration_stmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 66;
                this.array_declaration_stmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 67;
                this.return_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 68;
                this.expr_stmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 69;
                this.break_stmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 70;
                this.continue_stmt();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 71;
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
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, RustParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 86;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                this.state = 75;
                this.if_expr();
                }
                break;
            case 2:
                {
                this.state = 76;
                this.fn_call_expr();
                }
                break;
            case 3:
                {
                this.state = 77;
                this.array_index_expr();
                }
                break;
            case 4:
                {
                this.state = 78;
                this.match(RustParser.T__0);
                this.state = 79;
                this.expr(0);
                this.state = 80;
                this.match(RustParser.T__1);
                }
                break;
            case 5:
                {
                this.state = 82;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 4)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 83;
                this.expr(6);
                }
                break;
            case 6:
                {
                this.state = 84;
                this.match(RustParser.IDENT);
                }
                break;
            case 7:
                {
                this.state = 85;
                this.lit();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 99;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 97;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 88;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 89;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 90;
                        this.expr(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 91;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 92;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 7 || _la === 8)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 93;
                        this.expr(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expr);
                        this.state = 94;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 95;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 32256) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 96;
                        this.expr(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 101;
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
        this.enterRule(localContext, 8, RustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 102;
            this.match(RustParser.T__14);
            this.state = 106;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 103;
                    this.stmt();
                    }
                    }
                }
                this.state = 108;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            }
            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16777242) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
                {
                this.state = 109;
                this.expr(0);
                }
            }

            this.state = 112;
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
        this.enterRule(localContext, 10, RustParser.RULE_expr_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 114;
            this.expr(0);
            this.state = 115;
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
        this.enterRule(localContext, 12, RustParser.RULE_empty_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 117;
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
        this.enterRule(localContext, 14, RustParser.RULE_while_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 119;
            this.match(RustParser.KW_WHILE);
            this.state = 120;
            this.expr(0);
            this.state = 121;
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
        this.enterRule(localContext, 16, RustParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 123;
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
        this.enterRule(localContext, 18, RustParser.RULE_continue_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 125;
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
        this.enterRule(localContext, 20, RustParser.RULE_if_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 127;
            this.match(RustParser.KW_IF);
            this.state = 128;
            this.expr(0);
            this.state = 129;
            this.block();
            this.state = 131;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                {
                this.state = 130;
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
        this.enterRule(localContext, 22, RustParser.RULE_else_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 133;
            this.match(RustParser.KW_ELSE);
            this.state = 134;
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
    public array_literal(): Array_literalContext {
        let localContext = new Array_literalContext(this.context, this.state);
        this.enterRule(localContext, 24, RustParser.RULE_array_literal);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 136;
            this.match(RustParser.T__17);
            this.state = 137;
            this.expr(0);
            this.state = 142;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 138;
                    this.match(RustParser.T__18);
                    this.state = 139;
                    this.expr(0);
                    }
                    }
                }
                this.state = 144;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            }
            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 145;
                this.match(RustParser.T__18);
                }
            }

            this.state = 148;
            this.match(RustParser.T__19);
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
    public array_index_expr(): Array_index_exprContext {
        let localContext = new Array_index_exprContext(this.context, this.state);
        this.enterRule(localContext, 26, RustParser.RULE_array_index_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 150;
            this.match(RustParser.IDENT);
            this.state = 151;
            this.match(RustParser.T__17);
            this.state = 152;
            this.expr(0);
            this.state = 153;
            this.match(RustParser.T__19);
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
    public array_declaration_stmt(): Array_declaration_stmtContext {
        let localContext = new Array_declaration_stmtContext(this.context, this.state);
        this.enterRule(localContext, 28, RustParser.RULE_array_declaration_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 155;
            this.match(RustParser.KW_LET);
            this.state = 157;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 156;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 159;
            this.match(RustParser.IDENT);
            this.state = 160;
            this.match(RustParser.T__20);
            this.state = 161;
            this.array_literal();
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
        this.enterRule(localContext, 30, RustParser.RULE_declaration_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 163;
            this.match(RustParser.KW_LET);
            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 164;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 167;
            this.match(RustParser.IDENT);
            this.state = 168;
            this.match(RustParser.T__21);
            this.state = 169;
            this.match(RustParser.TYPE);
            this.state = 170;
            this.match(RustParser.T__20);
            this.state = 171;
            this.expr(0);
            this.state = 172;
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
        this.enterRule(localContext, 32, RustParser.RULE_assignment_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.match(RustParser.IDENT);
            this.state = 175;
            this.match(RustParser.T__20);
            this.state = 176;
            this.expr(0);
            this.state = 177;
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
        this.enterRule(localContext, 34, RustParser.RULE_param);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 179;
            this.match(RustParser.IDENT);
            this.state = 180;
            this.match(RustParser.T__21);
            this.state = 181;
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
        this.enterRule(localContext, 36, RustParser.RULE_param_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            this.param();
            this.state = 188;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 184;
                    this.match(RustParser.T__18);
                    this.state = 185;
                    this.param();
                    }
                    }
                }
                this.state = 190;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            this.state = 192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 191;
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
        this.enterRule(localContext, 38, RustParser.RULE_return_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 194;
            this.match(RustParser.T__22);
            this.state = 195;
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
        this.enterRule(localContext, 40, RustParser.RULE_fn_decl_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 197;
            this.match(RustParser.KW_FN);
            this.state = 198;
            this.match(RustParser.IDENT);
            this.state = 199;
            this.match(RustParser.T__0);
            this.state = 201;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 200;
                this.param_list();
                }
            }

            this.state = 203;
            this.match(RustParser.T__1);
            this.state = 205;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 204;
                this.return_type();
                }
            }

            this.state = 207;
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
        this.enterRule(localContext, 42, RustParser.RULE_fn_call_expr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 209;
            this.match(RustParser.IDENT);
            this.state = 210;
            this.match(RustParser.T__0);
            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16777242) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
                {
                this.state = 211;
                this.argument_list();
                }
            }

            this.state = 214;
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
        this.enterRule(localContext, 44, RustParser.RULE_argument_list);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 216;
            this.expr(0);
            this.state = 221;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 217;
                    this.match(RustParser.T__18);
                    this.state = 218;
                    this.expr(0);
                    }
                    }
                }
                this.state = 223;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
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
        this.enterRule(localContext, 46, RustParser.RULE_return_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 224;
            this.match(RustParser.KW_RETURN);
            this.state = 226;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16777242) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
                {
                this.state = 225;
                this.expr(0);
                }
            }

            this.state = 228;
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
        case 3:
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
        4,1,39,231,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,1,5,1,52,8,1,10,1,12,
        1,55,9,1,1,1,3,1,58,8,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,3,2,73,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,3,3,87,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,98,8,3,
        10,3,12,3,101,9,3,1,4,1,4,5,4,105,8,4,10,4,12,4,108,9,4,1,4,3,4,
        111,8,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,9,
        1,9,1,10,1,10,1,10,1,10,3,10,132,8,10,1,11,1,11,1,11,1,12,1,12,1,
        12,1,12,5,12,141,8,12,10,12,12,12,144,9,12,1,12,3,12,147,8,12,1,
        12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,3,14,158,8,14,1,14,1,
        14,1,14,1,14,1,15,1,15,3,15,166,8,15,1,15,1,15,1,15,1,15,1,15,1,
        15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,
        18,5,18,187,8,18,10,18,12,18,190,9,18,1,18,3,18,193,8,18,1,19,1,
        19,1,19,1,20,1,20,1,20,1,20,3,20,202,8,20,1,20,1,20,3,20,206,8,20,
        1,20,1,20,1,21,1,21,1,21,3,21,213,8,21,1,21,1,21,1,22,1,22,1,22,
        5,22,220,8,22,10,22,12,22,223,9,22,1,23,1,23,3,23,227,8,23,1,23,
        1,23,1,23,1,221,1,6,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,36,38,40,42,44,46,0,5,1,0,33,34,1,0,3,4,1,0,5,6,1,0,7,8,1,
        0,9,14,241,0,48,1,0,0,0,2,53,1,0,0,0,4,72,1,0,0,0,6,86,1,0,0,0,8,
        102,1,0,0,0,10,114,1,0,0,0,12,117,1,0,0,0,14,119,1,0,0,0,16,123,
        1,0,0,0,18,125,1,0,0,0,20,127,1,0,0,0,22,133,1,0,0,0,24,136,1,0,
        0,0,26,150,1,0,0,0,28,155,1,0,0,0,30,163,1,0,0,0,32,174,1,0,0,0,
        34,179,1,0,0,0,36,183,1,0,0,0,38,194,1,0,0,0,40,197,1,0,0,0,42,209,
        1,0,0,0,44,216,1,0,0,0,46,224,1,0,0,0,48,49,7,0,0,0,49,1,1,0,0,0,
        50,52,3,4,2,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,
        0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,56,58,3,6,3,0,57,56,1,0,0,0,57,
        58,1,0,0,0,58,59,1,0,0,0,59,60,5,0,0,1,60,3,1,0,0,0,61,73,3,40,20,
        0,62,73,3,14,7,0,63,73,3,8,4,0,64,73,3,32,16,0,65,73,3,30,15,0,66,
        73,3,28,14,0,67,73,3,46,23,0,68,73,3,10,5,0,69,73,3,16,8,0,70,73,
        3,18,9,0,71,73,3,12,6,0,72,61,1,0,0,0,72,62,1,0,0,0,72,63,1,0,0,
        0,72,64,1,0,0,0,72,65,1,0,0,0,72,66,1,0,0,0,72,67,1,0,0,0,72,68,
        1,0,0,0,72,69,1,0,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,5,1,0,0,0,74,
        75,6,3,-1,0,75,87,3,20,10,0,76,87,3,42,21,0,77,87,3,26,13,0,78,79,
        5,1,0,0,79,80,3,6,3,0,80,81,5,2,0,0,81,87,1,0,0,0,82,83,7,1,0,0,
        83,87,3,6,3,6,84,87,5,36,0,0,85,87,3,0,0,0,86,74,1,0,0,0,86,76,1,
        0,0,0,86,77,1,0,0,0,86,78,1,0,0,0,86,82,1,0,0,0,86,84,1,0,0,0,86,
        85,1,0,0,0,87,99,1,0,0,0,88,89,10,5,0,0,89,90,7,2,0,0,90,98,3,6,
        3,6,91,92,10,4,0,0,92,93,7,3,0,0,93,98,3,6,3,5,94,95,10,3,0,0,95,
        96,7,4,0,0,96,98,3,6,3,4,97,88,1,0,0,0,97,91,1,0,0,0,97,94,1,0,0,
        0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,7,1,0,0,0,101,
        99,1,0,0,0,102,106,5,15,0,0,103,105,3,4,2,0,104,103,1,0,0,0,105,
        108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,110,1,0,0,0,108,
        106,1,0,0,0,109,111,3,6,3,0,110,109,1,0,0,0,110,111,1,0,0,0,111,
        112,1,0,0,0,112,113,5,16,0,0,113,9,1,0,0,0,114,115,3,6,3,0,115,116,
        5,17,0,0,116,11,1,0,0,0,117,118,5,17,0,0,118,13,1,0,0,0,119,120,
        5,26,0,0,120,121,3,6,3,0,121,122,3,8,4,0,122,15,1,0,0,0,123,124,
        5,27,0,0,124,17,1,0,0,0,125,126,5,28,0,0,126,19,1,0,0,0,127,128,
        5,24,0,0,128,129,3,6,3,0,129,131,3,8,4,0,130,132,3,22,11,0,131,130,
        1,0,0,0,131,132,1,0,0,0,132,21,1,0,0,0,133,134,5,25,0,0,134,135,
        3,8,4,0,135,23,1,0,0,0,136,137,5,18,0,0,137,142,3,6,3,0,138,139,
        5,19,0,0,139,141,3,6,3,0,140,138,1,0,0,0,141,144,1,0,0,0,142,140,
        1,0,0,0,142,143,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,145,147,
        5,19,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,149,
        5,20,0,0,149,25,1,0,0,0,150,151,5,36,0,0,151,152,5,18,0,0,152,153,
        3,6,3,0,153,154,5,20,0,0,154,27,1,0,0,0,155,157,5,31,0,0,156,158,
        5,32,0,0,157,156,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,
        5,36,0,0,160,161,5,21,0,0,161,162,3,24,12,0,162,29,1,0,0,0,163,165,
        5,31,0,0,164,166,5,32,0,0,165,164,1,0,0,0,165,166,1,0,0,0,166,167,
        1,0,0,0,167,168,5,36,0,0,168,169,5,22,0,0,169,170,5,35,0,0,170,171,
        5,21,0,0,171,172,3,6,3,0,172,173,5,17,0,0,173,31,1,0,0,0,174,175,
        5,36,0,0,175,176,5,21,0,0,176,177,3,6,3,0,177,178,5,17,0,0,178,33,
        1,0,0,0,179,180,5,36,0,0,180,181,5,22,0,0,181,182,5,35,0,0,182,35,
        1,0,0,0,183,188,3,34,17,0,184,185,5,19,0,0,185,187,3,34,17,0,186,
        184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,
        192,1,0,0,0,190,188,1,0,0,0,191,193,5,19,0,0,192,191,1,0,0,0,192,
        193,1,0,0,0,193,37,1,0,0,0,194,195,5,23,0,0,195,196,5,35,0,0,196,
        39,1,0,0,0,197,198,5,29,0,0,198,199,5,36,0,0,199,201,5,1,0,0,200,
        202,3,36,18,0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,
        205,5,2,0,0,204,206,3,38,19,0,205,204,1,0,0,0,205,206,1,0,0,0,206,
        207,1,0,0,0,207,208,3,8,4,0,208,41,1,0,0,0,209,210,5,36,0,0,210,
        212,5,1,0,0,211,213,3,44,22,0,212,211,1,0,0,0,212,213,1,0,0,0,213,
        214,1,0,0,0,214,215,5,2,0,0,215,43,1,0,0,0,216,221,3,6,3,0,217,218,
        5,19,0,0,218,220,3,6,3,0,219,217,1,0,0,0,220,223,1,0,0,0,221,222,
        1,0,0,0,221,219,1,0,0,0,222,45,1,0,0,0,223,221,1,0,0,0,224,226,5,
        30,0,0,225,227,3,6,3,0,226,225,1,0,0,0,226,227,1,0,0,0,227,228,1,
        0,0,0,228,229,5,17,0,0,229,47,1,0,0,0,20,53,57,72,86,97,99,106,110,
        131,142,146,157,165,188,192,201,205,212,221,226
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
    public array_declaration_stmt(): Array_declaration_stmtContext | null {
        return this.getRuleContext(0, Array_declaration_stmtContext);
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
    public array_index_expr(): Array_index_exprContext | null {
        return this.getRuleContext(0, Array_index_exprContext);
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


export class Array_literalContext extends antlr.ParserRuleContext {
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
        return RustParser.RULE_array_literal;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterArray_literal) {
             listener.enterArray_literal(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitArray_literal) {
             listener.exitArray_literal(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitArray_literal) {
            return visitor.visitArray_literal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Array_index_exprContext extends antlr.ParserRuleContext {
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
        return RustParser.RULE_array_index_expr;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterArray_index_expr) {
             listener.enterArray_index_expr(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitArray_index_expr) {
             listener.exitArray_index_expr(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitArray_index_expr) {
            return visitor.visitArray_index_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Array_declaration_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LET, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public array_literal(): Array_literalContext {
        return this.getRuleContext(0, Array_literalContext)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_array_declaration_stmt;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterArray_declaration_stmt) {
             listener.enterArray_declaration_stmt(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitArray_declaration_stmt) {
             listener.exitArray_declaration_stmt(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitArray_declaration_stmt) {
            return visitor.visitArray_declaration_stmt(this);
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
